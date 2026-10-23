import { ticker } from '../data.js'

export default function Ticker() {
  const items = [...ticker, ...ticker, ...ticker, ...ticker]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i}>{t}<i /></span>
        ))}
      </div>
    </div>
  )
}
