import { useEffect, useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'
import { profile } from '../data.js'

const links = [['home', 'Home'], ['about', 'About'], ['businesses', 'Businesses'], ['experience', 'Experience'], ['achievements', 'Achievements'], ['contact', 'Contact']]
const initials = profile.name.split(' ').map((w) => w[0])

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <header className={`nav ${open ? 'open' : ''}`}>
      <div className="wrap nav-in">
        <a href="#home" className="brand">
          <span className="mono">{initials[0]}<i>{initials[1]}</i></span>
          <span><strong>{profile.name}</strong><small>{profile.role}</small></span>
        </a>
        <nav className="links" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-sm nav-cta"><Mail size={18} /> Get In Touch</a>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}
