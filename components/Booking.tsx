"use client";

import { useMemo, useState } from "react";

type Step = 1 | 2 | 3 | 4;

const visitTypes = [
  {
    code: "V-01",
    name: "New patient consultation",
    duration: "60 min",
    price: "$480",
    blurb: "Comprehensive first visit. Review history, full exam, ECG, and care plan.",
    badge: null,
  },
  {
    code: "V-02",
    name: "Follow-up",
    duration: "45 min",
    price: "$320",
    blurb: "Established patients managing a known condition, adjusting medications, or reviewing test results.",
    badge: null,
  },
  {
    code: "V-03",
    name: "Echocardiogram",
    duration: "45 min",
    price: "$540",
    blurb: "Standalone echocardiographic study, interpreted and reviewed with you by Dr. Halden.",
    badge: null,
  },
  {
    code: "V-04",
    name: "Pre-operative cardiac clearance",
    duration: "45 min",
    price: "$380",
    blurb: "Pre-surgical cardiac risk assessment and clearance letter for your surgical team.",
    badge: null,
  },
];

// Generate 14 days starting tomorrow
function generateDays() {
  const out: { iso: string; date: Date; day: number; month: string; weekday: string; available: boolean }[] = [];
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() + 1);
  for (let i = 0; i < 14; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
    const month = d.toLocaleDateString("en-US", { month: "short" });
    // Sundays unavailable
    const available = d.getDay() !== 0;
    out.push({
      iso: d.toISOString().slice(0, 10),
      date: d,
      day: d.getDate(),
      month,
      weekday,
      available,
    });
  }
  return out;
}

const slots = [
  "08:30", "09:00", "09:30", "10:15",
  "11:00", "13:30", "14:00", "14:45",
  "15:30", "16:00", "16:30",
];

