export default function Hero({ profile }) {
  return (
    <section id="about" className="section hero">
      <div className="window">
        <div className="window-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="window-title">whoami — zsh</span>
        </div>
        <div className="window-body">
          <p className="line">
            <span className="prompt">$</span> cat ./profile.json
          </p>
          <pre className="code-block reveal-up">
{`{
  "name": "${profile.name}",
  "role": "${profile.title}",
  "status": "${profile.status}",
  "target": "${profile.target}",
  "tagline": "${profile.tagline}"
}`}
          </pre>
          <p className="line reveal-up reveal-delay-1">
            <span className="prompt">$</span> echo $INTRO
          </p>
          <h1 className="hero-name reveal-up reveal-delay-1">
            {profile.name}
            <span className="cursor" aria-hidden="true" />
          </h1>
          <p className="hero-tagline reveal-up reveal-delay-2">{profile.tagline}</p>
          <div className="hero-actions reveal-up reveal-delay-2">
            <a className="btn btn-primary" href="#experience">
              ./experience
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              mail
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
