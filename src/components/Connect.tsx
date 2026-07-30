import { siteContent } from "@/data/siteContent";
import { ArrowUpRightIcon } from "./Icons";
import SectionFrame from "./SectionFrame";
import styles from "./Portfolio.module.css";

export default function Connect() {
  const { identity, links } = siteContent;

  return (
    <SectionFrame id="connect" label="Find me online" number="05">
      <div className={styles.connectShell}>
        <div className={styles.connectPanel}>
          <p className={styles.eyebrow}>Links and contact</p>
          <h2>Find me around the internet.</h2>
          <p className={styles.connectIntro}>
            LinkedIn is best for my professional background. GitHub is where my
            public projects live. Email works too.
          </p>

          <a className={styles.emailLink} href={`mailto:${identity.email}`}>
            <span>{identity.email}</span>
            <span>
              <ArrowUpRightIcon />
            </span>
          </a>

          <div className={styles.linkGroups}>
            <div>
              <p className={styles.microLabel}>Primary</p>
              <div className={styles.profileLinks}>
                {links.primary.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    rel={link.external ? "noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    <div>
                      <strong>{link.label}</strong>
                      <span>{link.description}</span>
                    </div>
                    <ArrowUpRightIcon />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className={styles.microLabel}>Elsewhere</p>
              <div className={styles.elsewhereLinks}>
                {links.elsewhere.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRightIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
