import type { PageMeta } from "@/page-meta";
import Image from "@/components/Image";
import ArticleSections, { sectionAnchor } from "@/components/ArticleSections";
import GuideTile from "@/components/GuideTile";
import { getGuide, guides, guideTopics, relatedGuides } from "@/data/guides";
import styles from "../guides.module.css";

type Props = { params: { slug: string } };

export function slugs() {
  return guides.map(({ slug }) => ({ slug }));
}

export function pageMeta({ params }: Props): PageMeta {
  const guide = getGuide(params.slug);
  return guide ? { title: guide.title, description: guide.description } : {};
}

export default function GuidePage({ params }: Props) {
  const guide = getGuide(params.slug);
  if (!guide) throw new Error("Missing page record");
  const topic = guideTopics.find(({ id }) => id === guide.topic)!;
  const related = relatedGuides(guide);
  return (
    <article>
      <header className={styles.articleHeader}>
        <div className="site-wrap">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <a href="/guides">Patient guides</a>
            <span aria-hidden="true">/</span>
            <a href={`/guides#${topic.id}`}>{topic.short}</a>
          </nav>
          <div className={styles.articleLead}>
            <div>
              <p className="eyebrow">
                {guide.kicker} · {guide.readTime}
              </p>
              <h1>{guide.title}</h1>
            </div>
            <p className={styles.intro}>{guide.intro}</p>
            <Image
              src={`/images/guides/${guide.slug}.webp`}
              alt=""
              width={720}
              height={480}
              sizes="(max-width: 760px) 65vw, 32vw"
            />
          </div>
        </div>
      </header>
      <div className={`site-wrap ${styles.readLayout}`}>
        <nav aria-label="Article contents" className={styles.contents}>
          <h2>In this guide</h2>
          <ul>
            {guide.sections.map(
              (section) =>
                section.heading && (
                  <li key={section.heading}>
                    <a href={`#${sectionAnchor(section.heading)}`}>
                      {section.heading}
                    </a>
                  </li>
                ),
            )}
          </ul>
        </nav>
        <div>
          <ArticleSections sections={guide.sections} />
          <a href={topic.next.href} className="btn-primary mt-8">
            {topic.next.label}
          </a>
        </div>
      </div>
      <section className={`site-wrap ${styles.related}`}>
        <h2>Related guides</h2>
        <ul className={styles.relatedList}>
          {related.map((item) => (
            <li key={item.slug}>
              <GuideTile guide={item} />
            </li>
          ))}
        </ul>
        <a className="link-underline mt-6 inline-block" href="/guides">
          Browse all patient guides
        </a>
      </section>
    </article>
  );
}
