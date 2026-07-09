"use client";

import { useState } from "react";

const visitTypes = [
  { value: "new", label: "নতুন রোগী কনসালটেশন", fee: "৳৮০০" },
  { value: "followup", label: "ফলো-আপ ভিজিট", fee: "৳৫০০" },
  { value: "echo", label: "ইকোকার্ডিওগ্রাম", fee: "৳২,৫০০" },
  { value: "report", label: "রিপোর্ট রিভিউ", fee: "৳৩০০" },
];

const days = [
  "শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার",
  "বুধবার", "বৃহস্পতিবার",
];

function todayName(): string {
  const map = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
  return map[new Date().getDay()];
}

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    visitType: "new",
    preferredDay: todayName(),
    note: "",
  });
  const [sent, setSent] = useState(false);

  function valid(): boolean {
    return form.name.trim().length > 0 && form.phone.replace(/\D/g, "").length >= 10;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid()) return;
    setSent(true);
  }

  function reset() {
    setForm({ name: "", phone: "", age: "", visitType: "new", preferredDay: todayName(), note: "" });
    setSent(false);
  }

  if (sent) {
    return (
      <section id="book" className="py-20 md:py-28 border-t border-ink/10">
        <div className="mx-auto max-w-2xl px-6 md:px-8">
          <p className="text-sm text-ink/55 mb-4">অনুরোধ গৃহীত হয়েছে</p>
          <h2 className="font-display text-ink text-[clamp(1.875rem,4vw,2.5rem)] leading-tight">
            ধন্যবাদ, {form.name}।
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            চেম্বার সেক্রেটারি ২৪ ঘণ্টার মধ্যে আপনাকে ফোনে যোগাযোগ করবে নম্বরে <span className="font-medium text-ink">{form.phone}</span>। পছন্দের দিন: <span className="font-medium text-ink">{form.preferredDay}</span>।
          </p>
          <p className="mt-3 text-ink/60 text-sm">
            জরুরি অবস্থায় সরাসরি চেম্বারে যোগাযোগ করুন: ০১৭১১-০০০০০০
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 text-ink/60 hover:text-ink underline underline-offset-4 decoration-ink/30 transition-colors"
          >
            আরেকটি অনুরোধ পাঠান
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-20 md:py-28 border-t border-ink/10 bg-ink/[0.025]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <h2 className="font-display text-ink text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight">
              অ্যাপয়েন্টমেন্ট নিন
            </h2>
            <p className="mt-4 text-ink/70 leading-relaxed">
              নিচের ফর্মটি পূরণ করুন। চেম্বার সেক্রেটারি আপনাকে ফোনে সময় নিশ্চিত করবেন।
            </p>
            <p className="mt-3 text-ink/60 text-sm">
              ফি ভিজিটের সময় প্রদেয়। bKash ও Nagad গ্রহণযোগ্য।
            </p>

            <ul className="mt-10 space-y-2 text-sm text-ink/60">
              <li className="flex items-baseline gap-2">
                <span className="text-ink">·</span> কনসালটেশন সাধারণত ১৫–২০ মিনিট
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-ink">·</span> পূর্বের কাগজপত্র সাথে আনবেন
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-ink">·</span> ইকো রিপোর্ট কনসালটেশনের দিনই পাওয়া যায়
              </li>
            </ul>
          </div>

          <form
            onSubmit={submit}
            className="md:col-span-7 border border-ink/15 bg-paper"
          >
            <div className="px-6 py-8 md:px-8 md:py-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label">আপনার নাম</label>
                  <input
                    id="name"
                    className="field"
                    placeholder="পূর্ণ নাম"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label">মোবাইল নম্বর</label>
                  <input
                    id="phone"
                    type="tel"
                    className="field"
                    placeholder="০১XXXXXXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="label">বয়স</label>
                  <input
                    id="age"
                    type="number"
                    inputMode="numeric"
                    className="field"
                    placeholder="৪৫"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="visitType" className="label">ভিজিটের ধরন</label>
                  <select
                    id="visitType"
                    className="field"
                    value={form.visitType}
                    onChange={(e) => setForm({ ...form, visitType: e.target.value })}
                    style={{ background: "transparent" }}
                  >
                    {visitTypes.map((v) => (
                      <option key={v.value} value={v.value}>
                        {v.label} — {v.fee}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="label">পছন্দের দিন</label>
                <div className="flex flex-wrap gap-2">
                  {days.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setForm({ ...form, preferredDay: d })}
                      className={`px-4 py-2 border text-sm transition-colors ${
                        form.preferredDay === d
                          ? "bg-ink text-paper border-ink"
                          : "border-ink/20 text-ink hover:border-ink/50"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="note" className="label">সমস্যার সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)</label>
                <textarea
                  id="note"
                  rows={3}
                  className="field resize-none"
                  placeholder="যেমন: বুকে চাপ অনুভব, হাঁটলে শ্বাসকষ্ট…"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={!valid()}
                className="btn-ink w-full"
              >
                অনুরোধ পাঠান
              </button>

              <p className="text-xs text-ink/50 text-center">
                আপনার তথ্য শুধুমাত্র চেম্বার ব্যবস্থাপনার জন্য ব্যবহৃত হবে।
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}