import { siteContent } from "@/data/siteContent";
import { ArrowDownIcon, ArrowUpRightIcon } from "./Icons";
import styles from "./Portfolio.module.css";

export default function Hero() {
  const { identity } = siteContent;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.availability}>
              <span className={styles.availabilityDot} />
              {identity.availability}
            </div>

            <p className={styles.heroName}>Steven Morano</p>
            <h1 className={styles.heroHeadline}>{identity.headline}</h1>
            <p className={styles.heroIntroduction}>{identity.introduction}</p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#experience">
                <span>See my work</span>
                <span className={styles.buttonIcon}>
                  <ArrowDownIcon />
                </span>
              </a>
              <a
                className={styles.secondaryButton}
                href="https://www.linkedin.com/in/stevenmorano/"
                rel="noreferrer"
                target="_blank"
              >
                <span>LinkedIn</span>
                <span className={styles.buttonIcon}>
                  <ArrowUpRightIcon />
                </span>
              </a>
            </div>

            <div className={styles.heroFootnote}>
              <span>{identity.signature}</span>
              <span>{identity.location}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
