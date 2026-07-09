import ECGWave from "./ECGWave";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        {/* Top meta row — like a chart's header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <span className="marker-ink marker">PT. CHART NO. 001 · DR. M. HALDEN</span>
            <span className="hidden md:block flex-1 dotted-rule w-32" />
            <span className="marker">EST. 2011</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 tag">
              <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block" />
              Accepting patients
            </span>
            <span className="hidden md:inline marker">EN / DE / FR</span>
          </div>
        </div>

        {/* The headline is the thesis */}
        <h1 className="font-display display-tight text-ink text-balance leading-[0.86] tracking-tightest text-[clamp(3rem,9vw,9rem)]">
          <span className="block rise rise-1">
            Cardiology,
          </span>
          <span className="block rise rise-2 relative">
            <span className="relative inline-block">
              slow medicine
              <span className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-px bg-signal" aria-hidden />
            </span>
            <span className="text-signal">.</span>
          </span>
        </h1>

        {/* Two-column under-headline */}
        <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5 md:col-start-7">
            <p className="text-lg md:text-xl text-ink leading-snug font-display">
              I practice cardiology the way it ought to be practiced — with unhurried visits, sharp diagnostics, and a plan you actually understand.
            </p>
            <p className="mt-5 text-base text-ink/70 leading-relaxed">
              Twelve years at teaching hospitals, the last four in private practice. Same-week appointments, board-certified in internal medicine and cardiovascular disease, with sub-specialty training in echocardiography and preventive cardiology.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#book" className="btn-ink">
                Book an appointment
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
              <a href="#practice" className="btn-ghost">
                Read about the practice
              </a>
            </div>

            {/* Mini stats row — clinical, not marketing */}
            <dl className="mt-12 grid grid-cols-3 divide-x divide-rule/40 border-t border-rule/40 pt-6">
              <div className="pr-4">
                <dt className="marker">Patients / year</dt>
                <dd className="font-display text-3xl md:text-4xl mt-2 tracking-tighter2">~640</dd>
              </div>
              <div className="px-4">
                <dt className="marker">Visit length</dt>
                <dd className="font-display text-3xl md:text-4xl mt-2 tracking-tighter2">45 min</dd>
              </div>
              <div className="pl-4">
                <dt className="marker">Wait time</dt>
                <dd className="font-display text-3xl md:text-4xl mt-2 tracking-tighter2">
                  <span className="text-moss">≤</span>7 days
                </dd>
              </div>
            </dl>
          </div>

          {/* ECG signature element */}
          <div className="md:col-span-7 md:col-start-1 md:row-start-1 rise rise-3">
            <div className="relative">
              <div className="absolute -top-3 left-0 right-0 flex items-center justify-between marker">
                <span>R-01 · RECEPTION</span>
                <span className="text-signal">● ROOM 1</span>
              </div>
              <div className="border-y border-rule/40 bg-paper2/30">
                <ECGWave height={300} strokes={2.2} label="PT-001 · MH · SINUS RHYTHM" />
              </div>
              <div className="mt-3 flex items-center justify-between marker">
                <span>25 mm/s · GAIN 10</span>
                <span>TRACE 01 / 04</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee/credential ribbon */}
        <div className="mt-20 md:mt-28 border-t border-b border-rule/40 py-5 overflow-hidden">
          <div className="flex items-center gap-12 whitespace-nowrap animate-[slide_30s_linear_infinite]" style={{ animationName: "slide" }}>
            {[
              "American Board of Internal Medicine — Cardiovascular Disease",
              "FACC — Fellow, American College of Cardiology",
              "Level III Echocardiography",
              "Member, European Society of Cardiology",
              "Mount Sinai Hospital — Attending 2017–2021",
              "NYU Langone — Cardiology Fellowship",
              "Harvard Medical School — M.D.",
            ].concat([
              "American Board of Internal Medicine — Cardiovascular Disease",
              "FACC — Fellow, American College of Cardiology",
              "Level III Echocardiography",
              "Member, European Society of Cardiology",
              "Mount Sinai Hospital — Attending 2017–2021",
              "NYU Langone — Cardiology Fellowship",
              "Harvard Medical School — M.D.",
            ]).map((t, i) => (
              <span key={i} className="marker flex items-center gap-12">
                <span>{t}</span>
                <span className="text-signal">✦</span>
              </span>
            ))}
          </div>
          <style>{`
            @keyframes slide {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
