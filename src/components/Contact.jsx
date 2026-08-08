import { useLocale } from '../i18n/LocaleContext.jsx'

export default function Contact({ profile }) {
  const { t } = useLocale()

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">{t.sections.contact}</h2>
      <div className="card">
        <ul className="contact-list">
          <li>
            <span className="contact-label">{t.contact.phone}</span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
          <li>
            <span className="contact-label">{t.contact.email}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        </ul>
      </div>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </section>
  )
}