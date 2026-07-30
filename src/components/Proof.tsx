import { siteContent } from "@/data/siteContent";
import SectionFrame from "./SectionFrame";
import styles from "./Portfolio.module.css";

export default function Proof() {
  return (
    <SectionFrame id="proof" label="Evidence" number="01">
      <div className={styles.proofShell}>
        <div className={styles.proofPanel}>
          <div className={styles.proofIntro}>
            <p className={styles.eyebrow}>A few numbers</p>
            <h2>Results from my marketing career.</h2>
            <p>
              These figures come from the full-time roles listed below.
            </p>
          </div>

          <div className={styles.proofGrid}>
            {siteContent.proof.map((item) => (
              <article className={styles.proofItem} key={item.label}>
                <strong>{item.value}</strong>
                <h3>{item.label}</h3>
                <p>{item.context}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
