import fitness from '../assets/fitness-tracker.png'
import ptcg from '../assets/pokemon-tcg-search.png'
import emoji from '../assets/emoji-react.png'
import blob from '../assets/blob.png'
import alpine from '../assets/alpine.png'
import snake from '../assets/snake.png'
import ptcgOld from '../assets/ptcg.png'

type Project = {
  title: string
  link: string
  image: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Fitness Tracker',
    link: 'https://nfb1799.github.io/fitness-tracker/',
    image: fitness,
    description:
      'Full-stack fitness tracking app with workout logging, nutrition, weigh-ins, and social features. Real-time sync, offline support, and Firebase auth.',
    tags: ['React', 'Firebase', 'Vite'],
  },
  {
    title: 'Pokémon TCG Search',
    link: 'https://nfb1799.github.io/pokemon-tcg-search/',
    image: ptcg,
    description:
      'Responsive React + Vite app for browsing the full Pokémon Trading Card Game catalog. Features advanced filtering by type, rarity, and set, and live market pricing pulled from TCGPlayer and Cardmarket.',
    tags: ['React', 'Vite', 'Axios', 'REST API'],
  },
  {
    title: 'Emoji Games',
    link: 'https://nfb1799.github.io/emoji-games-react/',
    image: emoji,
    description:
      'Collection of browser-based mini-games built with React using emojis as the core visual assets. Responsive across desktop and mobile.',
    tags: ['React', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Blob-Blob Game',
    link: 'https://telepathicgrunt.itch.io/blob-blob-game',
    image: blob,
    description:
      '2D Unity puzzle game where two amoebic blobs cooperate to escape a cave system. Sound design and co-programming credits.',
    tags: ['Unity', 'C#', 'Sound Design'],
  },
  {
    title: 'Alpine Survival',
    link: 'https://people.rit.edu/nfb1799/235/project3/',
    image: alpine,
    description:
      'Browser-based downhill snowboarding game built in PixiJS. Survive as long as possible while collecting coins and dodging obstacles.',
    tags: ['PixiJS', 'JavaScript', 'HTML5'],
  },
  {
    title: 'Phyllotaxis Snake',
    link: 'https://people.rit.edu/nfb1799/330/project1/',
    image: snake,
    description:
      'Interactive Snake game that paints phyllotaxis patterns at every scored point. Built using layered Canvas elements for smooth rendering.',
    tags: ['Canvas API', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Pokémon TCG Pokédex',
    link: 'https://people.rit.edu/nfb1799/330/project2/',
    image: ptcgOld,
    description:
      'Earlier vanilla-JS TCG search app with local-storage-based favorites. Combines multiple APIs into one cohesive search experience.',
    tags: ['JavaScript', 'HTML/CSS', 'REST API'],
  },
]

export default function Projects() {
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
              A selection of web apps, games, and tools I've built. Click any card to view the live project.
            </p>
          </div>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
            {projects.length} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:border-primary transition-colors"
            >
              <div className="aspect-video relative overflow-hidden bg-surface-container-highest">
                <img
                  alt={`${p.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={p.image}
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">{p.title}</h3>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors shrink-0">
                    open_in_new
                  </span>
                </div>
                <p className="text-on-surface-variant mb-6 flex-grow">{p.description}</p>
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
