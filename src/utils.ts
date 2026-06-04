import { ratingScale } from './data/creditData'
import type { RatingAction } from './types'

export const partyColors: Record<string, string> = {
  PPM: '#e34ba9',
  MDP: '#f2c94c',
  PNC: '#23d3c3',
}

export const partyBandColors: Record<string, string> = {
  PPM: 'rgba(227, 75, 169, 0.11)',
  MDP: 'rgba(242, 201, 76, 0.11)',
  PNC: 'rgba(35, 211, 195, 0.13)',
}

export const agencyColors: Record<string, string> = {
  "Moody's": '#7dd3fc',
  Fitch: '#f59e0b',
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(value))
}

export function formatMonth(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
  }).format(new Date(value))
}

export function formatMoney(value: number | null, currency: string) {
  if (value === null) return 'Amount not stated'
  const compact = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(value)
  return `${currency} ${compact}`
}

export function getLatestRating(actions: RatingAction[], agency: RatingAction['agency']) {
  return [...actions]
    .filter((item) => item.agency === agency)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
}

export function ratingLabelForScore(score: number) {
  const match = ratingScale.find((item) => item.creditQualityScore === score)
  if (!match) return `${score}`
  return `${score} · ${match.moodys} / ${match.fitchSP}`
}

export function shortEventLabel(label: string) {
  if (label.includes('Inaugural')) return 'Inaugural bond'
  if (label.includes('Debut sovereign Sukuk')) return 'Debut Sukuk'
  if (label.includes('tap')) return 'Sukuk tap'
  if (label.includes('Eurobond')) return 'Eurobond repaid'
  if (label.includes('2026 external')) return '2026 risk flag'
  if (label.includes('USD 500m')) return 'USD 500m Sukuk settled'
  if (label.includes('Fitch upgrades')) return 'Fitch upgrade'
  return label
}
