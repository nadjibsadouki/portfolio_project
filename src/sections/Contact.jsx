import { ArrowUpRight, Mail, Workflow } from 'lucide-react'
import '../styles/contact.css'

const contactEmail = 'nadjibsadouki92@gmail.com'
const contactHref = `mailto:${contactEmail}`

function Contact() {
  return (
    <section className="contact-section section-space" id="contact" aria-labelledby="contact-title">
      <div className="page-container contact-layout">
        <div className="contact-copy">
          <p className="section-eyebrow type-label">
            <span className="section-eyebrow-mark" aria-hidden="true" />
            GET IN TOUCH
          </p>
          <h2 className="section-title type-heading" id="contact-title">
            Let&apos;s Build Something Intelligent.
          </h2>
          <p className="contact-description">
            Have an automation idea, a repetitive process to improve, or a workflow that could be
            smarter? Let&apos;s discuss how it could be transformed into an efficient automated system.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={contactHref}>
              Let&apos;s Work Together
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={contactHref}>
              <Mail size={16} aria-hidden="true" />
              Send Me a Message
            </a>
          </div>
          <p className="contact-email">
            <a href={contactHref}>{contactEmail}</a>
          </p>
        </div>

        <div className="contact-visual" aria-hidden="true">
          <div className="contact-visual-header">
            <span className="type-code">AUTOMATION CHANNEL</span>
            <span className="contact-channel-status">
              <i /> READY TO CONNECT
            </span>
          </div>
          <div className="contact-flow">
            <div className="contact-flow-node">
              <span className="contact-flow-icon"><Mail size={17} strokeWidth={1.7} /></span>
              <span className="contact-flow-label">
                <strong>Your idea</strong>
                <small>START A CONVERSATION</small>
              </span>
              <span className="contact-flow-index">01</span>
            </div>
            <span className="contact-flow-connector" />
            <div className="contact-flow-node contact-flow-node-active">
              <span className="contact-flow-icon"><Workflow size={17} strokeWidth={1.7} /></span>
              <span className="contact-flow-label">
                <strong>Workflow design</strong>
                <small>n8n · AI · APIs</small>
              </span>
              <span className="contact-flow-index">02</span>
            </div>
            <span className="contact-flow-connector" />
            <div className="contact-flow-node">
              <span className="contact-flow-icon"><ArrowUpRight size={17} strokeWidth={1.7} /></span>
              <span className="contact-flow-label">
                <strong>A smarter system</strong>
                <small>BUILT AROUND YOUR NEEDS</small>
              </span>
              <span className="contact-flow-index">03</span>
            </div>
          </div>
          <div className="contact-visual-footer">
            <span>IDEA IN</span>
            <span className="contact-visual-footer-line" />
            <span>SYSTEM OUT</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact