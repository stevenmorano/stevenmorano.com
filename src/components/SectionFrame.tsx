import type { ReactNode } from "react";
import styles from "./Portfolio.module.css";

type SectionFrameProps = {
  id: string;
  number: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export default function SectionFrame({
  id,
  number,
  label,
  children,
  className = "",
}: SectionFrameProps) {
  return (
    <section className={`${styles.section} ${className}`} id={id}>
      <div className={styles.container}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionRail} aria-hidden="true">
            <span>{number}</span>
            <span>{label}</span>
          </div>
          <div className={styles.sectionContent}>{children}</div>
        </div>
      </div>
    </section>
  );
}
