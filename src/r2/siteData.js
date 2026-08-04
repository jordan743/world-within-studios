/* ==========================================================================
   World Within Studios — R2 content model
   Single source of truth for navigation, projects, and podcast episodes.
   ========================================================================== */

const A = '/assets/r2'

/* --------------------------------------------------------------------------
   Navigation
   `hidden: true` keeps the route alive but takes the item out of the menu.
   Branded Entertainment and Map / Where We Work are parked for future use.
   -------------------------------------------------------------------------- */
export const NAV_ITEMS = [
  { label: 'FILM & TELEVISION', to: '/film-tv' },
  { label: 'PODCAST', to: '/podcast' },
  { label: 'BRANDED ENTERTAINMENT', to: '/branded-entertainment', hidden: true },
  { label: 'AWARDS / PRESS', to: '/awards' },
  { label: 'WHERE WE WORK', to: '/map', hidden: true },
  { label: 'GET IN TOUCH', to: '/contact' },
]

export const MENU_ITEMS = NAV_ITEMS.filter((i) => !i.hidden)

export const EXTERNAL_LINK = {
  label: 'CHECK OUT WORLD WITHIN',
  href: 'https://worldwithin.org',
}

export const LEGAL_LINKS = [
  { label: 'TERMS OF USE', to: '/terms-of-use' },
  { label: 'PRIVACY POLICY', to: '/privacy-policy' },
  { label: 'DISCLAIMER', to: '/disclaimer' },
  { label: 'COOKIES POLICY', to: '/cookies-policy' },
]

export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/worldwithinimpact' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/worldwithinimpact' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@worldwithinstudios' },
  { id: 'spotify', label: 'Spotify', href: 'https://open.spotify.com/show/1HMv0Jl0sl6rbzlyPPNjbi' },
  { id: 'apple', label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/how-to-change-the-world-podcast/id1839301352' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@worldwithinstudios' },
]

/* --------------------------------------------------------------------------
   Hero — background photos cycle behind the fixed "WE MAKE GOOD COOL" plate.
   Each is a B&W halftone laid over cream in multiply blend (matches Figma
   section "Homepage HERO BG IMAGES", nodes 2408:921 … 2408:1216).
   -------------------------------------------------------------------------- */
export const HERO_SLIDES = [
  { id: 'bubjan', src: `${A}/hero/bubjan.webp`, alt: 'Still from Bubjan' },
  { id: 'helenibelieve', src: `${A}/hero/helenibelieve.webp`, alt: 'Still from Helen | Believe' },
  { id: 'shuffle', src: `${A}/hero/shuffle.webp`, alt: 'Still from Shuffle' },
  { id: 'makaylas-voice', src: `${A}/hero/makaylas-voice.webp`, alt: "Still from Makayla's Voice" },
  { id: 'river-of-spirits', src: `${A}/hero/river-of-spirits.webp`, alt: 'Still from River of Spirits' },
  { id: 'voice-of-hind-rajab', src: `${A}/hero/voice-of-hind-rajab.webp`, alt: 'Still from Voice of Hind Rajab' },
]

export const HERO_INTERVAL_MS = 2600

/* --------------------------------------------------------------------------
   Projects
   `cover`  — the WORLD WITHIN STUDIOS "PRESENTS" styled cover (grid default)
   `poster` — the real theatrical poster (revealed on hover)
   `blockBg` — full-bleed still used in the home page stack
   -------------------------------------------------------------------------- */
