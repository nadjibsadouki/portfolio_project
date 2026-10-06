import { ArrowDown, BrainCircuit, Braces, Workflow } from 'lucide-react'

const focusAreas = ['n8n', 'AI Automation', 'API Integrations', 'Workflow Systems']

function About() {
  return (
    <section className="about-section section-space" id="about" aria-labelledby="about-title">
      <div className="about-grid page-container">
        <div className="about-copy">
          <p className="section-eyebrow type-label">
            <span className="section-eyebrow-mark" aria-hidden="true" />
            ABOUT ME
          </p>
          <h2 className="section-title type-heading" id="about-title">
            Computer science, focused on intelligent systems.
          </h2>
          <p className="about-identity">Nadjib Sadouki <span>/</span> Computer science student</p>
          <div className="about-body">
            <p>
              I&apos;m a computer science student with a strong interest in automation and
              intelligent digital systems. I&apos;ve spent the last few years learning and
              building with n8n, automation tools, APIs and AI technologies.
            </p>
            <p>
              My focus is on designing practical workflows that connect different tools,
              automate repetitive processes and create efficient digital systems.
            </p>
          </div>
          <ul className="focus-tags" aria-label="Areas of focus">
            {focusAreas.map((area) => <li key={area}>{area}</li>)}
          </ul>
        </div>

        <div
          className="about-visual fade-in"
          role="img"
          aria-label="A technical system map connecting a trigger, n8n orchestration, AI and API tools, and a validated output."
        >
          <div className="system-map-header" aria-hidden="true">
            <span className="type-label">SYSTEM MAP / 01</span>
            <span className="system-map-state"><i /> CONNECTED</span>
          </div>
          <div className="system-map" aria-hidden="true">
            <div className="system-node system-node-input">
              <span className="system-node-icon"><ArrowDown size={16} /></span>
              <span><strong>Incoming event</strong><small>WEBHOOK / INPUT</small></span>
              <i className="system-node-status" />
            </div>
            <span className="system-connector connector-one" />
            <div className="system-node system-node-core">
              <span className="system-node-icon core-icon"><Workflow size={18} /></span>
              <span><strong>Workflow orchestration</strong><small>n8n / LOGIC / ROUTING</small></span>
              <span className="system-node-code">n8n</span>
            </div>
            <div className="system-branch-lines"><span /><span /><span /></div>
            <div className="system-node-pair">
              <div className="system-node system-node-small">
                <span className="system-node-icon ai-node-icon"><BrainCircuit size={16} /></span>
                <span><strong>AI</strong><small>INTERPRET</small></span>
              </div>
              <div className="system-node system-node-small">
                <span className="system-node-icon api-node-icon"><Braces size={16} /></span>
                <span><strong>APIs</strong><small>CONNECT</small></span>
              </div>
            </div>
            <div className="system-output">
              <span className="system-output-line" />
              <span className="system-output-label type-label">TOOLS / DATA / ACTIONS</span>
              <span className="system-output-line" />
            </div>
          </div>
          <div className="system-map-footer type-code" aria-hidden="true">
            <span>INPUT <b>01</b></span><span>ROUTES <b>02</b></span><span>OUTPUT <b>READY</b></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About