"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  ["/clinics", "Compare clinics"],
  ["/how-it-works", "How it works"],
  ["/guides", "Patient guides"],
  ["/uk-law", "UK law"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  return (
    <header className="masthead">
      <div className="site-wrap masthead-inner">
        <Logo />
        <button
          type="button"
          ref={toggle}
          className="nav-toggle"
          aria-controls="site-nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={open ? "m4 4 12 12M16 4 4 16" : "M2 5h16M2 10h16M2 15h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>{" "}
          {open ? "Close" : "Menu"}
        </button>
        <nav
          className={`site-nav${open ? " is-open" : ""}`}
          id="site-nav"
          aria-label="Main navigation"
        >
          {links.map(([href, label]) => (
            <Link
              href={href}
              key={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            className="nav-check"
            href="/eligibility"
            onClick={() => setOpen(false)}
          >
            Eligibility checklist
          </Link>
        </nav>
      </div>
    </header>
  );
}
