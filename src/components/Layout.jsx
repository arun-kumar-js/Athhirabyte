import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../App.css'

function Layout({ children }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <div className="site">
      <header className="nav">
        <Link to="/" className="nav-brand" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="nav-logo">AB</span>
          <div className="nav-text">
            <span className="nav-title">AthhiraByte Academy</span>
            <span className="nav-subtitle">International IT Training & Placement</span>
          </div>
        </Link>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/courses" className={isActive('/courses') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            Courses
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            Why Us
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <button className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Get Brochure</button>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} AthhiraByte Academy. All Rights Reserved.</p>
        <p className="footer-links">
          <Link to="/courses">Courses</Link>
          <span>•</span>
          <Link to="/about">Placements</Link>
          <span>•</span>
          <Link to="/contact">Contact</Link>
        </p>
      </footer>
    </div>
  )
}

export default Layout

