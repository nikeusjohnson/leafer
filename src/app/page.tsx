import Image from "next/image";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import { clinics, feesChecked } from "@/data/clinics";
import { faqs } from "@/data/faqs";

const paths = [
  {
    href: "/eligibility",
    title: "Eligibility checklist",
    text: "Find out what a specialist will need to consider.",
    image: "guide-stethoscope",
    tone: "mint",
  },
  {
    href: "/guides/costs",
    title: "Understand the costs",
    text: "See how appointments, plans and repeat fees add up.",
    image: "guide-appointments",
    tone: "peach",
  },
  {
    href: "/guides/first-consultation",
    title: "Prepare for a consultation",
    text: "Get your records and questions ready for your visit.",
    image: "guide-records",
    tone: "lilac",
  },
];

function Tick() {
  return (
    <svg
      aria-hidden="true"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m7.5 12 3.1 3.1 5.9-6.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const preview = [...clinics]
    .sort((a, b) => a.name.localeCompare(b.name, "en-GB"))
    .slice(0, 3);
  return (
    <>
      <section className="home-hero">
        <div className="site-wrap hero-grid">
          <div className="hero-copy">
            <p className="section-label">
              <span aria-hidden="true" />
              UK clinic comparison
            </p>
            <h1>
              Compare medical <em>cannabis clinics.</em>
            </h1>
            <p className="hero-intro">
              Explore UK clinics side by side. Check what appointments cost,
              what each fee covers and who regulates the service.
            </p>
            <div className="hero-actions">
              <Link className="btn-primary hero-cta" href="/clinics">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M3 10h18M12 10v10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
                Compare clinics
              </Link>
              <Link className="text-link" href="/how-it-works">
                How it works
              </Link>
            </div>
          </div>
          <div className="hero-illustration">
            <Image
              priority
              src="/images/hero-clinic.webp"
              width={1152}
              height={768}
              sizes="(max-width: 720px) 90vw, 46vw"
              alt=""
            />
          </div>
        </div>
      </section>
      <ul className="comparison-features" aria-label="About the comparison">
        {[
          "Free to compare",
          "Published clinic fees",
          "Links to regulator records",
        ].map((item) => (
          <li key={item}>
            <Tick />
            {item}
          </li>
        ))}
      </ul>
      <section className="site-wrap home-section">
        <div className="section-top">
          <div>
            <p className="section-label">Patient guides</p>
            <h2>Where would you like to start?</h2>
          </div>
          <Link href="/guides" className="text-link">
            All patient guides
          </Link>
        </div>
        <div className="path-grid">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="path-card">
              <div className={`path-image ${path.tone}`}>
                <Image
                  src={`/images/${path.image}.webp`}
                  width={720}
                  height={480}
                  sizes="(max-width: 600px) 45vw, 32vw"
                  alt=""
                />
              </div>
              <div className="path-copy">
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="price-section">
        <div className="site-wrap home-section">
          <div className="section-top">
            <div>
              <p className="section-label">Clinic fees</p>
              <h2>What do clinics charge to get started?</h2>
            </div>
            <Link href="/clinics" className="text-link">
              Compare all {clinics.length} clinics
            </Link>
          </div>
          <p className="section-intro">
            A first look at the directory, in alphabetical order. Open a profile
            for plan terms, additional charges and sources.
          </p>
          <div className="price-preview">
            <table>
              <thead>
                <tr>
                  <th scope="col">Clinic</th>
                  <th scope="col">Starting fee</th>
                  <th scope="col">Follow-up</th>
                </tr>
              </thead>
              <tbody>
                {preview.map((clinic) => (
                  <tr key={clinic.slug}>
                    <th scope="row">
                      <Link href={`/clinics/${clinic.slug}`}>
                        {clinic.name}
                      </Link>
                    </th>
                    <td>
                      <strong>{clinic.initialFee}</strong>
                      <span className="preview-fee-label">
                        {clinic.initialFeeLabel}
                      </span>
                    </td>
                    <td>{clinic.followUpFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="price-note">
            Clinic fees checked {feesChecked}. Medication is priced separately.
          </p>
        </div>
      </section>
      <section className="site-wrap home-section faq-home">
        <div>
          <p className="section-label">Common questions</p>
          <h2>Before you book</h2>
          <Link href="/faq" className="text-link">
            Read all FAQs
          </Link>
        </div>
        <FaqList faqs={faqs.slice(0, 4)} />
      </section>
    </>
  );
}
