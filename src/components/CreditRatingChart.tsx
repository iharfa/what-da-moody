import ReactECharts from 'echarts-for-react'
import { useMemo } from 'react'
import {
  chartData,
  debtEvents,
  globalEvents,
  presidents,
  ratingActions,
} from '../data/creditData'
import type { TimeRangeKey } from '../types'
import {
  agencyColors,
  formatDate,
  formatMonth,
  partyBandColors,
  partyColors,
  ratingLabelForScore,
  shortEventLabel,
} from '../utils'

type CreditRatingChartProps = {
  showMoodys: boolean
  showFitch: boolean
  showPresidents: boolean
  showGlobalEvents: boolean
  showDebtEvents: boolean
  timeRange: TimeRangeKey
}

const rangeMap: Record<TimeRangeKey, { min: string; max: string }> = {
  context: { min: '2007-01-01', max: '2026-12-31' },
  ratings: { min: '2016-09-01', max: '2026-12-31' },
  covid: { min: '2020-01-01', max: '2026-12-31' },
  muizzu: { min: '2023-11-01', max: '2026-12-31' },
}

const globalBandColor: Record<string, string> = {
  'Global Financial Crisis': 'rgba(148, 163, 184, 0.11)',
  'COVID-19 global shock': 'rgba(248, 113, 113, 0.13)',
}

function buildTooltip(params: any[]) {
  const dateValue = params?.[0]?.axisValue || params?.[0]?.value?.[0]
  const title = dateValue ? formatDate(dateValue) : 'Selected point'
  const rows = params
    .filter((item) => Array.isArray(item.value) && item.value[1] !== null && item.seriesName !== 'Layer markers')
    .map((item) => {
      const rating = item.value[2] ?? ''
      const president = item.value[3] ?? ''
      const marker = item.value[5] ? `<div class="tooltip-note">${item.value[5]}</div>` : ''
      return `
        <div class="tooltip-row">
          <span style="background:${item.color}"></span>
          <b>${item.seriesName}</b>
          <strong>${rating}</strong>
          <em>score ${item.value[1]}</em>
        </div>
        <div class="tooltip-meta">${president}</div>
        ${marker}
      `
    })
    .join('')

  return `<div class="chart-tooltip"><h4>${title}</h4>${rows}</div>`
}

