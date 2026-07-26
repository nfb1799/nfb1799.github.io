export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-surface scroll-mt-16"
    >
      <div className="py-24 max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
      <div className="space-y-6 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full border border-outline-variant/50">
          <span
            className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{ boxShadow: '0 0 0 4px rgba(22,163,74,0.18)' }}
            aria-hidden="true"
          />
          <span className="font-label-sm text-label-sm uppercase tracking-wider">
            Open to Opportunities
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Ready to build something robust?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          I'm currently looking for new opportunities as a Full Stack Software Engineer. If you're
          building high-impact systems, I'd love to hear from you.
        </p>
        <div className="flex justify-center gap-6 pt-2">
          <a
            className="px-8 py-3 bg-primary text-on-primary font-label-md text-label-md rounded flex items-center gap-2 hover:opacity-90"
            href="mailto:nikbarbero@yahoo.com"
          >
            <span className="material-symbols-outlined" aria-hidden="true">mail</span>
            Get In Touch
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}
