import type { Guide } from "@/data/guides";
import styles from "@/app/guides/guides.module.css";

export default function GuideTile({ guide }: { guide: Guide }) {
  return (
    <a href={`/guides/${guide.slug}`} className={styles.guideRow}>
      <div>
        <h3>{guide.title}</h3>
        <p>{guide.description}</p>
      </div>
      <span className={styles.time}>{guide.readTime}</span>
    </a>
  );
}
