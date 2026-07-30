import { siteContent } from "@/data/siteContent";
import SectionFrame from "./SectionFrame";
import styles from "./Portfolio.module.css";

export default function Experience() {
  return (
    <SectionFrame id="experience" label="The work" number="02">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>Experience and range</p>
        <h2>
          Marketing leadership,
          <br />
          built close to the work.
        </h2>
        <p>
          I am most useful where strategy and execution meet: building the
          operating system, understanding the numbers, helping the team, and
          getting the actual work out the door.
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
              design engineer at Bolt Technology - bridging engineering,
              manufacturing, software, IT, and business leadership.
            </p>
          </article>
        </div>
      </div>
    </SectionFrame>
  );
}
