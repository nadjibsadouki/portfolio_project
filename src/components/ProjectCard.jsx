import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ project, onViewProject }) {
  const { title, shortDescription, category, technologies, workflowImage } = project

  return (
    <article className="project-card premium-card">
      <div className="project-preview" aria-label={`${title} workflow preview`}>
        {workflowImage ? (
          <img src={workflowImage} alt={`${title} workflow`} loading="lazy" />
        ) : (
          <div className="project-preview-placeholder" aria-hidden="true">
            <span className="project-preview-label type-code">WORKFLOW PREVIEW</span>
            <span className="project-preview-canvas">
              <span className="project-preview-connector" />
              <span className="project-preview-node"><i /></span>
              <span className="project-preview-node"><i /></span>
              <span className="project-preview-node"><i /></span>
            </span>
            <span className="project-preview-note">Preview not provided</span>
          </div>
        )}
      </div>

      <div className="project-card-content">
        <div className="project-card-heading">
          <p className="project-category type-code">{category}</p>
          <h3>{title}</h3>
          <p className="project-description">{shortDescription}</p>
        </div>

        <ul className="project-technologies" aria-label="Technologies">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <button
          className="project-view-button"
          type="button"
          disabled={!onViewProject}
          onClick={() => onViewProject?.(project)}
          aria-label={`View project: ${title}`}
        >
          View Project
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

export default ProjectCard