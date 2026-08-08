import { useLocale } from '../i18n/LocaleContext.jsx'

export default function Hero({ profile }) {
  const { t } = useLocale()

  return (
    <section id="about" className="section hero">
      <div className="card hero-card reveal-up">
        <div className="hero-layout">
          <img
            className="hero-avatar"
            src={profile.avatar}
            alt={t.hero.avatarAlt(profile.name)}
            width={497}
            height={640}
          />
          <div className="hero-copy">
            <p className="hero-eyebrow">{profile.title}</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#experience">
                {t.hero.experience}
              </a>
              <a className="btn btn-ghost" href="#projects">
                {t.hero.projects}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
