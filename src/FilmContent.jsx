import './FilmContent.css'

export default function FilmContent({ project }) {
  if (!project?.trailer) {
    return (
      <div className="fc-trailer-soon">
        <span>TRAILER COMING SOON</span>
      </div>
    )
  }

  return (
    <section className="fc-trailer-section">
      <div className="fc-trailer-embed">
        {project.trailerLocal ? (
          <video src={project.trailer} controls playsInline />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${project.trailer}?rel=0&modestbranding=1`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </section>
  )
}