export const PROJECTS = [
  {
    slug: 'how-to-change-the-world',
    title: 'HOW TO CHANGE THE WORLD',
    titleLines: ['HOW TO CHANGE', 'THE WORLD'],
    category: 'DOCUMENTARY SERIES',
    kind: 'film',
    desc: 'How To Change The World is a documentary series that explores the transformative power of social entrepreneurship. Produced by World Within Studios and Religion of Sports, with executive producers Mark Cuban, Gotham Chopra, and Geralyn Dreyfous.',
    cover: `${A}/covers/how-to-change-the-world.webp`,
    poster: `${A}/posters/how-to-change-the-world.webp`,
    blockBg: `${A}/blocks/htctw.webp`,
    details: {
      Format: 'Documentary Series',
      Producers: 'World Within Studios, Religion of Sports',
      'Exec. Producers': 'Mark Cuban, Gotham Chopra, Geralyn Dreyfous',
    },
  },
  {
    slug: 'makaylas-voice',
    title: "MAKAYLA'S VOICE: A LETTER TO THE WORLD",
    titleLines: ["MAKAYLA'S VOICE:", 'A LETTER TO THE WORLD'],
    category: 'A NETFLIX DOCUMENTARY FILM',
    kind: 'film',
    desc: 'OSCARS® Shortlist for Best Documentary Short. A powerful portrait of a non-speaking autistic teen as she finds her voice, revealing the depth of her thoughts, creativity, and personality.',
    cover: `${A}/covers/makaylas-voice.webp`,
    poster: `${A}/posters/makaylas-voice.webp`,
    blockBg: `${A}/blocks/makaylas-voice.webp`,
    trailer: 'Wm26JFhz5RE',
    details: {
      Format: 'Documentary Short',
      Platform: 'Netflix',
      Award: 'OSCARS® Shortlist — Best Documentary Short',
    },
  },
  {
    slug: 'voice-of-hind-rajab',
    title: 'VOICE OF HIND RAJAB',
    titleLines: ['VOICE OF', 'HIND RAJAB'],
    category: 'FEATURE FILM',
    kind: 'film',
    desc: 'Venice Film Festival Grand Jury Prize Winner. The Voice of Hind Rajab tells the story of a 6-year-old girl trapped in a car under IDF fire in Gaza, pleading for rescue while Red Crescent volunteers do everything they can to reach her.',
    cover: `${A}/covers/voice-of-hind-rajab.webp`,
    poster: `${A}/posters/voice-of-hind-rajab.webp`,
    blockBg: `${A}/blocks/voice-of-hind-rajab.webp`,
    trailer: 'hrssPpqv6vc',
    details: { Format: 'Feature Film', Award: 'Venice Film Festival — Grand Jury Prize' },
  },
  {
    slug: 'shuffle',
    title: 'SHUFFLE',
    titleLines: ['SHUFFLE'],
    category: 'DOCUMENTARY FILM',
    kind: 'film',
    desc: 'SXSW Documentary Feature Competition Winner. Shuffle follows three individuals whose lives depend not on getting into treatment, but on getting out alive — shining a light on the insurance-fueled cycle of addiction treatment fraud.',
    cover: `${A}/covers/shuffle.webp`,
    poster: `${A}/posters/shuffle.webp`,
    blockBg: `${A}/blocks/shuffle.webp`,
    heroStill: `${A}/pages/shuffle-still.webp`,
    badges: [`${A}/blocks/badge-sxsw.webp`],
    trailer: 'ZNy0_Elm-Ts',
    details: { Format: 'Documentary Feature', Award: 'SXSW Documentary Feature Competition Winner' },
  },
  {
    slug: 'how-to-change-the-world-podcast',
    title: 'HOW TO CHANGE THE WORLD',
    titleLines: ['HOW TO CHANGE', 'THE WORLD'],
    category: 'PODCAST SERIES',
    kind: 'podcast',
    desc: 'Produced with PRX, How to Change the World features provocative conversations with the heroes among us—mission-driven founders, artists, thought leaders, and those on the front lines building a better world.',
    cover: `${A}/covers/how-to-change-the-world.webp`,
    poster: '/assets/poster-podcast.jpg',
    blockBg: `${A}/blocks/podcast.webp`,
    details: { Format: 'Podcast Series', Producer: 'World Within Studios', Partner: 'PRX' },
  },
  {
    slug: 'helenibelieve',
    title: 'HELEN | BELIEVE',
    titleLines: ['HELEN | BELIEVE'],
    category: 'DOCUMENTARY FILM',
    kind: 'film',
    desc: "From Producer Chris Pratt, Helen | Believe follows Olympic wrestler Helen Maroulis' astonishing comeback after suffering a career-ending injury — her gripping battle with self-doubt and PTSD in pursuit of a second chance at greatness at the Tokyo Olympics.",
    cover: `${A}/covers/helenibelieve.webp`,
    poster: `${A}/posters/helenibelieve.webp`,
    blockBg: `${A}/blocks/helenibelieve.webp`,
    badges: [`${A}/blocks/badge-big-sky.webp`],
    trailer: '_wtmiAjaIRU',
    details: { Format: 'Documentary Film', Producer: 'Chris Pratt', Subject: 'Helen Maroulis' },
  },
  {
    slug: 'bubjan',
    title: 'BUBJAN',
    titleLines: ['BUBJAN'],
    category: 'DOCUMENTARY SHORT',
    kind: 'film',
    desc: 'Bubjan chronicles the journey of Parwiz Zafari, a former member of the Iranian parliament who dedicated his life to cultivating a progressive, modern, and free society in Iran.',
    cover: `${A}/covers/bubjan.webp`,
    poster: `${A}/posters/bubjan.webp`,
    blockBg: `${A}/blocks/bubjan.webp`,
    badges: [`${A}/blocks/badge-dcdox.webp`, `${A}/awards/hmma-bubjan.webp`, `${A}/awards/anthem-persian.webp`],
    trailer: 'dzQ3zupU4QE',
    details: { Format: 'Documentary Short', Subject: 'Parwiz Zafari' },
  },
  {
    slug: 'river-of-spirits',
    title: 'RIVER OF SPIRITS',
    titleLines: ['RIVER OF', 'SPIRITS'],
    category: 'DOCUMENTARY FILM',
    kind: 'film',
    desc: 'River of Spirits is cultivating cultural and ecological renewal by reconnecting communities to waterways through restoration, education, and shared stewardship.',
    cover: `${A}/covers/river-of-spirits.webp`,
    poster: `${A}/posters/river-of-spirits.webp`,
    blockBg: `${A}/blocks/river-of-spirits.webp`,
    trailer: '/assets/trailer-river-of-spirits.mp4',
    trailerLocal: true,
    details: { Format: 'Documentary Film', Setting: 'Ecuadorian Amazon' },
  },
]

