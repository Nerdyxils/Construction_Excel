import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

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

  const projects = [
    {
      id: 1,
      title: "Skyline Corporate Tower",
      category: "Commercial",
      description: "A 40-story state-of-the-art office tower featuring sustainable design, smart building technology, and premium amenities.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["LEED Platinum Certified", "Smart Building Technology", "Green Roof Garden", "Underground Parking"]
    },
    {
      id: 2,
      title: "Riverside Luxury Residences",
      category: "Residential",
      description: "Premium waterfront residential development with 200 luxury units, featuring panoramic river views and world-class amenities.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
      features: ["Waterfront Location", "Premium Finishes", "Rooftop Pool", "Concierge Services"]
    },
    {
      id: 3,
      title: "Metro Highway Bridge",
      category: "Infrastructure",
      description: "Major infrastructure project featuring a 2-mile cable-stayed bridge with advanced engineering and safety systems.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
      features: ["Cable-Stayed Design", "Seismic Resistant", "LED Lighting", "Pedestrian Walkways"]
    },
    {
      id: 4,
      title: "Industrial Manufacturing Complex",
      category: "Industrial",
      description: "Large-scale manufacturing facility with automated systems, clean rooms, and sustainable energy solutions.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Automated Systems", "Clean Room Technology", "Solar Power", "Heavy Equipment Access"]
    },
    {
      id: 5,
      title: "Regional Medical Center",
      category: "Healthcare",
      description: "500-bed medical center with emergency services, surgical suites, and advanced medical technology infrastructure.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Emergency Services", "Advanced OR Suites", "Healing Gardens", "Helicopter Landing"]
    },
    {
      id: 6,
      title: "University Science Complex",
      category: "Education",
      description: "Multi-building science and research complex with advanced laboratories, lecture halls, and collaborative spaces.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Research Labs", "Lecture Halls", "Student Commons", "Green Building Design"]
    }
  ]

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>Our Projects</motion.h2>
          <motion.p variants={itemVariants}>
            Explore our portfolio of successful construction projects that showcase our expertise, 
            innovation, and commitment to delivering exceptional results across various sectors.
          </motion.p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              onClick={() => openProjectModal(project)}
              style={{
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Project Info Overlay - Always Visible */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(10, 10, 10, 0.95))',
                  padding: '1.5rem',
                  color: 'white',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{ 
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  opacity: 0.9,
                  marginBottom: '1rem',
                  lineHeight: '1.4'
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  {project.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      style={{
                        background: '#C9A227',
                        color: '#0a0a0a',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textAlign: 'center',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(201, 162, 39, 0.95)',
                  color: '#0a0a0a',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  letterSpacing: '0.5px'
                }}
              >
                {project.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.9)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
              }}
              onClick={closeProjectModal}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: '#1a1a1a',
                  borderRadius: '15px',
                  maxWidth: '800px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  position: 'relative'
                }}
              >
                <button
                  onClick={closeProjectModal}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    color: '#C9A227',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    zIndex: 1
                  }}
                >
                  ✕
                </button>
                
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '15px 15px 0 0'
                  }}
                />
                
                <div style={{ padding: '2rem' }}>
                  <h2 style={{ marginBottom: '1rem', color: '#C9A227' }}>
                    {selectedProject.title}
                  </h2>
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {selectedProject.description}
                  </p>
                  
                  <h3 style={{ marginBottom: '1rem', color: '#e0e0e0' }}>
                    Key Features
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                  }}>
                    {selectedProject.features.map((feature, index) => (
                      <div
                        key={index}
                        style={{
                          background: '#2C2C2C',
                          padding: '1rem',
                          borderRadius: '8px',
                          border: '1px solid #333'
                        }}
                      >
                                                 <i className="fas fa-check" style={{ color: '#C9A227', marginRight: '0.5rem' }}></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
