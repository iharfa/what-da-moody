type StatCardProps = {
  label: string
  value: string
  detail: string
  tone?: 'blue' | 'amber' | 'red' | 'teal'
}

export function StatCard({ label, value, detail, tone = 'blue' }: StatCardProps) {
  return (
    <article className={`stat-card stat-card-${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  )
}
