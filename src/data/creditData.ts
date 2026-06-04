import type {
  ChartPoint,
  DebtEvent,
  GlobalEvent,
  PresidentPeriod,
  PresidentSummaryRow,
  RatingAction,
  RatingScaleRow,
  SourceReference,
} from '../types'

export const dashboardMeta = {
  title: 'Maldives Sovereign Credit Rating Timeline',
  subtitle: 'Moody’s and Fitch sovereign rating actions mapped against presidents, global shocks, and debt events.',
  lastUpdated: '2026-06-04',
  coverageNote: 'Maldives sovereign rating coverage begins in September 2016. The Global Financial Crisis appears as pre-rating context.',
}

export const ratingActions: RatingAction[] = [
  {
    "date": "2016-09-02",
    "agency": "Moody's",
    "previousRating": "NR",
    "previousOutlook": null,
    "rating": "B2",
    "outlook": "Stable",
    "riskScore": 15,
    "creditQualityScore": 7,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "administration": "Yameen administration",
    "action": "First sovereign rating assigned",
    "notes": "Ministry notes first Maldives sovereign rating was Moody's B2 in September 2016.",
    "sourceUrl": "https://www.finance.gov.mv/debt-management/credit-rating"
  },
  {
    "date": "2017-05-15",
    "agency": "Fitch",
    "previousRating": "NR",
    "previousOutlook": null,
    "rating": "B+",
    "outlook": "Stable",
    "riskScore": 14,
    "creditQualityScore": 8,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "administration": "Yameen administration",
    "action": "First Fitch sovereign rating assigned",
    "notes": "Ministry notes Fitch became the second agency to rate Maldives in May 2017 with B+.",
    "sourceUrl": "https://www.finance.gov.mv/media/news/second-sovereign-credit-rating-issued-for-the-maldives"
  },
  {
    "date": "2018-05-15",
    "agency": "Fitch",
    "previousRating": "B+",
    "previousOutlook": "Stable",
    "rating": "B+",
    "outlook": "Stable",
    "riskScore": 14,
    "creditQualityScore": 8,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "administration": "Yameen administration",
    "action": "Affirmed",
    "notes": null,
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-affirms-maldives-at-b-outlook-stable-15-05-2018"
  },
  {
    "date": "2018-07-25",
    "agency": "Moody's",
    "previousRating": "B2",
    "previousOutlook": "Stable",
    "rating": "B2",
    "outlook": "Negative",
    "riskScore": 15,
    "creditQualityScore": 7,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "administration": "Yameen administration",
    "action": "Outlook revised to Negative",
    "notes": null,
    "sourceUrl": "https://tradingeconomics.com/maldives/rating"
  },
  {
    "date": "2019-05-27",
    "agency": "Fitch",
    "previousRating": "B+",
    "previousOutlook": "Stable",
    "rating": "B+",
    "outlook": "Stable",
    "riskScore": 14,
    "creditQualityScore": 8,
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "action": "Affirmed",
    "notes": null,
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/correction-fitch-affirms-maldives-at-b-outlook-stable-27-05-2019"
  },
  {
    "date": "2019-11-19",
    "agency": "Moody's",
    "previousRating": "B2",
    "previousOutlook": "Negative",
    "rating": "B2",
    "outlook": "Negative",
    "riskScore": 15,
    "creditQualityScore": 7,
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "action": "Affirmed",
    "notes": null,
    "sourceUrl": "https://www.finance.gov.mv/debt-management/credit-rating"
  },
  {
    "date": "2020-03-30",
    "agency": "Fitch",
    "previousRating": "B+",
    "previousOutlook": "Stable",
    "rating": "B",
    "outlook": "Negative",
    "riskScore": 15,
    "creditQualityScore": 7,
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "action": "Downgraded",
    "notes": "COVID tourism shock and weakened external buffers.",
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-downgrades-maldives-to-b-outlook-revised-to-negative-30-03-2020"
  },
  {
    "date": "2020-05-21",
    "agency": "Moody's",
    "previousRating": "B2",
    "previousOutlook": "Negative",
    "rating": "B3",
    "outlook": "Negative",
    "riskScore": 16,
    "creditQualityScore": 6,
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "action": "Downgraded",
    "notes": "COVID tourism shock.",
    "sourceUrl": "https://tradingeconomics.com/maldives/rating"
  },
  {
    "date": "2020-11-05",
    "agency": "Fitch",
    "previousRating": "B",
    "previousOutlook": "Negative",
    "rating": "CCC",
    "outlook": null,
    "riskScore": 18,
    "creditQualityScore": 4,
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "action": "Downgraded",
    "notes": null,
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-downgrades-maldives-to-ccc-05-11-2020"
  },
  {
    "date": "2021-08-17",
    "agency": "Moody's",
    "previousRating": "B3",
    "previousOutlook": "Negative",
    "rating": "Caa1",
    "outlook": "Stable",
    "riskScore": 17,
    "creditQualityScore": 5,
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "action": "Downgraded and outlook changed to Stable",
    "notes": null,
    "sourceUrl": "https://www.finance.gov.mv/debt-management/credit-rating"
  },
  {
    "date": "2021-10-28",
    "agency": "Fitch",
    "previousRating": "CCC",
    "previousOutlook": null,
    "rating": "B-",
    "outlook": "Stable",
    "riskScore": 16,
    "creditQualityScore": 6,
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "action": "Upgraded",
    "notes": "Tourism rebound after 2020 contraction.",
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-upgrades-maldives-to-b-outlook-stable-28-10-2021"
  },
  {
    "date": "2022-10-13",
    "agency": "Fitch",
    "previousRating": "B-",
    "previousOutlook": "Stable",
    "rating": "B-",
    "outlook": "Negative",
    "riskScore": 16,
    "creditQualityScore": 6,
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "action": "Outlook revised to Negative",
    "notes": null,
    "sourceUrl": "https://www.finance.gov.mv/debt-management/credit-rating"
  },
  {
    "date": "2024-06-26",
    "agency": "Fitch",
    "previousRating": "B-",
    "previousOutlook": "Negative",
    "rating": "CCC+",
    "outlook": null,
    "riskScore": 17,
    "creditQualityScore": 5,
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "administration": "Muizzu administration",
    "action": "Downgraded",
    "notes": "External financing and liquidity risks.",
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-downgrades-maldives-long-term-idr-to-ccc-26-06-2024"
  },
  {
    "date": "2024-08-29",
    "agency": "Fitch",
    "previousRating": "CCC+",
    "previousOutlook": null,
    "rating": "CC",
    "outlook": null,
    "riskScore": 20,
    "creditQualityScore": 2,
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "administration": "Muizzu administration",
    "action": "Downgraded",
    "notes": "Increased default risk and falling reserves.",
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-downgrades-maldives-to-cc-29-08-2024"
  },
  {
    "date": "2024-09-11",
    "agency": "Moody's",
    "previousRating": "Caa1",
    "previousOutlook": "Stable",
    "rating": "Caa2",
    "outlook": "Under Review",
    "riskScore": 18,
    "creditQualityScore": 4,
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "administration": "Muizzu administration",
    "action": "Downgraded and placed under review",
    "notes": null,
    "sourceUrl": "https://www.fxempire.com/credit-ratings/maldives"
  },
  {
    "date": "2024-12-03",
    "agency": "Moody's",
    "previousRating": "Caa2",
    "previousOutlook": "Under Review",
    "rating": "Caa2",
    "outlook": "Negative",
    "riskScore": 18,
    "creditQualityScore": 4,
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "administration": "Muizzu administration",
    "action": "Outlook set to Negative",
    "notes": null,
    "sourceUrl": "https://www.fxempire.com/credit-ratings/maldives"
  },
  {
    "date": "2025-06-12",
    "agency": "Fitch",
    "previousRating": "CC",
    "previousOutlook": null,
    "rating": "CC",
    "outlook": null,
    "riskScore": 20,
    "creditQualityScore": 2,
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "administration": "Muizzu administration",
    "action": "Affirmed",
    "notes": null,
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-affirms-maldives-at-cc-12-06-2025"
  },
  {
    "date": "2025-11-27",
    "agency": "Moody's",
    "previousRating": "Caa2",
    "previousOutlook": "Negative",
    "rating": "Caa2",
    "outlook": "Stable",
    "riskScore": 18,
    "creditQualityScore": 4,
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "administration": "Muizzu administration",
    "action": "Affirmed and outlook revised to Stable",
    "notes": null,
    "sourceUrl": "https://tradingeconomics.com/maldives/rating"
  },
  {
    "date": "2026-06-03",
    "agency": "Fitch",
    "previousRating": "CC",
    "previousOutlook": null,
    "rating": "CCC-",
    "outlook": null,
    "riskScore": 19,
    "creditQualityScore": 3,
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "administration": "Muizzu administration",
    "action": "Upgraded",
    "notes": "Default risk eased after Sukuk settlement, but fiscal and external vulnerabilities remain high.",
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-upgrades-maldives-to-ccc-03-06-2026"
  }
]

