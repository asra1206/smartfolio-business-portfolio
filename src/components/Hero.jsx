import { useState } from 'react'
import { User, ArrowRight, Briefcase } from 'lucide-react'
import { profile } from '../data.js'
import { Letters } from '../anim.jsx'

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(Boolean(profile.photo))
  const s = (i) => ({ '--i': i })
  return (
    <section className="hero" id="home">
      {hasPhoto
        ? <img className="hero-photo" src={profile.photo} alt={profile.name} onError={() => setHasPhoto(false)} />
        : <div className="hero-photo photo-ph"><User strokeWidth={1} /></div>}
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="eyebrow stg" style={s(0)}>VISION / STRATEGY / GROWTH</p>
          <h1 className="stg" style={s(1)}>Hello, I’m<br /><span className="gold"><Letters text={`${profile.name}.`} /></span></h1>
          <h2 className="stg" style={s(2)}>Building Businesses,<br />Creating Opportunities.</h2>
          <p className="sub stg" style={s(3)}>{profile.intro}</p>
          <div className="actions stg" style={s(4)}>
            <a className="btn btn-gold" href="#about"><User size={20} /> Know More About Me <ArrowRight size={20} /></a>
            <a className="btn btn-line" href="#businesses"><Briefcase size={20} /> Explore My Businesses</a>
          </div>
        </div>
      </div>
    </section>
  )
}
