export default function Hero({ profile }) {
  return (
    <section id="about" className="section hero">
      <div className="card hero-card reveal-up">
        <p className="hero-eyebrow">{profile.title}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">
            查看经历
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            发送邮件
          </a>
        </div>
      </div>
    </section>
  )
}
