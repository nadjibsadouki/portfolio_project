import { useLayoutEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'
import Footer from './components/Footer.jsx'
import './styles/hero.css'
import './styles/sections.css'

function App() {
  const [activeProject, setActiveProject] = useState(null)
  const pendingNavigation = useRef(null)

  useLayoutEffect(() => {
    if (activeProject || !pendingNavigation.current) return undefined

    const targetId = pendingNavigation.current
    pendingNavigation.current = null
    const frame = window.requestAnimationFrame(() => {
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [activeProject])

  const handleViewProject = (project) => {
    setActiveProject(project)
    window.requestAnimationFrame(() => window.scrollTo(0, 0))
  }

  const handleBackToProjects = () => {
    pendingNavigation.current = 'projects'
    setActiveProject(null)
  }

  const handleDetailNavigation = (href) => {
    pendingNavigation.current = href.slice(1)
    setActiveProject(null)
  }

  return (
    <div className="app-shell">
      <Navbar onNavigate={activeProject ? handleDetailNavigation : undefined} />
      <main aria-label="Nadjib Sadouki portfolio">
        {activeProject ? (
          <ProjectDetail project={activeProject} onBack={handleBackToProjects} />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Projects onViewProject={handleViewProject} />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
