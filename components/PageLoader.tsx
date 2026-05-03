'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true)
  const [showName, setShowName] = useState(false)
  const [showSub, setShowSub] = useState(false)
  const [showLine, setShowLine] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowName(true), 250)
    const t2 = setTimeout(() => setShowSub(true), 500)
    const t3 = setTimeout(() => setShowLine(true), 700)
    const t4 = setTimeout(() => {
      onDone()
      setVisible(false)
    }, 1300)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle grid */}
          <div className="absolute inset-0 grid-bg opacity-40" />

          {/* Glow blob */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'rgba(0,255,136,0.07)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
              className="relative"
            >
              <div className="w-20 h-20 border-2 border-[#00ff88] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.25)]">
                <span className="font-mono text-2xl font-bold text-[#00ff88]">PK</span>
              </div>
              {/* Ping ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-[#00ff88]"
                animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              className="text-center overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={showName ? { height: 'auto', opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <motion.h1
                className="font-mono text-2xl sm:text-4xl font-bold tracking-[0.18em] text-white uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={showName ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                Pavan Kumar Atchutha
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="font-mono text-[#00ff88] text-xs tracking-[0.45em] uppercase"
              initial={{ opacity: 0, y: 6 }}
              animate={showSub ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              Software Engineer
            </motion.p>

            {/* Green underline */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent shadow-[0_0_10px_rgba(0,255,136,0.6)]"
              initial={{ width: 0, opacity: 0 }}
              animate={showLine ? { width: 260, opacity: 1 } : {}}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
