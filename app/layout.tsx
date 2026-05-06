import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const metadata: Metadata = {
  title: "Cloud Data RX",
  description:
    "Cloud backup, recovery, and data solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>

        <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
            <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
              <div>
                <p className="text-lg font-semibold tracking-tight text-white">
                  Cloud Data RX
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                  Cloud backup, recovery, and data solutions that help teams stay
                  secure, resilient, and ready for what&apos;s next.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Navigate
                </p>
                <nav className="mt-4" aria-label="Footer navigation">
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:flex sm:flex-wrap sm:gap-x-8">
                    {footerLinks.map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-slate-300 transition-colors hover:text-cyan-400"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/90">
            <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
              <p className="text-center text-xs text-slate-500 sm:text-left">
                © {year} Cloud Data RX. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
