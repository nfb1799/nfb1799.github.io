import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home', code: '↑' },
  { href: '#expertise', label: 'Expertise', code: '02' },
  { href: '#experience', label: 'Experience', code: '03' },
  { href: '#projects', label: 'Projects', code: '04' },
  { href: '#contact', label: 'Contact', code: '→' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-[border-color,background] duration-200 ${
          scrolled ? 'border-b border-outline-variant/60' : 'border-b border-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max mx-auto">
          <a
            className="font-headline-md text-headline-md font-bold tracking-tight text-primary"
            href="#home"
            onClick={() => setOpen(false)}
          >
            Nik Barbero
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((l) => (
              <a
                key={l.href}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                href={l.href}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile drawer trigger */}
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors shadow-sm relative z-[62]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-2xl">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Drawer backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-[60] bg-on-surface/40 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      />

      {/* Slide-out drawer from right */}
      <nav
        id="mobile-drawer"
        aria-hidden={!open}
        className={`md:hidden fixed top-0 right-0 bottom-0 z-[61] w-[78%] max-w-xs bg-surface-container-lowest border-l border-outline-variant transition-transform duration-300 ease-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-outline-variant/40">
          <span className="font-label-sm text-label-sm font-mono uppercase tracking-widest text-outline">
            Menu
          </span>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex justify-between items-center px-4 py-4 rounded-lg font-body-md text-body-md text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors"
            >
              <span className="font-medium">{l.label}</span>
              <span className="text-label-sm font-mono text-outline tracking-widest">{l.code}</span>
            </a>
          ))}
        </div>
        <div className="px-6 py-5 border-t border-outline-variant/40 flex items-center gap-3">
          <span
            className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{ boxShadow: '0 0 0 4px rgba(22,163,74,0.18)' }}
            aria-hidden="true"
          />
          <span className="font-label-sm text-label-sm font-mono uppercase tracking-widest text-outline">
            Available for Hire
          </span>
        </div>
      </nav>
    </>
  )
}
