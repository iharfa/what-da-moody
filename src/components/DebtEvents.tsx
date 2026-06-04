import { debtEvents } from '../data/creditData'
import { formatDate, formatMoney } from '../utils'

export function DebtEvents() {
  return (
    <section className="panel events-panel">
      <div className="section-heading">
        <p className="eyebrow">Debt markers</p>
        <h2>Borrowings, repayments, and rating follow-through</h2>
      </div>

      <div className="event-grid">
        {debtEvents.map((event) => (
          <a
            href={event.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="event-card"
            key={`${event.date}-${event.eventLabel}`}
          >
            <span>{event.eventType}</span>
            <strong>{event.eventLabel}</strong>
            <small>{formatDate(event.date)} · {formatMoney(event.amount, event.currency)}</small>
            <p>{event.notes}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
