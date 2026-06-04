import { sources } from '../data/creditData'

export function References() {
  return (
    <footer className="references" id="references">
      <div className="footer-grid">
        <section className="footer-about" aria-label="Coalition for Open Governance">
          <img src="/assets/cog-logo.svg" alt="Coalition for Open Governance logo" className="footer-logo" />
          <div>
            <p className="eyebrow">Coalition for Open Governance</p>
            <h2>Civic data for public accountability</h2>
            <p>
              The Coalition for Open Governance operates under the umbrella of the Raajje Coalition
              for Good Governance. Its mandate focuses on open governance and supports collective
              civil society engagement, advocacy, participation, and capacity building to strengthen
              transparency, human rights, democracy, and civic influence in public policy in the Maldives.
            </p>
          </div>
        </section>

        <section className="footer-sources" aria-label="Dashboard references">
          <div className="section-heading compact-heading">
            <p className="eyebrow">References</p>
            <h2>Source list</h2>
          </div>

          <div className="reference-list">
            {sources.map((item) => (
              <a href={item.url} target="_blank" rel="noreferrer" key={`${item.source}-${item.url}`}>
                <strong>{item.source}</strong>
                <span>{item.usedFor}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  )
}