export const chartData: ChartPoint[] = [
  {
    "month": "2016-09-01",
    "moodysScore": 7,
    "fitchScore": null,
    "moodysRating": "B2",
    "fitchRating": null,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2016-10-01",
    "moodysScore": 7,
    "fitchScore": null,
    "moodysRating": "B2",
    "fitchRating": null,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2016-11-01",
    "moodysScore": 7,
    "fitchScore": null,
    "moodysRating": "B2",
    "fitchRating": null,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2016-12-01",
    "moodysScore": 7,
    "fitchScore": null,
    "moodysRating": "B2",
    "fitchRating": null,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-01-01",
    "moodysScore": 7,
    "fitchScore": null,
    "moodysRating": "B2",
    "fitchRating": null,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-02-01",
    "moodysScore": 7,
    "fitchScore": null,
    "moodysRating": "B2",
    "fitchRating": null,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-03-01",
    "moodysScore": 7,
    "fitchScore": null,
    "moodysRating": "B2",
    "fitchRating": null,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-04-01",
    "moodysScore": 7,
    "fitchScore": null,
    "moodysRating": "B2",
    "fitchRating": null,
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-05-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": "Inaugural international sovereign bond issued/listed",
    "covidOverlay": false
  },
  {
    "month": "2017-06-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-07-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-08-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-09-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-10-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-11-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2017-12-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-01-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-02-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-03-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-04-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-05-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-06-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-07-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-08-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-09-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-10-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-11-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2018-12-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-01-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-02-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-03-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-04-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-05-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-06-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-07-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-08-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-09-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-10-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-11-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2019-12-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2020-01-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2020-02-01",
    "moodysScore": 7,
    "fitchScore": 8,
    "moodysRating": "B2",
    "fitchRating": "B+",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2020-03-01",
    "moodysScore": 7,
    "fitchScore": 7,
    "moodysRating": "B2",
    "fitchRating": "B",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-04-01",
    "moodysScore": 7,
    "fitchScore": 7,
    "moodysRating": "B2",
    "fitchRating": "B",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-05-01",
    "moodysScore": 6,
    "fitchScore": 7,
    "moodysRating": "B3",
    "fitchRating": "B",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-06-01",
    "moodysScore": 6,
    "fitchScore": 7,
    "moodysRating": "B3",
    "fitchRating": "B",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-07-01",
    "moodysScore": 6,
    "fitchScore": 7,
    "moodysRating": "B3",
    "fitchRating": "B",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-08-01",
    "moodysScore": 6,
    "fitchScore": 7,
    "moodysRating": "B3",
    "fitchRating": "B",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-09-01",
    "moodysScore": 6,
    "fitchScore": 7,
    "moodysRating": "B3",
    "fitchRating": "B",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-10-01",
    "moodysScore": 6,
    "fitchScore": 7,
    "moodysRating": "B3",
    "fitchRating": "B",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-11-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2020-12-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-01-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-02-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-03-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": "Debut sovereign Sukuk priced",
    "covidOverlay": true
  },
  {
    "month": "2021-04-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-05-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-06-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-07-01",
    "moodysScore": 6,
    "fitchScore": 4,
    "moodysRating": "B3",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-08-01",
    "moodysScore": 5,
    "fitchScore": 4,
    "moodysRating": "Caa1",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-09-01",
    "moodysScore": 5,
    "fitchScore": 4,
    "moodysRating": "Caa1",
    "fitchRating": "CCC",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": "Sukuk tap issuance takes 2021 Sukuk total to USD 500m",
    "covidOverlay": true
  },
  {
    "month": "2021-10-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-11-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2021-12-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-01-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-02-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-03-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-04-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-05-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-06-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": "Outstanding debut Eurobond balance repaid",
    "covidOverlay": true
  },
  {
    "month": "2022-07-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-08-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-09-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-10-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-11-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2022-12-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": true
  },
  {
    "month": "2023-01-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-02-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-03-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-04-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-05-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-06-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-07-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-08-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-09-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-10-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-11-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2023-12-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-01-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-02-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-03-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-04-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-05-01",
    "moodysScore": 5,
    "fitchScore": 6,
    "moodysRating": "Caa1",
    "fitchRating": "B-",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-06-01",
    "moodysScore": 5,
    "fitchScore": 5,
    "moodysRating": "Caa1",
    "fitchRating": "CCC+",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": "Fitch flags 2026 external debt service risk",
    "covidOverlay": false
  },
  {
    "month": "2024-07-01",
    "moodysScore": 5,
    "fitchScore": 5,
    "moodysRating": "Caa1",
    "fitchRating": "CCC+",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-08-01",
    "moodysScore": 5,
    "fitchScore": 2,
    "moodysRating": "Caa1",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-09-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-10-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-11-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2024-12-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-01-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-02-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-03-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-04-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-05-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-06-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-07-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-08-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-09-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-10-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-11-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2025-12-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2026-01-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2026-02-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2026-03-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2026-04-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": "USD 500m Sukuk settled",
    "covidOverlay": false
  },
  {
    "month": "2026-05-01",
    "moodysScore": 4,
    "fitchScore": 2,
    "moodysRating": "Caa2",
    "fitchRating": "CC",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": null,
    "covidOverlay": false
  },
  {
    "month": "2026-06-01",
    "moodysScore": 4,
    "fitchScore": 3,
    "moodysRating": "Caa2",
    "fitchRating": "CCC-",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "debtEventMarker": "Fitch upgrades Maldives after Sukuk repayment",
    "covidOverlay": false
  }
]

