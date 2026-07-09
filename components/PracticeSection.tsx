export default function PracticeSection() {
  return (
    <section id="practice" className="py-24 md:py-36 border-t border-rule/30">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <span className="marker-ink marker">R-02 · THE PRACTICE</span>
          <span className="marker">PP. 02 / 04</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7">
            <h2 className="font-display display-tight text-balance text-[clamp(2.4rem,6vw,5.25rem)] tracking-tightest leading-[0.9]">
              One cardiologist.
              <br />
              <span className="text-ink/40">One patient.</span>
              <br />
              <span className="text-signal">One conversation</span>
              <br />
              at a time.
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-lg leading-relaxed text-ink/80">
              The practice is intentionally small. I see fewer patients so each one gets more of me. Visits run forty-five minutes — long enough to ask the second question, to read the chart before you arrive, and to leave the room with a plan, not a prescription.
            </p>
            <p className="text-lg leading-relaxed text-ink/80 mt-5">
              We do not employ nurse practitioners and we do not double-book. If you call at ten, you reach a person who knows your chart.
            </p>

            <ul className="mt-10 divide-y divide-rule/30 border-t border-rule/30">
              {[
                ["Same-week new-patient appointments", "Most cardiologists book four to six weeks out. We hold slots."],
                ["All diagnostic testing on site", "EKG, echocardiogram, stress test, Holter and event monitoring."],
                ["Direct access after hours", "For urgent matters, you reach Dr. Halden — not a covering service."],
                ["Transparent self-pay pricing", "Published rates for patients without insurance. No surprise bills."],
              ].map(([t, d], i) => (
                <li key={i} className="py-5 flex gap-6">
                  <span className="marker mt-1 shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-display text-xl tracking-tighter2">{t}</p>
                    <p className="text-ink/70 mt-1">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
