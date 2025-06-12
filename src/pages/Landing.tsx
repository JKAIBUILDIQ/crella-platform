import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  const [showHero, setShowHero] = useState(false)
  const [skipIntro, setSkipIntro] = useState(false)

  useEffect(() => {
    // Show hero section after video intro
    const timer = setTimeout(() => {
      setShowHero(true)
    }, 2000) // 2 seconds for video intro

    return () => clearTimeout(timer)
  }, [])

  const handleSkipIntro = () => {
    setSkipIntro(true)
    setShowHero(true)
  }

  const scrollToFeatures = () => {
    const featuresGrid = document.querySelector('.features-grid')
    if (featuresGrid) {
      featuresGrid.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="landing">
      {/* Video Intro Section - Clean, no overlapping text */}
      {!skipIntro && (
        <div className={`video-intro ${showHero ? 'fade-out' : ''}`}>
          <video 
            autoPlay 
            muted 
            loop={false}
            onEnded={() => setShowHero(true)}
            className="intro-video"
          >
            <source src="/crella-intro.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay">
            <button 
              className="skip-intro-btn"
              onClick={handleSkipIntro}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Skip Intro
            </button>
          </div>
        </div>
      )}

      {/* Main Landing Section with Top Navigation */}
      <div className={`hero-section ${showHero || skipIntro ? 'show' : ''}`}>
        {/* Top Navigation */}
        <nav className="top-navigation">
          <div className="nav-container">
            <div className="logo-home" onClick={() => window.location.href = '/'}>
              <img src="/Public/images/topnav.svg" alt="Crella" className="nav-logo" />
            </div>
          </div>
        </nav>

        {/* Floating Side Navigation */}
        <nav className="floating-side-nav">
          <div className="floating-nav-container">
            <Link to="/tutors" className="floating-nav-link" title="Tutors">
              <div className="nav-icon">🎯</div>
              <span>Tutors</span>
            </Link>
            <Link to="/talent-map" className="floating-nav-link" title="Talent Map">
              <div className="nav-icon">🌍</div>
              <span>Talent Map</span>
            </Link>
            <Link to="/task-converter" className="floating-nav-link" title="Task Tower">
              <div className="nav-icon">🗼</div>
              <span>Task Tower</span>
            </Link>
            <Link to="/ubertasks" className="floating-nav-link" title="UberTasks">
              <div className="nav-icon">⚡</div>
              <span>UberTasks</span>
            </Link>
            <Link to="/crella-suites" className="floating-nav-link" title="Crella Suites">
              <div className="nav-icon">🏨</div>
              <span>Suites</span>
            </Link>
            <Link to="/customer" className="floating-nav-link" title="Customer">
              <div className="nav-icon">👥</div>
              <span>Customer</span>
            </Link>
            <Link to="/handler" className="floating-nav-link" title="Handler">
              <div className="nav-icon">🛠️</div>
              <span>Handler</span>
            </Link>
            <Link to="/concierge" className="floating-nav-link" title="Concierge">
              <div className="nav-icon">🤖</div>
              <span>Concierge</span>
            </Link>
          </div>
        </nav>

        {/* Background */}
        <div className="hero-background">
          <img src="/crella-mall.svg" alt="Crellaverse" className="mall-background" />
        </div>

        {/* Concierge Welcome Section */}
        <div className={`concierge-welcome ${showHero || skipIntro ? 'show' : ''}`}>
          <div className="concierge-podium">
            <div className="concierge-desk">
              <img src="/crella_claire.jpg" alt="Crella Concierge" className="concierge-avatar" />
              <div className="concierge-info">
                <h2>Welcome to Crellaverse!</h2>
                <p>Hi! I'm your personal concierge. I'm here to help you navigate through all our amazing platforms and services.</p>
                <Link to="/concierge" className="talk-to-concierge-btn">
                  <span>💬</span>
                  Chat with me
                </Link>
              </div>
            </div>
            <div className="desk-surface"></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing
