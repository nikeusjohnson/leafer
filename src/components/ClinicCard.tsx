import type { Clinic } from "@/data/clinics";
import styles from "@/app/clinics/clinics.module.css";

export default function ClinicCard({
  clinic,
  comparison,
}: {
  clinic: Clinic;
  comparison: import("preact").ComponentChildren;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardIntro}>
        <p className={styles.model}>{clinic.tag}</p>
        <h3>
          <a href={`/clinics/${clinic.slug}`}>{clinic.name}</a>
        </h3>
        <p className={styles.description}>{clinic.summary}</p>
      </div>
      <dl className={styles.cardFees}>
        <div>
          <dt>{clinic.initialFeeLabel}</dt>
          <dd>{clinic.initialFee}</dd>
        </div>
        <div>
          <dt>Follow-up care</dt>
          <dd>{clinic.followUpFee}</dd>
        </div>
      </dl>
      <p className={styles.cardFormat}>{clinic.format}</p>
      <div className={styles.cardBottom}>
        {comparison}
        <a
          className={styles.link}
          href={`/clinics/${clinic.slug}`}
          aria-label={`View fees and sources for ${clinic.name}`}
        >
          Fees and sources
        </a>
      </div>
    </article>
  );
}
