import type { Metadata } from "next";
import Image from "next/image";
import GuideTile from "@/components/GuideTile";
import { guideTopics, guides } from "@/data/guides";
import styles from "./guides.module.css";

export const metadata: Metadata = {
  title: "Patient guides",
  description:
    "Compare clinic fees, plan a transfer, prepare for an appointment and find guidance on living with a prescription.",
};

export default function GuidesIndex() {
  return (
    <>
      <header className={styles.mast}>
        <div className={`site-wrap ${styles.mastInner}`}>
          <div>
            <p className="eyebrow">Patient guides</p>
            <h1>Your guide to UK clinic care</h1>
          </div>
          <p className={styles.intro}>
            From comparing two fee schedules to arranging a handover between
            clinics, find the guide for the decision in front of you.
          </p>
          <nav className={styles.topicNav} aria-label="Browse by topic">
            {guideTopics.map((topic) => (
              <a href={`#${topic.id}`} key={topic.id}>
                {topic.short}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div className="site-wrap">
        {guideTopics.map((topic) => (
          <section
            className={styles.group}
            key={topic.id}
            id={topic.id}
            aria-labelledby={`heading-${topic.id}`}
          >
            <header className={styles.groupHeading}>
              <div className={styles.groupCopy}>
                <h2 id={`heading-${topic.id}`}>{topic.title}</h2>
                <p className={styles.groupDescription}>{topic.intro}</p>
              </div>
              <Image
                className={styles.groupArt}
                src={topic.image}
                alt=""
                width={720}
                height={480}
                sizes="(max-width: 760px) 30vw, 17rem"
              />
            </header>
            <ul className={styles.guideList}>
              {guides
                .filter((guide) => guide.topic === topic.id)
                .map((guide) => (
                  <li key={guide.slug}>
                    <GuideTile guide={guide} />
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
