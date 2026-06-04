import { useMemo, useState } from 'react'
import './styles.css'
import { Controls } from './components/Controls'
import { CreditRatingChart } from './components/CreditRatingChart'
import { DebtEvents } from './components/DebtEvents'
import { PresidentComparison } from './components/PresidentComparison'
import { References } from './components/References'
import { StatCard } from './components/StatCard'
import { dashboardMeta, debtEvents, ratingActions } from './data/creditData'
import type { TimeRangeKey } from './types'
import { formatDate, getLatestRating } from './utils'

function App() {
  const [showMoodys, setShowMoodys] = useState(true)
  const [showFitch, setShowFitch] = useState(true)
  const [showPresidents, setShowPresidents] = useState(true)
  const [showGlobalEvents, setShowGlobalEvents] = useState(true)
  const [showDebtEvents, setShowDebtEvents] = useState(true)
  const [timeRange, setTimeRange] = useState<TimeRangeKey>('ratings')

  const latestMoodys = useMemo(() => getLatestRating(ratingActions, "Moody's"), [])
  const latestFitch = useMemo(() => getLatestRating(ratingActions, 'Fitch'), [])
  const weakestPoint = useMemo(
    () => [...ratingActions].sort((a, b) => b.riskScore - a.riskScore)[0],
    [],
  )
  const latestDebtEvent = useMemo(
    () => [...debtEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0],
    [],
  )

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Civic data observatory</p>
          <h1>{dashboardMeta.title}</h1>
          <p>{dashboardMeta.subtitle}</p>
          <div className="hero-actions">
            <a href="#references">View references</a>
            <a href="/data/maldives_credit_rating_timeline_dataset.xlsx" download>Download source workbook</a>
          </div>
        </div>
        <div className="hero-note">
          <span>Last updated</span>
          <strong>{formatDate(dashboardMeta.lastUpdated)}</strong>
          <p>{dashboardMeta.coverageNote}</p>
        </div>
      </section>

      <section className="stats-grid" aria-label="Key rating metrics">
        <StatCard
          label="Moody’s current"
          value={`${latestMoodys.rating}${latestMoodys.outlook ? ` · ${latestMoodys.outlook}` : ''}`}
          detail={`${formatDate(latestMoodys.date)} · ${latestMoodys.action}`}
          tone="blue"
        />
        <StatCard
          label="Fitch current"
          value={latestFitch.rating}
          detail={`${formatDate(latestFitch.date)} · ${latestFitch.action}`}
          tone="amber"
        />
        <StatCard
          label="Weakest point tracked"
          value={`${weakestPoint.agency} ${weakestPoint.rating}`}
          detail={`${formatDate(weakestPoint.date)} · risk score ${weakestPoint.riskScore}`}
          tone="red"
        />
        <StatCard
          label="Latest debt marker"
          value={latestDebtEvent.eventType}
          detail={`${formatDate(latestDebtEvent.date)} · ${latestDebtEvent.eventLabel}`}
          tone="teal"
        />
      </section>

      <Controls
        showMoodys={showMoodys}
        showFitch={showFitch}
        showPresidents={showPresidents}
        showGlobalEvents={showGlobalEvents}
        showDebtEvents={showDebtEvents}
        timeRange={timeRange}
        onToggleMoodys={() => setShowMoodys((value) => !value)}
        onToggleFitch={() => setShowFitch((value) => !value)}
        onTogglePresidents={() => setShowPresidents((value) => !value)}
        onToggleGlobalEvents={() => setShowGlobalEvents((value) => !value)}
        onToggleDebtEvents={() => setShowDebtEvents((value) => !value)}
        onTimeRangeChange={setTimeRange}
      />

      <CreditRatingChart
        showMoodys={showMoodys}
        showFitch={showFitch}
        showPresidents={showPresidents}
        showGlobalEvents={showGlobalEvents}
        showDebtEvents={showDebtEvents}
        timeRange={timeRange}
      />

      <section className="context-grid">
        <article className="panel explainer">
          <p className="eyebrow">How to read the chart</p>
          <h2>One scale for both agencies</h2>
          <p>
            Moody’s and Fitch use different symbols. The dashboard converts each rating into a
            comparable credit quality score. A higher score means stronger credit quality.
          </p>
        </article>
        <article className="panel explainer">
          <p className="eyebrow">Context layer</p>
          <h2>Global shocks and local leadership</h2>
          <p>
            President bands show the political period. Global shock bands show the financial crisis
            and COVID-19 period. Debt markers show major borrowings, repayments, and rating follow-through.
          </p>
        </article>
      </section>

      <PresidentComparison />
      <DebtEvents />
      <References />
    </main>
  )
}

export default App