export const projectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug)

/* Order of the full-bleed stack on the home page (matches Figma 2330:1328). */
export const HOME_BLOCK_ORDER = [
  'how-to-change-the-world',
  'makaylas-voice',
  'voice-of-hind-rajab',
  'shuffle',
  'how-to-change-the-world-podcast',
  'helenibelieve',
  'bubjan',
  'river-of-spirits',
]

export const HOME_BLOCKS = HOME_BLOCK_ORDER.map(projectBySlug)

/* Film & Television grid — the 7 film titles, podcast excluded. */
export const FILM_PROJECTS = PROJECTS.filter((p) => p.kind === 'film')

/* --------------------------------------------------------------------------
   Podcast
   -------------------------------------------------------------------------- */
export const PODCAST = {
  title: 'HOW TO CHANGE THE WORLD',
  titleLines: ['HOW TO CHANGE', 'THE WORLD'],
  subtitle: 'PODCAST SERIES',
  desc: 'Produced with PRX, How to Change the World features provocative conversations with the heroes among us—mission-driven founders, artists, thought leaders, and those on the front lines building a better world.',
  hero: `${A}/pages/podcast-hero.webp`,
  cover: '/assets/poster-podcast.jpg',
  meta: [
    { label: 'FORMAT', value: 'Podcast Series' },
    { label: 'PRODUCER', value: 'World Within Studios' },
    { label: 'PARTNER', value: 'PRX' },
  ],
  links: [
    { label: 'SPOTIFY', href: 'https://open.spotify.com/show/1HMv0Jl0sl6rbzlyPPNjbi' },
    { label: 'APPLE PODCASTS', href: 'https://podcasts.apple.com/us/podcast/how-to-change-the-world-podcast/id1839301352' },
    { label: 'YOUTUBE', href: 'https://www.youtube.com/@worldwithinstudios' },
  ],
}

