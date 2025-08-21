import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const testimonials = useMemo(() => ([
    {
      id: 1,
      quote:
        "Construction Excellence transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The project was completed on time and within budget.",
      author: "Sarah Johnson",
      company: "CEO, Johnson Properties",
      project: "Luxury Residential Complex",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      quote:
        "Working with this team was a game-changer for our business. They delivered a state-of-the-art facility that perfectly aligns with our operational needs. Professional, reliable, and exceptional quality.",
      author: "Michael Chen",
      company: "Operations Director, TechCorp",
      project: "Corporate Headquarters",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      quote:
        "The renovation project completely transformed our space. The team's expertise in modern construction techniques and sustainable practices resulted in a beautiful, energy-efficient building.",
      author: "Emily Rodriguez",
      company: "Property Manager, Urban Living",
      project: "Commercial Renovation",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      quote:
        "Outstanding project management from start to finish. They kept us informed every step of the way and delivered exceptional results. Highly recommend for any construction project.",
      author: "David Thompson",
      company: "Development Manager, Thompson Group",
      project: "Mixed-Use Development",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      quote:
        "Their commitment to safety and quality is unmatched. The healthcare facility they built for us meets all regulatory requirements and provides an excellent environment for patient care.",
      author: "Dr. Lisa Park",
      company: "Medical Director, HealthFirst",
      project: "Healthcare Facility",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop"
    }
  ]), [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const progressRef = useRef(null)

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((i) => (i + 1) % testimonials.length)
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [testimonials.length])

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(id)
  }, [isPaused, testimonials.length])

  // Progress bar animation (CSS driven via width)
  useEffect(() => {
    if (!progressRef.current) return
    progressRef.current.style.transition = 'none'
    progressRef.current.style.width = '0%'
    // kick next frame
    requestAnimationFrame(() => {
      progressRef.current.style.transition = isPaused ? 'none' : 'width 6s linear'
      progressRef.current.style.width = isPaused ? '0%' : '100%'
    })
  }, [currentIndex, isPaused])

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.35 } }
  }

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>Client Testimonials</h2>
          <p>
            Trusted by developers, investors, and brands. Real words from real clients who
            chose excellence.
          </p>
        </div>

        {/* Editorial two-column layout */}
        <div className="testimonial-grid">
          {/* Left column — trust badges and copy */}
          <div className="testimonial-aside">
            <div className="badge-bar">
              <div className="badge"><i className="fas fa-star"></i> 4.9/5 average rating</div>
              <div className="badge"><i className="fas fa-helmet-safety"></i> Safety-first delivery</div>
              <div className="badge"><i className="fas fa-award"></i> Award-winning builds</div>
            </div>
            <div className="aside-copy">
              <h3>Building trust one milestone at a time</h3>
              <p>
                From complex commercial towers to premium residences, our clients choose us
                for precision, predictability, and performance. Here’s what they say.
              </p>
            </div>
          </div>

          {/* Right column — carousel */}
          <div
            className="testimonial-carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="progress-track"><span ref={progressRef} className="progress-fill" /></div>

            <AnimatePresence mode="wait">
              <motion.article
                key={testimonials[currentIndex].id}
                className="testimonial-card-pro"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                aria-live="polite"
              >
                <div className="card-top">
                  <div className="avatar-ring">
                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} />
                  </div>
                  <div className="identity">
                    <strong>{testimonials[currentIndex].author}</strong>
                    <span>{testimonials[currentIndex].company}</span>
                  </div>
                  <div className="stars" aria-label={`${testimonials[currentIndex].rating} star rating`}>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <i key={i} className="fas fa-star" />
                    ))}
                  </div>
                </div>

                <div className="card-quote">
                  <i className="fas fa-quote-left quote-mark" aria-hidden="true" />
                  <p>“{testimonials[currentIndex].quote}”</p>
                </div>

                <div className="card-meta">
                  <span className="project-pill">
                    <i className="fas fa-building" /> {testimonials[currentIndex].project}
                  </span>
                  <div className="card-actions">
                    <button
                      className="ghost-btn"
                      onClick={() => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                      aria-label="Previous testimonial"
                    >
                      <i className="fas fa-chevron-left" />
                    </button>
                    <button
                      className="ghost-btn"
                      onClick={() => setCurrentIndex((i) => (i + 1) % testimonials.length)}
                      aria-label="Next testimonial"
                    >
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Avatar dots */}
            <div className="avatar-dots" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to testimonial by ${t.author}`}
                  className={`avatar-dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                >
                  <img src={t.avatar} alt={t.author} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA retained below section */}
        <div className="testimonials-cta block">
          <h3 style={{ marginBottom: '1.5rem', color: '#C9A227' }}>Ready to Join Our Satisfied Clients?</h3>
          <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Let’s discuss your project and add your success story to our portfolio. Join hundreds of clients who chose excellence.
          </p>
          <button
            className="btn"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
