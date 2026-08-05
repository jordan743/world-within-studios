/* ==========================================================================
   World Within Studios — R2 content model
   Single source of truth for navigation, projects, and podcast episodes.
   ========================================================================== */

/* Latest uploads, refreshed from the channel's RSS feed at build time by
   scripts/fetch-episodes.mjs (wired to prebuild, so every deploy is current). */
import feed from './episodes.generated.json'

const A = '/assets/r2'

/* --------------------------------------------------------------------------
   Navigation
   `hidden: true` keeps a route alive but takes the item out of the menu.
   Branded Entertainment ('/branded-entertainment') and Where We Work ('/map')
   are parked for future use — their pages live in pages/Parked.jsx but they
   are deliberately unrouted in App.jsx so the URLs 404 and stay unindexed.
   Restoring them means adding the routes back *and* the entries here.
   -------------------------------------------------------------------------- */
export const NAV_ITEMS = [
  { label: 'FILM & TELEVISION', to: '/film-tv' },
  { label: 'PODCAST', to: '/podcast' },
  { label: 'AWARDS / PRESS', to: '/awards' },
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
   These are finished halftone artworks with the paper tone and the top/bottom
   gradients already baked in, so they render as flat full-bleed images: no
   multiply blend, no scrim, no grain layer on top. Each is anchored to the top
   edge so the dark band that keeps the nav legible always stays in frame.
   Shipped at 1440w with a 2880w @2x companion (sources are 2880×1600).
   -------------------------------------------------------------------------- */
export const HERO_SLIDES = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: `hero-${n}`,
  src: `${A}/hero/hero-${n}.webp`,
  srcSet: `${A}/hero/hero-${n}.webp 1440w, ${A}/hero/hero-${n}@2x.webp 2880w`,
  alt: 'World Within Studios film still, halftone treatment',
}))

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
    bar: `${A}/bars/how-to-change-the-world.svg`,
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
    bar: `${A}/bars/makaylas-voice.svg`,
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
    bar: `${A}/bars/voice-of-hind-rajab.svg`,
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
    bar: `${A}/bars/shuffle.svg`,
    title: 'SHUFFLE',
    titleLines: ['SHUFFLE'],
    category: 'DOCUMENTARY FILM',
    kind: 'film',
    desc: 'SXSW Documentary Feature Competition Winner. Shuffle follows three individuals whose lives depend not on getting into treatment, but on getting out alive — shining a light on the insurance-fueled cycle of addiction treatment fraud.',
    cover: `${A}/covers/shuffle.webp`,
    poster: `${A}/posters/shuffle.webp`,
    blockBg: `${A}/blocks/shuffle.webp`,
    heroStill: `${A}/pages/shuffle-still.webp`,
    badges: [`${A}/blocks/shuffle-badge.webp`],
    trailer: 'ZNy0_Elm-Ts',
    details: { Format: 'Documentary Feature', Award: 'SXSW Documentary Feature Competition Winner' },
  },
  {
    slug: 'how-to-change-the-world-podcast',
    bar: `${A}/bars/how-to-change-the-world-podcast.svg`,
    title: 'HOW TO CHANGE THE WORLD',
    titleLines: ['HOW TO CHANGE', 'THE WORLD'],
    category: 'PODCAST SERIES',
    kind: 'podcast',
    desc: 'Produced with PRX, How to Change the World features provocative conversations with the heroes among us—mission-driven founders, artists, thought leaders, and those on the front lines building a better world.',
    cover: `${A}/covers/how-to-change-the-world.webp`,
    poster: '/assets/poster-podcast.jpg',
    blockBg: `${A}/blocks/podcast.webp`,
    /* There is no trailer, so the case study hero falls back to a still.
       `heroStill` keeps that separate from `blockBg`, which is the home stack's
       image and should stay as it is. */
    heroStill: `${A}/pages/podcast-casestudy-hero.webp`,
    details: { Format: 'Podcast Series', Producer: 'World Within Studios', Partner: 'PRX' },
  },
  {
    slug: 'helenibelieve',
    bar: `${A}/bars/helenibelieve.svg`,
    title: 'HELEN | BELIEVE',
    titleLines: ['HELEN | BELIEVE'],
    category: 'DOCUMENTARY FILM',
    kind: 'film',
    desc: "From Producer Chris Pratt, Helen | Believe follows Olympic wrestler Helen Maroulis' astonishing comeback after suffering a career-ending injury — her gripping battle with self-doubt and PTSD in pursuit of a second chance at greatness at the Tokyo Olympics.",
    cover: `${A}/covers/helenibelieve.webp`,
    poster: `${A}/posters/helenibelieve.webp`,
    blockBg: `${A}/blocks/helenibelieve.webp`,
    badges: [`${A}/blocks/helen-badge.webp`],
    trailer: '_wtmiAjaIRU',
    details: { Format: 'Documentary Film', Producer: 'Chris Pratt', Subject: 'Helen Maroulis' },
  },
  {
    slug: 'bubjan',
    bar: `${A}/bars/bubjan.svg`,
    title: 'BUBJAN',
    titleLines: ['BUBJAN'],
    category: 'DOCUMENTARY SHORT',
    kind: 'film',
    desc: 'Bubjan chronicles the journey of Parwiz Zafari, a former member of the Iranian parliament who dedicated his life to cultivating a progressive, modern, and free society in Iran.',
    cover: `${A}/covers/bubjan.webp`,
    poster: `${A}/posters/bubjan.webp`,
    blockBg: `${A}/blocks/bubjan.webp`,
    badges: [`${A}/blocks/bubjan-badges.webp`],
    trailer: 'dzQ3zupU4QE',
    details: { Format: 'Documentary Short', Subject: 'Parwiz Zafari' },
  },
  {
    slug: 'river-of-spirits',
    bar: `${A}/bars/river-of-spirits.svg`,
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

const YT_CHANNEL = 'https://www.youtube.com/@worldwithinstudios'

export const YT_FEED = {
  fetchedAt: feed.fetchedAt,
  channelUrl: YT_CHANNEL,
  episodes: feed.episodes ?? [],
}

/** Everything the feed returned — both the thumbnail grid and the list view. */
export const ALL_EPISODES = YT_FEED.episodes

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
