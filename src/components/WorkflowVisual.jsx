function WorkflowVisual() {
  return (
    <figure
      aria-label="Workflow diagram: a form trigger enters n8n, branches to AI and an API, then processes data into a structured result."
      className="workflow-visual fade-in"
      id="workflow"
      role="img"
    >
      <div className="workflow-window-bar">
        <div className="workflow-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="workflow-window-title">AUTOMATION / 01</span>
        <span className="workflow-live"><span className="status-indicator" data-status="active" /> ACTIVE</span>
      </div>

      <div className="workflow-canvas">
        <div className="workflow-caption type-label">WORKFLOW STATUS</div>

        <div className="workflow-node flow-trigger node-reveal node-delay-1">
          <span className="workflow-node-icon trigger-icon" aria-hidden="true">↳</span>
          <span className="workflow-node-copy">
            <strong>New request</strong>
            <small>FORM TRIGGER</small>
          </span>
          <span className="status-indicator" data-status="success" aria-label="Connected" />
        </div>

        <span className="flow-wire flow-wire-down node-delay-2" aria-hidden="true" />

        <div className="workflow-node flow-core node-reveal node-delay-2">
          <span className="workflow-core-mark" aria-hidden="true">n8n</span>
          <span className="workflow-node-copy">
            <strong>Workflow orchestration</strong>
            <small>ROUTING &amp; CONTROL</small>
          </span>
          <span className="workflow-node-tag">ACTIVE</span>
        </div>

        <div className="flow-branch-wires node-delay-3" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="workflow-branches">
          <div className="workflow-node flow-branch-node node-reveal node-delay-3">
            <span className="workflow-mini-icon ai-icon" aria-hidden="true">✳</span>
            <span className="workflow-node-copy">
              <strong>AI</strong>
              <small>CLASSIFY</small>
            </span>
            <span className="status-indicator" data-status="active" />
          </div>
          <div className="workflow-node flow-branch-node node-reveal node-delay-4">
            <span className="workflow-mini-icon api-icon" aria-hidden="true">↗</span>
            <span className="workflow-node-copy">
              <strong>API</strong>
              <small>CONNECTED</small>
            </span>
            <span className="status-indicator" data-status="success" />
          </div>
        </div>

        <div className="flow-merge-wires node-delay-4" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="workflow-node flow-process node-reveal node-delay-5">
          <span className="workflow-node-icon process-icon" aria-hidden="true">FX</span>
          <span className="workflow-node-copy">
            <strong>Process &amp; validate</strong>
            <small>TRANSFORM DATA</small>
          </span>
          <span className="workflow-node-tag">RUN</span>
        </div>

        <span className="flow-wire flow-wire-down node-delay-5" aria-hidden="true" />

        <div className="workflow-node flow-result node-reveal node-delay-6">
          <span className="workflow-result-mark" aria-hidden="true">✓</span>
          <span className="workflow-node-copy">
            <strong>Structured result</strong>
            <small>DATA PROCESSED</small>
          </span>
          <span className="workflow-result-label">READY</span>
        </div>
      </div>

      <figcaption className="workflow-footer">
        <span><span className="status-indicator" data-status="success" /> API CONNECTED</span>
        <span>AI PROCESSING <i aria-hidden="true" /></span>
      </figcaption>
    </figure>
  )
}

export default WorkflowVisual