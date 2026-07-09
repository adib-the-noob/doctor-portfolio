const entries = [
  {
    kind: "LONG READ",
    minutes: 7,
    date: "May 2026",
    title: "What a single elevated lipoprotein(a) really means",
    dek: "Half the population carries at least one Lp(a) allele. The clinical implication is not what most lab reports suggest.",
  },
  {
    kind: "PATIENT GUIDE",
    minutes: 4,
    date: "Mar 2026",
    title: "How to prepare for your first cardiology visit",
    dek: "A short checklist — what to bring, what to ask, and what to skip.",
  },
  {
    kind: "OPINION",
    minutes: 3,
    date: "Jan 2026",
    title: "On following your patient into the hospital",
    dek: "Why continuity of care during an admission changes outcomes — and what to ask a cardiologist about it.",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="py-24 md:py-36 border-t border-rule/30 bg-paper2/40">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <span className="marker-ink marker">R-07 · JOURNAL</span>
          <span className="marker">3 LATEST NOTES</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-12">
          <h2 className="md:col-span-7 font-display display-tight text-balance text-[clamp(2rem,4.6vw,3.6rem)] tracking-tightest leading-[0.95]">
            Notes from the exam room.
          </h2>
          <p className="md:col-span-5 text-ink/70 text-lg leading-relaxed md:pt-4">
            Plain-language writing about cardiology, drawn from what patients ask in visits. New pieces monthly.
          </p>
        </div>

        <ol className="border-t border-rule/40">
          {entries.map((e, i) => (
            <li key={i} className="border-b border-rule/30">
              <a href="#" className="group block py-8 md:py-10 grid md:grid-cols-12 gap-6 hover:bg-paper transition-colors px-2 -mx-2">
                <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-3 md:gap-2">
                  <span className="marker text-signal">{e.kind}</span>
                  <span className="marker">{e.date}</span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tighter2 leading-tight group-hover:underline decoration-signal decoration-2 underline-offset-4">
                    {e.title}
                  </h3>
                  <p className="text-ink/70 mt-3 leading-relaxed max-w-xl">{e.dek}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span className="marker">{e.minutes} min read</span>
                  <div className="mt-3 marker marker-ink opacity-0 group-hover:opacity-100 transition-opacity">
                    Read note →
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex justify-end">
          <a href="#" className="btn-ghost">
            All journal entries
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
