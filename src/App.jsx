import { profile } from './data/profile.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="page">
      <div className="page-glow" aria-hidden="true" />
      <Nav name={profile.name} />
      <main className="site">
        <Hero profile={profile} />
        <Skills skills={profile.skills} stack={profile.stack} />
        <Experience items={profile.experience} />
        <Projects items={profile.projects} />
        <Education education={profile.education} />
        <Contact profile={profile} />
      </main>
    </div>
  )
}