const YT = (id) => `https://www.youtube.com/watch?v=${id}`
const YT_CHANNEL = 'https://www.youtube.com/@worldwithinstudios'

/* Latest-episode cards shown in grid view (Figma 2430:3700). */
export const PODCAST_FEATURED = [
  { id: 'masculinity', title: 'We Got Masculinity Wrong', guest: 'Chicago CRED', img: `${A}/episodes/ep-masculinity.webp`, href: YT_CHANNEL },
  { id: 'sports', title: 'What Sports Really Teach Us', guest: 'Mike Tollin', img: `${A}/episodes/ep-sports.webp`, href: YT_CHANNEL },
  { id: 'bermuda', title: 'Bermuda Triangle of Talent', guest: 'Rutger Bregman', img: `${A}/episodes/ep-bermuda.webp`, href: YT(`o1zNEvXAKaY`) },
  { id: 'greedy', title: 'Be Morally Greedy', guest: 'Rutger Bregman', img: `${A}/episodes/ep-morally-greedy.webp`, href: YT(`o1zNEvXAKaY`) },
  { id: 'jail', title: 'Only One Person Went to Jail?!', guest: 'Kat Taylor', img: `${A}/episodes/ep-one-person-jail.webp`, href: YT(`OeFPa3_TswA`) },
  { id: 'rebuilding', title: 'Rebuilding Our Town', guest: 'reVillage', img: `${A}/episodes/ep-rebuilding-our-town.webp`, href: YT_CHANNEL },
]

/* Full episode guide, newest first (Figma "List View" 2430:5634). */
export const PODCAST_EPISODES = [
  { ep: 17, guest: 'RUTGER BREGMAN', blurb: 'Historian and author Rutger Bregman argues that society rewards playing it safe over pursuing meaningful…', href: YT('o1zNEvXAKaY') },
  { ep: 16, guest: 'DR. ABBAS MILANI', blurb: 'Part three. Dr. Abbas Milani on modern Iranian history and the battle between secular modernization and theocratic rule…', href: YT('Sp8bicDIu6k') },
  { ep: 15, guest: 'GISSOU NIA', blurb: 'Part two. Human rights attorney Gissou Nia on legal strategies against brutal regimes and accountability through courts…', href: YT('pRayh6GtNqc') },
  { ep: 14, guest: 'ADNAN HADAD', blurb: 'Part one of our Iran miniseries. Adnan Hadad left stable employment to join the Syrian revolution…', href: YT('mK_dXjzxkJM') },
  { ep: 13, guest: 'RAMI HELALI', blurb: 'Rami Helali of KOTN on building an ethical fashion brand from the ground up…', href: YT_CHANNEL },
  { ep: 12, guest: 'KAT TAYLOR', blurb: "Kat Taylor, co-founder of Beneficial State Bank, on what's broken in our banking system…", href: YT('OeFPa3_TswA') },
  { ep: 11, guest: 'COOPER HIBBARD', blurb: 'A Montana rancher on family legacy, inherited values, and what it means to steward the land…', href: YT('o3qpRjgO-eA') },
  { ep: 10, guest: 'COLE MANNIX', blurb: 'Cole Mannix of Old Salt Co-op on how a small Montana town is fighting back against industrial agriculture…', href: YT_CHANNEL },
  { ep: 9, guest: 'MOHAMED HAGE & DAVE FURNEAUX', blurb: "The founders of Lufa Farms on building the world's first commercial rooftop greenhouse network…", href: YT_CHANNEL },
  { ep: 8, guest: 'SAM TEICHER', blurb: 'Sam Teicher, co-founder of Coral Vita, on what it actually takes to rescue a coral reef…', href: YT_CHANNEL },
  { ep: 7, guest: 'ARIAN MOAYED', blurb: 'Arian Moayed (Succession, Marvel) on the craft of storytelling and the responsibility of the artist…', href: YT('sx7-VZSqBGM') },
  { ep: 6, guest: 'ARNE DUNCAN', blurb: 'Arne Duncan, Curtis Toler, and Billy Moore of Chicago CRED on their radically human approach to violence…', href: YT_CHANNEL },
  { ep: 5, guest: 'SAM KASS', blurb: 'One part The Bear, one part The West Wing. Sam Kass on his path from fine dining to the Obama White House…', href: YT('VO8TSLj_hvo') },
  { ep: 4, guest: 'GERALYN DREYFOUS', blurb: 'Oscar-winning documentary producer Geralyn Dreyfous explores the future of impact storytelling…', href: YT('LGxfwiN-NDA') },
  { ep: 3, guest: 'GINJAN BROS', blurb: 'Brothers Mo and Rahim Diallo share their winding journey from Guinea to New York City…', href: YT_CHANNEL },
  { ep: 2, guest: 'BRANDON STANTON', blurb: 'Brandon Stanton on his biggest project yet — a massive photo exhibit at Grand Central…', href: YT('ELoyfQNgFTE') },
  { ep: 1, guest: 'BRANDON STANTON', blurb: 'Brandon Stanton, Founder of Humans of New York, prepares for the biggest moment of his career…', href: YT('XaYVSQ7CjkA') },
]

