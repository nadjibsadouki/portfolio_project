import WorkflowVisual from '../components/WorkflowVisual.jsx'

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-grid page-container">
        <div className="hero-copy">
          <p className="hero-eyebrow type-label fade-up">
            <span className="hero-eyebrow-mark" aria-hidden="true" />
            AI AUTOMATION <span>•</span> N8N <span>•</span> WORKFLOW SYSTEMS
          </p>
          <h1 className="hero-title type-display fade-up" id="hero-title">
            Turning Complex Processes Into Intelligent Automations.
          </h1>
          <p className="hero-description fade-up">
            I design and build automation workflows with n8n, AI and APIs to connect tools,
            eliminate repetitive tasks and create smarter digital systems.
          </p>
          <div className="hero-actions fade-up">
            <a className="button button-primary" href="#workflow">
              Explore My Work <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="#contact">
              Let&apos;s Talk <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="hero-identity type-label fade-up">AI AUTOMATION &amp; N8N WORKFLOW SPECIALIST</p>
        </div>

        <div className="hero-visual-wrap">
          <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <WorkflowVisual />
        </div>
      </div>
      <a className="hero-scroll-cue type-label" href="#about" aria-label="Scroll to About">
        <span aria-hidden="true" /> SCROLL TO EXPLORE
      </a>
    </section>
  )
}

export default Hero