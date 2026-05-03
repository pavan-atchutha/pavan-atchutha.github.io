'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Hl } from './Highlight'

const items = [
  {
    role: 'Python Developer',
    org: 'A Plus',
    orgUrl: 'https://www.linkedin.com/company/aplustopper/about/',
    location: 'Hyderabad, India',
    period: 'Dec 2024 – Present',
    badge: 'Full-time',
    active: true,
    points: [
      'Architected and shipped end-to-end algorithmic trading platforms in Python & Django — covering rule-based, price-action, and indicator-driven strategies across equities, futures, and options, supporting both live execution and backtesting.',
      'Engineered high-throughput ELT data pipelines processing ~5M records/day and managing ~5 years of time-series market data, directly enabling quantitative research and strategy evaluation at scale.',
      'Drove a ~70% reduction in strategy research cycle time by optimizing backtesting modules and automating reporting workflows, accelerating decision-making for trading teams.',
      'Designed and deployed a Telegram-based CLI automation gateway (OpenClaw framework) for automated task orchestration, eliminating manual intervention in recurring operational workflows.',
      'Designed and optimized ClickHouse and PostgreSQL schemas for high-throughput analytical queries and low-latency transactional workloads, improving system reliability and query speed.',
      'Delivered production-ready RESTful APIs and WebSocket services for real-time market data streaming and order execution, supporting multi-application integration with low latency.',
    ],
  },
  {
    role: 'Python Developer Intern',
    org: 'A Plus',
    orgUrl: 'https://www.linkedin.com/company/aplustopper/about/',
    location: 'Hyderabad, India',
    period: 'Jul 2024 – Dec 2024',
    badge: 'Internship',
    active: false,
    points: [
      'Built and maintained Django-based web applications delivering scalable, user-facing trading tools in a production environment.',
      'Designed interactive options strategy charts (Bullish, Bearish, Butterfly) using Plotly and JavaScript, improving trader visibility into complex multi-leg positions.',
      'Implemented real-time data visualization modules for live stock tracking and strategy performance monitoring, enhancing analytical capabilities for end users.',
      'Contributed independently to full-stack features — bridging backend data logic with responsive frontend interfaces — within a collaborative product engineering team.',
    ],
  },
  {
    role: 'B.Tech — AI & Data Science',
    org: 'Vishnu Institute of Technology',
    location: 'Bhimavaram, India',
    period: '2020 – 2024',
    badge: 'CGPA 8.86 / 10',
    active: false,
    points: [
      'Graduated with First Class with Distinction (CGPA 8.86/10) in Artificial Intelligence & Data Science.',
      'Built strong foundations in machine learning, statistical modeling, and data engineering through rigorous coursework and applied projects.',
      'Applied Python, NumPy, Pandas, Scikit-learn, and Matplotlib to build and evaluate end-to-end ML pipelines and data analysis solutions.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 scroll-mt-20" style={{ background: 'var(--bg)' }} ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--ac)' }}>Experience</span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--tx)' }}>Work History</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 w-px" style={{ height: 'calc(100% - 3rem)', background: 'linear-gradient(to bottom, var(--ac), var(--ac-10), transparent)' }} />

          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={`${item.org}-${item.period}`}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative pl-16"
              >
                <div
                  className="absolute left-[18px] top-1.5 w-3.5 h-3.5 rounded-full border-2"
                  style={item.active
                    ? { background: 'var(--ac)', borderColor: 'var(--ac)', boxShadow: '0 0 12px var(--ac-25)' }
                    : { background: 'var(--bg-card)', borderColor: 'var(--ac-30)' }
                  }
                />

                <div className="rounded-2xl p-6 card-hover" style={{ background: 'var(--bg-card)', border: '1px solid var(--bd)' }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-lg font-bold leading-snug" style={{ color: 'var(--tx)' }}>{item.role}</h3>
                      {'orgUrl' in item ? (
                        <a href={(item as any).orgUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-sm mt-0.5 hover:underline" style={{ color: 'var(--ac)' }}>{item.org}</a>
                      ) : (
                        <p className="font-medium text-sm mt-0.5" style={{ color: 'var(--ac)' }}>{item.org}</p>
                      )}
                      <p className="text-xs mt-0.5" style={{ color: 'var(--tx3)' }}>{item.location}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="font-mono text-xs" style={{ color: 'var(--tx2)' }}>{item.period}</span>
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full border"
                        style={item.active
                          ? { background: 'var(--ac-10)', color: 'var(--ac)', borderColor: 'var(--ac-30)' }
                          : { background: 'var(--bg)', color: 'var(--tx3)', borderColor: 'var(--bd2)' }
                        }
                      >
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--tx2)' }}>
                        <span className="shrink-0 mt-0.5" style={{ color: 'var(--ac)' }}>▸</span>
                        <span><Hl>{p}</Hl></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
