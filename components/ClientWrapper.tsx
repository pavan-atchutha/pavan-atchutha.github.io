'use client'
import { useState } from 'react'
import PageLoader from './PageLoader'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false)

  return (
    <>
      <PageLoader onDone={() => setDone(true)} />
      {/* Content is rendered but invisible until loader starts its exit */}
      <div style={{ visibility: done ? 'visible' : 'hidden' }}>{children}</div>
    </>
  )
}
