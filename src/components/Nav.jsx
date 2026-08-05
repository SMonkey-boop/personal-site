const links = [
  { href: '#about', label: '~/about' },
  { href: '#skills', label: '~/skills' },
  { href: '#experience', label: '~/xp' },
  { href: '#edu', label: '~/edu' },
  { href: '#contact', label: '~/contact' },
]

export default function Nav({ name }) {
  return (
    <header className="site-header">
      <a className="site-logo" href="#about">
        <span className="prompt">➜</span> {name}
      </a>
      <nav className="site-nav" aria-label="页面导航">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
