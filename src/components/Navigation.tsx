import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  if (isHomePage) {
    return null // Hide navigation on landing page for clean intro experience
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Crellaverse</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/tutors" 
            className={`nav-link ${location.pathname === '/tutors' ? 'active' : ''}`}
          >
            🎯 Tutors
          </Link>
          <Link 
            to="/talent-map" 
            className={`nav-link ${location.pathname === '/talent-map' ? 'active' : ''}`}
          >
            🌍 Talent Map
          </Link>
          <Link 
            to="/task-converter" 
            className={`nav-link ${location.pathname === '/task-converter' ? 'active' : ''}`}
          >
            🔄 Tasks
          </Link>
          <Link 
            to="/ubertasks" 
            className={`nav-link ${location.pathname === '/ubertasks' ? 'active' : ''}`}
          >
            ⚡ UberTasks
          </Link>
          <Link 
            to="/crella-suites" 
            className={`nav-link ${location.pathname === '/crella-suites' ? 'active' : ''}`}
          >
            🏨 Suites
          </Link>
          <Link 
            to="/customer" 
            className={`nav-link ${location.pathname === '/customer' ? 'active' : ''}`}
          >
            👥 Customer
          </Link>
          <Link 
            to="/handler" 
            className={`nav-link ${location.pathname === '/handler' ? 'active' : ''}`}
          >
            🛠️ Handler
          </Link>
          <Link 
            to="/concierge" 
            className={`nav-link ${location.pathname === '/concierge' ? 'active' : ''}`}
          >
            🤖 Concierge
          </Link>
        </div>

        <Link to="/" className="home-button">
          🏠 Home
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