export const presidents: PresidentPeriod[] = [
  {
    "startDate": "2013-11-17",
    "endDate": "2018-11-16",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "administration": "Yameen administration",
    "sourceUrl": "https://presidency.gov.mv/PO/FormerPresidents/10"
  },
  {
    "startDate": "2018-11-17",
    "endDate": "2023-11-16",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "administration": "Solih administration",
    "sourceUrl": "https://presidency.gov.mv/PO/FormerPresidents/10"
  },
  {
    "startDate": "2023-11-17",
    "endDate": "2026-06-04",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "administration": "Muizzu administration",
    "sourceUrl": "https://presidency.gov.mv/"
  }
]

export const globalEvents: GlobalEvent[] = [
  {
    "startDate": "2007-07-01",
    "endDate": "2009-06-30",
    "event": "Global Financial Crisis",
    "scope": "Global",
    "notes": "Included for context. It predates Maldives sovereign rating coverage, which starts in September 2016.",
    "sourceUrl": "Contextual overlay"
  },
  {
    "startDate": "2020-03-11",
    "endDate": "2022-12-31",
    "event": "COVID-19 global shock",
    "scope": "Global",
    "notes": "WHO characterized COVID-19 as a pandemic on 11 March 2020. Maldives tourism and credit conditions were hit directly in 2020.",
    "sourceUrl": "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020"
  },
  {
    "startDate": "2020-07-15",
    "endDate": "2020-07-15",
    "event": "Maldives tourism border reopening",
    "scope": "Maldives",
    "notes": "Maldives prepared to reopen borders on 15 July 2020 after the COVID closure period.",
    "sourceUrl": "https://www.tourism.gov.mv/news/statement_on_restarting_maldives_tourism"
  }
]

