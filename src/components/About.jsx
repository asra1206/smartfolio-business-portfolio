import { profile } from '../data.js'
import { Reveal } from '../anim.jsx'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <Reveal>
          <h2 className="title">About me</h2>
          {profile.about.map((p) => <p className="body" key={p}>{p}</p>)}
          <blockquote>“{profile.quote}”</blockquote>
        </Reveal>
        <Reveal delay={150}>
          <dl className="facts">
            {profile.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
