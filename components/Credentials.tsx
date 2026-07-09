const milestones = [
  {
    year: "2024",
    title: "Private practice opens",
    place: "Halden Cardiovascular, New York",
    detail: "Opened a small, deliberately unhurried practice on the Upper East Side.",
  },
  {
    year: "2021",
    title: "Attending cardiologist",
    place: "Mount Sinai Hospital",
    detail: "Attending in the Heart Failure and Transplantation program.",
  },
  {
    year: "2018",
    title: "FACC elected",
    place: "American College of Cardiology",
    detail: "Fellowship awarded for contributions to echocardiographic research.",
  },
  {
    year: "2017",
    title: "Cardiology fellowship completed",
    place: "NYU Langone",
    detail: "Specialty training in cardiovascular disease with emphasis on imaging.",
  },
  {
    year: "2014",
    title: "Internal medicine residency",
    place: "Massachusetts General Hospital",
    detail: "Chief resident, internal medicine.",
  },
  {
    year: "2011",
    title: "M.D.",
    place: "Harvard Medical School",
    detail: "Cum laude, with a thesis on lipoprotein(a) in premature CAD.",
  },
];

const publications = [
  {
    title:
      "Lipoprotein(a) as a Modifiable Risk Factor — Time to Act",
    venue: "Journal of the American College of Cardiology",
    year: "2023",
  },
  {
    title:
      "Echocardiographic Strain in Subclinical Chemotherapy-Induced Cardiotoxicity",
    venue: "European Heart Journal — Cardiovascular Imaging",
    year: "2020",
  },
  {
    title:
      "Shared Decision-Making in Severe Aortic Stenosis: A Pragmatic Framework",
    venue: "Circulation: Cardiovascular Quality and Outcomes",
    year: "2019",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-36 border-t border-rule/30">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <span className="marker-ink marker">R-04 · CREDENTIALS</span>
          <span className="marker">CV · REV. 03.24</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <h2 className="font-display display-tight text-balance text-[clamp(2.2rem,5.4vw,4.5rem)] tracking-tightest leading-[0.92]">
              The training, the trail of it.
            </h2>
            <p className="mt-6 text-lg text-ink/75 leading-relaxed">
              A short summary. The full CV is available on request — and so are the people who supervised these years of training.
            </p>

            <div className="mt-10 border-t border-rule/40 pt-6">
              <p className="marker mb-4">Selected publications</p>
              <ul className="space-y-5">
                {publications.map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="marker shrink-0 mt-1">{p.year}</span>
                    <div>
                      <p className="font-display text-lg leading-snug tracking-tighter2">
                        {p.title}
                      </p>
                      <p className="marker text-ash mt-1">{p.venue}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-7 md:pt-2">
            <ol className="relative border-l border-rule/40 pl-8">
              {milestones.map((m) => (
                <li key={m.year} className="mb-10 last:mb-0 relative">
                  <span className="absolute -left-[36px] top-1.5 w-2 h-2 bg-ink rounded-full" />
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display text-2xl tracking-tighter2">
                      {m.year}
                    </span>
                    <span className="marker">{m.place}</span>
                  </div>
                  <p className="font-display text-xl md:text-2xl tracking-tighter2 leading-snug">
                    {m.title}
                  </p>
                  <p className="text-ink/70 leading-relaxed mt-2">{m.detail}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 border-t border-rule/40 pt-8">
              {[
                ["ABIM", "Internal Medicine"],
                ["ABIM", "Cardiovascular Disease"],
                ["ASE", "Level III Echocardiography"],
                ["NBE", "Performing Physician — TEE"],
                ["ACLS", "Current certification"],
                ["BLS", "Current certification"],
              ].map(([body, cert], i) => (
                <div key={i}>
                  <p className="font-display text-lg tracking-tighter2">{cert}</p>
                  <p className="marker mt-1">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
