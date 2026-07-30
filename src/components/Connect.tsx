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
          <p className={styles.eyebrow}>Let&apos;s connect</p>
          <h2>Good work usually starts with a good conversation.</h2>
          <p className={styles.connectIntro}>
            I am interested in thoughtful marketing teams, useful technology,
            practical AI, and people who care about making systems work better.
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
