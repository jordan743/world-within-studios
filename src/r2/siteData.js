/* ==========================================================================
   World Within Productions — R2 content model
   Single source of truth for navigation, projects, and podcast episodes.
   ========================================================================== */

/* Latest uploads, refreshed from the channel's RSS feed at build time by
   scripts/fetch-episodes.mjs (wired to prebuild, so every deploy is current). */
import feed from './episodes.generated.json'

const A = '/assets/r2'

/* ---------------------------------------------------------------------------
   One-time cache bust.

   `/assets/r2/**` was briefly served `max-age=31536000, immutable`. `immutable`
   tells a browser not to revalidate at all, so anyone who visited during that
   window pinned whatever art was live then — for a year. The Bubjan home block
   was still painting a 258px thumbnail long after the 2062px master replaced
   it, and it looked exactly like a bad deploy rather than a stale cache.

   Changing the URL is the only thing those caches will treat as a new file.
   The header is `must-revalidate` now, so this should not need bumping again;
   swapping an asset in place is enough from here on.
   --------------------------------------------------------------------------- */
export const ASSET_V = 2
export const v = (path) => `${path}?v=${ASSET_V}`

/* --------------------------------------------------------------------------
   Navigation
   `hidden: true` keeps a route alive but takes the item out of the menu.
   Branded Entertainment ('/branded-entertainment') and Where We Work ('/map')
   are parked for future use — their pages live in pages/Parked.jsx but they
   are deliberately unrouted in App.jsx so the URLs 404 and stay unindexed.
   Restoring them means adding the routes back *and* the entries here.
   -------------------------------------------------------------------------- */
export const NAV_ITEMS = [
  /* `mobileLines` is an authored break for the menu overlay only — the longest
     label sets the type size for every item, so breaking this one lets them all
     run bigger on a phone. Desktop still reads it as one line. */
  { label: 'FILM & TELEVISION', to: '/film-tv', mobileLines: ['FILM &', 'TELEVISION'] },
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
  alt: 'World Within Productions film still, halftone treatment',
}))

export const HERO_INTERVAL_MS = 2600

/* --------------------------------------------------------------------------
   Stickers
   Scanned peeling/crinkled paper stickers that replace the flat pink dot. The
   footer trail and the inner-page heroes both pull from this set at random, so
   no two stampings of the page read the same. They are cutouts with real alpha,
   so they ship as WebP-with-alpha and must not be flattened onto a plate.
   Aspect ratios differ on purpose — pink-price is a torn half — so anything
   placing one sizes by width and leaves height auto.
   -------------------------------------------------------------------------- */
export const STICKERS = [
  'white-round-peeling',
  'pink-price-peeling',
  'orange-crinkled-round',
  'red-round-crinkled',
  'green-round-subtle-peeling',
].map((id) => ({ id, src: `${A}/stickers/${id}.webp` }))

/* --------------------------------------------------------------------------
   Projects
   `cover`  — the WORLD WITHIN PRODUCTIONS "PRESENTS" styled cover (grid default)
   `poster` — the real theatrical poster (revealed on hover)
   `blockBg` — full-bleed still used in the home page stack
   -------------------------------------------------------------------------- */
