export default function Contact({ profile }) {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">联系</h2>
      <div className="card">
        <ul className="contact-list">
          <li>
            <span className="contact-label">电话</span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
          <li>
            <span className="contact-label">邮箱</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        </ul>
      </div>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </section>
  )
}