export function CreditRatingChart({
  showMoodys,
  showFitch,
  showPresidents,
  showGlobalEvents,
  showDebtEvents,
  timeRange,
}: CreditRatingChartProps) {
  const option = useMemo(() => {
    const range = rangeMap[timeRange]

    const moodysLine = {
      name: "Moody's",
      type: 'line',
      step: 'end',
      smooth: false,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      connectNulls: false,
      data: chartData.map((point) => [
        point.month,
        point.moodysScore,
        point.moodysRating,
        point.president,
        point.party,
        point.debtEventMarker,
      ]),
      lineStyle: {
        width: 3,
        color: agencyColors["Moody's"],
      },
      itemStyle: {
        color: agencyColors["Moody's"],
      },
      emphasis: {
        focus: 'series',
      },
    }

    const fitchLine = {
      name: 'Fitch',
      type: 'line',
      step: 'end',
      smooth: false,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      connectNulls: false,
      data: chartData.map((point) => [
        point.month,
        point.fitchScore,
        point.fitchRating,
        point.president,
        point.party,
        point.debtEventMarker,
      ]),
      lineStyle: {
        width: 3,
        color: agencyColors.Fitch,
      },
      itemStyle: {
        color: agencyColors.Fitch,
      },
      emphasis: {
        focus: 'series',
      },
    }

    const actionSeries = ratingActions
      .filter((action) => (action.agency === "Moody's" ? showMoodys : showFitch))
      .map((action) => ({
        name: `${action.agency} actions`,
        type: 'scatter',
        symbolSize: 10,
        data: [[
          action.date,
          action.creditQualityScore,
          action.rating,
          action.president,
          action.party,
          action.action,
        ]],
        itemStyle: {
          color: agencyColors[action.agency],
          borderColor: '#0f172a',
          borderWidth: 2,
        },
        tooltip: {
          formatter: () => `
            <div class="chart-tooltip">
              <h4>${formatDate(action.date)}</h4>
              <div class="tooltip-row">
                <span style="background:${agencyColors[action.agency]}"></span>
                <b>${action.agency}</b>
                <strong>${action.rating}${action.outlook ? ` · ${action.outlook}` : ''}</strong>
              </div>
              <div class="tooltip-meta">${action.action}</div>
              <div class="tooltip-note">${action.notes ?? 'No note recorded.'}</div>
            </div>
          `,
        },
      }))

    const presidentBands = showPresidents
      ? presidents.map((item) => [
          {
            xAxis: item.startDate,
            itemStyle: {
              color: partyBandColors[item.party] ?? 'rgba(148, 163, 184, 0.1)',
            },
            label: {
              show: true,
              formatter: `${item.party} · ${item.president.replace('Abdulla ', '').replace('Ibrahim Mohamed ', '').replace('Dr Mohamed ', '')}`,
              color: partyColors[item.party] ?? '#cbd5e1',
              fontWeight: 700,
              position: 'insideTop',
            },
          },
          { xAxis: item.endDate },
        ])
      : []

    const globalBands = showGlobalEvents
      ? globalEvents
          .filter((item) => item.startDate !== item.endDate)
          .map((item) => [
            {
              xAxis: item.startDate,
              itemStyle: {
                color: globalBandColor[item.event] ?? 'rgba(148, 163, 184, 0.1)',
              },
              label: {
                show: true,
                formatter: item.event,
                color: item.event.includes('COVID') ? '#fecaca' : '#cbd5e1',
                fontWeight: 700,
                position: 'insideBottom',
              },
            },
            { xAxis: item.endDate },
          ])
      : []

    const oneDayGlobalMarkers = showGlobalEvents
      ? globalEvents
          .filter((item) => item.startDate === item.endDate)
          .map((item) => ({
            name: item.event,
            xAxis: item.startDate,
            lineStyle: {
              color: '#94a3b8',
              type: 'dashed',
              width: 1,
            },
            label: {
              formatter: item.event,
              color: '#cbd5e1',
              rotate: 90,
            },
          }))
      : []

    const debtMarkers = showDebtEvents
      ? debtEvents.map((item) => ({
          name: shortEventLabel(item.eventLabel),
          xAxis: item.date,
          lineStyle: {
            color:
              item.eventType === 'Borrowing'
                ? '#f59e0b'
                : item.eventType === 'Repayment'
                  ? '#22c55e'
                  : '#38bdf8',
            type: item.eventType === 'Repayment' ? 'solid' : 'dashed',
            width: item.eventType === 'Repayment' ? 2 : 1.5,
          },
          label: {
            formatter: shortEventLabel(item.eventLabel),
            color: '#e5e7eb',
            rotate: 90,
            distance: [10, 0],
          },
        }))
      : []

    const layerSeries = {
      name: 'Layer markers',
      type: 'line',
      data: [],
      silent: true,
      markArea: {
        silent: true,
        data: [...presidentBands, ...globalBands],
      },
      markLine: {
        silent: false,
        symbol: ['none', 'none'],
        data: [...oneDayGlobalMarkers, ...debtMarkers],
        tooltip: {
          formatter: (params: any) => {
            const debt = debtEvents.find((item) => shortEventLabel(item.eventLabel) === params.name)
            const global = globalEvents.find((item) => item.event === params.name)
            const target = debt ?? global
            if (!target) return params.name
            return `
              <div class="chart-tooltip">
                <h4>${params.name}</h4>
                <div class="tooltip-meta">${'date' in target ? formatDate(target.date) : formatDate(target.startDate)}</div>
                <div class="tooltip-note">${target.notes}</div>
              </div>
            `
          },
        },
      },
    }

    const series: any[] = [layerSeries]
    if (showMoodys) series.push(moodysLine)
    if (showFitch) series.push(fitchLine)
    series.push(...actionSeries)

    return {
      backgroundColor: 'transparent',
      animationDuration: 500,
      grid: {
        top: 52,
        right: 28,
        bottom: 72,
        left: 86,
      },
      legend: {
        top: 0,
        right: 0,
        textStyle: {
          color: '#cbd5e1',
        },
        data: [
          ...(showMoodys ? ["Moody's"] : []),
          ...(showFitch ? ['Fitch'] : []),
        ],
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#111827',
          },
        },
        borderWidth: 0,
        backgroundColor: 'rgba(2, 6, 23, 0.94)',
        formatter: buildTooltip,
      },
      dataZoom: [
        {
          type: 'inside',
          filterMode: 'none',
        },
        {
          type: 'slider',
          height: 28,
          bottom: 22,
          borderColor: 'rgba(148, 163, 184, 0.22)',
          fillerColor: 'rgba(125, 211, 252, 0.16)',
          handleStyle: {
            color: '#7dd3fc',
          },
          textStyle: {
            color: '#94a3b8',
          },
        },
      ],
      xAxis: {
        type: 'time',
        min: range.min,
        max: range.max,
        axisLine: {
          lineStyle: {
            color: '#334155',
          },
        },
        axisLabel: {
          color: '#94a3b8',
          formatter: (value: number) => formatMonth(new Date(value).toISOString()),
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(148, 163, 184, 0.08)',
          },
        },
      },
      yAxis: {
        type: 'value',
        min: 1,
        max: 9,
        interval: 1,
        name: 'Credit quality score',
        nameGap: 48,
        nameLocation: 'middle',
        nameTextStyle: {
          color: '#cbd5e1',
          fontWeight: 700,
        },
        axisLabel: {
          color: '#94a3b8',
          formatter: (value: number) => ratingLabelForScore(value),
        },
        axisLine: {
          lineStyle: {
            color: '#334155',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(148, 163, 184, 0.1)',
          },
        },
      },
      series,
    }
  }, [showMoodys, showFitch, showPresidents, showGlobalEvents, showDebtEvents, timeRange])

  return (
    <section className="panel chart-panel" aria-label="Credit rating timeline chart">
      <div className="chart-heading">
        <div>
          <p className="eyebrow">Interactive timeline</p>
          <h2>Rating changes by agency, president, and debt event</h2>
        </div>
        <p>Higher score means stronger credit quality. Lines fall as ratings weaken.</p>
      </div>
      <ReactECharts option={option} notMerge lazyUpdate style={{ height: 580, width: '100%' }} />
    </section>
  )
}
