import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 70
      const top = element.offsetTop - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => scrollToSection(e, 'home')}>
            <img src="/images/logo.svg" alt="Lion Rock Institute Logo" />
            <span>Lion Rock Institute</span>
          </a>
          <button
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
            <li><a href="#team" className="nav-link" onClick={(e) => scrollToSection(e, 'team')}>Team</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>#2 Hong Kong Think Tank</span>
            <p>2019 UPenn Global Rankings</p>
          </div>
          <h1>The Lion Rock Institute</h1>
          <p className="hero-subtitle">Promoting free market ideas to improve the lives of Hong Kongers since 2004</p>
          <a href="#about" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'about')}>Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Us</h2>
          <p className="section-subtitle">Hong Kong's independent free-market think tank</p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>To promote free market ideas throughout Hong Kong by having a direct and demonstrable impact on government policy, advancing concrete solutions to keep government small, taxes low, and restrictions on business and the individual minimal.</p>
            </div>

            <div className="about-card">
              <h3>Our History</h3>
              <p>Founded in 2004 by Andrew Work, Simon Lee, and Andrew Shuen, the Lion Rock Institute was established to ensure freedom and prosperity would continue to thrive in Hong Kong.</p>
            </div>

            <div className="about-card">
              <h3>Our Approach</h3>
              <p>We believe in individual potential and free market principles. Through research, advocacy, and education, we work to advance solutions that promote free enterprise as a path to prosperity.</p>
            </div>
          </div>

          <div className="policy-areas">
            <h3>Policy Areas</h3>
            <div className="policy-tags">
              <span>Broadcasting & Telecom</span>
              <span>Town Planning</span>
              <span>Transportation</span>
              <span>Housing</span>
              <span>Fiscal Management</span>
              <span>Competition Law</span>
              <span>Social Mobility</span>
              <span>Minimum Wage</span>
              <span>Education</span>
              <span>Health Care</span>
              <span>Financial Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team">
        <div className="container">
          <h2>Our Team</h2>
          <p className="section-subtitle">Leadership driving free market advocacy in Hong Kong</p>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">AW</div>
              <h3>Andrew Work</h3>
              <p className="team-role">Co-Founder</p>
              <p className="team-bio">CEO of New Work Media. Published in Wall Street Journal Asia and 15+ outlets. Former Executive Director of Canadian Chamber of Commerce in Hong Kong (2007-2012). Editor-in-Chief of Harbour Times.</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">AS</div>
              <h3>Andrew Shuen</h3>
              <p className="team-role">Co-Founder</p>
              <p className="team-bio">Youngest Legislative Council candidate in 2000. Economics degree from University of Michigan. Financial columnist and radio host at Digital Broadcast Corporation.</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">BS</div>
              <h3>Bill Stacey</h3>
              <p className="team-role">Director</p>
              <p className="team-bio">25 years in market reform advocacy. Senior equity analyst background with Credit Suisse. Chief Investment Officer at Hinrich Foundation. Former Chairman of the Institute.</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">NK</div>
              <h3>Koehl Nicolas Stephan</h3>
              <p className="team-role">Director</p>
              <p className="team-bio">Current director of the Lion Rock Institute, contributing to the organization's mission of promoting free market principles in Hong Kong.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p className="section-subtitle">Get in touch with the Lion Rock Institute</p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Address</h3>
              <p>Room 18, 18/F, 299 QRC<br />299 Queen's Road Central<br />Hong Kong</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>+852 3582 8673<br />+852 3582 8674</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email</h3>
              <button
                className="btn btn-link"
                onClick={() => {
                  const a = 'Communications'; const b = 'lionrockinstitute'; const c = 'org';
                  window.location.href = `mailto:${a}@${b}.${c}`;
                }}
              >
                Send us an email
              </button>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/pages/The-Lion-Rock-Institute/61151328430" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/lion_rock" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/user/TheLionRockInstitute" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/images/logo.svg" alt="Lion Rock Institute Logo" />
              <span>The Lion Rock Institute (HK) Limited</span>
            </div>
            <p className="footer-info">IRD Registered Charity | Incorporated August 8, 2007</p>
            <p className="footer-copyright">&copy; 2004 - {new Date().getFullYear()} The Lion Rock Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
