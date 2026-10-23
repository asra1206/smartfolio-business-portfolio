import { Award } from 'lucide-react'
import { achievements } from '../data.js'
import { Reveal } from '../anim.jsx'

export default function Achievements() {
  return (
    <section className="section alt" id="achievements">
      <div className="wrap">
        <Reveal><h2 className="title">Achievements</h2></Reveal>
        <div className="cards four">
          {achievements.map((a, i) => (
            <Reveal className="card" key={a.title} delay={i * 100}>
              <Award className="ico" />
              <p className="tag">{a.year}</p>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
