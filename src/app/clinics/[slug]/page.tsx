import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import {
  clinics,
  clinicAliases,
  feesChecked,
  getClinic,
  previousListings,
} from "@/data/clinics";
import styles from "../clinics.module.css";

export function generateStaticParams() {
  return [
    ...clinics.map((clinic) => clinic.slug),
    ...Object.keys(clinicAliases),
    ...Object.keys(previousListings),
  ].map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinic(clinicAliases[slug] ?? slug);
  if (clinic)
    return {
      title: `${clinic.name} fees and registration`,
      description: clinic.summary,
    };
  const previous = Object.hasOwn(previousListings, slug)
    ? previousListings[slug]
    : null;
  return previous
    ? {
        title: `${previous.name} listing update`,
        description: previous.note,
        robots: { index: false },
      }
    : {};
}

export default async function ClinicPage({ params }: PageProps) {
  const { slug } = await params;
  if (Object.hasOwn(clinicAliases, slug))
    permanentRedirect(`/clinics/${clinicAliases[slug]}`);
  const previous = Object.hasOwn(previousListings, slug)
    ? previousListings[slug]
    : null;
  if (previous)
    return (
      <article className={styles.wrap + " " + styles.status}>
        <Link href="/clinics" className={styles.link}>
          All clinics
        </Link>
        <h1>{previous.name}</h1>
        <p className={styles.lead}>{previous.note}</p>
        <a className={styles.link} href={previous.source}>
          {previous.label}
        </a>
      </article>
    );

  const clinic = getClinic(slug);
  if (!clinic) notFound();
  return (
    <article>
      <header className={styles.banner}>
        <div className={styles.wrap}>
          <nav aria-label="Breadcrumb" className={styles.crumb}>
            <Link href="/clinics">Clinic comparison</Link>
            <span aria-hidden="true">/</span>
            {clinic.name}
          </nav>
          <h1>{clinic.name}</h1>
          <p className={styles.lead}>{clinic.summary}</p>
          <p className={styles.checked}>
            Fees checked <time dateTime="2026-11-23">{feesChecked}</time>
          </p>
        </div>
      </header>
      <div className={styles.wrap + " " + styles.profile}>
        <div className={styles.profileBody}>
          <h2>What you’ll pay</h2>
          <dl className={styles.feePanel}>
            <div>
              <dt>{clinic.initialFeeLabel}</dt>
              <dd>{clinic.initialFee}</dd>
            </div>
            <div>
              <dt>Follow-up care</dt>
              <dd>{clinic.followUpFee}</dd>
            </div>
          </dl>
          <h3>Ongoing clinic costs</h3>
          <p>{clinic.ongoing}</p>
          <h3>Medicines and other charges</h3>
          <p>{clinic.extraCosts}</p>
          <div className={styles.sources}>
            <a href={clinic.pricingUrl} className={styles.sourceButton}>
              See the clinic’s published fees
            </a>
            {clinic.furtherReading && (
              <a href={clinic.furtherReading.url} className={styles.link}>
                {clinic.furtherReading.label}
              </a>
            )}
          </div>
        </div>
        <aside className={styles.registration}>
          <h2>Clinic details</h2>
          <dl>
            <div>
              <dt>Appointments</dt>
              <dd>{clinic.format}</dd>
            </div>
            <div>
              <dt>Regulator</dt>
              <dd>
                {clinic.regulator === "CQC"
                  ? "Care Quality Commission (England)"
                  : "Healthcare Inspectorate Wales"}
              </dd>
            </div>
            <div>
              <dt>Name on the register</dt>
              <dd>{clinic.registeredName}</dd>
            </div>
          </dl>
          <a href={clinic.regulatorUrl} className={styles.link}>
            View the {clinic.regulator} record
          </a>
          {clinic.reviewsUrl && (
            <div className={styles.reviews}>
              <a href={clinic.reviewsUrl} className={styles.link}>
                Read patient reviews on Trustpilot
              </a>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
