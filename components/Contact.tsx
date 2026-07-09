import ECGWave from "./ECGWave";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 border-t border-rule/30 bg-ink text-paper">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        <div className="flex items-end justify-between mb-10 md:mb-14" style={{ color: "rgba(242,239,232,0.6)" }}>
          <span className="marker-ink marker" style={{ color: "#F2EFE8" }}>R-08 · CONTACT</span>
          <span className="marker">END OF RECORD</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7">
            <h2 className="font-display display-tight text-balance text-[clamp(2.4rem,6vw,5rem)] tracking-tightest leading-[0.92]">
              The phone is the fastest way.
            </h2>
            <p className="mt-6 text-lg text-paper/80 leading-relaxed max-w-xl">
              Most questions are answered in a five-minute call. For non-urgent matters, the office replies to emails within one business day.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-paper/20 pt-10">
              <div>
                <p className="marker" style={{ color: "rgba(242,239,232,0.6)" }}>OFFICE</p>
                <a href="tel:+12125550144" className="block mt-3 font-display text-3xl md:text-4xl tracking-tighter2 hover:text-signal transition-colors">
                  (212) 555-0144
                </a>
                <p className="marker mt-3" style={{ color: "rgba(242,239,232,0.6)" }}>Mon–Fri · 8:30 – 17:00</p>
              </div>
              <div>
                <p className="marker" style={{ color: "rgba(242,239,232,0.6)" }}>EMAIL</p>
                <a href="mailto:office@halden.care" className="block mt-3 font-display text-3xl md:text-4xl tracking-tighter2 hover:text-signal transition-colors break-all">
                  office@halden.care
                </a>
                <p className="marker mt-3" style={{ color: "rgba(242,239,232,0.6)" }}>Replies within 24h</p>
              </div>
              <div>
                <p className="marker" style={{ color: "rgba(242,239,232,0.6)" }}>ADDRESS</p>
                <p className="mt-3 font-display text-2xl tracking-tighter2 leading-snug">
                  132 East 67th Street<br />Suite 4B<br />New York, NY 10065
                </p>
              </div>
              <div>
                <p className="marker" style={{ color: "rgba(242,239,232,0.6)" }}>URGENT AFTER HOURS</p>
                <p className="mt-3 text-paper/80 leading-relaxed">
                  Call the office line. Dr. Halden is paged directly for urgent cardiac matters — no covering service.
                </p>
                <p className="marker mt-3 text-signal">★ EMERGENCIES: 911</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-2">
            <div className="bg-paper text-ink p-8">
              <p className="marker marker-ink">SEND A MESSAGE</p>
              <h3 className="font-display text-3xl tracking-tighter2 leading-tight mt-3">
                Or just write here.
              </h3>
              <form className="mt-7 space-y-5">
                <div>
                  <label htmlFor="cn" className="label">Name</label>
                  <input id="cn" className="field" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="ce" className="label">Email</label>
                  <input id="ce" type="email" className="field" placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="cm" className="label">Message</label>
                  <textarea id="cm" rows={4} className="field resize-none" placeholder="A few lines is plenty." />
                </div>
                <button type="button" className="btn-ink w-full justify-center">
                  Send message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <ECGWave height={120} showAxis={false} label="" />
        </div>
      </div>
    </section>
  );
}
