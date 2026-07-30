import Image from "next/image";
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

            <h1 className={styles.name}>
              <span>Steven</span>
              <span>Morano</span>
            </h1>

            <p className={styles.heroHeadline}>{identity.headline}</p>
            <p className={styles.heroIntroduction}>{identity.introduction}</p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#experience">
                <span>View experience</span>
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

          <div className={styles.portraitColumn}>
            <div className={styles.portraitShell}>
              <div className={styles.portraitInner}>
                <Image
                  alt="Steven Morano, marketing operations leader"
                  className={styles.portrait}
                  fill
                  priority
                  sizes="(max-width: 767px) 88vw, (max-width: 1100px) 42vw, 470px"
                  src={identity.portrait}
                />
                <div className={styles.portraitWash} />
                <div className={styles.portraitCaption}>
                  <span>Marketing operations</span>
                  <span>AI-assisted systems</span>
                </div>
              </div>
            </div>

            <div className={styles.portraitNote}>
              <span>EST.</span>
              <strong>2014</strong>
              <span>MARKETING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
