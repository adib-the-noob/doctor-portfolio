export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-display text-lg tracking-tight">ডা. তানভীর হাসান</p>
            <p className="text-sm text-ink/60 mt-0.5">এমবিবিএস, এমডি (কার্ডিওলজি) · ধানমন্ডি, ঢাকা</p>
          </div>
          <div className="text-sm text-ink/60">
            <a href="tel:+8801711000000" className="hover:text-ink">০১৭১১-০০০০০০</a>
            <span className="mx-2 text-ink/30">·</span>
            <a href="mailto:chamber@example.com" className="hover:text-ink">ইমেইল</a>
          </div>
        </div>
        <p className="mt-8 pt-6 border-t border-ink/10 text-xs text-ink/45">
          © {new Date().getFullYear()} · এই ওয়েবসাইট চিকিৎসা পরামর্শ প্রদান করে না। জরুরি অবস্থায় ৯৯৯ নম্বরে কল করুন।
        </p>
      </div>
    </footer>
  );
}