export default function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [visitType, setVisitType] = useState<string>("V-01");
  const [visitMode, setVisitMode] = useState<"in-person" | "tele">("in-person");
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    reason: "",
    referral: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const days = useMemo(generateDays, []);
  const selectedVisit = visitTypes.find((v) => v.code === visitType)!;
  const selectedDay = days.find((d) => d.iso === date);

  function reset() {
    setStep(1);
    setVisitType("V-01");
    setDate(null);
    setTime(null);
    setForm({ first: "", last: "", email: "", phone: "", reason: "", referral: "" });
    setConfirmed(false);
  }

  function canAdvance(): boolean {
    if (step === 1) return !!visitType;
    if (step === 2) return !!date && !!time;
    if (step === 3) return !!form.first && !!form.last && /^\S+@\S+\.\S+$/.test(form.email) && form.phone.replace(/\D/g, "").length >= 7;
    return true;
  }

  if (confirmed) {
    return (
      <section id="book" className="py-24 md:py-36 border-t border-rule/30 bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-14 text-center">
          <span className="marker" style={{ color: "#F2EFE8" }}>CONFIRMATION · APPT-{Math.floor(Math.random()*9000+1000)}</span>
          <h2 className="font-display display-tight text-[clamp(2.5rem,7vw,5rem)] leading-[0.92] mt-6">
            We&rsquo;ve got you down.
          </h2>
          <p className="mt-6 text-lg text-paper/80 max-w-xl mx-auto leading-relaxed">
            {form.first} {form.last} — {selectedVisit.name.toLowerCase()} on{" "}
            {selectedDay && selectedDay.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {time}.
            A confirmation email is on its way to {form.email}. You&rsquo;ll receive intake forms 48 hours before your visit.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 border border-paper/30">
            <span className="w-1.5 h-1.5 bg-signal inline-block pulse-dot" />
            <span className="marker" style={{ color: "#F2EFE8" }}>APPOINTMENT HELD</span>
          </div>

          <div className="mt-12">
            <button onClick={reset} className="btn-ghost" style={{ borderColor: "#F2EFE8", color: "#F2EFE8" }}>
              Book another appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-24 md:py-36 border-t border-rule/30 bg-paper2/30">
      <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-14">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <span className="marker-ink marker">R-05 · APPOINTMENT</span>
          <span className="marker">SCHEDULE · 04 / 04</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <h2 className="font-display display-tight text-balance text-[clamp(2.2rem,5.4vw,4.5rem)] tracking-tightest leading-[0.92]">
              Reserve your visit.
            </h2>
            <p className="mt-6 text-lg text-ink/75 leading-relaxed">
              Four short steps. No payment until your visit. Most patients book in under two minutes.
            </p>

            {/* Step indicator */}
            <ol className="mt-10 space-y-4">
              {[
                ["01", "Select visit type"],
                ["02", "Pick a date and time"],
                ["03", "Your details"],
                ["04", "Confirm"],
              ].map(([n, t], i) => (
                <li key={n} className="flex items-center gap-4">
                  <span
                    className={`marker w-8 ${
                      step === i + 1 ? "text-signal" : step > i + 1 ? "text-ink" : ""
                    }`}
                  >
                    {step > i + 1 ? "✓" : n}
                  </span>
                  <span
                    className={`font-display text-lg tracking-tighter2 ${
                      step === i + 1 ? "" : "text-ink/50"
                    }`}
                  >
                    {t}
                  </span>
                  {step === i + 1 && (
                    <span className="flex-1 dotted-rule ml-2" />
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-12 border-t border-rule/40 pt-6">
              <p className="marker mb-3">Office</p>
              <p className="font-display text-lg leading-snug tracking-tighter2">
                132 East 67th Street<br />
                Suite 4B, New York, NY 10065
              </p>
              <p className="marker mt-4 mb-1">Hours</p>
              <p className="text-ink/75">Mon–Fri · 8:30 – 17:00<br />Sat · 9:00 – 13:00 (telehealth only)</p>
              <p className="marker mt-4 mb-1">Urgent matters</p>
              <p className="text-ink/75">Call the office line — Dr. Halden is paged directly.</p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="border border-rule/40 bg-paper">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-rule/40 px-6 md:px-8 py-4">
                <div className="flex items-center gap-4">
                  <span className="marker-ink marker">STEP {step} / 4</span>
                  <span className="hidden md:block dotted-rule w-12" />
                  <span className="marker">
                    {step === 1 && "VISIT TYPE"}
                    {step === 2 && "DATE & TIME"}
                    {step === 3 && "PATIENT DETAILS"}
                    {step === 4 && "REVIEW & CONFIRM"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((s) => (
                    <span
                      key={s}
                      className={`block h-1 w-8 ${
                        s <= step ? "bg-ink" : "bg-rule/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="px-6 md:px-8 py-8 md:py-10">
                {/* STEP 1 */}
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tighter2 leading-tight">
                      What kind of visit do you need?
                    </h3>
                    <p className="text-ink/70 mt-2">Don&rsquo;t see the right option? Call — we&rsquo;ll find one.</p>

                    <fieldset className="mt-8 space-y-3">
                      <legend className="sr-only">Visit type</legend>
                      {visitTypes.map((v) => (
                        <label
                          key={v.code}
                          className={`flex items-start gap-5 p-5 border cursor-pointer transition-colors ${
                            visitType === v.code
                              ? "border-signal bg-signal/[0.04]"
                              : "border-rule/40 hover:border-ink"
                          }`}
                        >
                          <input
                            type="radio"
                            name="visit"
                            value={v.code}
                            checked={visitType === v.code}
                            onChange={() => setVisitType(v.code)}
                            className="sr-only"
                          />
                          <span
                            className={`shrink-0 mt-1 w-4 h-4 rounded-full border-2 ${
                              visitType === v.code
                                ? "border-signal bg-signal"
                                : "border-ink"
                            } flex items-center justify-center`}
                          >
                            {visitType === v.code && (
                              <span className="block w-1.5 h-1.5 bg-paper rounded-full" />
                            )}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-baseline justify-between gap-3">
                              <p className="font-display text-xl tracking-tighter2">
                                {v.name}
                              </p>
                              <div className="flex items-center gap-3 shrink-0">
                                <span className="marker">{v.duration}</span>
                                <span className="font-display text-lg tracking-tighter2">{v.price}</span>
                              </div>
                            </div>
                            <p className="text-ink/70 mt-1.5 leading-relaxed">{v.blurb}</p>
                          </div>
                        </label>
                      ))}
                    </fieldset>

                    <div className="mt-6 flex items-center gap-3 border border-rule/40 p-4">
                      <span className="marker-ink marker">MODE</span>
                      <div className="flex border border-rule/40">
                        <button
                          type="button"
                          onClick={() => setVisitMode("in-person")}
                          className={`px-4 py-2 marker ${
                            visitMode === "in-person"
                              ? "bg-ink text-paper"
                              : "text-ink hover:bg-ink/5"
                          }`}
                        >
                          In person
                        </button>
                        <button
                          type="button"
                          onClick={() => setVisitMode("tele")}
                          className={`px-4 py-2 marker border-l border-rule/40 ${
                            visitMode === "tele"
                              ? "bg-ink text-paper"
                              : "text-ink hover:bg-ink/5"
                          }`}
                        >
                          Telehealth
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tighter2 leading-tight">
                      Pick a date.
                    </h3>
                    <p className="text-ink/70 mt-2">Same-week slots marked in green.</p>

                    <div className="mt-7 grid grid-cols-4 md:grid-cols-7 gap-2">
                      {days.map((d) => {
                        const isSelected = date === d.iso;
                        return (
                          <button
                            key={d.iso}
                            disabled={!d.available}
                            onClick={() => {
                              setDate(d.iso);
                              setTime(null);
                            }}
                            className={`px-2 py-3 border text-center transition-all ${
                              isSelected
                                ? "border-signal bg-signal text-paper"
                                : d.available
                              ? "border-rule/40 hover:border-ink hover:-translate-y-px"
                              : "border-rule/20 text-ink/30 cursor-not-allowed line-through"
                            }`}
                          >
                            <span className="block marker" style={{ color: isSelected ? "rgba(242,239,232,0.8)" : "" }}>{d.weekday}</span>
                            <span className="block font-display text-2xl md:text-3xl tracking-tighter2 mt-1">{d.day}</span>
                            <span className="block marker" style={{ color: isSelected ? "rgba(242,239,232,0.8)" : "" }}>{d.month}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-9">
                      <div className="flex items-baseline justify-between">
                        <h4 className="font-display text-2xl tracking-tighter2">
                          Available times
                        </h4>
                        <span className="marker">
                          {selectedDay
                            ? selectedDay.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
                            : "Select a date first"}
                        </span>
                      </div>

                      {date ? (
                        <div className="mt-4 grid grid-cols-3 md:grid-cols-4 gap-2">
                          {slots.map((s) => (
                            <button
                              key={s}
                              onClick={() => setTime(s)}
                              className={`py-3 border marker transition-colors ${
                                time === s
                                  ? "bg-ink text-paper border-ink"
                                  : "border-rule/40 hover:border-ink"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 border border-dashed border-rule/40 p-6 text-center">
                          <span className="marker">CHOOSE A DATE TO SEE TIMES</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tighter2 leading-tight">
                      Tell us about you.
                    </h3>
                    <p className="text-ink/70 mt-2">We use this only to prepare for your visit.</p>

                    <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-1">
                      <div>
                        <label htmlFor="first" className="label">First name</label>
                        <input id="first" className="field" placeholder="Joan"
                          value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="last" className="label">Last name</label>
                        <input id="last" className="field" placeholder="Reyes"
                          value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="email" className="label">Email</label>
                        <input id="email" type="email" className="field" placeholder="you@email.com"
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="label">Phone</label>
                        <input id="phone" type="tel" className="field" placeholder="(555) 010 9876"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="reason" className="label">Reason for visit (optional)</label>
                        <textarea id="reason" className="field resize-none" rows={2}
                          placeholder="A short note helps us prepare."
                          value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="referral" className="label">Referred by (optional)</label>
                        <input id="referral" className="field" placeholder="Dr. Patel, ZocDoc, self…"
                          value={form.referral} onChange={(e) => setForm({ ...form, referral: e.target.value })} />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tighter2 leading-tight">
                      One last look.
                    </h3>
                    <p className="text-ink/70 mt-2">Confirm the details below and we&rsquo;re done.</p>

                    <dl className="mt-8 divide-y divide-rule/30 border-y border-rule/40">
                      <div className="py-4 flex items-baseline justify-between gap-4">
                        <dt className="marker">VISIT</dt>
                        <dd className="font-display text-lg tracking-tighter2 text-right">
                          {selectedVisit.name}
                          <span className="ml-2 marker">{selectedVisit.duration}</span>
                        </dd>
                      </div>
                      <div className="py-4 flex items-baseline justify-between gap-4">
                        <dt className="marker">MODE</dt>
                        <dd className="font-display text-lg tracking-tighter2">
                          {visitMode === "in-person" ? "In person · Suite 4B" : "Telehealth · secure video"}
                        </dd>
                      </div>
                      <div className="py-4 flex items-baseline justify-between gap-4">
                        <dt className="marker">WHEN</dt>
                        <dd className="font-display text-lg tracking-tighter2 text-right">
                          {selectedDay?.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                          <span className="ml-2 marker text-signal">{time}</span>
                        </dd>
                      </div>
                      <div className="py-4 flex items-baseline justify-between gap-4">
                        <dt className="marker">FEE</dt>
                        <dd className="font-display text-lg tracking-tighter2">
                          {selectedVisit.price}
                          <span className="ml-2 marker">due at visit</span>
                        </dd>
                      </div>
                      <div className="py-4 flex items-baseline justify-between gap-4">
                        <dt className="marker">PATIENT</dt>
                        <dd className="font-display text-lg tracking-tighter2">
                          {form.first} {form.last}
                          <span className="ml-2 marker">{form.email}</span>
                        </dd>
                      </div>
                    </dl>

                    <p className="mt-6 text-sm text-ink/65 leading-relaxed">
                      By confirming you agree to a 24-hour cancellation policy. We&rsquo;ll send intake forms to your email 48 hours before your visit.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-rule/40 px-6 md:px-8 py-5 flex items-center justify-between gap-3 bg-paper2/40">
                <button
                  type="button"
                  onClick={() => step > 1 && setStep((step - 1) as Step)}
                  disabled={step === 1}
                  className="marker marker-ink disabled:opacity-30 disabled:cursor-not-allowed hover:text-signal transition-colors"
                >
                  ← Back
                </button>

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => canAdvance() && setStep((step + 1) as Step)}
                    disabled={!canAdvance()}
                    className="btn-ink disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirmed(true)}
                    className="btn-ink"
                    style={{ background: "#C8442A", borderColor: "#C8442A" }}
                  >
                    Confirm appointment
                    <span className="w-1.5 h-1.5 bg-paper rounded-full pulse-dot" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
