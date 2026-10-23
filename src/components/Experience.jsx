import { timeline } from '../data.js'
import { Reveal } from '../anim.jsx'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal><h2 className="title">Experience</h2></Reveal>
        <ol className="tl">
          {timeline.map((t, i) => (
            <Reveal className="tl-item" key={t.title} delay={i * 120}>
              <span>{t.when}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
