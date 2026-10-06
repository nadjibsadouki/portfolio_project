import { useEffect, useRef, useState } from 'react'

const navigationLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navbarRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnOutsideClick = (event) => {
      if (!navbarRef.current?.contains(event.target)) setMenuOpen(false)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const handleNavigationClick = (event, href) => {
    closeMenu()

    if (href === '#top') {
      event.preventDefault()
      if (onNavigate) onNavigate(href)
      else window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (!onNavigate) return

    event.preventDefault()
    onNavigate(href)
  }

  return (
    <header
      className={`site-header${isScrolled ? ' is-scrolled' : ''}`}
      id="top"
      ref={navbarRef}
    >
      <nav className="navbar page-container" aria-label="Main navigation">
        <a className="navbar-brand" href="#top" onClick={(event) => handleNavigationClick(event, '#top')}>
          Nadjib Sadouki
        </a>

        <div className="navbar-desktop-links">
          {navigationLinks.map((link) => (
            <a className="navbar-link" href={link.href} key={link.label} onClick={(event) => handleNavigationClick(event, link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="button button-secondary navbar-cta" href="#contact" onClick={(event) => handleNavigationClick(event, '#contact')}>
          Let&apos;s Work Together
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`navbar-menu-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          <span />
          <span />
        </button>

        <div
          className={`navbar-mobile-panel${menuOpen ? ' is-open' : ''}`}
          id="mobile-navigation"
          inert={!menuOpen}
          aria-hidden={!menuOpen}
        >
          <div className="navbar-mobile-links">
            {navigationLinks.map((link) => (
              <a href={link.href} key={link.label} onClick={(event) => handleNavigationClick(event, link.href)}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="button button-primary navbar-mobile-cta"
            href="#contact"
            onClick={(event) => handleNavigationClick(event, '#contact')}
          >
            Let&apos;s Work Together
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar