import { siteContent } from "@/data/siteContent";
import SectionFrame from "./SectionFrame";
import styles from "./Portfolio.module.css";

export default function Experience() {
  return (
    <SectionFrame id="experience" label="The work" number="02">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>Professional experience</p>
        <h2>
          My background is in marketing.
          <br /> Technology is how I work.
        </h2>
        <p>
          I work best in roles where I can understand the strategy, improve the
          systems behind it, and still stay close to the actual work.
        </p>
      </div>

      <div className={styles.careerLayout}>
        <aside className={styles.capabilities}>
          <p className={styles.microLabel}>What I bring</p>
          {siteContent.capabilities.map((capability) => (
            <article className={styles.capability} key={capability.number}>
              <span>{capability.number}</span>
              <div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            </article>
          ))}
        </aside>

        <div className={styles.timeline}>
          {siteContent.experience.map((experience) => (
            <article className={styles.experienceItem} key={experience.company}>
              <div className={styles.experienceMeta}>
                <span>{experience.period}</span>
                <span>{experience.company}</span>
              </div>
              <div className={styles.experienceBody}>
                <h3>{experience.role}</h3>
                <p>{experience.summary}</p>
                {experience.highlight ? (
                  <p className={styles.experienceHighlight}>
                    {experience.highlight}
                  </p>
                ) : null}
              </div>
            </article>
          ))}

          <article className={styles.originNote}>
            <span>Earlier foundation</span>
            <p>
              Before marketing, I studied design engineering and worked as a
              design engineer at Bolt Technology.
            </p>
          </article>
        </div>
      </div>
    </SectionFrame>
  );
}
