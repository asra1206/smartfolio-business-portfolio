import * as Icons from 'lucide-react'
import { pillars } from '../data.js'
import { Reveal } from '../anim.jsx'

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="wrap pil-grid">
        {pillars.map((p, i) => {
          const Icon = Icons[p.icon]
          return (
            <Reveal className="pil" key={p.title} delay={i * 90}>
              <Icon />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
