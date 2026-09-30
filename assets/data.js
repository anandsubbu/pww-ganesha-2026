/* ============================================================
   PWW Ganesh Utsav 2026 — SITE CONTENT
   This is the ONLY file you need to edit to add links and photos.
   - Fill in:  youtube  (paste the YouTube link or the 11-character ID)
               album    (paste the Google Photos album share link)
               photos   (add files to assets/img and list them)
   - Anything left empty ('') shows a friendly "coming soon" state.
   ============================================================ */
window.SITE = {
  name: "Ganesh Utsav 2026",
  org: "Prestige Westwoods Apartment Owners' Association",
  venue: "Prestige Westwoods Clubhouse",
  dates: "18 – 20 September 2026",

  // Real numbers go here when you have them (leave [..] until then). No money figures.
  stats: [
    { n: "[#,###]", l: "Attendees" },
    { n: "[###]",   l: "Families" },
    { n: "[##]",    l: "Events" },
    { n: "[#,###]", l: "Film views" }
  ],

  // Partner page contact. Fill ONE or BOTH. Examples:
  //   whatsapp: "https://chat.whatsapp.com/xxxx"     email: "partners@example.com"
  contact: { whatsapp: "", email: "" },

  // Optional: a full festival film (home page "Watch the festival film" button)
  festivalFilm: "",

  days: [
    {
      n: 1, dow: "Friday", date: "18 September 2026",
      title: "Aagamana, Prathishtapane & Folk Night",
      cover: "assets/img/idol-front-a.jpg",
      album: "",                 // Google Photos album link for Day 1
      short: "",                 // YouTube Short (Day 1 highlights)
      photos: [                  // 10-20 sample photos: add to assets/img, list here
        { src: "assets/img/idol-front-a", alt: "Lord Ganesha adorned with flowers" },
        { src: "assets/img/idol-front-b", alt: "Lord Ganesha with a purple flower garland" },
        { src: "assets/img/idol-closeup", alt: "Close-up of Lord Ganesha with devotees behind" }
      ],
      films: [
        { id: "1-aagaman",    title: "Aagaman",    time: "3:30 PM", youtube: "", blurb: "Ganesha's grand entry to PWW with Chande and Nadaswaram." },
        { id: "1-folk-dance", title: "Folk Dance", time: "7:30 PM", youtube: "", blurb: "The folk dance show on the first night." }
      ],
      program: [
        { time: "3:30 PM",        name: "Ganesha Entry to PWW", note: "Chande & Nadaswaram" },
        { time: "From 4:00 PM",   name: "Tea & Coffee",         note: "" },
        { time: "6:30 PM",        name: "Prathishtapane & Aarti", note: "Grand Aarti" },
        { time: "7:30 PM",        name: "Folk Dance",           note: "Folk dance show" },
        { time: "8:30 PM onwards",name: "Dinner",               note: "" },
        { time: "10:00 PM",       name: "Housie Game",          note: "Open to all residents" }
      ]
    },
    {
      n: 2, dow: "Saturday", date: "19 September 2026",
      title: "Homam & Live Concert by Tarana Cafe Band",
      cover: "assets/img/aarti-night.jpg",
      album: "",
      short: "",
      photos: [
        { src: "assets/img/aarti-night", alt: "Aarti with lamps before Lord Ganesha" },
        { src: "assets/img/idol-side",   alt: "Lord Ganesha blessing, framed by flower garlands" }
      ],
      films: [
        { id: "2-homa",   title: "Ganesha Homa",             time: "8:30 AM", youtube: "", blurb: "The Ganesha Homa, filmed from above." },
        { id: "2-arathi", title: "Arathi",                   time: "Day 2",   youtube: "", blurb: "Grand Aarti at the clubhouse." },
        { id: "2-tarana", title: "Tarana Band Performance",  time: "8:00 PM", youtube: "", blurb: "Live concert by Tarana Cafe Band." }
      ],
      program: [
        { time: "From 7:30 AM",   name: "Tea, Coffee & Snacks", note: "" },
        { time: "8:30 – 10:00 AM",name: "Ganesha Homam",        note: "For registered families" },
        { time: "From 8:30 AM",   name: "Breakfast",            note: "" },
        { time: "11:00 AM",       name: "Aarti",                note: "" },
        { time: "From 1:00 PM",   name: "Lunch",                note: "For all residents" },
        { time: "4:00 – 6:00 PM", name: "Competitions",         note: "Rangoli, musical chair, tug of war and more" },
        { time: "7:00 PM",        name: "Evening Aarti",        note: "Grand Aarti" },
        { time: "8:00 – 11:00 PM",name: "Live Concert",         note: "Music & DJ by Tarana Cafe" },
        { time: "8:30 PM onwards",name: "Dinner",               note: "" }
      ]
    },
    {
      n: 3, dow: "Sunday", date: "20 September 2026",
      title: "Bhajane, Aarti & Visarjana",
      cover: "",                 // no photo yet: shows a rangoli panel
      album: "",
      short: "",
      photos: [],
      films: [
        { id: "3-evening-arathi", title: "Evening Arathi", time: "7:00 PM", youtube: "", blurb: "The evening Aarti on the final day." },
        { id: "3-bhajan",         title: "Bhajan",         time: "5:00 PM", youtube: "", blurb: "Bhajane by the community." },
        { id: "3-visarjan",       title: "Visarjan",       time: "7:30 PM", youtube: "", blurb: "Grand Visarjana with Dollu Kunitha and more." }
      ],
      program: [
        { time: "From 7:30 AM",     name: "Tea, Coffee & Breakfast", note: "" },
        { time: "10:00 AM",         name: "Aarti",                   note: "Grand Aarti" },
        { time: "11:00 AM – 1:00 PM", name: "Felicitation for Sponsors", note: "For residents contributing ₹10,000 and more" },
        { time: "12:30 PM",         name: "Lunch",                   note: "" },
        { time: "1:00 – 2:00 PM",   name: "Dance Competition",       note: "Based on nominations" },
        { time: "5:00 – 7:00 PM",   name: "Bhajane",                 note: "" },
        { time: "7:00 PM",          name: "Evening Aarti",           note: "" },
        { time: "7:30 PM",          name: "Visarjana",               note: "Grand Visarjana with Dollu Kunitha, Doll and more" },
        { time: "9:00 PM",          name: "Dinner",                  note: "" }
      ]
    }
  ],

  // Brand-pitch page
  placements: [
    { t: "Gateway and entry branding", d: "First thing every guest sees, all three days." },
    { t: "Main stage partner",         d: "Aarti, folk night and the Tarana Cafe concert." },
    { t: "Food and hospitality",       d: "Tea and coffee counters, lunch and dinner areas." },
    { t: "Competitions and kids zone", d: "Rangoli, tug of war, housie and dance contests." },
    { t: "Felicitation and recognition", d: "Sponsor felicitation on Day 3." },
    { t: "Online: this site and our films", d: "A Presented-by slot on every film page." }
  ],
  presentedBy: { name: "[Your brand here]", logo: "" }   // shown on each film page
};
