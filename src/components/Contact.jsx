export default function Contact({ profile }) {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-cmd">
        <span className="prompt">$</span> ./contact.sh
      </h2>
      <ul className="contact-list">
        <li>
          <span className="contact-label">phone</span>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </li>
        <li>
          <span className="contact-label">email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span className="contact-label">github</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.githubUser}
          </a>
        </li>
      </ul>
      <footer className="site-footer">
        <p>
          <span className="prompt">➜</span> exit 0 · © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </section>
  )
}
