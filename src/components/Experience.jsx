export default function Experience({ items }) {
  return (
    <section id="experience" className="section">
      <h2 className="section-cmd">
        <span className="prompt">$</span> git log --experience
      </h2>
      <div className="xp-list">
        {items.map((job) => (
          <article key={`${job.org}-${job.period}`} className="xp-item">
            <header className="xp-head">
              <h3>
                <span className="hash">#</span> {job.org}
              </h3>
              <time>{job.period}</time>
            </header>
            {job.meta && <p className="xp-meta">{job.meta}</p>}
            <p className="xp-summary">{job.summary}</p>
            {job.sections?.map((sec) => (
              <div key={sec.title} className="xp-sec">
                <h4>// {sec.title}</h4>
                <ul>
                  {sec.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}
