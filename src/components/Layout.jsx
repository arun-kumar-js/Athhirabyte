import { Link, useLocation } from 'react-router-dom'
import '../App.css'

function Layout({ children }) {
  const location = useLocation()

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
        <nav className="nav-links">
          <Link to="/courses" className={isActive('/courses') ? 'active' : ''}>
            Courses
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            Why Us
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact
          </Link>
          <button className="nav-cta">Get Brochure</button>
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

