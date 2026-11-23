import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Information",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/conditions", label: "Conditions" },
      { href: "/clinics", label: "UK clinics" },
      { href: "/guides", label: "Patient guides" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/eligibility", label: "Eligibility checker" },
      { href: "/faq", label: "Patient FAQ" },
      { href: "/uk-law", label: "UK cannabis law" },
      { href: "/glossary", label: "Glossary" },
      { href: "/guides/costs", label: "What it costs" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About Leafer" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/70">
              Plain-English, independent information for UK patients exploring
              medical cannabis. No jargon, no pressure, no sales patter.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-cream/50">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[15px] text-cream/80 transition-colors duration-fast hover:text-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-cream/15 pt-8">
          <p className="max-w-3xl text-[13px] leading-relaxed text-cream/55">
            Leafer is an independent information resource, not a medical
            provider. Nothing on this site is medical advice, and we have no
            commercial relationship with any clinic or pharmacy mentioned.
            Medical cannabis is a Schedule 2 controlled drug in the UK,
            available on private prescription from a specialist doctor only.
            Always consult a registered specialist about your own care.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-cream/40">
            © 2026 Leafer · For information only · Made in the UK
          </p>
        </div>
      </div>
    </footer>
  );
}
