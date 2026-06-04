import { presidentSummary } from '../data/creditData'
import { formatDate, partyColors } from '../utils'

export function PresidentComparison() {
  return (
    <section className="panel table-panel">
      <div className="section-heading">
        <p className="eyebrow">President comparison</p>
        <h2>How ratings moved within each administration</h2>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Administration</th>
              <th>Agency</th>
              <th>Period</th>
              <th>Start</th>
              <th>End</th>
              <th>Risk score change</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {presidentSummary.map((row) => (
              <tr key={`${row.administration}-${row.agency}`}>
                <td>
                  <strong>{row.president}</strong>
                  <span style={{ color: partyColors[row.party] }}>{row.party}</span>
                </td>
                <td>{row.agency}</td>
                <td>{formatDate(row.startDate)} to {formatDate(row.endDate)}</td>
                <td>{row.startRating}{row.startOutlook ? ` · ${row.startOutlook}` : ''}</td>
                <td>{row.endRating}{row.endOutlook ? ` · ${row.endOutlook}` : ''}</td>
                <td className={row.riskScoreChange > 0 ? 'negative-change' : 'neutral-change'}>
                  {row.riskScoreChange > 0 ? `+${row.riskScoreChange}` : row.riskScoreChange}
                </td>
                <td>{row.interpretation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