export const debtEvents: DebtEvent[] = [
  {
    "date": "2017-05-31",
    "eventType": "Borrowing",
    "eventLabel": "Inaugural international sovereign bond issued/listed",
    "amount": 200000000,
    "currency": "USD",
    "notes": "5-year maturity, 7% coupon. Finance Ministry says the issue was oversubscribed by double and rated B2 by Moody's and B+ by Fitch.",
    "sourceUrl": "https://www.finance.gov.mv/media/news/international-sovereign-bond-issuance-for-the-maldives"
  },
  {
    "date": "2021-03-29",
    "eventType": "Borrowing",
    "eventLabel": "Debut sovereign Sukuk priced",
    "amount": 200000000,
    "currency": "USD",
    "notes": "5-year Sukuk, 9.875% semi-annual coupon, proceeds used to settle tender offers for 2022 bonds.",
    "sourceUrl": "https://icd-ps.org/en/news/the-republic-of-maldives-successfully-prices-its-debut-sovereign-us200-million-5-year-sukuk-issuance"
  },
  {
    "date": "2021-09-02",
    "eventType": "Borrowing",
    "eventLabel": "Sukuk tap issuance takes 2021 Sukuk total to USD 500m",
    "amount": 200000000,
    "currency": "USD",
    "notes": "Additional USD 200m Sukuk after March and April 2021 issuance, taking total to USD 500m.",
    "sourceUrl": "https://mfr.mv/debt/maldives-sukuk-reaches-usd500-million"
  },
  {
    "date": "2022-06-07",
    "eventType": "Repayment",
    "eventLabel": "Outstanding debut Eurobond balance repaid",
    "amount": 58030000,
    "currency": "USD",
    "notes": "Government repaid outstanding USD 58.03m of debut USD 250m Eurobond after earlier refinancing of USD 191.97m.",
    "sourceUrl": "https://corporatemaldives.com/maldives-retires-its-debut-eurobond-issued-to-the-international-market-on-maturity/"
  },
  {
    "date": "2024-06-26",
    "eventType": "Debt pressure marker",
    "eventLabel": "Fitch flags 2026 external debt service risk",
    "amount": null,
    "currency": "USD",
    "notes": "Fitch downgrade cited large external refinancing hurdles in 2025 and 2026, including the USD 500m Sukuk repayment.",
    "sourceUrl": "https://mvrepublic.com/news/fitch-downgrades-maldives-rating-from-b-to-ccc-citing-worsening-external-financing/"
  },
  {
    "date": "2026-04-02",
    "eventType": "Repayment",
    "eventLabel": "USD 500m Sukuk settled",
    "amount": 524680000,
    "currency": "USD",
    "notes": "Government settled USD 500m principal and USD 24.68m coupon using the Sovereign Development Fund and other foreign currency balances.",
    "sourceUrl": "https://www.finance.gov.mv/media/press-releases/press-release-settlement-of-usd-500-million-sukuk"
  },
  {
    "date": "2026-06-03",
    "eventType": "Rating follow-through",
    "eventLabel": "Fitch upgrades Maldives after Sukuk repayment",
    "amount": null,
    "currency": "USD",
    "notes": "Fitch upgraded Maldives to CCC- from CC, citing eased default risks following successful Sukuk repayment.",
    "sourceUrl": "https://www.fitchratings.com/research/sovereigns/fitch-upgrades-maldives-to-ccc-03-06-2026"
  }
]

