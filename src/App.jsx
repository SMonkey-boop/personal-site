import { profile } from './data/profile.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="crt" aria-hidden="true" />
      <Nav name={profile.handle} />
      <main className="terminal">
        <Hero profile={profile} />
        <Skills skills={profile.skills} stack={profile.stack} />
        <Experience items={profile.experience} />
        <Education education={profile.education} />
        <Contact profile={profile} />
      </main>
    </>
  )
}
