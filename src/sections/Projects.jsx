import { Workflow } from 'lucide-react'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

function Projects({ onViewProject }) {
  return (
    <section className="projects-section section-space" id="projects" aria-labelledby="projects-title">
      <div className="page-container">
        <div className="projects-heading">
          <p className="section-eyebrow type-label">
            <span className="section-eyebrow-mark" aria-hidden="true" />
            SELECTED WORK
          </p>
          <div className="projects-heading-copy">
            <h2 className="section-title type-heading" id="projects-title">
              Automation Workflows Built With Purpose.
            </h2>
            <p>
              Explore automation systems designed to connect tools, streamline processes and turn
              repetitive operations into intelligent workflows.
            </p>
          </div>
        </div>

        {projects.length > 0 ? (
          <div className={`projects-grid${projects.length === 1 ? ' projects-grid-single' : ''}`}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewProject={onViewProject}
              />
            ))}
          </div>
        ) : (
          <div className="projects-empty" role="status">
            <div className="projects-empty-copy">
              <span className="projects-empty-icon" aria-hidden="true">
                <Workflow size={21} strokeWidth={1.6} />
              </span>
              <p className="type-code">PROJECT ARCHIVE</p>
              <h3>No projects published yet.</h3>
              <span>Project case studies will appear here.</span>
            </div>
            <div className="projects-empty-canvas" aria-hidden="true">
              <span className="projects-empty-frame" />
              <span className="projects-empty-frame" />
              <span className="projects-empty-frame" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects