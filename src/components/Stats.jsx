import { stats } from '../data.js'
import { CountUp } from '../anim.jsx'

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stat-grid">
        {stats.map((s) => (
          <div key={s.label}>
            <strong><CountUp to={s.value} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