/* --------------------------------------------------------------------------
   Awards / Press — laurels sliced from Figma rows 2425:1791 … 2425:1795
   -------------------------------------------------------------------------- */
export const AWARDS = [
  { id: 'sxsw-shuffle', alt: 'SXSW Film & TV Festival 2025 — Documentary Feature Jury Award Winner' },
  { id: 'anthem-2025', alt: 'Anthem Awards 2025 — Silver Winner' },
  { id: 'docutah-2024', alt: 'DocUtah International Film Festival 2024 — Best Short' },
  { id: 'venice-shorts', alt: 'Venice Shorts Film Awards — Award Winner' },
  { id: 'anthem-persian', alt: 'Anthem Persian Film Festival 2024 — Winner' },
  { id: 'big-sky-2024', alt: 'Big Sky Documentary Film Festival 2024 — Official Selection' },
  { id: 'hollywood-shorts-editing', alt: 'Hollywood Shorts Fest — Winner, Best Editing' },
  { id: 'hmma-bubjan', alt: 'Hollywood Music in Media Awards — Official Winner, Bubjan' },
  { id: 'dcdox-2023', alt: 'DC/DOX Film Festival 2023' },
  { id: 'docnyc-2023', alt: 'DOC NYC 2023 — Official Selection' },
  { id: 'global-peace-2024', alt: 'Global Peace Film Festival 2024 — Official Selection' },
  { id: 'hollywood-shorts-selection', alt: 'Hollywood Shorts Fest — Official Selection' },
  { id: 'phoenix-2023', alt: 'Phoenix Film Festival 2023 — Official Selection' },
  { id: 'washington-west-2023', alt: 'Washington West Film Festival 2023 — Official Selection' },
  { id: 'idn-nominee-2025', alt: 'IDN Documentary Awards 2025 — Best Original Music Score Nominee' },
  { id: 'signal-silver-2023', alt: 'Signal Awards 2023 — Silver Winner' },
  { id: 'gasparilla-2023', alt: 'Gasparilla International Film Festival 2023 — Official Selection' },
  { id: 'ojai-2023', alt: 'Ojai Film Festival 2023 — Official Selection' },
  { id: 'la-audience-award', alt: 'Los Angeles Diversity Film Festival 2023 — Audience Award Winner' },
  { id: 'climate-film-2025', alt: 'Climate Film Festival 2025 — Official Selection' },
  { id: 'indy-film-2023', alt: 'Indy Film Fest 2023 — Official Selection' },
  { id: 'santa-barbara', alt: 'Santa Barbara International Film Festival — Official Selection' },
  { id: 'ojai-best-doc-short', alt: 'Ojai Film Festival 2023 — Winner, Best Documentary Short' },
  { id: 'slamdance-2024', alt: 'Slamdance Film Festival 2024' },
].map((a) => ({ ...a, src: `${A}/awards/${a.id}.webp` }))
