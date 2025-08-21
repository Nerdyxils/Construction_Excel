import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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

  const values = [
    {
      icon: "fas fa-handshake",
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings, building trust through consistent, ethical practices."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "We embrace cutting-edge construction techniques and sustainable practices to deliver superior results that exceed expectations."
    },
    {
      icon: "fas fa-bullseye",
      title: "Results",
      description: "We are committed to delivering exceptional quality on time and within budget, ensuring client satisfaction on every project."
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>About Us</motion.h2>
          <motion.p variants={itemVariants}>
            With decades of experience in the construction industry, we've built our reputation 
            on three fundamental principles: reliability, quality, and safety. Our team of 
            skilled professionals brings expertise and dedication to every project, ensuring 
            exceptional results that stand the test of time.
          </motion.p>
        </motion.div>

        <motion.div
          className="values-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="card value-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="icon">
                <i className={value.icon}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Construction Team Image */}
        <motion.div
          className="about-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          style={{
            marginTop: '4rem',
            textAlign: 'center'
          }}
        >
          <motion.div
            variants={itemVariants}
            style={{
              width: '100%',
              height: '400px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '3rem'
            }}
          >
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              background: 'rgba(10, 10, 10, 0.8)',
              padding: '1.5rem',
              borderRadius: '10px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: '#C9A227', marginBottom: '0.5rem' }}>
                Expert Construction Team
              </h3>
              <p style={{ margin: 0, fontSize: '1rem' }}>
                Our skilled professionals bring decades of experience to every project, 
                ensuring the highest standards of safety, quality, and craftsmanship.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Statistics */}
        <motion.div
          className="company-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          style={{
            marginTop: '2rem',
            textAlign: 'center'
          }}
        >
          <motion.div
            className="stats-grid"
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}
          >
            {[
              { number: "25+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '1rem'
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#C9A227',
                    marginBottom: '0.5rem'
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: '#e0e0e0',
                    fontWeight: '500'
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
