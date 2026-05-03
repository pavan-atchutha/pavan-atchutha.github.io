'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const groups = [
  { label: 'Backend', icon: '⚙️', color: '#00ff88', skills: ['Python', 'Django', 'REST APIs', 'SQL'] },
  { label: 'Databases', icon: '🗄️', color: '#06b6d4', skills: ['PostgreSQL', 'ClickHouse'] },
  { label: 'Frontend', icon: '🎨', color: '#a78bfa', skills: ['JavaScript', 'HTML', 'CSS'] },
  { label: 'Data & ML', icon: '📊', color: '#fb923c', skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'] },
  { label: 'Tools', icon: '🛠️', color: '#f472b6', skills: ['Git', 'GitHub', 'Telegram Bot API', 'Linux'] },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28" style={{ background: 'var(--bg-2)' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--ac)' }}>02. Skills</span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--tx)' }}>Technical Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 card-hover"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--bd)' }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl">{g.icon}</span>
                <h3 className="font-semibold text-base" style={{ color: g.color }}>{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full cursor-default select-none"
                    style={{ border: '1px solid var(--bd2)', color: 'var(--tx2)' }}
                    whileHover={{ borderColor: g.color, color: g.color, backgroundColor: `${g.color}15`, transition: { duration: 0.15 } }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
