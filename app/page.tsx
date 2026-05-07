import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data, AI & Business Intelligence Solutions",
  description:
    "Cloud Data RX helps organizations transform raw data into actionable insights with analytics, AI automation, business intelligence, cloud data engineering, and dashboard development.",
};

const heroFocus = [
  "Analytics and reporting your teams can rely on day to day",
  "AI-assisted workflows that reduce manual data prep and busywork",
  "BI and dashboards tuned to how executives and operators decide",
  "Cloud-native delivery that scales as your volumes grow",
] as const;

const coreCapabilities = [
  {
    title: "Data Analytics",
    body: "Structured analysis across your KPIs—from exploratory work to repeatable reporting that aligns teams on what the numbers actually mean.",
  },
  {
    title: "AI Automation",
    body: "Practical automation for classification, enrichment, monitoring, and handoffs so analysts spend less time wrangling and more time advising.",
  },
  {
    title: "Business Intelligence",
    body: "Semantic layers, curated datasets, and governed metrics so BI stays consistent instead of fractured across spreadsheets and shadow reports.",
  },
  {
    title: "Cloud Data Solutions",
    body: "Modern cloud patterns for ingestion, storage, and access—built for resilience, observability, and cost visibility as usage grows.",
  },
  {
    title: "Dashboard Development",
    body: "Clear, purposeful dashboards with performance, usability, and maintainability in mind—so dashboards stay trustworthy long after launch.",
  },
  {
    title: "Data Engineering",
    body: "Pipelines, modeling, and quality checks that keep data trustworthy from source systems to the tools your business users open every morning.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero — dark navy */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(34,211,238,0.12),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.08),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:grid-cols-2 md:items-center md:gap-14 lg:gap-16 lg:px-8 lg:pt-20">
          <div className="flex flex-col">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
              Data · AI · Intelligence
            </p>

            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              From raw data to{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                decisions you trust
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Cloud Data RX is a Data, AI, and Business Intelligence partner.
              We help organizations turn messy, fast-moving information into
              clear insight—through analytics, intelligent automation, modern
              cloud data platforms, and dashboards people actually use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 text-center text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View capabilities
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-transparent px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Schedule a conversation
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-1 gap-4 border-t border-slate-800 pt-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Delivery
                </dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  Cloud-first
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Outcomes
                </dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  Insight-led
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Approach
                </dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  Pragmatic AI
                </dd>
              </div>
            </dl>
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-10">
            <h2 className="text-xl font-bold sm:text-2xl">
              What we help you improve
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              A disciplined focus on trustworthy data foundations, usable
              analytics, and automation that earns adoption—not shelf-ware.
            </p>

            <ul className="mt-8 space-y-4" aria-label="Cloud Data RX focus areas">
              {heroFocus.map((item) => (
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
              Meet Cloud Data RX →
            </Link>
          </aside>
        </div>
      </section>

      {/* Core capabilities — white / light */}
      <section
        className="border-t border-slate-200 bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8"
        aria-labelledby="core-capabilities-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Core services
            </p>
            <h2
              id="core-capabilities-heading"
              className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
            >
              End-to-end support for modern data programs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Most teams do not need another buzzword—they need clarity. These
              are the areas where we typically partner: from engineering
              foundations to executive-ready intelligence.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {coreCapabilities.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition-colors hover:border-cyan-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Supporting service + CTA — dark navy */}
      <section className="border-t border-slate-800 bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400/90">
                Supporting offering
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Lead intelligence when go-to-market needs better signal
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                When your teams need cleaner targeting context—firmographics,
                intent-like signals, and account lists that match your
                strategy—we can support lead intelligence as part of a broader
                data program. It complements analytics and engineering; it is
                not the center of our practice.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-lg font-semibold">How it fits</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  Ground lists and segments in the same data standards you use
                  for reporting.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  Keep enrichment and scoring explainable—so sales and
                  marketing trust the output.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  Optional add-on to wider analytics, BI, and engineering
                  engagements.
                </li>
              </ul>
              <Link
                href="/services"
                className="mt-8 inline-flex text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                See how services are structured →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA — white */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ready to make your data easier to understand—and easier to act on?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Tell us what you are trying to measure, automate, or roll out
            next. We will help you chart a practical path from today&apos;s
            reality to a cleaner intelligence stack.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
            >
              Browse services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
