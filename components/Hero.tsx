'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Software Engineer',
  'Python Developer',
  'Algo Trading Engineer',
  'Data Pipeline Engineer',
  'Backend Systems Builder',
]

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), 75)
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 38)
    } else {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(t)
  }, [text, deleting, roleIdx])

  return (
    <span className="font-mono text-xl sm:text-2xl" style={{ color: 'var(--tx2)' }}>
      {text}
      <span className="animate-pulse ml-0.5" style={{ color: 'var(--ac)' }}>|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <motion.div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: 'var(--ac-6)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: 'rgba(6,182,212,0.05)' }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-mono text-sm tracking-[0.25em] uppercase mb-4"
          style={{ color: 'var(--ac)' }}
        >
          &gt; Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-3 leading-none"
        >
          <span style={{ color: 'var(--tx)' }}>Pavan Kumar</span>
          <br />
          <span className="glow-text" style={{ color: 'var(--ac)' }}>Atchutha</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <Typewriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--tx3)' }}
        >
          Software Engineer open to any domain, any stack. I build things that work in
          production — fast backends, clean APIs, systems that scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 font-bold rounded-lg text-sm transition-colors duration-200"
            style={{ background: 'var(--ac)', color: 'var(--bg)' }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 font-bold rounded-lg text-sm transition-all duration-200"
            style={{ border: '1px solid var(--ac-40)', color: 'var(--ac)' }}
            whileHover={{ scale: 1.04, y: -2, borderColor: 'var(--ac)', backgroundColor: 'var(--ac-10)' }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
