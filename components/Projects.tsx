'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Hl } from './Highlight'

const projects = [
  { icon: '📈', title: 'Algorithmic Trading Platform', desc: 'Production-grade trading system covering rule-based, price-action, and indicator-driven strategies across equities, futures, and options — with a live execution engine and a full backtesting framework for rapid strategy validation.', tech: ['Python', 'Django', 'WebSocket', 'PostgreSQL', 'REST API'], tag: 'Live Trading', color: '#00ff88' },
  { icon: '⚡', title: 'ELT Market Data Pipeline', desc: 'Scalable ELT pipeline ingesting ~5M market data records/day and retaining 5 years of time-series history — providing the data foundation for quantitative research, backtesting, and live strategy evaluation.', tech: ['Python', 'ClickHouse', 'PostgreSQL', 'ETL', 'Time-Series'], tag: '5M records/day', color: '#06b6d4' },
  { icon: '🔴', title: 'Real-time WebSocket API', desc: 'High-performance WebSocket service delivering real-time market data to order execution systems and downstream applications — engineered for minimal latency and high availability under live trading conditions.', tech: ['Python', 'WebSocket', 'Django', 'REST API', 'Real-time'], tag: 'Low Latency', color: '#f87171' },
  { icon: '🤖', title: 'Telegram CLI Automation Gateway', desc: 'CLI-driven automation gateway via Telegram built on the OpenClaw framework — orchestrates recurring trading tasks and operational workflows, enabling team-wide command execution without direct server access.', tech: ['Python', 'OpenClaw', 'Telegram API', 'CLI', 'Automation'], tag: 'Workflow Automation', color: '#a78bfa' },
  { icon: '📊', title: 'Interactive Trading Dashboard', desc: 'Full-stack trading dashboard with interactive Plotly charts visualizing Bullish, Bearish, and Butterfly options strategies — giving traders clear, real-time insight into position performance and market exposure.', tech: ['Plotly', 'JavaScript', 'Django', 'CSS'], tag: 'Data Viz', color: '#fb923c' },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 scroll-mt-20" style={{ background: 'var(--bg-2)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--ac)' }}>Projects</span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--tx)' }}>Professional Work</h2>
          <p className="text-sm mt-3" style={{ color: 'var(--tx3)' }}>
            Production systems built at{' '}
            <a href="https://www.linkedin.com/company/aplustopper/about/" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: 'var(--ac)' }}>A Plus</a>
            {' '}— proprietary &amp; confidential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 card-hover flex flex-col"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--bd)' }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{p.icon}</span>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-xs px-2.5 py-1 rounded-full border font-medium" style={{ color: p.color, borderColor: `${p.color}40`, backgroundColor: `${p.color}12` }}>
                    {p.tag}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full border" style={{ background: 'var(--bg)', borderColor: 'var(--bd2)', color: 'var(--tx3)' }}>
                    🏢 Company Project
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: 'var(--tx)' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--tx3)' }}>
                <Hl>{p.desc}</Hl>
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded font-mono" style={{ background: 'var(--bg)', color: 'var(--tx3)', border: '1px solid var(--bd2)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
