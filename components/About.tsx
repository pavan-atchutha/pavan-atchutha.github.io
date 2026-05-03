'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 5, suffix: 'M+', label: 'Market records processed per day' },
  { value: 70, suffix: '%', label: 'Reduction in strategy research cycle time' },
  { value: 5, suffix: 'yrs', label: 'Historical market data managed' },
  { value: 8.86, suffix: '/10', label: 'My B.Tech CGPA — AI & Data Science' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const isDecimal = target % 1 !== 0

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const raf = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(parseFloat((target * eased).toFixed(isDecimal ? 2 : 0)))
      if (p < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [inView, target, isDecimal])

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(2) : count}{suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 scroll-mt-20" style={{ background: 'var(--bg)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--ac)' }}>About Me</span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--tx)' }}>Who I Am</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-lg leading-relaxed mb-5" style={{ color: 'var(--tx2)' }}>
              I&apos;m a <span className="font-semibold" style={{ color: 'var(--tx)' }}>Software Engineer</span> with a B.Tech in{' '}
              <span className="font-medium" style={{ color: 'var(--ac)' }}>AI & Data Science</span> and{' '}
              <span className="font-semibold" style={{ color: 'var(--tx)' }}>1.5+ years</span> of professional experience
              designing and shipping <span style={{ color: '#06b6d4' }}>production-grade</span> backend systems —
              from high-volume <span style={{ color: '#06b6d4' }}>data pipelines</span> to
              real-time <span style={{ color: '#06b6d4' }}>APIs</span> and automated workflows.
            </p>
            <p className="text-lg leading-relaxed mb-5" style={{ color: 'var(--tx2)' }}>
              I own the full backend lifecycle — architecting scalable data pipelines processing{' '}
              <span className="font-semibold" style={{ color: 'var(--tx)' }}>5M+ records/day</span>, optimizing{' '}
              <span className="font-medium" style={{ color: 'var(--ac)' }}>ClickHouse</span> and{' '}
              <span className="font-medium" style={{ color: 'var(--ac)' }}>PostgreSQL</span> for{' '}
              <span style={{ color: '#06b6d4' }}>high-throughput</span> workloads, and delivering{' '}
              <span style={{ color: '#06b6d4' }}>low-latency</span> APIs under live production load.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--tx2)' }}>
              I write <span className="font-medium" style={{ color: 'var(--ac)' }}>clean, maintainable Python</span>,
              prioritize <span className="font-medium" style={{ color: 'var(--ac)' }}>system reliability and performance</span>,
              and pick up new domains fast. Looking for backend, data engineering, or full-stack roles.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: 'GitHub →', href: 'https://github.com/pavan-atchutha' },
                { label: 'LinkedIn →', href: 'https://linkedin.com/in/pavan-kumar-atchutha-a92895214' },
                { label: 'Email →', href: 'mailto:pavankumaratchutha@gmail.com' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--bd)', color: 'var(--tx2)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--ac-30)'; e.currentTarget.style.color = 'var(--ac)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--bd)'; e.currentTarget.style.color = 'var(--tx2)' }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ background: 'var(--ac-10)', border: '1px solid var(--ac-30)', color: 'var(--ac)' }}>
              📊 Work Impact & Academic Record
            </div>
            <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="rounded-2xl p-4 sm:p-6 text-center card-hover"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--bd)' }}
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono mb-2 tabular-nums leading-none" style={{ color: 'var(--ac)' }}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs leading-tight" style={{ color: 'var(--tx3)' }}>{s.label}</div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
