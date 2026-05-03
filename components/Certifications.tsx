'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const certs = [
  { icon: '🐍', title: 'The Joy of Computing using Python', issuer: 'NPTEL', color: '#00ff88', desc: 'Strong foundation in Python programming — data structures, control flow, functions, and computational thinking applied to solve real problems.', link: null, meta: null },
  { icon: '🗄️', title: 'SQL Certification', issuer: 'HackerRank', color: '#06b6d4', desc: 'Demonstrated proficiency in writing SQL queries for data management, joins, aggregations, subqueries, and complex data analysis.', link: 'https://www.hackerrank.com/certificates/fe15031baa5d', meta: null },
  { icon: '📊', title: 'Data Science Bootcamp', issuer: 'OdinSchool', color: '#a78bfa', desc: 'Comprehensive training in data analysis, machine learning, and statistical modeling — with hands-on experience using NumPy, Pandas, Scikit-learn, and Matplotlib.', link: null, meta: 'ID: ODIN1002920' },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="py-28 scroll-mt-20" style={{ background: 'var(--bg)' }} ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--ac)' }}>Certifications</span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--tx)' }}>Credentials</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 card-hover flex flex-col"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--bd)' }}
            >
              <span className="text-4xl mb-4 block">{c.icon}</span>
              <span className="font-mono text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: c.color }}>{c.issuer}</span>
              <h3 className="font-semibold text-sm leading-snug mb-3" style={{ color: 'var(--tx)' }}>{c.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--tx3)' }}>{c.desc}</p>
              {c.meta && <p className="mt-3 font-mono text-xs" style={{ color: 'var(--tx4)' }}>{c.meta}</p>}
              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: c.color }}>
                  View Certificate →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
