export default function Education({ education }) {
  return (
    <section id="edu" className="section">
      <h2 className="section-cmd">
        <span className="prompt">$</span> cat ./education.md
      </h2>
      <div className="edu-block">
        <p>
          <span className="key">school</span>
          <span className="val">
            {education.school} · {education.major} · {education.degree}
          </span>
        </p>
        <p>
          <span className="key">period</span>
          <span className="val">{education.period}</span>
        </p>
        <p>
          <span className="key">english</span>
          <span className="val">{education.english}</span>
        </p>
      </div>
    </section>
  )
}
