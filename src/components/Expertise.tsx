type Card = {
  icon: string
  title: string
  description: string
  tags: string[]
}

const cards: Card[] = [
  {
    icon: 'javascript',
    title: 'Frontend Engineering',
    description: 'Building reactive, state-managed applications focusing on performance and accessibility.',
    tags: ['Vue.js', 'React', 'JavaScript'],
  },
  {
    icon: 'terminal',
    title: 'Backend Architecture',
    description: 'Designing robust RESTful APIs and services with security and scalability at the core.',
    tags: ['C# / .NET', 'Firebase', 'SQL'],
  },
  {
    icon: 'sports_esports',
    title: 'Creative Engineering',
    description: 'Bringing game-development fundamentals to the web through interactive UIs and engaging user experiences.',
    tags: ['Canvas API', 'PixiJS', 'Unity'],
  },
]

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-surface-container-low py-24 border-y border-outline-variant/30 scroll-mt-16"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Expertise</h2>
          <div className="h-px flex-grow bg-outline-variant/30 mx-8 hidden md:block"></div>
          <p className="font-label-md text-label-md text-outline uppercase tracking-widest">
            Technical Stack
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-surface border border-outline-variant p-8 rounded-lg hover:border-primary transition-colors flex flex-col"
            >
              <span className="material-symbols-outlined text-primary mb-6 text-4xl">{c.icon}</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{c.title}</h3>
              <p className="text-on-surface-variant mb-6 flex-grow">{c.description}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-surface-variant text-on-surface-variant text-label-sm font-label-sm rounded uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
