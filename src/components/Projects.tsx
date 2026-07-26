import fitness from '../assets/fitness-tracker.png'
import nextfolio from '../assets/nextfolio.png'
import ptcg from '../assets/pokemon-tcg-search.png'
import emoji from '../assets/emoji-react.png'
import blob from '../assets/blob.png'
import alpine from '../assets/alpine.png'
import snake from '../assets/snake.png'
import ptcgOld from '../assets/ptcg.png'

type Project = {
  title: string
  link: string
  repo?: string
  date: string
  image: string
  description: string
  tags: string[]
}

const recent: Project[] = [
  {
    title: 'Fitness Tracker',
    link: 'https://nfb1799.github.io/fitness-tracker/',
    repo: 'https://github.com/nfb1799/fitness-tracker',
    date: 'Jan 2026 – Present',
    image: fitness,
    description:
      'Full-stack fitness tracker covering workout logging, nutrition, and weight-progress visualization. Recharts dashboards, Leaflet GPS route mapping, and Firebase auth with real-time sync, installable as a PWA. Try it with “Continue as Guest” — no signup needed.',
    tags: ['React', 'Firebase', 'Vite', 'PWA'],
  },
  {
    title: 'Nextfolio',
    link: 'https://nextfolio-five-mu.vercel.app/',
    repo: 'https://github.com/nfb1799/nextfolio',
    date: 'Jul 2026 – Present',
    image: nextfolio,
    description:
      'Full-stack storefront in Next.js 16 with cookie-based auth, custom middleware, and Server Actions guarding a dashboard. Product pages render as shareable modals over the shop grid via parallel and intercepting routes — built as a deliberate tour of the App Router, from server components to streaming and optimistic UI. Deployed on Vercel.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Pokémon TCG Search',
    link: 'https://nfb1799.github.io/pokemon-tcg-search/',
    repo: 'https://github.com/nfb1799/pokemon-tcg-search',
    date: 'Nov 2025',
    image: ptcg,
    description:
      'Responsive React + Vite app for browsing the full Pokémon Trading Card Game catalog. Features advanced filtering by type, rarity, and set, and live market pricing pulled from TCGPlayer and Cardmarket.',
    tags: ['React', 'Vite', 'Axios', 'REST API'],
  },
  {
    title: 'Emoji Games',
    link: 'https://nfb1799.github.io/emoji-games-react/',
    repo: 'https://github.com/nfb1799/emoji-games-react',
    date: 'Jul 2025',
    image: emoji,
    description:
      'Collection of browser-based mini-games built with React using emojis as the core visual assets. Responsive across desktop and mobile.',
    tags: ['React', 'JavaScript', 'HTML/CSS'],
  },
]

const earlier: Project[] = [
  {
    title: 'Blob-Blob Game',
    link: 'https://telepathicgrunt.itch.io/blob-blob-game',
    date: '2021',
    image: blob,
    description:
      '2D Unity puzzle game where two amoebic blobs cooperate to escape a cave system. Sound design and co-programming credits.',
    tags: ['Unity', 'C#', 'Sound Design'],
  },
  {
    title: 'Alpine Survival',
    link: 'https://people.rit.edu/nfb1799/235/project3/',
    date: '2020',
    image: alpine,
    description:
      'Browser-based downhill snowboarding game built in PixiJS. Survive as long as possible while collecting coins and dodging obstacles.',
    tags: ['PixiJS', 'JavaScript', 'HTML5'],
  },
  {
    title: 'Phyllotaxis Snake',
    link: 'https://people.rit.edu/nfb1799/330/project1/',
    date: '2021',
    image: snake,
    description:
      'Interactive Snake game that paints phyllotaxis patterns at every scored point. Built using layered Canvas elements for smooth rendering.',
    tags: ['Canvas API', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Pokémon TCG Pokédex',
    link: 'https://people.rit.edu/nfb1799/330/project2/',
    date: '2021',
    image: ptcgOld,
    description:
      'Earlier vanilla-JS TCG search app with local-storage-based favorites. Combines multiple APIs into one cohesive search experience.',
    tags: ['JavaScript', 'HTML/CSS', 'REST API'],
  },
]

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
)

function ProjectCard({ p, compact = false }: { p: Project; compact?: boolean }) {
  return (
    <article className="group relative bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:border-primary transition-colors focus-within:border-primary">
      <div className="aspect-video relative overflow-hidden bg-surface-container-highest">
        <img
          alt={`${p.title} screenshot`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={p.image}
          loading="lazy"
        />
      </div>

      <div className={`${compact ? 'p-5' : 'p-6'} flex flex-col flex-grow`}>
        <div className="flex items-start justify-between gap-2">
          <h4
            className={`${
              compact ? 'text-body-lg font-semibold' : 'font-headline-md text-headline-md'
            } text-on-surface`}
          >
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} — open live project`}
              className="hover:text-primary transition-colors after:absolute after:inset-0 after:content-['']"
            >
              {p.title}
            </a>
          </h4>
          <span
            className="material-symbols-outlined text-lg text-on-surface-variant group-hover:text-primary transition-colors shrink-0"
            aria-hidden="true"
          >
            open_in_new
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest mt-1 mb-3">
          {p.date}
        </span>

        <p className={`${compact ? 'text-sm' : ''} text-on-surface-variant mb-6 flex-grow`}>
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/30">
          {p.tags.map((t) => (
            <span
              key={t}
              className="font-label-sm text-label-sm text-outline px-2 py-1 border border-outline-variant rounded uppercase"
            >
              {t}
            </span>
          ))}
        </div>

        {p.repo && (
          <div className="pt-4">
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} — view source code on GitHub`}
              className="relative z-10 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant bg-surface-container-lowest hover:border-primary hover:text-primary transition-colors"
            >
              <GitHubIcon />
              View Code
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const total = recent.length + earlier.length

  return (
    <section id="projects" className="py-24 bg-surface-container-low scroll-mt-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div>
            <p className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest font-bold">
              Showcase
            </p>
            <h2 className="font-display text-headline-lg text-on-surface">
              Featured Engineering Projects
            </h2>
            <p className="text-on-surface-variant mt-3 max-w-xl">
              A selection of web apps, games, and tools I've built. Each card links to the live
              project, and to the source where it's public.
            </p>
          </div>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
            {total} Projects
          </span>
        </div>

        {/* Recent work */}
        <h3 className="font-label-md text-label-md text-primary uppercase tracking-widest font-bold mb-6">
          Recent Work
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {recent.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* Earlier & academic */}
        <div className="mt-20">
          <h3 className="font-label-md text-label-md text-outline uppercase tracking-widest font-bold mb-2">
            Earlier &amp; Academic Projects
          </h3>
          <p className="text-on-surface-variant text-sm mb-6 max-w-xl">
            Game and interactive web work from my time at RIT.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {earlier.map((p) => (
              <ProjectCard key={p.title} p={p} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
