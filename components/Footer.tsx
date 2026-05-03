export default function Footer() {
  return (
    <footer className="py-8" style={{ background: 'var(--bg)', borderTop: '1px solid var(--bd)' }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-mono text-xs" style={{ color: 'var(--tx4)' }}>
          Designed &amp; built by{' '}
          <span style={{ color: 'var(--ac)' }}>Pavan Kumar Atchutha</span>
          {' '}— 2025
        </p>
      </div>
    </footer>
  )
}
