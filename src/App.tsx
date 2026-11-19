import Nav from './components/Nav'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Nav />
      <main className="pt-16">
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
