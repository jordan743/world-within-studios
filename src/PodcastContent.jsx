import { useRef, useState } from 'react'
import './PodcastContent.css'

const CDN = 'https://framerusercontent.com/images/'
const ASSET = 'https://framerusercontent.com/assets/'

const GUESTS = [
  {
    name: 'Alex Honnold',
    title: 'Founder, Honnold Foundation & Free Solo Climbing Champion  |  Podcast Guest',
    img: CDN + 'IIl8pzkM6zRPyl8nCy02wDefThY.png',
    pos: 'center top',
    clip: ASSET + 'hcMBp4dGeakXGI4OOR3szJaYM.mp4',
  },
  {
    name: 'Sabrina Pourmand Stuntz',
    title: 'Philanthropy Leader  |  Podcast Guest',
    img: CDN + 'WrUCV2JRqHcjNV29lm9ukBdSoQ.jpg',
    pos: 'center 15%',
    clip: ASSET + 'Owne7rdXAZ9XTASWtFDO523OGBs.mp4',
  },
  {
    name: 'Duncan Arne',
    title: 'Founder, Chicago CRED | Former US Secretary of Education  |  Podcast Guest',
    img: CDN + 'XrJCWu3ZPf9xOkFSryGKKoEQ.jpg',
    pos: 'center top',
    clip: ASSET + 'OyPml8RIupXGzrz29GPbdCEUF0.mp4',
  },
]

const YT = 'https://www.youtube.com/watch?v='
const YT_CHANNEL = 'https://www.youtube.com/@worldwithinstudios'

const EPISODES = [
  {
    s: 1, ep: 1,
    guest: 'Brandon Stanton',
    status: 'watch',
    link: YT + 'XaYVSQ7CjkA',
    desc: 'Brandon Stanton, Founder of Humans of New York, prepares for the biggest moment of his career: a one-of-a-kind takeover of Grand Central Station showcasing thousands of stories of everyday New Yorkers.',
  },
  {
    s: 1, ep: 2,
    guest: 'Brandon Stanton',
    status: 'watch',
    link: YT + 'ELoyfQNgFTE',
    desc: 'We sit down with Brandon Stanton to discuss his biggest project yet — a massive photo exhibit at Grand Central Station marking the culmination of 15 years of documenting and sharing the stories of everyday New Yorkers.',
  },
  {
    s: 1, ep: 3,
    guest: 'Ginjan Bros',
    status: 'watch',
    link: YT_CHANNEL,
    desc: "Brothers Mo and Rahim Diallo share their winding journey from Guinea to New York City. What started as an African juice brand with less than $1,000 is now poised to open new economic pathways for thousands of Guineans and New Yorkers alike.",
  },
  {
    s: 1, ep: 4,
    guest: 'Geralyn Dreyfous',
    status: 'watch',
    link: YT + 'LGxfwiN-NDA',
    desc: "Oscar-winning documentary producer Geralyn Dreyfous explores the future of impact storytelling — what makes a film resonate, why Hollywood's economics are broken, and how new models could shift power back to creators and communities.",
  },
  {
    s: 1, ep: 5,
    guest: 'Sam Kass',
    status: 'watch',
    link: YT + 'VO8TSLj_hvo',
    desc: "One part The Bear, one part The West Wing. Sam Kass shares his path from fine dining to the Obama White House, and leads a critical conversation about how food and agriculture can become our biggest lever to fight climate change.",
  },
  {
    s: 1, ep: 6,
    guest: 'Arne Duncan',
    status: 'watch',
    link: YT_CHANNEL,
    desc: "Arne Duncan, Curtis Toler, and Billy Moore of Chicago CRED go deep on their radically human approach to ending gun violence — a conversation about redemption, root causes, and what it really takes to build peace.",
  },
  {
    s: 1, ep: 7,
    guest: 'Arian Moayed',
    status: 'watch',
    link: YT + 'sx7-VZSqBGM',
    desc: "Arian Moayed (Succession, Marvel) on the craft of storytelling, the responsibility of the artist, and why the stories we tell each other are the most powerful tools we have for changing the world.",
  },
  {
    s: 1, ep: 8,
    guest: 'Sam Teicher',
    status: 'watch',
    link: YT_CHANNEL,
    desc: "Sam Teicher, co-founder of Coral Vita, on what it actually takes to rescue a coral reef — and why restoring the ocean might be one of the most urgent business opportunities of our generation.",
  },
  {
    s: 1, ep: 9,
    guest: 'Mohamed Hage & Dave Furneaux',
    status: 'watch',
    link: YT_CHANNEL,
    desc: "The founders of Lufa Farms on how they built the world's first commercial rooftop greenhouse network — and their vision for growing food on top of cities around the world.",
  },
  {
    s: 1, ep: 10,
    guest: 'Cole Mannix',
    status: 'watch',
    link: YT_CHANNEL,
    desc: "Cole Mannix of Old Salt Co-op on how a small Montana town is fighting back against industrial agriculture — and building a community-owned food system rooted in land stewardship.",
  },
  {
    s: 1, ep: 11,
    guest: 'Cooper Hibbard',
    status: 'watch',
    link: YT + 'o3qpRjgO-eA',
    desc: "A Montana rancher on family legacy, inherited values, and what it means to be a steward of the land — and why rethinking our relationship with land is essential to building a better food future.",
  },
  {
    s: 1, ep: 12,
    guest: 'Kat Taylor',
    status: 'watch',
    link: YT + 'OeFPa3_TswA',
    desc: "Kat Taylor, co-founder of Beneficial State Bank, on what's broken in our banking system and what a regenerative, community-rooted alternative actually looks like in practice.",
  },
  {
    s: 1, ep: 13,
    guest: 'Rami Helali',
    status: 'watch',
    link: YT_CHANNEL,
    desc: "Rami Helali of KOTN on building an ethical fashion brand from the ground up — and how his cultural background shapes a radically different view of global supply chains and genuine social impact.",
  },
  {
    s: 1, ep: 14,
    guest: 'Adnan Hadad',
    status: 'watch',
    link: YT + 'mK_dXjzxkJM',
    desc: "Part one of our Iran miniseries. Adnan Hadad left stable employment to join the Syrian revolution and co-founded the Aleppo Media Center — sharing the revolutionary blueprints that topple regimes.",
  },
  {
    s: 1, ep: 15,
    guest: 'Gissou Nia',
    status: 'watch',
    link: YT + 'pRayh6GtNqc',
    desc: "Part two. Human rights attorney Gissou Nia on legal strategies against brutal regimes, accountability through international courts, and the painstaking work of documenting atrocities for justice.",
  },
  {
    s: 1, ep: 16,
    guest: 'Dr. Abbas Milani',
    status: 'watch',
    link: YT + 'Sp8bicDIu6k',
    desc: "Part three. Dr. Abbas Milani on modern Iranian history, the century-long battle between secular modernization and theocratic rule, and what the fight for freedom inside Iran looks like today.",
  },
  {
    s: 1, ep: 17,
    guest: 'Rutger Bregman',
    status: 'watch',
    link: YT + 'o1zNEvXAKaY',
    desc: "Historian and author Rutger Bregman argues that society rewards playing it safe over pursuing meaningful change — and that the most important thing any of us can do is become morally ambitious.",
  },
]

