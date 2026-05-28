import { useRef } from 'react'
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

const EPISODES = [
  {
    s: 1, ep: 1,
    guest: 'Brandon Stanton',
    status: 'watch',
    link: 'https://youtu.be/XaYVSQ7CjkA?si=fKzL4gs5W5OtDEkX',
    desc: 'Brandon Stanton, Founder of Humans of New York, prepares for the biggest moment of his career: A one of a kind takeover of Grand Central Station showcasing thousands of stories of everyday New Yorkers.',
  },
  {
    s: 1, ep: 2,
    guest: 'Brandon Stanton Part 2',
    status: 'watch',
    link: 'https://youtu.be/ELoyfQNgFTE?si=q3bKCh8uO-jYnDlf',
    desc: 'We sit down with Brandon Stanton, creator of Human of New York, to discuss his biggest project yet — a massive photo exhibit at Grand Central Station that marks the culmination of 15 years of documenting and sharing the stories of everyday New Yorkers.',
  },
  {
    s: 1, ep: 3,
    guest: 'Ginjan Bros',
    status: 'watch',
    link: 'https://www.youtube.com/@worldwithinstudios',
    desc: "You've never heard a story quite like the Ginjan Bros. Brothers Mo and Rahim Diallo share their winding journey from Guinea to New York City. What started as an African juice brand with less than $1,000, is now poised to open new economic pathways for thousands of Guineans and New Yorkers alike.",
  },
  {
    s: 1, ep: 4,
    guest: 'Arne Duncan',
    status: 'soon',
    link: null,
    desc: "Arne Duncan, Curtis Toler, and Billy Moore, leaders of Chicago CRED, go deep on their radically human approach to ending gun violence. It's a conversation about redemption, root causes, and what it really takes to build peace in the most violent city in America.",
  },
  {
    s: 1, ep: 5,
    guest: 'Geralyn Dreyfous',
    status: 'soon',
    link: null,
    desc: 'Oscar-winning documentary producer Geralyn Dreyfous explores the future of impact storytelling. We get into what makes a film resonate, why Hollywood\'s economics are broken, and how new models could shift power back to creators and communities.',
  },
  {
    s: 1, ep: 6,
    guest: 'Sam Kass',
    status: 'soon',
    link: null,
    desc: 'One part The Bear, one part The West Wing, Sam Kass shares his unique path from the highest echelons of fine dining, to the Obama White House as the first Head of Nutrition for the nation. He leads a critical conversation about how food and agriculture can become our biggest lever to fight climate change.',
  },
]

function GuestCard({ g }) {
  const videoRef = useRef(null)

  const onEnter = () => {
    if (videoRef.current) videoRef.current.play()
  }
  const onLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
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
        <span>SEASON 1</span>
        <span>EPISODE GUIDE</span>
      </div>
      <div className="pc-episodes__list">
        {EPISODES.map((ep) => (
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
