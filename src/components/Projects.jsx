export default function Projects({ items }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">项目经历</h2>
      <div className="project-list">
        {items.map((project) => (
          <article key={`${project.org}-${project.name}`} className="card project-item">
            <header className="project-head">
              <div>
                <h3>{project.name}</h3>
                <p className="project-meta">
                  {project.org}
                  <span className="edu-sep">·</span>
                  {project.role}
                </p>
              </div>
              <time>{project.period}</time>
            </header>
            {project.tech?.length > 0 && (
              <ul className="project-tech" aria-label="技术栈">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <p className="project-summary">{project.summary}</p>
            {project.highlights?.length > 0 && (
              <ul className="project-highlights">
                {project.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
