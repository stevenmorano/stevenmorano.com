import { siteContent, type ProjectItem } from "@/data/siteContent";
import { ArrowUpRightIcon } from "./Icons";
import SectionFrame from "./SectionFrame";
import styles from "./Portfolio.module.css";

type ProjectCardProps = {
  project: ProjectItem;
  number: string;
  featured?: boolean;
};

function ProjectCard({
  project,
  number,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={
        featured ? styles.featuredProject : styles.supportingProjectShell
      }
    >
      <div className={styles.projectTopline}>
        <span>{number}</span>
        <span>{project.status}</span>
      </div>

      <div className={styles.projectText}>
        <p className={styles.projectEyebrow}>{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

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
            View repository
            <span>
              <ArrowUpRightIcon />
            </span>
          </a>
        ) : (
          <span className={styles.privateProjectNote}>Private repository</span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <SectionFrame id="projects" label="Things I build" number="03">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>Selected projects</p>
        <h2>Ideas I am turning into working software.</h2>
        <p>
          I am a marketer, not a traditional software engineer. I build because
          I like figuring out how things work, and AI has made it possible for
          me to turn more of my ideas into real tools.
        </p>
      </div>

      <div className={styles.featuredProjects}>
        {siteContent.projects.featured.map((project, index) => (
          <ProjectCard
            featured
            key={project.title}
            number={`0${index + 1}`}
            project={project}
          />
        ))}
      </div>

      <div className={styles.supportingHeader}>
        <p className={styles.microLabel}>More experiments</p>
        <a
          href="https://github.com/stevenmorano"
          rel="noreferrer"
          target="_blank"
        >
          See everything on GitHub
          <ArrowUpRightIcon />
        </a>
      </div>

      <div className={styles.supportingProjects}>
        {siteContent.projects.supporting.map((project, index) => (
          <ProjectCard
            key={project.title}
            number={`0${index + 3}`}
            project={project}
          />
        ))}
      </div>
    </SectionFrame>
  );
}
