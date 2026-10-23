import { Building2 } from 'lucide-react'
import { businesses } from '../data.js'
import { Reveal } from '../anim.jsx'

export default function Businesses() {
  return (
    <section className="section alt" id="businesses">
      <div className="wrap">
        <Reveal><h2 className="title">My businesses</h2></Reveal>
        <div className="cards three">
          {businesses.map((b, i) => (
            <Reveal className="card" key={b.name} delay={i * 120}>
              <Building2 className="ico" />
              <h3>{b.name}</h3>
              <p className="tag">{b.sector} · Since {b.since}</p>
              <p>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
