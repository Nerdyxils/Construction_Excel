import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setTimeout(() => {
      setEmail('')
      setSent(false)
    }, 3500)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div className="cta-copy">
            <h3>Have a project in mind?</h3>
            <p>Let’s engineer the outcome together — on time, on budget, no surprises.</p>
          </div>
          <motion.button
            className="btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Get a Free Quote
          </motion.button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container">
        <motion.div
          className="footer-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Brand & Newsletter */}
          <motion.div className="footer-col brand" variants={itemVariants}>
            <a className="logo" href="#home" onClick={() => scrollToSection('home')}>
              Construction Excellence
            </a>
            <p className="brand-tagline">
              Building ambitious visions with precision, predictability, and performance.
            </p>

            <div className="newsletter">
              <h4>Stay in the loop</h4>
              <form onSubmit={handleSubscribe} className="newsletter-form" aria-label="Subscribe to updates">
                <div className="fields">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" className="btn" disabled={sent} aria-label="Subscribe">
                    {sent ? 'Subscribed' : 'Subscribe'}
                  </button>
                </div>
              </form>
              <p className="small muted">No spam. Unsubscribe anytime.</p>
            </div>

            {/* Trust badges */}
            <div className="trust-badges">
              <div className="badge"><i className="fas fa-shield-halved"></i> ISO 9001 Certified</div>
              <div className="badge"><i className="fas fa-helmet-safety"></i> Safety First</div>
              <div className="badge"><i className="fas fa-medal"></i> Award-Winning Team</div>
            </div>

            {/* Social */}
            <div className="social-row">
              {[
                { icon: 'fab fa-linkedin-in', label: 'LinkedIn', href: '#' },
                { icon: 'fab fa-instagram', label: 'Instagram', href: '#' },
                { icon: 'fab fa-facebook-f', label: 'Facebook', href: '#' },
                { icon: 'fab fa-twitter', label: 'Twitter', href: '#' },
                { icon: 'fab fa-youtube', label: 'YouTube', href: '#' }
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  className="social-icon"
                  whileHover={{ y: -2, scale: 1.1 }}
                  title={s.label}
                  aria-label={s.label}
                >
                  <i className={s.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h4>Company</h4>
            <ul className="link-list">
              {[
                { label: 'Home', section: 'home' },
                { label: 'About', section: 'about' },
                { label: 'Services', section: 'services' },
                { label: 'Projects', section: 'projects' },
                { label: 'Testimonials', section: 'testimonials' },
                { label: 'Contact', section: 'contact' }
              ].map((l) => (
                <li key={l.label}>
                  <a href={`#${l.section}`} onClick={() => scrollToSection(l.section)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h4>Services</h4>
            <ul className="link-list">
              {[
                'Residential Construction',
                'Commercial Construction',
                'Heavy Construction',
                'Project Management',
                'Design & Planning',
                'Quality Assurance'
              ].map((s) => (
                <li key={s}><span>{s}</span></li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h4>Contact</h4>
            <ul className="contact-list">
              <li><i className="fas fa-map-marker-alt"></i> 123 Construction Ave, Building District, City, ST 12345</li>
              <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> info@constructionexcellence.com</li>
              <li><i className="fas fa-clock"></i> Mon–Fri: 8:00 AM – 6:00 PM</li>
            </ul>
            <div className="mini-cta">
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Subfooter */}
        <div className="subfooter">
          <div className="mini-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <p className="legal">© {currentYear} Construction Excellence. All rights reserved. Licensed & Insured. Member of ABC.</p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        className="back-to-top"
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          background: '#C9A227',
          color: '#0a0a0a',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          boxShadow: '0 5px 15px rgba(201, 162, 39, 0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Back to Top"
      >
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </footer>
  )
}

export default Footer
