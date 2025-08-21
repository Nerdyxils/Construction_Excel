import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes, luxury estates, and residential developments built to the highest standards of quality and craftsmanship.",
      icon: "fas fa-home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Custom Design", "Premium Materials", "Luxury Finishes"]
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and industrial facilities designed for functionality, aesthetics, and long-term value.",
      icon: "fas fa-building",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Modern Design", "LEED Certified", "Smart Technology"]
    },
    {
      title: "Heavy Construction",
      description: "Infrastructure projects including bridges, highways, and large-scale industrial construction with specialized equipment.",
      icon: "fas fa-hard-hat",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Heavy Equipment", "Safety First", "Large Scale Projects"]
    },
    {
      title: "Project Management",
      description: "Comprehensive project management services ensuring your construction project stays on time, within budget, and exceeds expectations.",
      icon: "fas fa-clipboard-check",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Timeline Management", "Budget Control", "Quality Assurance"]
    }
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>Our Services</motion.h2>
          <motion.p variants={itemVariants}>
            We offer comprehensive construction services tailored to meet your specific needs. 
            From initial planning to final completion, our team ensures excellence at every stage.
          </motion.p>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Service Image */}
              <div style={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                marginBottom: '1.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(201, 162, 39, 0.9)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0a0a0a'
                }}>
                  <i className={service.icon} style={{ fontSize: '1.2rem' }}></i>
                </div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              {/* Features List */}
              <motion.ul
                style={{
                  listStyle: 'none',
                  marginTop: '1rem',
                  padding: 0
                }}
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    style={{
                      padding: '0.5rem 0',
                      borderBottom: '1px solid #333',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fas fa-check" style={{ color: '#C9A227', fontSize: '1rem' }}></i>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Hover Overlay */}
              <motion.div
                className="service-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(201, 162, 39, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none'
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'rgba(201, 162, 39, 0.9)',
                    color: '#0a0a0a',
                    padding: '1rem 2rem',
                    borderRadius: '25px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  Learn More
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="services-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.1), rgba(44, 44, 44, 0.1))',
            borderRadius: '20px',
            border: '1px solid rgba(201, 162, 39, 0.2)'
          }}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              style={{
                fontSize: '3rem',
                color: '#C9A227',
                marginBottom: '1rem'
              }}
            >
              🚀
            </motion.div>
            <h3 style={{ marginBottom: '1.5rem', color: '#C9A227' }}>
              Ready to Start Your Project?
            </h3>
            <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
              Let's discuss your construction needs and create a plan that brings your vision to life. 
              Our team is ready to turn your dreams into reality.
            </p>
            <motion.div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                className="btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get Started Today
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                View Our Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
