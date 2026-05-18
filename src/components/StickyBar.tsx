import { useEffect, useState } from 'react'
import self from '../assets/self.png'

export default function StickyBar() {
  const [hidden, setHidden] = useState(false)

  // Hide when contact section is on screen so we don't double-CTA
  useEffect(() => {
    const contact = document.getElementById('contact')
    if (!contact) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setHidden(e.isIntersecting)),
      { threshold: 0.3 }
    )
    io.observe(contact)
    return () => io.disconnect()
  }, [])

  return (
    <aside
      aria-label="Quick contact"
      className={`md:hidden fixed left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] max-w-[460px] bg-surface-container-lowest border border-outline-variant rounded-full pl-3 pr-1.5 py-1.5 flex items-center justify-between gap-2 shadow-[0_12px_32px_-10px_rgba(15,23,42,0.22),0_2px_4px_rgba(15,23,42,0.05)] transition-[transform,opacity] duration-300 ease-out ${
        hidden
          ? 'opacity-0 pointer-events-none translate-y-[120%]'
          : 'opacity-100 translate-y-0'
      }`}
      style={{ bottom: 'calc(12px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={self}
          alt=""
          className="w-9 h-9 rounded-full object-cover border border-outline-variant flex-shrink-0"
        />
        <div className="min-w-0 leading-tight">
          <div className="text-sm font-semibold text-on-surface truncate">Nik Barbero</div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-outline mt-0.5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
              style={{ boxShadow: '0 0 0 3px rgba(22,163,74,0.18)' }}
              aria-hidden="true"
            />
            Available · Full Stack
          </div>
        </div>
      </div>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-on-primary text-sm font-medium rounded-full hover:opacity-90 transition-opacity shrink-0"
      >
        Hire me
        <span className="material-symbols-outlined text-base">arrow_forward</span>
      </a>
    </aside>
  )
}
