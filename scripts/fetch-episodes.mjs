#!/usr/bin/env node
/**
 * Pull the latest uploads from the World Within Studios YouTube channel into
 * src/r2/episodes.generated.json, which the podcast page reads for both the
 * thumbnail grid and the list view.
 *
 * YouTube's RSS feed is CORS-blocked in the browser and needs no API key, so
 * this runs at build time instead of in the client — `npm run build` calls it
 * via the prebuild hook, meaning every deploy ships the current 15 uploads.
 *
 * Run manually with:  npm run episodes
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const CHANNEL_ID = 'UCue-h2DNYlvihEZtvjvxjFw'
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(HERE, '../src/r2/episodes.generated.json')

const decode = (s = '') =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim()

const pick = (xml, tag) => {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`))
  return m ? decode(m[1]) : ''
}

/**
 * Descriptions carry a lot of channel furniture — a "Taken from: <url>" line on
 * clip uploads, then a CONNECT / Donate / socials block. Strip those out and
 * keep the first real sentence for the list view blurb.
 */
const BOILERPLATE = /^(-{3,}|•|#|\/{2,}|taken from:|connect|donate|subscribe|follow|website|instagram|twitter|tiktok|linkedin|spotify|apple|watch|listen|credits|chapters|timestamps|\d{1,2}:\d{2})/i

const clamp = (s) => (s.length > 150 ? `${s.slice(0, 149).trimEnd()}…` : s)

const blurbOf = (desc) => {
  const lines = desc.split('\n').map((l) => l.replace(/\s+/g, ' ').trim())

  const prose = lines
    .map((l) => l.replace(/https?:\/\/\S+/g, '').trim())
    .find((l) => l.length >= 45 && !BOILERPLATE.test(l))
  if (prose) return clamp(prose)

  // Clip uploads carry no prose, just a pointer to the episode they came from.
  // That pointer is the most useful thing we can show, so surface it.
  const takenFrom = lines
    .find((l) => /^taken from:/i.test(l))
    ?.replace(/^taken from:\s*/i, '')
    .replace(/https?:\/\/\S+/g, '')
    .trim()
  if (takenFrom) return clamp(`Clip from “${takenFrom.replace(/\s*-\s*$/, '')}”`)

  return ''
}

/**
 * The RSS feed doesn't mark Shorts, but the /shorts/ URL tells us: YouTube
 * serves a Short there with a 200 and redirects (303) anything else to
 * /watch. On a network failure we keep the video — wrongly dropping a real
 * episode is worse than letting a Short slip through.
 */
const isShort = async (id) => {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${id}`, {
      method: 'HEAD',
      redirect: 'manual',
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; wws-site-build)' },
    })
    return res.status === 200
  } catch {
    return false
  }
}

const main = async () => {
  const res = await fetch(FEED, { headers: { 'user-agent': 'wws-site-build' } })
  if (!res.ok) throw new Error(`Feed returned ${res.status} ${res.statusText}`)
  const xml = await res.text()

  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1])
  if (!entries.length) throw new Error('Feed contained no entries')

  const episodes = entries.map((e) => {
    const id = pick(e, 'yt:videoId')
    const desc = pick(e, 'media:description')
    const thumb = e.match(/<media:thumbnail\s+url="([^"]+)"/)?.[1] || ''
    return {
      id,
      title: pick(e, 'title'),
      published: pick(e, 'published'),
      href: `https://www.youtube.com/watch?v=${id}`,
      // maxresdefault when it exists, hqdefault as the guaranteed fallback.
      thumb: thumb.replace('/hqdefault.jpg', '/maxresdefault.jpg'),
      thumbFallback: thumb,
      blurb: blurbOf(desc),
    }
  })

  const shorts = await Promise.all(episodes.map((e) => isShort(e.id)))
  const kept = episodes.filter((_, i) => !shorts[i])
  const dropped = episodes.filter((_, i) => shorts[i])
  for (const s of dropped) console.log(`  skipped Short: ${s.title}`)

  mkdirSync(dirname(OUT), { recursive: true })
  writeFileSync(
    OUT,
    `${JSON.stringify({ fetchedAt: new Date().toISOString(), channel: CHANNEL_ID, episodes: kept }, null, 2)}\n`,
  )
  console.log(`Wrote ${kept.length} episodes to ${OUT} (${dropped.length} Shorts filtered out)`)
}

main().catch((err) => {
  // A network blip shouldn't break the build — the page falls back to whatever
  // episodes.generated.json is already committed.
  console.error(`[fetch-episodes] ${err.message} — keeping the committed feed.`)
  process.exit(0)
})
