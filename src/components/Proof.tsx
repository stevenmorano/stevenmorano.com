import { siteContent } from "@/data/siteContent";
import SectionFrame from "./SectionFrame";
import styles from "./Portfolio.module.css";

export default function Proof() {
  return (
    <SectionFrame id="proof" label="Evidence" number="01">
      <div className={styles.proofShell}>
        <div className={styles.proofPanel}>
          <div className={styles.proofIntro}>
            <p className={styles.eyebrow}>Career evidence</p>
            <h2>Strategy is useful. Results make it credible.</h2>
            <p>
              Selected outcomes from full-time marketing roles - not fictional
              counters, sample dashboards, or consulting projections.
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
