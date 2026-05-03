'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' }
    )
    links.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={scrolled ? { background: 'var(--nav-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--bd)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              className="font-mono text-lg font-bold"
              style={{ color: 'var(--ac)' }}
              whileHover={{ scale: 1.05 }}
            >
              {'<PK />'}
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <motion.a
                  key={l.name}
                  href={l.href}
                  className="text-sm transition-colors duration-200 relative"
                  style={{ color: active === l.href ? 'var(--ac)' : 'var(--tx2)' }}
                  whileHover={{ y: -2 }}
                >
                  {l.name}
                  {active === l.href && (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                      style={{ background: 'var(--ac)' }}
                    />
                  )}
                </motion.a>
              ))}
              <ThemeToggle />
              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="px-4 py-1.5 text-sm rounded font-medium transition-all duration-200"
                style={{ border: '1px solid var(--ac)', color: 'var(--ac)' }}
                whileHover={{ scale: 1.05, backgroundColor: 'var(--ac)', color: 'var(--bg)' }}
              >
                Resume
              </motion.a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                className="flex flex-col justify-center gap-[5px] w-8 h-8"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <span className="block w-6 h-0.5" style={{ background: 'var(--tx2)' }} />
                <span className="block w-4 h-0.5" style={{ background: 'var(--tx2)' }} />
                <span className="block w-6 h-0.5" style={{ background: 'var(--tx2)' }} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[60] md:hidden"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed right-0 top-0 h-full w-72 z-[70] md:hidden flex flex-col"
              style={{ background: 'var(--bg-card)', borderLeft: '1px solid var(--bd)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            >
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: '1px solid var(--bd)' }}>
                <span className="font-mono font-bold text-lg" style={{ color: 'var(--ac)' }}>{'<PK />'}</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center transition-colors"
                  style={{ color: 'var(--tx3)' }}
                  aria-label="Close menu"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.name}
                    href={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                    style={active === l.href
                      ? { background: 'var(--ac-10)', color: 'var(--ac)', border: '1px solid var(--ac-30)' }
                      : { color: 'var(--tx2)', border: '1px solid transparent' }
                    }
                  >
                    {active === l.href && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--ac)' }} />}
                    {l.name}
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 py-6" style={{ borderTop: '1px solid var(--bd)' }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="block w-full text-center py-3 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ border: '1px solid var(--ac)', color: 'var(--ac)' }}
                  onClick={() => setOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
