import { useLocale } from '../i18n/LocaleContext.jsx'

export default function Skills({ skills, stack }) {
  const { t } = useLocale()

  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t.sections.skills}</h2>
      <div className="card">
        <ul className="stack-list" aria-label={t.skills.stackAria}>
          {stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ul className="skill-list">
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
