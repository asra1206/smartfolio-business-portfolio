import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { profile } from '../data.js'
import { Reveal } from '../anim.jsx'

export default function Contact() {
  const [f, setF] = useState({ name: '', company: '', msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const send = () => {
    const text = `Hello ${profile.name}, I'm ${f.name} from ${f.company}. ${f.msg}`
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-in">
        <Reveal>
          <h2 className="title">Let’s build something together</h2>
          <p className="body">Looking for a partnership, investment or a new venture? Send me a message and I will reply within one working day.</p>
          <p className="direct"><Mail size={18} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p className="direct"><MapPin size={18} /> {profile.location}</p>
        </Reveal>
        <Reveal delay={150} className="form">
          <label>Your name<input value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label>Company<input value={f.company} onChange={set('company')} autoComplete="organization" /></label>
          <label>How can we work together?<textarea rows="4" value={f.msg} onChange={set('msg')} /></label>
          <button className="btn btn-gold" onClick={send}>Send on WhatsApp</button>
        </Reveal>
      </div>
    </section>
  )
}
