import Image from "@/components/Image";
import FaqList from "@/components/FaqList";
import ComparePicker from "@/components/ComparePicker";
import { clinics, feesChecked, getClinic } from "@/data/clinics";
import { faqs } from "@/data/faqs";

const paths = [
  {
    href: "/eligibility",
    title: "Could a clinic assess me?",
    text: "Use the eligibility checklist to prepare for a clinical discussion.",
    image: "checklist",
  },
  {
    href: "/guides/costs",
    title: "What will I pay?",
    text: "Work out which fees are one-off, which recur and what costs extra.",
    image: "costs",
  },
  {
    href: "/guides/first-consultation",
    title: "What should I take?",
    text: "Gather the records and questions for your first appointment.",
    image: "consultation",
  },
];

export default function Home() {
  const payPerVisit = getClinic("alternaleaf")!;
  const bundled = getClinic("cb1-medical")!;
  return (
    <>
      <section className="home-hero">
        <div className="site-wrap hero-grid">
          <div className="hero-copy">
            <p className="section-label">
              <span aria-hidden="true" />
              UK clinic directory
            </p>
            <h1>
              Medical cannabis
              <br />
              <em>clinics, compared.</em>
            </h1>
            <p className="hero-intro">
              Compare {clinics.length} UK clinics. See what you pay to get
              started, what follow-ups cost and where to check each clinic’s
              registration.
            </p>
            <div className="hero-actions">
              <a className="btn-primary hero-cta" href="/clinics">
                Explore {clinics.length} clinics
              </a>
              <a className="text-link" href="#compare-two">
                Compare two clinics
              </a>
            </div>
          </div>
          <div className="hero-illustration">
            <Image
              priority
              src="/images/home/hero.webp"
              width={1152}
              height={768}
              sizes="(max-width: 720px) 92vw, 48vw"
              alt=""
            />
          </div>
        </div>
      </section>
      <section
        className="site-wrap quick-compare"
        id="compare-two"
        aria-labelledby="picker-heading"
      >
        <div className="quick-copy">
          <h2 id="picker-heading">Have two clinics in mind?</h2>
          <p>Put their fees and terms side by side.</p>
        </div>
        <ComparePicker
          choices={clinics.map(({ slug, name }) => ({ slug, name }))}
        />
      </section>
      <section className="site-wrap home-section">
        <div className="section-top">
          <div>
            <p className="section-label">Before you book</p>
            <h2>Your first clinic appointment</h2>
          </div>
          <a href="/guides" className="text-link">
            All patient guides
          </a>
        </div>
        <div className="path-grid">
          {paths.map((path) => (
            <a key={path.href} href={path.href} className="path-card">
              <div className="path-image">
                <Image
                  src={`/images/home/${path.image}.webp`}
                  width={720}
                  height={480}
                  sizes="(max-width: 450px) 40vw, (max-width: 900px) 180px, (max-width: 1280px) 13vw, 150px"
                  alt=""
                />
              </div>
              <div className="path-copy">
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="price-section">
        <div className="site-wrap home-section fee-explainer">
          <div>
            <p className="section-label">Understanding fees</p>
            <h2>What does the starting fee cover?</h2>
            <p className="section-intro">
              A consultation, a year of care or the first payment on a plan can
              all appear as the starting price. These two published options show
              why follow-up fees matter.
            </p>
            <a
              className="text-link"
              href={`/clinics/compare?a=${payPerVisit.slug}&b=${bundled.slug}`}
            >
              Compare these two plans
            </a>
          </div>
          <div>
            <div className="fee-examples">
              {[payPerVisit, bundled].map((clinic) => (
                <article key={clinic.slug}>
                  <h3>
                    <a href={`/clinics/${clinic.slug}`}>{clinic.name}</a>
                  </h3>
                  <dl>
                    <div>
                      <dt>{clinic.initialFeeLabel}</dt>
                      <dd>{clinic.initialFee}</dd>
                    </div>
                    <div>
                      <dt>Follow-up</dt>
                      <dd>{clinic.followUpFee}</dd>
                    </div>
                  </dl>
                  <a href={clinic.pricingUrl} className="text-link">
                    Provider fee schedule
                  </a>
                </article>
              ))}
            </div>
            <p className="price-note">
              Checked {feesChecked}. Medicine is priced separately.
            </p>
          </div>
        </div>
      </section>
      <section className="site-wrap home-section faq-home">
        <div>
          <p className="section-label">Common questions</p>
          <h2>Choosing a clinic</h2>
          <a href="/faq" className="text-link">
            Read all FAQs
          </a>
        </div>
        <FaqList faqs={faqs.slice(0, 4)} />
      </section>
    </>
  );
}
