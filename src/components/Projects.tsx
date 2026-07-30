import { siteContent, type ProjectItem } from "@/data/siteContent";
import { ArrowUpRightIcon } from "./Icons";
import ProjectVisual from "./ProjectVisuals";
import SectionFrame from "./SectionFrame";
import styles from "./Portfolio.module.css";

function ProjectText({ project }: { project: ProjectItem }) {
  return (
    <div className={styles.projectText}>
      <div className={styles.projectMeta}>
        <span>{project.eyebrow}</span>
        <span>{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className={styles.projectLearning}>{project.learning}</p>
      <div className={styles.projectTags}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {project.href ? (
        <a
          className={styles.projectLink}
          href={project.href}
          rel="noreferrer"
          target="_blank"
        >
          View project
          <span>
            <ArrowUpRightIcon />
          </span>
        </a>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <SectionFrame id="projects" label="Selected builds" number="03">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>Ideas, made tangible</p>
        <h2>
          I learn by building
          <br />
          something useful.
        </h2>
        <p>
          I am not presenting myself as a traditional software engineer. These
          projects show product judgment, technical adaptability, persistence,
          and what becomes possible when AI helps turn a bank of ideas into
          working software.
        </p>
      </div>

      <div className={styles.featuredProjects}>
        {siteContent.projects.featured.map((project, index) => (
          <article
            className={`${styles.featuredProject} ${
              index % 2 === 1 ? styles.featuredProjectReverse : ""
            }`}
            key={project.title}
          >
            <div className={styles.projectVisualShell}>
              <ProjectVisual title={project.title} visual={project.visual} />
            </div>
            <ProjectText project={project} />
          </article>
        ))}
      </div>

      <div className={styles.supportingHeader}>
        <p className={styles.microLabel}>More useful experiments</p>
        <a
          href="https://github.com/stevenmorano"
          rel="noreferrer"
          target="_blank"
        >
          Explore all public work
          <ArrowUpRightIcon />
        </a>
      </div>

      <div className={styles.supportingProjects}>
        {siteContent.projects.supporting.map((project) => (
          <article className={styles.supportingProjectShell} key={project.title}>
            <div className={styles.supportingProject}>
              <ProjectVisual title={project.title} visual={project.visual} />
              <ProjectText project={project} />
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
