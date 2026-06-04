export type Agency = "Moody's" | 'Fitch'

export type RatingAction = {
  date: string
  agency: Agency
  previousRating: string | null
  previousOutlook: string | null
  rating: string
  outlook: string | null
  riskScore: number
  creditQualityScore: number
  president: string
  party: string
  administration: string
  action: string
  notes: string | null
  sourceUrl: string
}

export type ChartPoint = {
  month: string
  moodysScore: number | null
  fitchScore: number | null
  moodysRating: string | null
  fitchRating: string | null
  president: string
  party: string
  debtEventMarker: string | null
  covidOverlay: boolean
}

export type PresidentPeriod = {
  startDate: string
  endDate: string
  president: string
  party: string
  administration: string
  sourceUrl: string
}

export type GlobalEvent = {
  startDate: string
  endDate: string
  event: string
  scope: string
  notes: string
  sourceUrl: string
}

export type DebtEvent = {
  date: string
  eventType: string
  eventLabel: string
  amount: number | null
  currency: string
  notes: string
  sourceUrl: string
}

export type RatingScaleRow = {
  grade: string
  moodys: string
  fitchSP: string
  riskScore: number
  creditQualityScore: number
}

export type PresidentSummaryRow = {
  administration: string
  president: string
  party: string
  startDate: string
  endDate: string
  agency: Agency
  startRating: string
  startOutlook: string | null
  startRiskScore: number
  endRating: string
  endOutlook: string | null
  endRiskScore: number
  riskScoreChange: number
  interpretation: string
}

export type SourceReference = {
  source: string
  url: string
  usedFor: string
}

export type TimeRangeKey = 'context' | 'ratings' | 'covid' | 'muizzu'
