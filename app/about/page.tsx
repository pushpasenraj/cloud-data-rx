import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cloud Data RX—how we help organizations turn raw data into trusted insights with analytics, AI, business intelligence, and cloud data engineering.",
};

const differentiators = [
  {
    title: "Insight over noise",
    body: "We prioritize questions the business can answer and decisions it can make—not vanity charts or shelf-ware dashboards.",
  },
  {
    title: "Pragmatic AI",
    body: "Automation and models earn their place when they improve quality, speed, and trust. We keep use cases grounded and measurable.",
  },
  {
    title: "Engineering you can operate",
    body: "Pipelines, platforms, and BI assets are built for maintainability: documentation, testing mindset, and handoffs your team can own.",
  },
] as const;

const values = [
  {
    title: "Clarity",
    body: "Plain language, honest tradeoffs, and definitions everyone shares—especially for metrics and “source of truth.”",
  },
  {
    title: "Rigor",
    body: "Data quality, lineage awareness, and sensible governance so insight holds up when leadership asks “how do we know?”",
  },
  {
    title: "Partnership",
    body: "We work alongside your analysts, engineers, and stakeholders—meeting you where your stack and skills are today.",
  },
  {
    title: "Momentum",
    body: "Small, shippable milestones that prove value early, then compound into a stronger analytics and intelligence foundation.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero — dark navy */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(34,211,238,0.12),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.08),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pt-16">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            ← Back to home
          </Link>

          <header className="mt-10 max-w-3xl lg:mt-12">
            <p className="inline-flex w-fit items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
              About Cloud Data RX
            </p>
            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              We help teams turn{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                data into direction
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Cloud Data RX is a Data, AI, and Business Intelligence company. We
              partner with organizations that want reliable analytics, modern
              cloud data foundations, and intelligent automation—without losing
              the thread from raw inputs to executive-ready insight.
            </p>
          </header>
        </div>
      </section>

      {/* 2. Who we are — white */}
      <section
        className="border-t border-slate-200 bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8"
        aria-labelledby="who-we-are-heading"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Who we are
          </p>
          <h2
            id="who-we-are-heading"
            className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Practitioners at the intersection of data, cloud, and decisions
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              Cloud Data RX works with operations, finance, product, revenue, and
              technology teams that are outgrowing ad hoc spreadsheets and one-off
              reports. Our focus is straightforward: connect sources responsibly,
              engineer data people can trust, and present it in formats that speed
              up real decisions.
            </p>
            <p>
              Whether you are modernizing warehouses and lakes in the cloud,
              standing up governed BI, layering in thoughtful AI automation, or
              tightening dashboard standards—we help translate ambition into an
              execution plan your organization can sustain.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our mission — dark navy */}
      <section
        className="border-t border-slate-800 bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
        aria-labelledby="mission-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400/90">
                Our mission
              </p>
              <h2
                id="mission-heading"
                className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Transform raw complexity into insights teams can repeat and rely
                on
              </h2>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Our mission is to make high-quality analytics and intelligence{" "}
                <strong className="font-semibold text-white">
                  accessible, actionable, and accountable
                </strong>
                —so leaders see a consistent picture of performance, analysts spend
                less time firefighting inconsistencies, and technical teams inherit
                patterns that scale.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                We measure success by adoption: dashboards that stick, pipelines
                that recover predictably, and definitions that survive the next
                reorg—not slide decks that age on a shelf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What makes us different — white + cards */}
      <section
        className="border-t border-slate-200 bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8"
        aria-labelledby="different-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What makes us different
            </p>
            <h2
              id="different-heading"
              className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
            >
              A consulting mindset with product-grade discipline
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We are not here to overwhelm you with technology for its own sake.
              The goal is coherent intelligence: credible numbers, repeatable
              workflows, and teams that gain confidence month over month.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {differentiators.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-cyan-200 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Our values — dark navy + cards */}
      <section
        className="border-t border-slate-800 bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400/90">
              Our values
            </p>
            <h2
              id="values-heading"
              className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
            >
              How we show up—and how we judge the work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Values are easiest to claim and hardest to demonstrate. These are the
              non-negotiables we optimize for across every engagement.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {values.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-cyan-500/35 hover:bg-slate-900/80 sm:p-7"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA — light (matches home) */}
      <section className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-slate-200 pt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-12">
          <p className="text-sm text-slate-600 sm:text-base">
            Want to explore fit, timelines, and the fastest path to clearer
            insight?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/15 transition-colors hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              View services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
