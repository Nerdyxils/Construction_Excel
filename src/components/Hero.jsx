import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'On‑Time Delivery' },
    { value: '24/7', label: 'Client Support' }
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-pro">
      {/* Media layer */}
      <div className="hero-pro__media" aria-hidden="true">
        <video className="hero-pro__video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop">
          <source src="https://videos.pexels.com/video-files/852350/852350-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-pro__overlay" />
      </div>

      {/* Content */}
      <div className="container hero-pro__container">
        <motion.div className="hero-pro__content" variants={container} initial="hidden" animate="visible">
          <motion.h1 variants={item} className="hero-pro__title">
            Building Dreams.
            <br />
            <span>Delivering Excellence.</span>
          </motion.h1>

          <motion.p variants={item} className="hero-pro__sub">
            Premium construction partners for residential, commercial, and heavy projects.
            We deliver precision, predictability, and performance — safely and on time.
          </motion.p>

          <motion.div variants={item} className="hero-pro__cta">
            <motion.button
              className="btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('contact')}
            >
              Get Your Free Quote
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('projects')}
            >
              View Projects
            </motion.button>
          </motion.div>

          <motion.div variants={item} className="hero-pro__stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="hero-pro__scroll"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-label="Scroll to About section"
      >
        <i className="fas fa-chevron-down"></i>
        <span>Scroll</span>
      </motion.button>
    </section>
  )
}

export default Hero
