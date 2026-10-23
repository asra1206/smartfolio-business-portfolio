import { useEffect, useRef, useState } from 'react'

export function useInView() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

export function Reveal({ children, className = '', delay = 0 }) {
  const [ref, seen] = useInView()
  return <div ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export function CountUp({ to, suffix = '' }) {
  const [ref, seen] = useInView()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return }
    let raf, t0
    const step = (t) => {
      t0 = t0 ?? t
      const p = Math.min((t - t0) / 1600, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [seen, to])
  return <span ref={ref}>{n}{suffix}</span>
}

export function Letters({ text }) {
  let offset = 0
  return (
    <span className="letters" aria-label={text}>
      {text.split(' ').map((word, w) => {
        const start = offset
        offset += word.length + 1
        return (
          <span key={w}>
            {w > 0 && ' '}
            <span className="word" aria-hidden="true">
              {[...word].map((ch, i) => (
                <span key={i} style={{ '--n': start + i }}>{ch}</span>
              ))}
            </span>
          </span>
        )
      })}
    </span>
  )
}
