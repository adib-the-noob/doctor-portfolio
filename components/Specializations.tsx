type Spec = {
  code: string;
  title: string;
  blurb: string;
  tags: string[];
  prevalence?: string;
};

const specs: Spec[] = [
  {
    code: "S-01",
    title: "Preventive cardiology",
    blurb:
      "Comprehensive risk assessment, lipid management, blood pressure optimization, and lifestyle medicine for patients who want to stay ahead of a family history.",
    tags: ["Risk assessment", "Lipids", "Lifestyle"],
    prevalence: "Most referrals",
  },
  {
    code: "S-02",
    title: "Echocardiography",
    blurb:
      "Level III-trained in transthoracic and transesophageal echo. On-site studies read by Dr. Halden; no offshore reads, no waiting a week.",
    tags: ["TTE", "TEE", "Strain imaging"],
  },
  {
    code: "S-03",
    title: "Heart failure & cardiomyopathy",
    blurb:
      "Longitudinal care for reduced and preserved ejection fraction, including GDMT optimization, advanced therapies, and shared decision-making.",
    tags: ["HFrEF", "HFpEF", "GDMT"],
  },
  {
    code: "S-04",
    title: "Arrhythmia & palpitations",
    blurb:
      "Evaluation of atrial fibrillation, SVT, PVCs, and unexplained palpitations. Holter and event-monitor placement, ablation referral when appropriate.",
    tags: ["AFib", "Holter", "Event monitor"],
  },
  {
    code: "S-05",
    title: "Valvular heart disease",
    blurb:
      "Surveillance and timing of intervention for aortic stenosis, mitral regurgitation, and bicuspid aortic valve disease.",
    tags: ["AS", "MR", "TAVR workup"],
  },
  {
    code: "S-06",
    title: "Women's cardiovascular health",
    blurb:
      "Specialized risk assessment for pregnancy-related cardiac conditions, perimenopausal changes, and conditions disproportionately affecting women.",
    tags: ["Pregnancy", "Menopause", "SCAD"],
  },
];

export default function Specializations() {
  return (
    <section id="specializations" className="py-24 md:py-36 border-t border-rule/30 bg-paper2/40">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <span className="marker-ink marker">R-03 · SPECIALIZATIONS</span>
          <span className="marker">S-01 → S-06</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mb-12 md:mb-16">
          <h2 className="md:col-span-8 font-display display-tight text-balance text-[clamp(2.2rem,5.4vw,4.5rem)] tracking-tightest leading-[0.92]">
            Areas of practice, organized by what brings patients through the door.
          </h2>
          <p className="md:col-span-4 text-ink/70 text-lg leading-relaxed md:pt-4">
            The list is short on purpose. I work where my training is deepest, and refer to trusted colleagues for everything else.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 border-t border-rule/40">
          {specs.map((s, i) => (
            <li
              key={s.code}
              className={`group border-b border-rule/30 ${
                i % 2 === 0 ? "md:border-r" : ""
              } border-rule/30`}
            >
              <a
                href="#book"
                className="block px-2 py-8 md:py-10 md:px-6 hover:bg-paper transition-colors"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="marker-ink marker">{s.code}</span>
                  {s.prevalence && (
                    <span className="marker text-signal">{s.prevalence}</span>
                  )}
                </div>
                <h3 className="font-display text-3xl md:text-4xl leading-[1.05] tracking-tighter2 mb-4 group-hover:underline decoration-signal decoration-2 underline-offset-4">
                  {s.title}
                </h3>
                <p className="text-ink/75 text-base leading-relaxed max-w-md">{s.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 marker marker-ink opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Book in this area</span>
                  <span className="text-signal">→</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
