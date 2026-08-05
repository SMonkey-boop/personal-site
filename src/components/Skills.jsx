export default function Skills({ skills, stack }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-cmd">
        <span className="prompt">$</span> ls ./skills
      </h2>
      <ul className="chip-row" aria-label="技术关键词">
        {stack.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
      <ol className="skill-list">
        {skills.map((item, i) => (
          <li key={item}>
            <span className="idx">{String(i + 1).padStart(2, '0')}</span>
            {item}
          </li>
        ))}
      </ol>
    </section>
  )
}
