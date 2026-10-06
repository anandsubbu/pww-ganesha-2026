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

  // Headline numbers (they count up when scrolled into view). n = number, suffix = e.g. "+". No money figures.
  stats: [
    { n: 10000, suffix: "+", l: "Attendees" },
    { n: 500,   suffix: "+", l: "Families" },
    { n: 15,    suffix: "+", l: "Events" },
    { n: 3000,  suffix: "+", l: "Pics & Videos" }
  ],


  // Partner page contact. Fill ONE or BOTH. Examples:
  //   whatsapp: "https://chat.whatsapp.com/xxxx"     email: "partners@example.com"
  contact: { whatsapp: "", email: "" },

  // Optional: a full festival film (home page "Watch the festival film" button)
  festivalFilm: "",

  // Teaser YouTube Short (shown on the home page and the Partner page)
  teaser: "PUCqNGGWlME",

  days: [
    {
      n: 1, dow: "Friday", date: "18 September 2026",
      title: "Aagamana, Prathishtapane & Folk Night",
      cover: "assets/img/cover-day1.jpg",
      album: "https://photos.app.goo.gl/Th27xuztDhetkyuo7",                 // Google Photos album link for Day 1
      short: "k2QKOo-Q3H0",                 // YouTube Short (Day 1 highlights)
      photos: [
        { src: "assets/img/day1-01", alt: "Residents welcome Lord Ganesha at the Aagamana" },
        { src: "assets/img/day1-02", alt: "Residents gather around the idol at the Aagamana procession" },
        { src: "assets/img/day1-03", alt: "Lord Ganesha adorned with flower garlands" },
        { src: "assets/img/day1-04", alt: "Aarti lamps lit before Lord Ganesha" },
        { src: "assets/img/day1-05", alt: "Close-up of Lord Ganesha with flower garlands" },
        { src: "assets/img/day1-06", alt: "Lord Ganesha's blessing hand, with devotees behind" },
        { src: "assets/img/day1-07", alt: "Dancers form an eight-armed pose on stage at Folk Night" },
        { src: "assets/img/day1-08", alt: "Folk performers in colourful costumes on stage" }
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
      cover: "assets/img/cover-day2.jpg",
      album: "https://photos.app.goo.gl/FLrw59M4bcgbTaad8",
      short: "Sl1_uYTIN8s",
      photos: [
        { src: "assets/img/day2-01", alt: "Ganesha rangoli and puja offerings arranged for the Homam" },
        { src: "assets/img/day2-02", alt: "Flames of the Ganesha Homam" },
        { src: "assets/img/day2-03", alt: "The Homam in progress with families seated around" },
        { src: "assets/img/day2-04", alt: "Lord Ganesha and the priest during the Aarti" },
        { src: "assets/img/day2-05", alt: "The Westwoods tower lit up with the I love Westwoods sign" },
        { src: "assets/img/day2-06", alt: "Residents and guests pose together on Homam day" },
        { src: "assets/img/day2-07", alt: "Tarana Cafe Band performing on stage" },
        { src: "assets/img/day2-08", alt: "Residents dancing at the live concert" }
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
      cover: "assets/img/cover-day3.jpg",                 // no photo yet: shows a rangoli panel
      album: "https://photos.app.goo.gl/Zw4aPX4fuXyFy9Kx6",
      short: "HL4BLHswpVM",
      photos: [
        { src: "assets/img/day3-01", alt: "Aarti flame before Lord Ganesha" },
        { src: "assets/img/day3-02", alt: "Close-up of Lord Ganesha's face and ornaments" },
        { src: "assets/img/day3-03", alt: "The decorated Ganesha mandapa" },
        { src: "assets/img/day3-04", alt: "Performers in colourful costumes at the Visarjana procession" },
        { src: "assets/img/day3-05", alt: "The illuminated chariot for the Visarjana" },
        { src: "assets/img/day3-06", alt: "Residents dance along the Visarjana procession" },
        { src: "assets/img/day3-07", alt: "Confetti and celebration during the Visarjana" },
        { src: "assets/img/day3-08", alt: "Residents carry Lord Ganesha for the Visarjana" }
      ],
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
