import Image from "next/image";
import type { ProjectVisual } from "@/data/siteContent";
import { HomeLineIcon } from "./Icons";
import styles from "./Portfolio.module.css";

type ProjectVisualProps = {
  visual: ProjectVisual;
  title: string;
};

function HomeSystemVisual() {
  return (
    <div className={styles.homeVisual}>
      <div className={styles.homeVisualTop}>
        <div>
          <span className={styles.visualKicker}>HOME / SYSTEM</span>
          <strong>208 Valley Terrace</strong>
        </div>
        <span className={styles.visualStatus}>Prototype</span>
      </div>
      <div className={styles.homeVisualGrid}>
        <div className={styles.homeIconPanel}>
          <HomeLineIcon />
          <span>Everything your home needs to remember.</span>
        </div>
        <div className={styles.homeTaskPanel}>
          <span className={styles.visualKicker}>NEXT UP</span>
          <strong>3 items this month</strong>
          <div className={styles.progressTrack}>
            <span />
          </div>
        </div>
      </div>
      <div className={styles.systemRows}>
        {[
          ["HVAC", "Filter and service history"],
          ["ROOF", "Inspection and documents"],
          ["WATER", "Equipment and recurring care"],
        ].map(([name, detail]) => (
          <div key={name}>
            <span>{name}</span>
            <p>{detail}</p>
            <i aria-hidden="true" />
          </div>
        ))}
      </div>
      <span className={styles.conceptLabel}>Interface concept - product in development</span>
    </div>
  );
}

function ThreadsFlowVisual() {
  return (
    <div className={styles.threadsVisual}>
      <span className={styles.visualKicker}>HUMAN-IN-THE-LOOP</span>
      <div className={styles.flowNodes}>
        {[
          ["01", "Research"],
          ["02", "Draft"],
          ["03", "Review"],
          ["04", "Publish"],
        ].map(([number, label], index) => (
          <div className={styles.flowNode} key={number}>
            <span>{number}</span>
            <strong>{label}</strong>
            {index < 3 ? <i aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
      <p>AI handles the blank page. Judgment stays with the person.</p>
    </div>
  );
}

function FramePreviewVisual() {
  return (
    <div className={styles.frameVisual}>
      <div className={styles.frameOuter}>
        <div className={styles.frameMat}>
          <div className={styles.framePrint}>
            <span>12 × 16</span>
          </div>
        </div>
      </div>
      <div className={styles.frameDetails}>
        <span>WALNUT / 0.75 IN</span>
        <span>WARM WHITE MAT / 2.5 IN</span>
      </div>
    </div>
  );
}

export default function ProjectVisual({ visual, title }: ProjectVisualProps) {
  if (visual === "home-system") {
    return <HomeSystemVisual />;
  }

  if (visual === "threads-flow") {
    return <ThreadsFlowVisual />;
  }

  if (visual === "frame-preview") {
    return <FramePreviewVisual />;
  }

  const imageByVisual = {
    "mindful-eating": "/projects/mindful-eating.png",
    floorplan: "/projects/floorplan-digitizer.png",
    "chatgpt-tool": "/projects/chatgpt-bulk-delete.png",
  } as const;

  const image = imageByVisual[visual];

  return (
    <div className={styles.projectScreenshot}>
      <Image
        alt={`${title} interface`}
        fill
        sizes="(max-width: 767px) 92vw, (max-width: 1100px) 50vw, 560px"
        src={image}
      />
    </div>
  );
}
