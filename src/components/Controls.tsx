import type { TimeRangeKey } from '../types'

type ControlsProps = {
  showMoodys: boolean
  showFitch: boolean
  showPresidents: boolean
  showGlobalEvents: boolean
  showDebtEvents: boolean
  timeRange: TimeRangeKey
  onToggleMoodys: () => void
  onToggleFitch: () => void
  onTogglePresidents: () => void
  onToggleGlobalEvents: () => void
  onToggleDebtEvents: () => void
  onTimeRangeChange: (value: TimeRangeKey) => void
}

function ToggleButton({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={active ? 'control-pill active' : 'control-pill'}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  )
}

export function Controls({
  showMoodys,
  showFitch,
  showPresidents,
  showGlobalEvents,
  showDebtEvents,
  timeRange,
  onToggleMoodys,
  onToggleFitch,
  onTogglePresidents,
  onToggleGlobalEvents,
  onToggleDebtEvents,
  onTimeRangeChange,
}: ControlsProps) {
  return (
    <section className="panel controls-panel" aria-label="Dashboard controls">
      <div>
        <p className="eyebrow">Chart controls</p>
        <h2>Choose the layers</h2>
      </div>

      <div className="control-group">
        <ToggleButton active={showMoodys} label="Moody’s" onClick={onToggleMoodys} />
        <ToggleButton active={showFitch} label="Fitch" onClick={onToggleFitch} />
        <ToggleButton active={showPresidents} label="Presidents" onClick={onTogglePresidents} />
        <ToggleButton active={showGlobalEvents} label="Global shocks" onClick={onToggleGlobalEvents} />
        <ToggleButton active={showDebtEvents} label="Debt events" onClick={onToggleDebtEvents} />
      </div>

      <label className="range-control">
        <span>Time range</span>
        <select
          value={timeRange}
          onChange={(event) => onTimeRangeChange(event.target.value as TimeRangeKey)}
        >
          <option value="context">2007 context onward</option>
          <option value="ratings">Rating coverage from 2016</option>
          <option value="covid">COVID and recovery from 2020</option>
          <option value="muizzu">Current administration</option>
        </select>
      </label>
    </section>
  )
}
