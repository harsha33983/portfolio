import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "../data/portfolio";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    const closeOnCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    dialog.addEventListener("cancel", closeOnCancel);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      dialog.removeEventListener("cancel", closeOnCancel);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {project && (
        <div className="project-modal-content">
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
            <X aria-hidden="true" />
          </button>
          <div className="modal-image">
            <img src={project.image} alt={project.imageAlt} width="1200" height="760" />
            <span className="modal-image-number">{project.number} — {project.category}</span>
          </div>
          <div className="modal-details">
            <p className="eyebrow">PROJECT OVERVIEW</p>
            <h2 id="project-dialog-title">{project.name}<span>.</span></h2>
            <p className="modal-intro">{project.description}</p>
            <div className="modal-detail-grid">
              <div><h3>The challenge</h3><p>{project.challenge}</p></div>
              <div><h3>The solution</h3><p>{project.solution}</p></div>
              <div><h3>Design approach</h3><p>{project.approach}</p></div>
              <div><h3>Objective</h3><p>{project.objective}</p></div>
            </div>
            <div className="modal-tech">
              <h3>Technology</h3>
              <ul className="project-tags">{project.technology.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            {project.url && <a className="modal-contact-link" href={project.url} target="_blank" rel="noreferrer">Visit the live project <ArrowUpRight aria-hidden="true" size={17} /></a>}
            <a className="modal-contact-link" href="#contact" onClick={onClose}>Have a similar project? Let’s talk <ArrowUpRight aria-hidden="true" size={17} /></a>
          </div>
        </div>
      )}
    </dialog>
  );
}
