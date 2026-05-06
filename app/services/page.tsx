import Link from "next/link";

const services = [
  {
    title: "Cloud Data Backup",
    description:
      "Scheduled, encrypted backups with clear retention rules — so you always know what’s protected and for how long.",
  },
  {
    title: "Data Recovery",
    description:
      "Structured restore paths and tested recovery steps to get critical systems online quickly after outages or mistakes.",
  },
  {
    title: "Secure Cloud Storage",
    description:
      "Hardened storage workflows with access controls and encryption designed to reduce exposure across teams and devices.",
  },
  {
    title: "Data Migration",
    description:
      "Planned migrations between clouds or on‑prem environments with checkpoints, validation, and rollback thinking built in.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Usage and health visibility in one place — trends, alerts, and summaries your stakeholders can actually understand.",
  },
  {
    title: "Database Monitoring",
    description:
      "Performance signals, availability checks, and early warnings so database issues are caught before users feel them.",
  },
] as const;

export default function ServicesPage() {
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
            What we offer
          </p>
          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Services{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              built for uptime
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            Practical cloud data capabilities — backup, recovery, storage,
            migration, visibility, and monitoring — aligned to how real teams
            run operations.
          </p>
        </header>

        <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map(({ title, description }) => (
            <li key={title}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl backdrop-blur-sm transition-colors hover:border-slate-700 sm:p-7">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.65)]"
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold text-white sm:text-xl">
                      {title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p className="text-sm text-slate-400">
            Not sure which services fit your stack? We&apos;ll help you prioritize.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition-colors hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
