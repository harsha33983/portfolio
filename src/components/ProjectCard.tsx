import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
};

export function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  return (
    <article className={`project-card project-card-${index + 1} reveal`}>
      <button
        className="project-visual"
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`View ${project.name} project details`}
        style={{ "--project-accent": project.accent } as React.CSSProperties}
      >
        <img
          src={project.image}
          srcSet={`${project.image.replace("w=1200", "w=600")} 600w, ${project.image} 1200w`}
          sizes="(max-width: 560px) calc(100vw - 38px), (max-width: 800px) 45vw, 600px"
          alt={project.imageAlt}
          loading="lazy"
          width="1200"
          height="760"
        />
        <span className="project-visual-label">{project.number} / SELECTED PROJECT</span>
        <span className="project-visual-arrow"><ArrowUpRight aria-hidden="true" /></span>
        <span className="project-browser" aria-hidden="true">
          <span className="browser-dots"><i /><i /><i /></span>
          <span>studio.harisumanth.design</span>
        </span>
      </button>
      <div className="project-info">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>
            <button type="button" className="project-title-button" onClick={() => onSelect(project)}>
              {project.name}<ArrowUpRight aria-hidden="true" size={19} />
            </button>
          </h3>
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label="Project services">
          {project.services.map((service) => <li key={service}>{service}</li>)}
        </ul>
      </div>
    </article>
  );
}
