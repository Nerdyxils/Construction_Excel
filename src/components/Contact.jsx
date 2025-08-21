import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      details: "123 Construction Ave, Building District, City, State 12345"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      details: "info@constructionexcellence.com"
    },
    {
      icon: "fas fa-clock",
      title: "Business Hours",
      details: "Mon-Fri: 8:00 AM - 6:00 PM"
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>Contact Us</motion.h2>
          <motion.p variants={itemVariants}>
            Ready to start your construction project? Get in touch with us today for a 
            free consultation and quote. We're here to bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="contact-content" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginTop: '3rem'
        }}>
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} style={{
              color: '#C9A227',
              marginBottom: '2rem',
              fontSize: '1.5rem'
            }}>
              Get In Touch
            </motion.h3>
            
            <motion.p variants={itemVariants} style={{
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Our team of construction experts is ready to discuss your project requirements, 
              provide professional guidance, and deliver exceptional results that exceed expectations.
            </motion.p>

            <motion.div variants={itemVariants} className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    background: '#1a1a1a',
                    borderRadius: '10px',
                    border: '1px solid #333'
                  }}
                >
                  <div style={{
                    fontSize: '1.5rem',
                    color: '#C9A227',
                    minWidth: '2rem'
                  }}>
                    <i className={info.icon}></i>
                  </div>
                  <div>
                    <h4 style={{
                      color: '#C9A227',
                      marginBottom: '0.5rem',
                      fontSize: '1rem'
                    }}>
                      {info.title}
                    </h4>
                    <p style={{
                      color: '#e0e0e0',
                      fontSize: '0.9rem',
                      margin: 0
                    }}>
                      {info.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} style={{
              color: '#C9A227',
              marginBottom: '2rem',
              fontSize: '1.5rem'
            }}>
              Send Us a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your construction project, timeline, and any specific requirements..."
                  rows="5"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '100%',
                    marginTop: '1rem'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                      background: 'rgba(76, 175, 80, 0.1)',
                      border: '1px solid #4CAF50',
                      color: '#4CAF50',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginTop: '1rem',
                      textAlign: 'center'
                    }}
                  >
                    <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          className="contact-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, #1a1a1a, #2C2C2C)',
            borderRadius: '15px',
            border: '1px solid #333'
          }}
        >
          <motion.div variants={itemVariants}>
            <h3 style={{ marginBottom: '1.5rem', color: '#C9A227' }}>
              Ready to Get Started?
            </h3>
            <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Don't wait to bring your construction vision to life. Contact us today for a 
              free consultation and let's discuss how we can help you achieve your goals.
            </p>
            <motion.button
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const form = document.querySelector('.contact-form')
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Schedule Free Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
