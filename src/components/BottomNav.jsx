import { useEffect, useState } from 'react'
import { Home, User, Building2, Briefcase, Mail } from 'lucide-react'

const tabs = [
  ['home', 'Home', Home],
  ['about', 'About', User],
  ['businesses', 'Business', Building2],
  ['experience', 'Journey', Briefcase],
  ['contact', 'Contact', Mail],
]

export default function BottomNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const ids = tabs.map((t) => t[0])
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && ids.includes(e.target.id) && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <nav className="tabbar" aria-label="Mobile">
      {tabs.map(([id, label, Icon]) => (
        <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>
          <Icon size={22} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}