export const ratingScale: RatingScaleRow[] = [
  {
    "grade": "Prime",
    "moodys": "Aaa",
    "fitchSP": "AAA",
    "riskScore": 1,
    "creditQualityScore": 21
  },
  {
    "grade": "High grade",
    "moodys": "Aa1",
    "fitchSP": "AA+",
    "riskScore": 2,
    "creditQualityScore": 20
  },
  {
    "grade": "High grade",
    "moodys": "Aa2",
    "fitchSP": "AA",
    "riskScore": 3,
    "creditQualityScore": 19
  },
  {
    "grade": "High grade",
    "moodys": "Aa3",
    "fitchSP": "AA-",
    "riskScore": 4,
    "creditQualityScore": 18
  },
  {
    "grade": "Upper medium grade",
    "moodys": "A1",
    "fitchSP": "A+",
    "riskScore": 5,
    "creditQualityScore": 17
  },
  {
    "grade": "Upper medium grade",
    "moodys": "A2",
    "fitchSP": "A",
    "riskScore": 6,
    "creditQualityScore": 16
  },
  {
    "grade": "Upper medium grade",
    "moodys": "A3",
    "fitchSP": "A-",
    "riskScore": 7,
    "creditQualityScore": 15
  },
  {
    "grade": "Lower medium grade",
    "moodys": "Baa1",
    "fitchSP": "BBB+",
    "riskScore": 8,
    "creditQualityScore": 14
  },
  {
    "grade": "Lower medium grade",
    "moodys": "Baa2",
    "fitchSP": "BBB",
    "riskScore": 9,
    "creditQualityScore": 13
  },
  {
    "grade": "Lower medium grade",
    "moodys": "Baa3",
    "fitchSP": "BBB-",
    "riskScore": 10,
    "creditQualityScore": 12
  },
  {
    "grade": "Speculative",
    "moodys": "Ba1",
    "fitchSP": "BB+",
    "riskScore": 11,
    "creditQualityScore": 11
  },
  {
    "grade": "Speculative",
    "moodys": "Ba2",
    "fitchSP": "BB",
    "riskScore": 12,
    "creditQualityScore": 10
  },
  {
    "grade": "Speculative",
    "moodys": "Ba3",
    "fitchSP": "BB-",
    "riskScore": 13,
    "creditQualityScore": 9
  },
  {
    "grade": "Highly speculative",
    "moodys": "B1",
    "fitchSP": "B+",
    "riskScore": 14,
    "creditQualityScore": 8
  },
  {
    "grade": "Highly speculative",
    "moodys": "B2",
    "fitchSP": "B",
    "riskScore": 15,
    "creditQualityScore": 7
  },
  {
    "grade": "Highly speculative",
    "moodys": "B3",
    "fitchSP": "B-",
    "riskScore": 16,
    "creditQualityScore": 6
  },
  {
    "grade": "Substantial risks",
    "moodys": "Caa1",
    "fitchSP": "CCC+",
    "riskScore": 17,
    "creditQualityScore": 5
  },
  {
    "grade": "Substantial risks",
    "moodys": "Caa2",
    "fitchSP": "CCC",
    "riskScore": 18,
    "creditQualityScore": 4
  },
  {
    "grade": "Substantial risks",
    "moodys": "Caa3",
    "fitchSP": "CCC-",
    "riskScore": 19,
    "creditQualityScore": 3
  },
  {
    "grade": "Extremely speculative",
    "moodys": "Ca",
    "fitchSP": "CC",
    "riskScore": 20,
    "creditQualityScore": 2
  },
  {
    "grade": "Extremely speculative",
    "moodys": "C",
    "fitchSP": "C",
    "riskScore": 21,
    "creditQualityScore": 1
  },
  {
    "grade": "Default",
    "moodys": "C",
    "fitchSP": "D/RD/SD",
    "riskScore": 22,
    "creditQualityScore": 0
  }
]

