import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleSections, { sectionAnchor } from "@/components/ArticleSections";
import GuideTile from "@/components/GuideTile";
import { getGuide, guides, guideTopics, relatedGuides } from "@/data/guides";
import styles from "../guides.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  return guide ? { title: guide.title, description: guide.description } : {};
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const topic = guideTopics.find(({ id }) => id === guide.topic)!;
  const related = relatedGuides(guide);
  return (
    <article>
      <header className={styles.articleHeader}>
        <div className="site-wrap">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/guides">Patient guides</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/guides#${topic.id}`}>{topic.short}</Link>
          </nav>
          <div className={styles.articleLead}>
            <div>
              <p className="eyebrow">
                {guide.kicker} · {guide.readTime}
              </p>
              <h1>{guide.title}</h1>
              <p className={styles.intro}>{guide.intro}</p>
            </div>
            <Image
              src={topic.image}
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
          <Link href={topic.next.href} className="btn-primary mt-8">
            {topic.next.label}
          </Link>
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
        <Link className="link-underline mt-6 inline-block" href="/guides">
          Browse all patient guides
        </Link>
      </section>
    </article>
  );
}
