import self from '../assets/self.jpg'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/nfb1799',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nik-barbero/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13Zm-1.78 13.02h3.56V9H3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:nikbarbero@yahoo.com',
    icon: <span className="material-symbols-outlined text-xl">mail</span>,
  },
]

const Photo = ({ className = '' }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="aspect-square bg-surface-container rounded-xl overflow-hidden border border-outline-variant shadow-sm">
      <img
        alt="Nik Barbero headshot"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center top' }}
        src={self}
      />
      {/* Badge sits inside the photo bottom-left on mobile */}
      <div className="md:hidden absolute bottom-3 left-3 px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm">
        <div className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
          Based in
        </div>
        <div className="font-label-md text-label-md text-on-surface font-bold">Rochester, NY</div>
      </div>
    </div>
    {/* Desktop badge — floats outside, bottom-left of photo */}
    <div className="absolute -bottom-6 -left-6 p-6 bg-surface border border-outline-variant rounded shadow-sm hidden md:block">
      <div className="flex flex-col">
        <span className="font-label-sm text-label-sm text-outline uppercase">Based in</span>
        <span className="font-label-md text-label-md text-on-surface font-bold">Rochester, NY</span>
      </div>
    </div>
  </div>
)

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-surface scroll-mt-16"
    >
      <div
        className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-4 pb-10 md:pt-12 md:pb-24 grid grid-cols-1 md:grid-cols-12 md:gap-gutter md:items-center"
      >
      {/* TOP TEXT (pill + headline) */}
      <div className="space-y-5 md:col-span-7 md:row-start-1 md:self-end md:mb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full border border-outline-variant/50">
          <span
            className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{ boxShadow: '0 0 0 4px rgba(22,163,74,0.18)' }}
            aria-hidden="true"
          />
          <span className="font-label-sm text-label-sm uppercase tracking-wider">
            Available for Hire
          </span>
        </div>
        <h1
          className="font-display text-[36px] md:text-display leading-[1.04] md:leading-[1.1] tracking-[-0.025em] text-on-surface"
          style={{ textWrap: 'balance' as 'balance' }}
        >
          Full Stack Software Engineer building{' '}
          <span className="text-primary">robust, scalable systems.</span>
        </h1>
      </div>

      {/* PHOTO — appears between headline and lede on mobile; right column on desktop */}
      <div className="mt-6 mb-6 md:mt-0 md:mb-0 md:col-span-5 md:row-start-1 md:row-span-2">
        <Photo />
      </div>

      {/* BOTTOM TEXT (lede + actions + socials) */}
      <div className="space-y-6 md:col-span-7 md:row-start-2 md:self-start">
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Full-stack Software Engineer with 3+ years of professional experience building enterprise
          web applications in Vue.js and C#/.NET, with additional hands-on work in React. Strong
          background in front-end state management, RESTful API design, and SQL-backed systems.
          Graduated Summa Cum Laude from RIT.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4">
          <a
            className="flex-1 md:flex-none px-6 md:px-8 py-3 bg-primary text-on-primary font-label-md text-label-md rounded shadow-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            href="#projects"
          >
            View Projects
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
          <a
            className="flex-1 md:flex-none px-6 md:px-8 py-3 border border-primary text-primary font-label-md text-label-md rounded hover:bg-primary-fixed transition-colors inline-flex items-center justify-center gap-2"
            href="/ResumeNikBarbero.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Resume
          </a>
        </div>

        <div className="flex items-center gap-3 md:gap-4 pt-2">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
            Find me
          </span>
          <div className="h-px w-6 md:w-8 bg-outline-variant"></div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={s.label}
                title={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg md:rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors shadow-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
