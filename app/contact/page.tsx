"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const SERVICE_OPTIONS = [
  "Data Analytics",
  "AI Automation",
  "Business Intelligence",
  "Cloud Data Solutions",
  "Dashboard Development",
  "Data Engineering",
  "Snowflake Solutions",
  "Lead Intelligence",
  "Multiple areas / Not sure yet",
] as const;

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState<{
    fullName?: string;
    companyName?: string;
    businessEmail?: string;
    serviceInterest?: string;
    message?: string;
  }>({});

  function dismissSuccess() {
    setSuccess(false);
  }

  function validate() {
    const nextErrors: typeof errors = {};

    if (!fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!companyName.trim()) {
      nextErrors.companyName = "Please enter your company name.";
    }

    if (!businessEmail.trim()) {
      nextErrors.businessEmail = "Please enter your business email.";
    } else if (!looksLikeEmail(businessEmail)) {
      nextErrors.businessEmail = "Please enter a valid email address.";
    }

    if (!serviceInterest) {
      nextErrors.serviceInterest = "Please select a service.";
    }

    if (!message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (message.trim().length < 10) {
      nextErrors.message = "Please add a bit more detail (at least 10 characters).";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccess(false);

    if (!validate()) {
      return;
    }

    window.alert(
      `Thanks, ${fullName.trim()} — we received your message. We'll follow up soon. (Demo: no backend is connected yet.)`,
    );

    setFullName("");
    setCompanyName("");
    setBusinessEmail("");
    setServiceInterest("");
    setMessage("");
    setErrors({});
    setSuccess(true);
  }

  const inputBase =
    "w-full rounded-xl bg-white px-4 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(34,211,238,0.12),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.08),transparent_65%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            ← Back to home
          </Link>

          <header className="mt-10 max-w-3xl lg:mt-12">
            <p className="inline-flex w-fit items-center rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
              Contact
            </p>
            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s talk about{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                your next data milestone
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Cloud Data RX supports analytics, BI, AI automation, cloud data
              programs, dashboards, engineering, and Snowflake—tell us what you are
              trying to modernize next.
            </p>
          </header>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
          <aside className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white sm:text-xl">
              What to include
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              A concise note about goals, timelines, tooling (warehouse/BI/Snowflake),
              or blockers helps us respond faster with a grounded next step.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                  aria-hidden
                />
                Current stack highlights (warehouse, ingestion, BI tools).
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                  aria-hidden
                />
                Outcomes you need (reports, KPIs, automation, dashboards).
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                  aria-hidden
                />
                Security or governance constraints worth knowing early.
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-400">
              <p>
                Prefer more context before writing? Explore{" "}
                <Link href="/services" className="font-semibold text-cyan-400 hover:text-cyan-300">
                  services
                </Link>{" "}
                or read{" "}
                <Link href="/about" className="font-semibold text-cyan-400 hover:text-cyan-300">
                  about us
                </Link>
                .
              </p>
            </div>
          </aside>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8">
            {success ? (
              <div
                role="status"
                aria-live="polite"
                className="mb-6 flex flex-col gap-3 rounded-xl border border-cyan-500/35 bg-cyan-500/10 px-4 py-4 sm:flex-row sm:items-start sm:justify-between"
              >
                <p className="text-sm leading-relaxed text-cyan-100 sm:text-base">
                  <strong className="font-semibold text-white">Message recorded.</strong>{" "}
                  Thanks for reaching out—your note is cleared below so you can submit
                  another request anytime.
                </p>
                <button
                  type="button"
                  onClick={dismissSuccess}
                  className="shrink-0 rounded-lg bg-cyan-500/20 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200 transition-colors hover:bg-cyan-500/30"
                >
                  Dismiss
                </button>
              </div>
            ) : null}

            <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-full-name"
                    className="text-sm font-medium text-slate-200"
                  >
                    Full name
                  </label>
                  <input
                    id="contact-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Taylor Morgan"
                    value={fullName}
                    onChange={(e) => {
                      if (success) setSuccess(false);
                      setFullName(e.target.value);
                    }}
                    aria-invalid={errors.fullName ? true : undefined}
                    aria-describedby={
                      errors.fullName ? "contact-full-name-error" : undefined
                    }
                    className={`${inputBase} border ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
                        : "border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/40"
                    }`}
                  />
                  {errors.fullName ? (
                    <p id="contact-full-name-error" className="text-sm text-red-400">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-company"
                    className="text-sm font-medium text-slate-200"
                  >
                    Company name
                  </label>
                  <input
                    id="contact-company"
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    placeholder="Acme Analytics LLC"
                    value={companyName}
                    onChange={(e) => {
                      if (success) setSuccess(false);
                      setCompanyName(e.target.value);
                    }}
                    aria-invalid={errors.companyName ? true : undefined}
                    aria-describedby={
                      errors.companyName ? "contact-company-error" : undefined
                    }
                    className={`${inputBase} border ${
                      errors.companyName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
                        : "border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/40"
                    }`}
                  />
                  {errors.companyName ? (
                    <p id="contact-company-error" className="text-sm text-red-400">
                      {errors.companyName}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-slate-200"
                >
                  Business email
                </label>
                <input
                  id="contact-email"
                  name="businessEmail"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={businessEmail}
                  onChange={(e) => {
                    if (success) setSuccess(false);
                    setBusinessEmail(e.target.value);
                  }}
                  aria-invalid={errors.businessEmail ? true : undefined}
                  aria-describedby={
                    errors.businessEmail ? "contact-email-error" : undefined
                  }
                  className={`${inputBase} border ${
                    errors.businessEmail
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
                      : "border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/40"
                  }`}
                />
                {errors.businessEmail ? (
                  <p id="contact-email-error" className="text-sm text-red-400">
                    {errors.businessEmail}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-service"
                  className="text-sm font-medium text-slate-200"
                >
                  Service interested in
                </label>
                <select
                  id="contact-service"
                  name="serviceInterest"
                  value={serviceInterest}
                  onChange={(e) => {
                    if (success) setSuccess(false);
                    setServiceInterest(e.target.value);
                  }}
                  aria-invalid={errors.serviceInterest ? true : undefined}
                  aria-describedby={
                    errors.serviceInterest ? "contact-service-error" : undefined
                  }
                  className={`${inputBase} cursor-pointer border ${
                    errors.serviceInterest
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
                      : "border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/40"
                  }`}
                >
                  <option value="">Select a service…</option>
                  {SERVICE_OPTIONS.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
                <p id="contact-service-helper" className="text-xs text-slate-500">
                  Aligns with the offerings on our{" "}
                  <Link href="/services" className="text-cyan-400 underline-offset-4 hover:text-cyan-300 hover:underline">
                    services page
                  </Link>
                  .
                </p>
                {errors.serviceInterest ? (
                  <p id="contact-service-error" className="text-sm text-red-400">
                    {errors.serviceInterest}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Share goals, timelines, tooling, stakeholders, constraints…"
                  value={message}
                  onChange={(e) => {
                    if (success) setSuccess(false);
                    setMessage(e.target.value);
                  }}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`min-h-[140px] w-full resize-y rounded-xl border bg-white px-4 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
                      : "border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/40"
                  }`}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="text-sm text-red-400">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="mt-1 w-full rounded-xl bg-cyan-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto sm:self-start"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
