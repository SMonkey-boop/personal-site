const links = [
  { href: '#about', label: '关于' },
  { href: '#skills', label: '能力' },
  { href: '#experience', label: '经历' },
  { href: '#edu', label: '教育' },
  { href: '#contact', label: '联系' },
]

export default function Nav({ name }) {
  return (
    <header className="site-header">
      <a className="site-logo" href="#about">
        {name}
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
