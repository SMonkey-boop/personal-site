import { useLocale } from '../i18n/LocaleContext.jsx'

export default function Education({ education }) {
  const { t } = useLocale()

  return (
    <section id="edu" className="section">
      <h2 className="section-title">{t.sections.edu}</h2>
      <div className="card edu-block">
        <p className="edu-school">
          {education.school}
          <span className="edu-sep">·</span>
          {education.major}
          <span className="edu-sep">·</span>
          {education.degree}
        </p>
        <p className="edu-meta">
          {education.period}
          <span className="edu-sep">·</span>
          {t.education.english} {education.english}
        </p>
      </div>
    </section>
  )
}
