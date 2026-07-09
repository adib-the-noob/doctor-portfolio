function ECGWave({ height = 120 }: { height?: number }) {
  return (
    <svg
      viewBox="0 0 1200 220"
      preserveAspectRatio="none"
      className="w-full block"
      style={{ height }}
      aria-hidden
    >
      <defs>
        <pattern id="ecg-grid" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#0E1418" strokeOpacity="0.05" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="1200" height="220" fill="url(#ecg-grid)" />

      <path
        d="
          M 0 112
          L 90 112
          L 100 110 L 110 116 L 120 112
          L 220 112
          L 230 110 L 240 110 L 248 112 L 256 80 L 266 60 L 274 90 L 282 145 L 290 130 L 298 112 L 308 112 L 318 116
          L 380 112
          L 460 112
          L 470 110 L 480 110 L 488 112 L 496 84 L 506 66 L 514 92 L 522 142 L 530 132 L 538 112 L 548 112 L 558 115
          L 620 112
          L 700 112
          L 710 110 L 720 110 L 728 112 L 736 84 L 746 64 L 754 92 L 762 144 L 770 130 L 778 112 L 788 112 L 798 115
          L 860 112
          L 940 112
          L 950 110 L 960 110 L 968 112 L 976 80 L 986 58 L 994 90 L 1002 148 L 1010 132 L 1018 112 L 1028 112 L 1038 116
          L 1100 112
          L 1200 112
        "
        fill="none"
        stroke="#0E1418"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-path"
      />
      <circle cx="0" cy="112" r="4" fill="#C8442A">
        <animate
          attributeName="cx"
          dur="3.4s"
          repeatCount="indefinite"
          values="0;1200;0"
          keyTimes="0;0.85;1"
        />
      </circle>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm text-ink/55 mb-5 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-bdgreen" />
            নতুন রোগী দেখা চলছে
          </p>

          <h1 className="font-display text-ink leading-[1.1] tracking-tight text-[clamp(2.25rem,5.5vw,4rem)]">
            হৃদরোগের চিকিৎসা,
            <br />
            <span className="text-ink/40">ধীরে ও যত্নে।</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-ink/75 leading-relaxed max-w-2xl">
            এমবিবিএস, এমডি (কার্ডিওলজি)। ১২ বছরের অভিজ্ঞতা। সপ্তাহে একই সপ্তাহে অ্যাপয়েন্টমেন্ট, বিস্তারিত কাউন্সেলিং, এবং সাশ্রয়ী চেম্বার ফি।
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="#book" className="btn-ink">
              অ্যাপয়েন্টমেন্ট নিন
            </a>
            <a
              href="tel:+8801711000000"
              className="text-ink/75 hover:text-ink transition-colors underline underline-offset-4 decoration-ink/30 hover:decoration-signal"
            >
              অথবা ফোন করুন
            </a>
          </div>
        </div>

        {/* ECG signature */}
        <div className="mt-20 md:mt-28 border-y border-ink/10">
          <ECGWave height={120} />
        </div>

        {/* About block — Bangla credentials, two-column */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <h2 className="font-display text-ink text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight">
              আমার সম্পর্কে
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতালে (এনআইসিভিডি) দীর্ঘদিন কাজ করার অভিজ্ঞতা। বর্তমানে ধানমন্ডিতে ব্যক্তিগত চেম্বারে রোগী দেখছি।
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              বিশেষজ্ঞতা: ইকোকার্ডিওগ্রাফি, উচ্চ রক্তচাপ, হার্ট ফেইলিউর, এবং প্রতিরোধমূলক কার্ডিওলজি।
            </p>
          </div>

          <div className="md:col-span-7">
            <h3 className="font-display text-ink text-xl mb-4">শিক্ষা ও প্রশিক্ষণ</h3>
            <ol className="space-y-3">
              {[
                ["২০১৮", "এমডি (কার্ডিওলজি)", "জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতাল"],
                ["২০১৪", "এমবিবিএস", "ঢাকা মেডিকেল কলেজ"],
                ["২০২০", "ECHO ফেলোশিপ", "এনআইসিভিডি"],
              ].map(([year, title, place]) => (
                <li
                  key={year}
                  className="grid grid-cols-[4.5rem,1fr] gap-4 py-3 border-t border-ink/10 first:border-t-0"
                >
                  <span className="font-display text-lg text-ink/60">{year}</span>
                  <div>
                    <p className="text-ink font-medium">{title}</p>
                    <p className="text-ink/60 text-sm mt-0.5">{place}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Chamber info */}
        <div className="mt-16 pt-10 border-t border-ink/10 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="text-ink/50 mb-1.5">চেম্বার</p>
            <p className="text-ink leading-snug">
              মেডিনোভা মেডিকেল সার্ভিসেস
              <br />
              বাড়ি ৭১, রোড ৭/এ, ধানমন্ডি, ঢাকা
            </p>
          </div>
          <div>
            <p className="text-ink/50 mb-1.5">সময়</p>
            <p className="text-ink">
              শনি–বৃহস্পতি · সন্ধ্যা ৬টা – রাত ৯টা
              <br />
              <span className="text-ink/60">শুক্রবার বন্ধ</span>
            </p>
          </div>
          <div>
            <p className="text-ink/50 mb-1.5">যোগাযোগ</p>
            <a href="tel:+8801711000000" className="text-ink hover:text-signal transition-colors">
              ০১৭১১-০০০০০০
            </a>
            <p className="text-ink/60 text-xs mt-1">bKash / Nagad গ্রহণযোগ্য</p>
          </div>
        </div>
      </div>
    </section>
  );
}