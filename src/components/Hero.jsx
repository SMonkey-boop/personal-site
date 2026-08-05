export default function Hero({ profile }) {
  return (
    <section id="about" className="section hero">
      <div className="card hero-card reveal-up">
        <div className="hero-layout">
          <img
            className="hero-avatar"
            src={profile.avatar}
            alt={`${profile.name}的头像`}
            width={120}
            height={160}
          />
          <div className="hero-copy">
            <p className="hero-eyebrow">{profile.title}</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#experience">
                工作经历
              </a>
              <a className="btn btn-ghost" href="#projects">
                项目经历
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
