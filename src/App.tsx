import Nav from './components/Nav'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

export default function App() {
  return (
    <div className="font-sans text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Nav />
      <main className="pt-16 pb-24 md:pb-0">
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
        <CTA />
      </main>
      <Footer />
      <StickyBar />
    </div>
  )
}