export const PROJECTS = [
  {
    slug: 'how-to-change-the-world',
    bar: v(`${A}/bars/how-to-change-the-world.svg`),
    title: 'HOW TO CHANGE THE WORLD',
    titleLines: ['HOW TO CHANGE', 'THE WORLD'],
    category: 'DOCUMENTARY SERIES',
    kind: 'film',
    desc: 'How To Change The World is a documentary series that explores the transformative power of social entrepreneurship. Produced by World Within Productions and Religion of Sports, with executive producers Mark Cuban, Gotham Chopra, and Geralyn Dreyfous.',
    cover: v(`${A}/covers/how-to-change-the-world.webp`),
    poster: v(`${A}/posters/how-to-change-the-world.webp`),
    blockBg: v(`${A}/blocks/htctw.webp`),
    details: {
      Format: 'Documentary Series',
      Producers: 'World Within Productions, Religion of Sports',
      'Exec. Producers': 'Mark Cuban, Gotham Chopra, Geralyn Dreyfous',
    },
  },
  {
    slug: 'makaylas-voice',
    bar: v(`${A}/bars/makaylas-voice.svg`),
    title: "MAKAYLA'S VOICE: A LETTER TO THE WORLD",
    titleLines: ["MAKAYLA'S VOICE:", 'A LETTER TO THE WORLD'],
    category: 'A NETFLIX DOCUMENTARY FILM',
    kind: 'film',
    desc: 'OSCARS® Shortlist for Best Documentary Short. A powerful portrait of a non-speaking autistic teen as she finds her voice, revealing the depth of her thoughts, creativity, and personality.',
    cover: v(`${A}/covers/makaylas-voice.webp`),
    poster: v(`${A}/posters/makaylas-voice.webp`),
    blockBg: v(`${A}/blocks/makaylas-voice.webp`),
    trailer: 'Wm26JFhz5RE',
    details: {
      Format: 'Documentary Short',
      Platform: 'Netflix',
      Award: 'OSCARS® Shortlist — Best Documentary Short',
    },
  },
  {
    slug: 'voice-of-hind-rajab',
    bar: v(`${A}/bars/voice-of-hind-rajab.svg`),
    title: 'VOICE OF HIND RAJAB',
    titleLines: ['VOICE OF', 'HIND RAJAB'],
    category: 'FEATURE FILM',
    kind: 'film',
    desc: 'Venice Film Festival Grand Jury Prize Winner. The Voice of Hind Rajab tells the story of a 6-year-old girl trapped in a car under IDF fire in Gaza, pleading for rescue while Red Crescent volunteers do everything they can to reach her.',
    cover: v(`${A}/covers/voice-of-hind-rajab.webp`),
    poster: v(`${A}/posters/voice-of-hind-rajab.webp`),
    blockBg: v(`${A}/blocks/voice-of-hind-rajab.webp`),
    trailer: 'hrssPpqv6vc',
    details: { Format: 'Feature Film', Award: 'Venice Film Festival — Grand Jury Prize' },
  },
  {
    slug: 'shuffle',
    bar: v(`${A}/bars/shuffle.svg`),
    title: 'SHUFFLE',
    titleLines: ['SHUFFLE'],
    category: 'DOCUMENTARY FILM',
    kind: 'film',
    desc: 'SXSW Documentary Feature Competition Winner. Shuffle follows three individuals whose lives depend not on getting into treatment, but on getting out alive — shining a light on the insurance-fueled cycle of addiction treatment fraud.',
    cover: v(`${A}/covers/shuffle.webp`),
    poster: v(`${A}/posters/shuffle.webp`),
    blockBg: v(`${A}/blocks/shuffle.webp`),
    heroStill: v(`${A}/pages/shuffle-still.webp`),
    badges: [v(`${A}/blocks/shuffle-badge.webp`)],
    trailer: 'ZNy0_Elm-Ts',
    details: { Format: 'Documentary Feature', Award: 'SXSW Documentary Feature Competition Winner' },
  },
  {
    slug: 'how-to-change-the-world-podcast',
    bar: v(`${A}/bars/how-to-change-the-world-podcast.svg`),
    title: 'HOW TO CHANGE THE WORLD',
    titleLines: ['HOW TO CHANGE', 'THE WORLD'],
    category: 'PODCAST SERIES',
    kind: 'podcast',
    desc: 'Produced with PRX, How to Change the World features provocative conversations with the heroes among us—mission-driven founders, artists, thought leaders, and those on the front lines building a better world.',
    cover: v(`${A}/covers/how-to-change-the-world.webp`),
    poster: '/assets/poster-podcast.jpg',
    blockBg: v(`${A}/blocks/podcast.webp`),
    /* There is no trailer, so the case study hero falls back to a still.
       `heroStill` keeps that separate from `blockBg`, which is the home stack's
       image and should stay as it is. Shares the artwork with /podcast. */
    heroStill: v(`${A}/pages/podcast-hero.webp`),
    details: { Format: 'Podcast Series', Producer: 'World Within Productions', Partner: 'PRX' },
  },
  {
    slug: 'helenibelieve',
    bar: v(`${A}/bars/helenibelieve.svg`),
    title: 'HELEN | BELIEVE',
    titleLines: ['HELEN | BELIEVE'],
    category: 'DOCUMENTARY FILM',
    kind: 'film',
    desc: "From Producer Chris Pratt, Helen | Believe follows Olympic wrestler Helen Maroulis' astonishing comeback after suffering a career-ending injury — her gripping battle with self-doubt and PTSD in pursuit of a second chance at greatness at the Tokyo Olympics.",
    cover: v(`${A}/covers/helenibelieve.webp`),
    poster: v(`${A}/posters/helenibelieve.webp`),
    blockBg: v(`${A}/blocks/helenibelieve.webp`),
    badges: [v(`${A}/blocks/helen-badge.webp`)],
    trailer: '_wtmiAjaIRU',
    details: { Format: 'Documentary Film', Producer: 'Chris Pratt', Subject: 'Helen Maroulis' },
  },
  {
    slug: 'bubjan',
    bar: v(`${A}/bars/bubjan.svg`),
    title: 'BUBJAN',
    titleLines: ['BUBJAN'],
    category: 'DOCUMENTARY SHORT',
    kind: 'film',
    desc: 'Bubjan chronicles the journey of Parwiz Zafari, a former member of the Iranian parliament who dedicated his life to cultivating a progressive, modern, and free society in Iran.',
    cover: v(`${A}/covers/bubjan.webp`),
    poster: v(`${A}/posters/bubjan.webp`),
    blockBg: v(`${A}/blocks/bubjan.webp`),
    badges: [v(`${A}/blocks/bubjan-badges.webp`)],
    trailer: 'dzQ3zupU4QE',
    details: { Format: 'Documentary Short', Subject: 'Parwiz Zafari' },
  },
  {
    slug: 'river-of-spirits',
    bar: v(`${A}/bars/river-of-spirits.svg`),
    title: 'RIVER OF SPIRITS',
    titleLines: ['RIVER OF', 'SPIRITS'],
    category: 'DOCUMENTARY FILM',
    kind: 'film',
    desc: 'River of Spirits is cultivating cultural and ecological renewal by reconnecting communities to waterways through restoration, education, and shared stewardship.',
    cover: v(`${A}/covers/river-of-spirits.webp`),
    poster: v(`${A}/posters/river-of-spirits.webp`),
    blockBg: v(`${A}/blocks/river-of-spirits.webp`),
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
  hero: v(`${A}/pages/podcast-hero.webp`),
  /* Same exported caption bar the home stack and the case study use, in place
     of a live-text headline — see ProjectBlock.jsx. */
  bar: v(`${A}/bars/how-to-change-the-world-podcast.svg`),
  cover: '/assets/poster-podcast.jpg',
  meta: [
    { label: 'FORMAT', value: 'Podcast Series' },
    { label: 'PRODUCER', value: 'World Within Productions' },
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
/* Headline nominations, called out above the laurels — Figma 2489:1360. */
/* Headline nominations — Figma 2489:1360, the awarding bodies' own logos in
 * place of the set-in-type version they replaced. All three are for The Voice
 * of Hind Rajab. `category` was the second line of that old block and is now
 * the cursor label on hover; it stays in the alt text too, so replacing text
 * with artwork doesn't cost a screen reader the information.
 *
 * `width` is the Figma width as a share of the 1376px inner row, which keeps
 * the three logos in the relative scale they were drawn at. Heights follow from
 * each logo's own aspect ratio — they are deliberately unequal. `mobileWidth`
 * is the same ratio rescaled so the widest logo nearly fills a stacked phone
 * column, since the desktop shares would leave all three tiny.
 */
export const AWARD_NOMINATIONS = [
  {
    id: 'academy-award',
    body: 'Academy Award',
    logo: v(`${A}/nominations/oscars.svg`),
    ratio: 317.073 / 64.664,
    width: '23.04%',
    mobileWidth: '88%',
    category: ['BEST INTERNATIONAL', 'FEATURE FILM'],
  },
  {
    id: 'golden-globe',
    body: 'Golden Globe',
    logo: v(`${A}/nominations/golden-globe.webp`),
    ratio: 230.951 / 214.761,
    width: '16.78%',
    mobileWidth: '64%',
    category: ['BEST MOTION PICTURE,', 'NON-ENGLISH LANGUAGE'],
  },
  {
    id: 'bafta',
    body: 'BAFTA',
    logo: v(`${A}/nominations/bafta.webp`),
    ratio: 300.336 / 97.649,
    width: '21.83%',
    mobileWidth: '83%',
    category: ['FILM NOT IN THE', 'ENGLISH LANGUAGE'],
  },
]

/** Every headline nomination is for this film. */
export const NOMINATIONS_PROJECT = 'The Voice of Hind Rajab'

/* The festivals the user wants leading both views, in this order. Anything not
   named here keeps its original position and falls in behind Washington West. */
const AWARDS_LEAD_ORDER = [
  'sxsw-shuffle',
  'docnyc-2023',
  'slamdance-2024',
  'santa-barbara',
  'big-sky-2024',
  'indy-film-2023',
  'signal-silver-2023',
  'dcdox-2023',
  'washington-west-2023',
]

/* `project` is the WWP title the laurel was won for — surfaced as a cursor
   label in the laurel view and as the third column in the list view. Entries
   still awaiting an answer from the client carry no `project` key at all, and
   both views simply omit the column for them rather than printing "TBD". */
export const AWARDS = [
  { id: 'sxsw-shuffle', alt: 'SXSW Film & TV Festival 2025 — Documentary Feature Jury Award Winner', project: 'Shuffle' },
  { id: 'anthem-2025', alt: 'Anthem Awards 2025 — Silver Winner' },
  { id: 'docutah-2024', alt: 'DocUtah International Film Festival 2024 — Best Short', project: 'Bubjan' },
  { id: 'venice-shorts', alt: 'Venice Shorts Film Awards — Award Winner', project: 'Bubjan' },
  { id: 'anthem-persian', alt: 'Anthem Persian Film Festival 2024 — Winner', project: 'Bubjan' },
  { id: 'big-sky-2024', alt: 'Big Sky Documentary Film Festival 2024 — Official Selection', project: 'Bubjan' },
  { id: 'hollywood-shorts-editing', alt: 'Hollywood Shorts Fest — Winner, Best Editing' },
  { id: 'hmma-bubjan', alt: 'Hollywood Music in Media Awards — Official Winner, Bubjan', project: 'Bubjan' },
  { id: 'dcdox-2023', alt: 'DC/DOX Film Festival 2023', project: 'Bubjan' },
  { id: 'docnyc-2023', alt: 'DOC NYC 2023 — Official Selection', project: 'Bubjan' },
  { id: 'global-peace-2024', alt: 'Global Peace Film Festival 2024 — Official Selection' },
  { id: 'hollywood-shorts-selection', alt: 'Hollywood Shorts Fest — Official Selection' },
  { id: 'phoenix-2023', alt: 'Phoenix Film Festival 2023 — Official Selection', project: 'Helen | Believe' },
  { id: 'washington-west-2023', alt: 'Washington West Film Festival 2023 — Official Selection', project: 'Helen | Believe' },
  { id: 'idn-nominee-2025', alt: 'IDN Documentary Awards 2025 — Best Original Music Score Nominee' },
  /* Not one of the titles above — the Alex Miller podcast has no page on the
     site, so this name is display-only and links nowhere. */
  { id: 'signal-silver-2023', alt: 'Signal Awards 2023 — Silver Winner', project: 'Alex Miller Podcast' },
  { id: 'gasparilla-2023', alt: 'Gasparilla International Film Festival 2023 — Official Selection', project: 'Helen | Believe' },
  { id: 'ojai-2023', alt: 'Ojai Film Festival 2023 — Official Selection' },
  { id: 'la-audience-award', alt: 'Los Angeles Diversity Film Festival 2023 — Audience Award Winner' },
  { id: 'climate-film-2025', alt: 'Climate Film Festival 2025 — Official Selection' },
  { id: 'indy-film-2023', alt: 'Indy Film Fest 2023 — Official Selection', project: 'Helen | Believe' },
  { id: 'santa-barbara', alt: 'Santa Barbara International Film Festival — Official Selection', project: 'Helen | Believe' },
  { id: 'ojai-best-doc-short', alt: 'Ojai Film Festival 2023 — Winner, Best Documentary Short' },
  { id: 'slamdance-2024', alt: 'Slamdance Film Festival 2024' },
]
  .map((a) => ({ ...a, src: v(`${A}/awards/${a.id}.webp`) }))
  .sort((a, b) => {
    /* Lead-order entries first, in the order listed; everything else keeps its
       original sequence behind them. `indexOf` returns -1 for unlisted ids, so
       map those to Infinity rather than letting them sort ahead of the leads. */
    const rank = (x) => {
      const i = AWARDS_LEAD_ORDER.indexOf(x.id)
      return i === -1 ? Infinity : i
    }
    return rank(a) - rank(b)
  })
