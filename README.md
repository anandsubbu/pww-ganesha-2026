# PWW Ganesh Utsav 2026: photos and films microsite

A plain HTML/CSS/JS site. No build step. Works on GitHub Pages.

## Test it on your computer
Open a terminal in this folder and run:

    python3 -m http.server 8000

Then open http://localhost:8000 in a browser (on a phone, use your computer's IP address on the same Wi-Fi).
Opening index.html by double-click also works for most things.

## Add your content: edit only `assets/data.js`
- **YouTube film:** paste the link or 11-character ID into `youtube:` for that film.
- **YouTube Short:** paste into `short:` for that day.
- **Google Photos album:** paste the share link into `album:` for that day.
- **Sample photos:** put the JPGs in `assets/img/` as `name.jpg` (about 1600px on the long side) and `name-sm.jpg` (about 640px), then list `{ src: "assets/img/name", alt: "description" }` under that day's `photos`.
- **Numbers:** replace the `[#,###]` values in `stats`.
- **Partner contact:** fill `contact.whatsapp` and/or `contact.email`.
- Anything left empty shows a friendly "coming soon" state.

## Pages
index.html (home) · day.html?d=1|2|3 · watch.html?v=FILM-ID · films.html · photos.html · programme.html · partner.html

## Publish on GitHub Pages
Create a new repo, upload everything in this folder, then Settings > Pages > deploy from branch `main`, root.

## Notes
- The sample photos are assigned to days as a guess. Move them between days in `data.js`.
- For WhatsApp link previews, add an absolute `og:image` URL once the site address is known.
