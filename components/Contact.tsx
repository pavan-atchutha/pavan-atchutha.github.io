'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const channels = [
  { icon: '📧', label: 'Email', value: 'pavankumaratchutha@gmail.com', href: 'mailto:pavankumaratchutha@gmail.com', color: '#00ff88' },
  { icon: '💻', label: 'GitHub', value: 'github.com/pavan-atchutha', href: 'https://github.com/pavan-atchutha', color: '#06b6d4' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/pavan-kumar-atchutha', href: 'https://linkedin.com/in/pavan-kumar-atchutha-a92895214', color: '#a78bfa' },
  { icon: '📱', label: 'Phone', value: '+91 9440238124', href: 'tel:+919440238124', color: '#fb923c' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-28" style={{ background: 'var(--bg-2)' }} ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-6"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--ac)' }}>06. Contact</span>
          <h2 className="text-4xl font-bold mt-2" style={{ color: 'var(--tx)' }}>Get In Touch</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-lg mb-12 leading-relaxed"
          style={{ color: 'var(--tx3)' }}
        >
          I&apos;m open to exciting opportunities in backend development, fintech, and data engineering.
          Feel free to reach out — I&apos;d love to connect!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.1 }}
              className="rounded-xl p-5 flex items-center gap-4 card-hover text-left group"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--bd)' }}
              whileHover={{ x: 4 }}
            >
              <span className="text-2xl">{c.icon}</span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider font-mono mb-0.5" style={{ color: 'var(--tx4)' }}>{c.label}</div>
                <div className="text-sm font-medium truncate transition-colors duration-200" style={{ color: 'var(--tx)' }}>
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
        >
          <a
            href="mailto:pavankumaratchutha@gmail.com"
            className="inline-flex items-center gap-2 px-10 py-4 font-bold rounded-xl text-base transition-colors duration-200"
            style={{ background: 'var(--ac)', color: 'var(--bg)' }}
          >
            Say Hello →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
