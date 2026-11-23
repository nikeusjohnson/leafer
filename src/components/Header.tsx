"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/conditions", label: "Conditions" },
  { href: "/clinics", label: "Clinics" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/uk-law", label: "UK law" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-fast ${
        scrolled
          ? "border-b border-line bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-soft transition-colors duration-fast hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/eligibility"
            className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-cream transition-all duration-fast ease-out hover:-translate-y-0.5 hover:bg-leaf-deep"
          >
            Check eligibility
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-cream px-5 pb-6 pt-3 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/60 py-3.5 text-[16px] font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/eligibility"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Check eligibility — free
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
