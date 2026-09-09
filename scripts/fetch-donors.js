// Runs in GitHub Actions (server-side, no browser involved — so no CORS
// restriction applies here, unlike a client-side fetch() from the page).
// Fetches the published donor-tracker Google Sheet as CSV, parses it, and
// writes a small pre-computed JSON file that donors.html loads same-origin.
//
// Usage: node scripts/fetch-donors.js   (run from the repo root)

const fs = require('fs');
const path = require('path');

const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTX5sgK3oukQFX75XWWIliUcsEJk6nAy3V3T98WXgsLRt5oxwarz5629KUQruEe5NotUsCrQ3Hj40N5/pub?gid=1299663559&single=true&output=csv';

const OUTPUT_PATH = path.join(__dirname, '..', 'assets', 'donors-live.json');

// --- Same parsing logic as the (kept-as-backup) client-side fetch in donors.html ---

function parseCSV(text) {
  var rows = [];
  var row = [];
  var field = '';
  var inQuotes = false;
  for (var i = 0; i < text.length; i++) {
    var c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else {
      if (c === '"') { inQuotes = true; }
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\r') { /* skip */ }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else { field += c; }
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter(function (r) { return r.length > 1 || (r.length === 1 && r[0] !== ''); });
}

function parseAmount(raw) {
  if (!raw) return 0;
  var cleaned = String(raw).replace(/[^\d.\-]/g, '');
  var n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}

function findCol(headers, keyword) {
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].toLowerCase().indexOf(keyword) !== -1) return i;
  }
  return -1;
}

// Scans the first few rows for the one that actually looks like a header
// (contains something matching both "name" and "amount") rather than
// assuming row 0 — trackers often have a title/banner row above it.
function findHeaderRowIndex(table) {
  var scanLimit = Math.min(10, table.length);
  for (var i = 0; i < scanLimit; i++) {
    if (findCol(table[i], 'name') !== -1 && findCol(table[i], 'amount') !== -1) {
      return i;
    }
  }
  return 0;
}

async function main() {
  const res = await fetch(SHEET_CSV_URL, { redirect: 'follow' });
  if (!res.ok) throw new Error('HTTP ' + res.status + ' fetching published sheet');
  const text = await res.text();

  const table = parseCSV(text);
  if (!table.length) throw new Error('Empty sheet / no rows parsed');

  const headerRow = findHeaderRowIndex(table);
  const headers = table[headerRow];
  const flatCol = findCol(headers, 'flat');
  const nameCol = findCol(headers, 'name');
  const amtCol = findCol(headers, 'amount');
  console.log('Detected header row', headerRow, headers);
  if (nameCol === -1 || amtCol === -1) {
    throw new Error('Could not find Name/Amount columns in headers: ' + headers.join(' | '));
  }

  const named = [];
  let unnamedCount = 0, unnamedAmount = 0;
  for (let i = headerRow + 1; i < table.length; i++) {
    const r = table[i];
    const name = (r[nameCol] || '').trim();
    const flatRaw = flatCol !== -1 ? (r[flatCol] || '').trim() : '';
    // Skip a grand-total / subtotal row if the tracker has one.
    if (/total/i.test(name) || /total/i.test(flatRaw)) continue;
    const amount = parseAmount(r[amtCol]);
    if (!amount) continue;
    if (name) {
      named.push({ flat: flatRaw, name: name, amount: amount });
    } else {
      unnamedCount++;
      unnamedAmount += amount;
    }
  }

  if (!named.length && !unnamedCount) {
    throw new Error('Parsed 0 contribution rows — refusing to overwrite existing data with an empty result');
  }

  named.sort((a, b) => b.amount - a.amount);
  const total = named.reduce((sum, r) => sum + r.amount, 0) + unnamedAmount;

  const data = {
    fetchedAt: new Date().toISOString(),
    named: named,
    unnamedCount: unnamedCount,
    unnamedAmount: unnamedAmount,
    total: total,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2) + '\n');
  console.log('Wrote', OUTPUT_PATH, '— total:', total, '| named rows:', named.length, '| unnamed:', unnamedCount);
}

main().catch((err) => {
  console.error('fetch-donors failed:', err.message);
  process.exit(1);
});
