import Link from "next/link";

const whyPoints = [
  {
    title: "Built around recovery",
    body: "Backups matter most when restore paths are tested, documented, and ready under pressure.",
  },
  {
    title: "Security without jargon",
    body: "We explain protections plainly so your team knows what is covered — and what to plan for next.",
  },
  {
    title: "Support that responds",
    body: "Real humans help you troubleshoot outages and migration questions, not endless ticket loops.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(34,211,238,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-[radial-gradient(circle_at_70%_40%,rgba(56,189,248,0.06),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          ← Back Home
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="inline-flex w-fit items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
            About us
          </p>
          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Cloud Data RX
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            We help organizations store, protect, recover, and understand their
            data — with clarity, security, and a calm plan when things go wrong.
          </p>
        </header>

        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:gap-10">
          <section
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:p-10"
            aria-labelledby="who-we-are-heading"
          >
            <h2
              id="who-we-are-heading"
              className="text-xl font-bold text-white sm:text-2xl"
            >
              Who we are
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Cloud Data RX is a cloud data solutions partner focused on backup,
              recovery, storage, and visibility. We work with teams that cannot
              afford surprises — finance, healthcare, operations, and growing
              tech companies that need dependable data workflows without enterprise
              bloat.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Our approach blends practical tooling with straightforward guidance:
              fewer buzzwords, clearer runbooks, and recovery paths you can trust
              when minutes matter.
            </p>
          </section>

          <section
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:p-10"
            aria-labelledby="mission-heading"
          >
            <h2
              id="mission-heading"
              className="text-xl font-bold text-white sm:text-2xl"
            >
              Our mission
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Our mission is to make cloud data resilience{" "}
              <strong className="font-semibold text-white">simple, secure, and affordable</strong>{" "}
              for businesses of every size. We believe strong data protection
              should not require a massive IT department — it should be
              understandable, measurable, and maintainable.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              That means honest recommendations, proactive monitoring where it
              helps, and recovery drills so confidence is earned — not assumed.
            </p>
          </section>

          <section
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:p-10"
            aria-labelledby="why-heading"
          >
            <h2
              id="why-heading"
              className="text-xl font-bold text-white sm:text-2xl"
            >
              Why Cloud Data RX
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Teams choose us when they want a partner that treats data protection
              as operational readiness — not a checkbox.
            </p>
            <ul className="mt-8 grid gap-6 sm:gap-8 lg:grid-cols-3">
              {whyPoints.map(({ title, body }) => (
                <li
                  key={title}
                  className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.65)]"
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p className="text-sm text-slate-400">
            Ready to talk through your environment?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition-colors hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