export const presidentSummary: PresidentSummaryRow[] = [
  {
    "administration": "Yameen administration",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "startDate": "2016-09-01",
    "endDate": "2018-11-16",
    "agency": "Moody's",
    "startRating": "B2",
    "startOutlook": "Stable",
    "startRiskScore": 15,
    "endRating": "B2",
    "endOutlook": "Negative",
    "endRiskScore": 15,
    "riskScoreChange": 0,
    "interpretation": "No notch change; outlook changed from Stable to Negative"
  },
  {
    "administration": "Yameen administration",
    "president": "Abdulla Yameen Abdul Gayoom",
    "party": "PPM",
    "startDate": "2016-09-01",
    "endDate": "2018-11-16",
    "agency": "Fitch",
    "startRating": "B+",
    "startOutlook": "Stable",
    "startRiskScore": 14,
    "endRating": "B+",
    "endOutlook": "Stable",
    "endRiskScore": 14,
    "riskScoreChange": 0,
    "interpretation": "No notch change"
  },
  {
    "administration": "Solih administration",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "startDate": "2018-11-17",
    "endDate": "2023-11-16",
    "agency": "Moody's",
    "startRating": "B2",
    "startOutlook": "Negative",
    "startRiskScore": 15,
    "endRating": "Caa1",
    "endOutlook": "Stable",
    "endRiskScore": 17,
    "riskScoreChange": 2,
    "interpretation": "Weaker by 2 notch(es)"
  },
  {
    "administration": "Solih administration",
    "president": "Ibrahim Mohamed Solih",
    "party": "MDP",
    "startDate": "2018-11-17",
    "endDate": "2023-11-16",
    "agency": "Fitch",
    "startRating": "B+",
    "startOutlook": "Stable",
    "startRiskScore": 14,
    "endRating": "B-",
    "endOutlook": "Negative",
    "endRiskScore": 16,
    "riskScoreChange": 2,
    "interpretation": "Weaker by 2 notch(es)"
  },
  {
    "administration": "Muizzu administration",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "startDate": "2023-11-17",
    "endDate": "2026-06-04",
    "agency": "Moody's",
    "startRating": "Caa1",
    "startOutlook": "Stable",
    "startRiskScore": 17,
    "endRating": "Caa2",
    "endOutlook": "Stable",
    "endRiskScore": 18,
    "riskScoreChange": 1,
    "interpretation": "Weaker by 1 notch(es)"
  },
  {
    "administration": "Muizzu administration",
    "president": "Dr Mohamed Muizzu",
    "party": "PNC",
    "startDate": "2023-11-17",
    "endDate": "2026-06-04",
    "agency": "Fitch",
    "startRating": "B-",
    "startOutlook": "Negative",
    "startRiskScore": 16,
    "endRating": "CCC-",
    "endOutlook": null,
    "endRiskScore": 19,
    "riskScoreChange": 3,
    "interpretation": "Weaker by 3 notch(es)"
  }
]

export const sources: SourceReference[] = [
  {
    "source": "Ministry of Finance credit rating page",
    "url": "https://www.finance.gov.mv/debt-management/credit-rating",
    "usedFor": "Official statement that Maldives is rated by Moody's and Fitch, first Moody's rating in 2016 and Fitch rating in 2017, plus historical article links."
  },
  {
    "source": "Trading Economics Maldives rating",
    "url": "https://tradingeconomics.com/maldives/rating",
    "usedFor": "Moody's rating history and current Caa2 stable as of Nov 2025."
  },
  {
    "source": "FXEmpire Maldives rating history",
    "url": "https://www.fxempire.com/credit-ratings/maldives",
    "usedFor": "Consolidated rating action history including Fitch 2026 CCC- and Moody's 2024 actions."
  },
  {
    "source": "Fitch Maldives entity page",
    "url": "https://www.fitchratings.com/entity/maldives-88305904",
    "usedFor": "Fitch rating actions and current entity coverage."
  },
  {
    "source": "Lanka Business Online/Fitch 2026 upgrade",
    "url": "https://www.lankabusinessonline.com/2026/06/03/fitch-upgrades-maldives-to-ccc-from-cc/",
    "usedFor": "Details of Fitch upgrade to CCC- and drivers after Sukuk settlement."
  },
  {
    "source": "Finance 2017 bond",
    "url": "https://www.finance.gov.mv/media/news/international-sovereign-bond-issuance-for-the-maldives",
    "usedFor": "2017 inaugural international sovereign bond amount, coupon, maturity, and ratings."
  },
  {
    "source": "ICD 2021 Sukuk",
    "url": "https://icd-ps.org/en/news/the-republic-of-maldives-successfully-prices-its-debut-sovereign-us200-million-5-year-sukuk-issuance",
    "usedFor": "2021 USD 200m debut Sukuk pricing, coupon, maturity, use of proceeds."
  },
  {
    "source": "MFR 2021 Sukuk tap",
    "url": "https://mfr.mv/debt/maldives-sukuk-reaches-usd500-million",
    "usedFor": "2021 September Sukuk tap taking total Sukuk issued in 2021 to USD 500m."
  },
  {
    "source": "Corporate Maldives 2022 Eurobond repayment",
    "url": "https://corporatemaldives.com/maldives-retires-its-debut-eurobond-issued-to-the-international-market-on-maturity/",
    "usedFor": "2022 repayment of outstanding debut Eurobond balance and refinancing context."
  },
  {
    "source": "Finance 2026 Sukuk settlement",
    "url": "https://www.finance.gov.mv/media/press-releases/press-release-settlement-of-usd-500-million-sukuk",
    "usedFor": "2026 USD 500m Sukuk settlement marker."
  },
  {
    "source": "President's Office former presidents",
    "url": "https://presidency.gov.mv/PO/FormerPresidents/10",
    "usedFor": "President dates for Yameen and Solih."
  },
  {
    "source": "WHO COVID pandemic statement",
    "url": "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020",
    "usedFor": "COVID global shock start marker."
  },
  {
    "source": "Maldives Tourism restart",
    "url": "https://www.tourism.gov.mv/news/statement_on_restarting_maldives_tourism",
    "usedFor": "Maldives tourism border reopening context."
  },
  {
    "source": "Fitch 2026 upgrade",
    "url": "https://www.fitchratings.com/research/sovereigns/fitch-upgrades-maldives-to-ccc-03-06-2026",
    "usedFor": "Latest Fitch upgrade to CCC- after successful Sukuk repayment."
  }
]
