type Metric = { label: string; value: string }

type Entry = {
  role: string
  company: string
  period: string
  summary: string
  bullets: string[]
  metrics?: Metric[]
}

const jobs: Entry[] = [
  {
    role: 'Software Engineer',
    company: 'Osmose Utilities Services',
    period: 'JAN 2022 to JUL 2025',
    summary:
      'Full-stack engineer on multiple enterprise web applications, owning front-end features in Vue.js and maintaining the C#/.NET services and SQL data layers behind them.',
    bullets: [
      'Designed and implemented front-end features for multiple enterprise web applications using Vue.js, leveraging Vuex and Pinia to manage complex, data-driven application states.',
      'Maintained and optimized C#/.NET back-end services, improving reliability and performance of server-side data processing pipelines.',
      'Developed and refined RESTful API endpoints to effectively manage, retrieve, and display information from existing SQL databases.',
      'Collaborated in a high-velocity Agile environment, working closely with developers and QA to deliver production features on regular release cycles.',
    ],
  },
]

const education: Entry[] = [
  {
    role: 'B.S. Game Design & Development',
    company: 'Rochester Institute of Technology',
    period: 'GRADUATED MAY 2022',
    summary:
      'Completed RIT’s Game Design & Development program, building the programming foundation that powers my work today.',
    metrics: [
      { label: '', value: 'GPA 3.93' },
    ],
    bullets: [
      'Studied core computer science fundamentals (data structures, algorithms, object-oriented design, and data-driven design) across C#, Java, and JavaScript.',
      'Built interactive projects end-to-end across a range of engines, frameworks, and languages, covering everything from gameplay logic to UI and asset pipelines.',
      'Collaborated on team-based productions using Git, sharpening communication and version-control habits used daily in industry.',
    ],
  },
]

function Timeline({ items }: { items: Entry[] }) {
  return (
    <div className="space-y-12">
      {items.map((j) => (
        <div key={j.role} className="relative pl-8 border-l border-outline-variant">
          <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary rounded-full"></div>
          <div className="mb-2 flex flex-wrap justify-between items-center gap-2">
            <h3 className="font-headline-md text-headline-md text-on-surface">{j.role}</h3>
            <span className="font-label-md text-label-md text-outline">{j.period}</span>
          </div>
          <div className="mb-4 flex flex-wrap justify-between items-baseline gap-x-6 gap-y-2">
            <p className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">
              {j.company}
            </p>
            {j.metrics && j.metrics.length > 0 && (
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                {j.metrics.map((m) => (
                  <span
                    key={m.value}
                    className="font-label-md text-label-md text-primary font-bold"
                  >
                    {m.value}
                  </span>
                ))}
              </div>
            )}
          </div>
          <p className="text-on-surface-variant mb-6 leading-relaxed">{j.summary}</p>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            {j.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-1">
                  check_circle
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-surface scroll-mt-16"
    >
      <div className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24">
      {/* Professional Experience */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4">
          <p className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest font-bold">
            Career
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface md:sticky md:top-24">
            Professional Experience
          </h2>
        </div>
        <div className="md:col-span-8">
          <Timeline items={jobs} />
        </div>
      </div>

      {/* Education */}
      <div id="education" className="grid grid-cols-1 md:grid-cols-12 gap-gutter scroll-mt-16">
        <div className="md:col-span-4">
          <p className="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest font-bold">
            Academic Background
          </p>
          <h2 className="font-headline-lg text-headline-lg text-on-surface md:sticky md:top-24">
            Education
          </h2>
        </div>
        <div className="md:col-span-8">
          <Timeline items={education} />
        </div>
      </div>
      </div>
    </section>
  )
}
