import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { ArrowUpRightIcon } from "./Icons";
import SectionFrame from "./SectionFrame";
import styles from "./Portfolio.module.css";

export default function About() {
  const { about } = siteContent;

  return (
    <SectionFrame id="about" label="About me" number="04">
      <div className={styles.aboutIntro}>
        <p className={styles.eyebrow}>The tech person</p>
        <h2>{about.lead}</h2>
      </div>

      <div className={styles.aboutLayout}>
        <div className={styles.aboutPortraitShell}>
          <div className={styles.aboutPortraitInner}>
            <Image
              alt="Steven Morano"
              className={styles.aboutPortrait}
              fill
              sizes="(max-width: 680px) 90vw, 360px"
              src={siteContent.identity.portrait}
            />
          </div>
          <div className={styles.aboutPortraitCaption}>
            <span>Steven Morano</span>
            <span>Rye Brook, New York</span>
          </div>
        </div>

        <div className={styles.aboutNarrative}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className={styles.aboutNotes}>
        <article>
          <span className={styles.microLabel}>Origin</span>
          <h3>{about.origin.title}</h3>
          <p>{about.origin.description}</p>
        </article>
        <article>
          <span className={styles.microLabel}>Community</span>
          <h3>{about.community.title}</h3>
          <p>{about.community.description}</p>
          <a
            href={about.community.href}
            rel="noreferrer"
            target="_blank"
          >
            Visit the community
            <ArrowUpRightIcon />
          </a>
        </article>
      </div>

      <div className={styles.interests}>
        <span className={styles.microLabel}>Away from the screen</span>
        <div>
          {about.interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
