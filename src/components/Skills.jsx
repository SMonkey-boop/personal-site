export default function Skills({ skills, stack }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">能力</h2>
      <div className="card">
        <ul className="stack-list" aria-label="技术关键词">
          {stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ul className="skill-list">
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
