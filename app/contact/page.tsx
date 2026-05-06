"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  function validate() {
    const nextErrors: typeof errors = {};

    if (!name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!looksLikeEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    alert(
      `Thanks, ${name.trim()}! Your message was received (demo only — no backend yet).`,
    );

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  }

  const inputBase =
    "w-full rounded-xl bg-white px-4 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2";

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6 md:py-16">
      <section className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          ← Back Home
        </Link>

        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Us
        </h1>

        <p className="mt-3 max-w-lg text-slate-300 sm:text-lg">
          Need help with cloud data? Send us a message and we&apos;ll get back to
          you as soon as we can.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-slate-200"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`${inputBase} border ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
                      : "border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/40"
                  }`}
                />
                {errors.name ? (
                  <p id="contact-name-error" className="text-sm text-red-400">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-slate-200"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`${inputBase} border ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
                      : "border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/40"
                  }`}
                />
                {errors.email ? (
                  <p id="contact-email-error" className="text-sm text-red-400">
                    {errors.email}
                  </p>
                ) : null}
              </div>
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
                placeholder="Tell us how we can help..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
              className="mt-2 w-full rounded-xl bg-cyan-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg transition-colors hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-auto sm:self-start"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
