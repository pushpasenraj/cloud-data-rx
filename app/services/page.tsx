import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cloud Data RX services include data analytics, AI automation, business intelligence, cloud data solutions, dashboards, data engineering, Snowflake, and lead intelligence.",
};

const services = [
  {
    title: "Data Analytics",
    description:
      "KPI frameworks, exploratory analysis, and reporting that aligns teams around consistent definitions—not conflicting spreadsheet versions.",
  },
  {
    title: "AI Automation",
    description:
      "Practical automation for classification, enrichment, routing, and monitoring so analysts reclaim time without sacrificing explainability.",
  },
  {
    title: "Business Intelligence",
    description:
      "Governed metrics, curated datasets, and BI layers purpose-built so leaders get one credible story—not ten competing dashboards.",
  },
  {
    title: "Cloud Data Solutions",
    description:
      "Modern ingestion, storage, and access patterns across the cloud—with observability and cost-conscious design as first-class concerns.",
  },
  {
    title: "Dashboard Development",
    description:
      "Purpose-built dashboards for executives and operators, optimized for clarity, speed, and long-term maintainability.",
  },
  {
    title: "Data Engineering",
    description:
      "Reliable pipelines, modeling discipline, validation, and handoffs—so downstream analytics and BI rest on dependable foundations.",
  },
  {
    title: "Snowflake Solutions",
    description:
      "Snowflake-aligned architecture, workloads, performance tuning, governance patterns, and collaboration models your team can sustain.",
  },
  {
    title: "Lead Intelligence",
    badge: "Supporting",
    description:
      "Firmer targeting context—account lists, firmographics, and signal-oriented views that plug into broader analytics programs when GTM teams need sharper lists.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(34,211,238,0.12),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.08),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pt-16">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            ← Back to home
          </Link>

          <header className="mt-10 max-w-3xl lg:mt-12">
            <p className="inline-flex w-fit items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
              Services
            </p>
            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From data foundations to{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                decisions at scale
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Cloud Data RX is a Data, AI, and Business Intelligence company. We
              deliver outcomes across analytics, automation, BI, cloud platforms,
              engineering, and Snowflake—plus optional lead intelligence when
              targeting workflows need tighter signal.
            </p>
          </header>
        </div>
      </section>

      {/* Service cards */}
      <section
        className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        aria-labelledby="services-grid-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2
              id="services-grid-heading"
              className="text-xl font-bold tracking-tight text-white sm:text-2xl"
            >
              What we deliver
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              Each engagement is scoped to your stack and goals—focused sprints or
              longer programs—with clear milestones and pragmatic delivery.
            </p>
          </div>

          <ul className="mt-12 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((item) => {
              const badge = "badge" in item ? item.badge : undefined;
              return (
                <li key={item.title}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-lg shadow-black/10 transition-colors hover:border-cyan-300/70 hover:shadow-xl sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold sm:text-xl">
                        {item.title}
                      </h3>
                      {badge ? (
                        <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-cyan-800">
                          {badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                    <span
                      className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-70"
                      aria-hidden
                    />
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Want a practical roadmap—not a vague “data strategy” deck?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Tell us what you are aiming to measure, automate, or modernize next.
              We will help you sequence the work so early wins compound into a
              stronger analytics and intelligence foundation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-blue-600/25 transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
              >
                Start a conversation
              </Link>
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
              >
                Read about us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
