import { useLocale } from '../i18n/LocaleContext.jsx'

export default function Experience({ items }) {
  const { t } = useLocale()

  return (
    <section id="experience" className="section">
      <h2 className="section-title">{t.sections.experience}</h2>
      <div className="xp-list">
        {items.map((job) => (
          <article key={`${job.org}-${job.period}`} className="card xp-item">
            <header className="xp-head">
              <div className="xp-titles">
                <h3>{job.org}</h3>
                <p className="xp-role">{job.title}</p>
              </div>
              <time>{job.period}</time>
            </header>
            <ul className="duty-list">
              {job.duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
