import { useLocale } from '../i18n/LocaleContext.jsx'

export default function Nav({ name }) {
  const { t, toggleLocale } = useLocale()
  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#edu', label: t.nav.edu },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="site-header">
      <a className="site-logo" href="#about">
        {name}
      </a>
      <div className="site-header-actions">
        <nav className="site-nav" aria-label={t.navAria}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="lang-switch"
          onClick={toggleLocale}
          aria-label={t.lang.aria}
        >
          {t.lang.switchTo}
        </button>
      </div>
    </header>
  )
}
