import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Pillars from './components/Pillars.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Businesses from './components/Businesses.jsx'
import Experience from './components/Experience.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BottomNav from './components/BottomNav.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Pillars />
        <Stats />
        <About />
        <Businesses />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
