import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Compare",
    links: [
      ["/clinics", "Clinic directory"],
      ["/guides/costs", "Clinic costs"],
      ["/eligibility", "Eligibility checklist"],
    ],
  },
  {
    title: "Patient guides",
    links: [
      ["/how-it-works", "How it works"],
      ["/conditions", "Conditions"],
      ["/guides", "All guides"],
      ["/uk-law", "UK law"],
    ],
  },
  {
    title: "About Leafer",
    links: [
      ["/about", "How we compare"],
      ["/faq", "FAQs"],
      ["/glossary", "Glossary"],
      ["/contact", "Contact"],
      ["/privacy", "Privacy"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-wrap">
        <div className="footer-grid">
          <div>
            <Logo dark />
            <p>
              UK clinic comparisons and plain-English guides to medical
              cannabis.
            </p>
          </div>
          {columns.map((column) => (
            <nav aria-label={column.title} key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map(([href, name]) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-note">
          <span>© 2026 Leafer</span>
          <span>For personal medical advice, speak with your clinician.</span>
        </div>
      </div>
    </footer>
  );
}
