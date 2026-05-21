const links = [
  { label: 'GitHub', href: 'https://github.com/nfb1799', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nik-barbero/', external: true },
  { label: 'Email', href: 'mailto:nikbarbero@yahoo.com', external: false },
  { label: 'Resume', href: '/ResumeNikBarbero.pdf', external: true },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/40">
      <div className="max-w-container-max mx-auto py-10 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-5 text-center">
        <div className="font-headline-md text-headline-md text-primary font-bold">Nik Barbero</div>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {links.map((l, i) => (
            <span key={l.label} className="flex items-center gap-2">
              <a
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-2 py-1 rounded transition-colors"
              >
                {l.label}
              </a>
              {i < links.length - 1 && (
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-outline-variant" />
              )}
            </span>
          ))}
        </nav>

        <div className="font-label-sm text-label-sm text-outline uppercase tracking-widest font-mono">
          © {year} Nik Barbero
        </div>
      </div>
    </footer>
  )
}
