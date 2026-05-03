import React from 'react'

type Rule = { pattern: RegExp; style: React.CSSProperties }

const rules: Rule[] = [
  {
    pattern: /~5M records\/day|~70%|8\.86\/10|Distinction|1\+ year/g,
    style: { color: 'var(--tx)', fontWeight: 600 },
  },
  {
    pattern: /\bPython\b|\bDjango\b|\bPostgreSQL\b|\bClickHouse\b|\bWebSocket\b|RESTful APIs|REST API|\bJavaScript\b|\bPlotly\b|\bNumPy\b|\bPandas\b|Scikit-learn|\bMatplotlib\b|\bCLI\b|\bELT\b|\bML\b|\bGit\b|\bSQL\b|\bOpenClaw\b/g,
    style: { color: 'var(--ac)', fontWeight: 500 },
  },
  {
    pattern: /algorithmic trading|backtesting|quantitative research|time-series|real-time|low-latency|high-throughput|production-ready|production-grade|fintech|order execution|market data/g,
    style: { color: '#06b6d4' },
  },
]

type Part = { text: string; style?: React.CSSProperties }

function parse(text: string): Part[] {
  type Match = { start: number; end: number; text: string; style: React.CSSProperties }
  const matches: Match[] = []

  for (const { pattern, style } of rules) {
    pattern.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = pattern.exec(text)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, text: m[0], style })
    }
  }

  matches.sort((a, b) => a.start - b.start)

  const parts: Part[] = []
  let pos = 0
  for (const match of matches) {
    if (match.start < pos) continue
    if (match.start > pos) parts.push({ text: text.slice(pos, match.start) })
    parts.push({ text: match.text, style: match.style })
    pos = match.end
  }
  if (pos < text.length) parts.push({ text: text.slice(pos) })
  return parts
}

export function Hl({ children }: { children: string }) {
  const parts = parse(children)
  return (
    <>
      {parts.map((p, i) =>
        p.style ? (
          <span key={i} style={p.style}>{p.text}</span>
        ) : (
          p.text
        )
      )}
    </>
  )
}
