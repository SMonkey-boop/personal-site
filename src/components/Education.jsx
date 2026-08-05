export default function Education({ education }) {
  return (
    <section id="edu" className="section">
      <h2 className="section-title">教育</h2>
      <div className="card edu-block">
        <p className="edu-school">
          {education.school}
          <span className="edu-sep">·</span>
          {education.major}
          <span className="edu-sep">·</span>
          {education.degree}
        </p>
        <p className="edu-meta">
          {education.period}
          <span className="edu-sep">·</span>
          英语 {education.english}
        </p>
      </div>
    </section>
  )
}
