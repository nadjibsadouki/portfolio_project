import '../styles/footer.css'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <div className="footer-identity">
            <a className="footer-name" href="#home">Nadjib Sadouki</a>
            <p className="footer-role">AI Automation &amp; n8n Workflow Specialist</p>
            <p className="footer-summary">
              Building practical automation systems with n8n, AI and APIs.
            </p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Nadjib Sadouki</span>
          <span>Designed for better-connected workflows.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer