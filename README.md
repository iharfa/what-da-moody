# Maldives Sovereign Credit Rating Dashboard

Dark theme React dashboard for Maldives sovereign credit rating history.

## Stack

- React
- Vite
- TypeScript
- Apache ECharts via `echarts-for-react`
- Static local data files
- Vercel-ready config

## What is included

- Moody’s and Fitch rating timeline
- President period overlays
- Global shock overlays for the Global Financial Crisis and COVID-19
- Vertical markers for major borrowings, repayments, and rating follow-through
- President comparison table
- Debt event cards
- References footer
- Source workbook download in `/public/data`

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Vercel deployment

Import this folder into a GitHub repository, then connect the repository to Vercel.

Use these settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Data files

The chart uses TypeScript data in:

```text
src/data/creditData.ts
```

The source workbook is copied to:

```text
public/data/maldives_credit_rating_timeline_dataset.xlsx
```

CSV exports are copied to:

```text
public/data/rating_actions.csv
public/data/debt_events.csv
public/data/president_summary.csv
```

## Update workflow

1. Update the source workbook or the arrays in `src/data/creditData.ts`.
2. Check dates use `YYYY-MM-DD`.
3. Run `npm run build`.
4. Deploy to Vercel.


## Footer branding

The dashboard footer includes the Coalition for Open Governance logo and a short civic data blurb. The logo is stored at `public/assets/cog-logo.svg`.
