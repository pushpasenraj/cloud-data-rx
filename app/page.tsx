import Link from "next/link";

const highlights = [
  "Cloud Backup",
  "Data Recovery",
  "Secure Storage",
  "Analytics Dashboard",
] as const;

export default function Home() {
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

      <section className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 md:grid-cols-2 md:items-center md:gap-14 lg:gap-16 lg:px-8 lg:pt-20">
        <div className="flex flex-col">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
            Cloud · Data · Recovery
          </p>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Smart cloud data solutions{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              built for reliability
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            Cloud Data RX helps businesses store, protect, recover, and manage
            critical data — with security and clarity at every step.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 text-center text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-transparent px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Contact Sales
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-slate-800 pt-8 text-center sm:text-left">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Uptime mindset
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">Always-on</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Security-first
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">Encrypted</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Support
              </dt>
              <dd className="mt-1 text-lg font-semibold text-white">Human help</dd>
            </div>
          </dl>
        </div>

        <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-10">
          <h2 className="text-xl font-bold sm:text-2xl">Why teams choose us</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Practical tooling and responsive support so your data stays safe and
            recoverable when it matters most.
          </p>

          <ul className="mt-8 space-y-4" aria-label="Key capabilities">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-slate-200">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.65)]"
                  aria-hidden
                />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-10 inline-flex text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Learn about Cloud Data RX →
          </Link>
        </aside>
      </section>
    </main>
  );
}