function GuestCard({ g }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const onEnter = () => {
    if (videoRef.current) videoRef.current.play()
  }
  const onLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      videoRef.current.muted = true
      setMuted(true)
    }
  }
  const toggleMute = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setMuted(videoRef.current.muted)
    }
  }

  return (
    <div className="pc-guest" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <img
        className="pc-guest__img"
        src={g.img}
        alt={g.name}
        style={{ objectPosition: g.pos }}
      />
      {g.clip && (
        <video
          ref={videoRef}
          className="pc-guest__video"
          src={g.clip}
          muted
          loop
          playsInline
          preload="none"
        />
      )}
      <div className="pc-guest__overlay" />
      {g.clip && (
        <button className="pc-guest__mute" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          )}
        </button>
      )}
      <div className="pc-guest__info">
        <span className="pc-guest__name">{g.name}</span>
        <span className="pc-guest__title">{g.title}</span>
      </div>
    </div>
  )
}

function GuestCards() {
  return (
    <section className="pc-guests">
      {GUESTS.map((g) => <GuestCard key={g.name} g={g} />)}
    </section>
  )
}

function EpisodeGuide() {
  return (
    <section className="pc-episodes">
      <div className="pc-episodes__label">
        <span>EPISODE GUIDE</span>
      </div>
      <div className="pc-episodes__list">
        {[...EPISODES].reverse().map((ep) => (
          <div key={ep.ep} className="pc-ep">
            <div className="pc-ep__header">
              <span className="pc-ep__id">S{ep.s}&nbsp;&nbsp;&nbsp;EP. {ep.ep}</span>
              <span className="pc-ep__guest">{ep.guest.toUpperCase()}</span>
              {ep.status === 'watch' ? (
                <a
                  href={ep.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-ep__watch"
                >
                  WATCH NOW ↗
                </a>
              ) : (
                <span className="pc-ep__soon">COMING SOON</span>
              )}
            </div>
            <p className="pc-ep__desc">{ep.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function PodcastContent() {
  return (
    <>
      <GuestCards />
      <EpisodeGuide />
    </>
  )
}
