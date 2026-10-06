import { ArrowLeft, ArrowUpRight } from 'lucide-react'

function ProjectDetail({ project, onBack }) {
  return (
    <article className="project-detail-page section-space">
      <div className="page-container project-detail-content">
        <button className="button button-secondary project-detail-back" type="button" onClick={onBack}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Projects
        </button>

        <header className="project-detail-heading">
          <p className="project-category type-code">{project.category}</p>
          <h1 className="type-heading">{project.title}</h1>
          <p className="type-body-large">{project.description}</p>
        </header>

        {project.workflowImage && (
          <figure className="project-detail-visual">
            <div className="project-detail-image-frame">
              <img src={project.workflowImage} alt={`${project.title} workflow diagram`} />
            </div>
            <figcaption>
              <span className="type-code">WORKFLOW OVERVIEW</span>
              <a href={project.workflowImage} target="_blank" rel="noreferrer">
                View full-size image
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        )}

        <div className="project-detail-sections">
          <section className="project-detail-section">
            <p className="section-eyebrow type-label">
              <span className="section-eyebrow-mark" aria-hidden="true" />
              THE CHALLENGE
            </p>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </section>

          <section className="project-detail-section">
            <p className="section-eyebrow type-label">
              <span className="section-eyebrow-mark" aria-hidden="true" />
              THE APPROACH
            </p>
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </section>

          {project.workflowSteps?.length > 0 && (
            <section className="project-detail-section project-detail-process">
              <p className="section-eyebrow type-label">
                <span className="section-eyebrow-mark" aria-hidden="true" />
                EXECUTION FLOW
              </p>
              <h2>Workflow Process</h2>
              <ol>
                {project.workflowSteps.map((step) => (
                  <li key={step.id}>{step.title}</li>
                ))}
              </ol>
            </section>
          )}

          {project.technologies?.length > 0 && (
            <section className="project-detail-section project-detail-tech">
              <p className="section-eyebrow type-label">
                <span className="section-eyebrow-mark" aria-hidden="true" />
                TOOLING
              </p>
              <h2>Technologies</h2>
              <ul className="project-technologies" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <button className="button button-secondary project-detail-back-bottom" type="button" onClick={onBack}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Projects
        </button>
      </div>
    </article>
  )
}

export default ProjectDetail