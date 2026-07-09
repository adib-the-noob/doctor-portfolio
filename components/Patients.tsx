const testimonials = [
  {
    quote:
      "I have never in my life left a doctor's appointment feeling like I understood what just happened. She drew the valve on the paper table cover. It was better than any test result.",
    name: "Margaret W.",
    role: "Patient since 2022",
    tag: "Valvular",
  },
  {
    quote:
      "After two years of palpitations and three normal Holters elsewhere, she caught what was happening on a 14-day event monitor. The surgery it led to was the right call.",
    name: "Anthony D.",
    role: "Patient since 2023",
    tag: "Arrhythmia",
  },
  {
    quote:
      "She told me she was going to do a careful job, and then she did a careful job. I've recommended a dozen people to her and every one has thanked me.",
    name: "Rebecca L.",
    role: "Patient since 2024",
    tag: "Preventive",
  },
];

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "The practice is out of network for all plans. We submit claims on your behalf so you receive out-of-network reimbursement directly from your insurer. Most PPO patients receive 60–80% back. Self-pay rates are published above.",
  },
  {
    q: "How long until I can be seen?",
    a: "We hold same-week slots for new patients. Most new-patient appointments can be scheduled within seven days, often sooner. Established patients are usually seen same-day for urgent issues.",
  },
  {
    q: "Will I see Dr. Halden, or a nurse practitioner?",
    a: "You will see Dr. Halden. There are no nurse practitioners, physician assistants, or covering physicians in this practice.",
  },
  {
    q: "Can I do the first visit by telehealth?",
    a: "Yes, for many visit types. Echo, stress testing, and pre-operative clearance require an in-person visit. We&rsquo;ll tell you when we book you.",
  },
  {
    q: "What hospitals is Dr. Halden affiliated with?",
    a: "Mount Sinai Hospital and NYU Langone. If you require admission or a procedure, Dr. Halden coordinates directly with those teams.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Twenty-four hours notice, please. Same-day cancellations or no-shows are charged half the visit fee.",
  },
];

export default function Patients() {
  return (
    <section id="patients" className="py-24 md:py-36 border-t border-rule/30">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <span className="marker-ink marker">R-06 · PATIENT NOTES</span>
          <span className="marker">N=120+ RESPONSES</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-20">
          <h2 className="md:col-span-8 font-display display-tight text-balance text-[clamp(2.2rem,5.4vw,4.5rem)] tracking-tightest leading-[0.92]">
            In their own words.
          </h2>
          <p className="md:col-span-4 text-ink/70 text-lg leading-relaxed md:pt-4">
            We don&rsquo;t curate these. Names changed; everything else is verbatim from patient letters and discharge surveys.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-px bg-rule/30 border border-rule/30">
          {testimonials.map((t, i) => (
            <li key={i} className="bg-paper p-8 md:p-10 flex flex-col">
              <span className="marker mb-6">RESP #{String(i + 1).padStart(3, "0")}</span>
              <blockquote className="font-display text-2xl md:text-[1.7rem] leading-snug tracking-tighter2 flex-1">
                <span aria-hidden className="text-signal mr-1">&ldquo;</span>
                {t.quote}
                <span aria-hidden className="text-signal ml-1">&rdquo;</span>
              </blockquote>
              <div className="mt-8 pt-6 border-t border-rule/30">
                <p className="font-display text-lg tracking-tighter2">{t.name}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="marker">{t.role}</span>
                  <span className="w-1 h-1 bg-ash rounded-full" />
                  <span className="tag tag-moss">{t.tag}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* FAQ */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-4">
            <h2 className="font-display display-tight text-balance text-[clamp(2rem,4.6vw,3.6rem)] tracking-tightest leading-[0.95]">
              Questions patients ask, before they ask.
            </h2>
            <p className="mt-5 text-ink/75 leading-relaxed">
              Don&rsquo;t see yours? Email <a href="mailto:office@halden.care" className="underline decoration-signal decoration-2 underline-offset-4">office@halden.care</a> or call the office line.
            </p>
          </div>

          <div className="md:col-span-8">
            <dl className="divide-y divide-rule/30 border-y border-rule/30">
              {faqs.map((f, i) => (
                <details key={i} className="group py-6 cursor-pointer">
                  <summary className="flex items-baseline justify-between gap-6 list-none">
                    <dt className="font-display text-xl md:text-2xl tracking-tighter2">
                      <span className="marker mr-3">{String(i + 1).padStart(2, "0")}</span>
                      {f.q}
                    </dt>
                    <span className="marker shrink-0 group-open:rotate-45 transition-transform">
                      ＋
                    </span>
                  </summary>
                  <dd className="mt-4 text-ink/75 leading-relaxed max-w-2xl pl-9">{f.a}</dd>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
