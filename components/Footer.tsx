export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-paper/10">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14 pt-16 md:pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-tightest leading-[0.92]">
              Halden
              <br />
              <span className="text-signal">Cardiovascular.</span>
            </p>
            <p className="marker mt-6" style={{ color: "rgba(242,239,232,0.6)" }}>
              Practice of Dr. Mira Halden, MD · FACC
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="marker" style={{ color: "rgba(242,239,232,0.6)" }}>Practice</p>
            <ul className="mt-4 space-y-2 marker" style={{ color: "rgba(242,239,232,0.85)" }}>
              <li><a href="#practice" className="hover:text-signal">About</a></li>
              <li><a href="#specializations" className="hover:text-signal">Specializations</a></li>
              <li><a href="#credentials" className="hover:text-signal">Credentials</a></li>
              <li><a href="#patients" className="hover:text-signal">Patient notes</a></li>
              <li><a href="#journal" className="hover:text-signal">Journal</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="marker" style={{ color: "rgba(242,239,232,0.6)" }}>Visit</p>
            <ul className="mt-4 space-y-2 marker" style={{ color: "rgba(242,239,232,0.85)" }}>
              <li><a href="#book" className="hover:text-signal">Book an appointment</a></li>
              <li><a href="#contact" className="hover:text-signal">Contact the office</a></li>
              <li><a href="#" className="hover:text-signal">Patient portal</a></li>
              <li><a href="#" className="hover:text-signal">Insurance &amp; fees</a></li>
              <li><a href="#" className="hover:text-signal">Privacy &amp; HIPAA</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 marker" style={{ color: "rgba(242,239,232,0.5)" }}>
          <p>© {new Date().getFullYear()} Halden Cardiovascular. All rights reserved.</p>
          <p>This site does not provide medical advice. If you are experiencing a medical emergency, call 911.</p>
        </div>
      </div>
    </footer>
  );
}
