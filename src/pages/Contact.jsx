import '../App.css'

function Contact() {
  return (
    <>
      <section className="hero" style={{ gridTemplateColumns: '1fr', marginTop: '24px' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="hero-badge">Get in Touch</p>
          <h1>
            Let's Start Your <span>Career Journey</span>
          </h1>
          <p className="hero-subtitle">
            Have questions? Want to visit our campus? Our expert counsellors are here to help you 
            choose the right course and plan your career path.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div>
          <div className="section-header left">
            <p className="section-tag">Contact Information</p>
            <h2>Visit Our Center or Talk to an Expert</h2>
            <p className="section-subtitle">
              Call us, drop a WhatsApp message or walk in to our campus for a one‑to‑one counselling session.
            </p>
          </div>
          <div className="contact-details">
            <div>
              <p className="contact-label">Call / WhatsApp</p>
              <p className="contact-value">+91 99XX 2X0 5X9</p>
              <p className="contact-value">+91 90XX 1X0 5X2</p>
              <p className="contact-value">+91 73XX 3X0 9X2</p>
            </div>
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-value">admissions@athhirabyte.com</p>
              <p className="contact-value">support@athhirabyte.com</p>
            </div>
            <div>
              <p className="contact-label">Services</p>
              <p className="contact-value">Student Training</p>
              <p className="contact-value">Student Placement</p>
              <p className="contact-value">Corporate Training</p>
            </div>
          </div>
        </div>

        <div className="map-placeholder">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&q=80" 
            alt="AthhiraByte Campus Location" 
            className="about-image"
            style={{ marginBottom: '12px', borderRadius: '16px' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <p className="map-title">Our Chennai Campus</p>
          <p className="map-subtitle">Embed Google Map / Campus Photo here</p>
          <p className="map-subtitle" style={{ marginTop: '8px' }}>
            Address: [Your Campus Address]<br />
            Chennai, Tamil Nadu, India
          </p>
        </div>
      </section>

      <section className="section muted-section">
        <div className="section-header">
          <p className="section-tag">Send Us a Message</p>
          <h2>Request a Call Back</h2>
          <p className="section-subtitle">
            Fill out the form below and our counsellor will contact you within 15 minutes.
          </p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email ID" required />
            <select defaultValue="" required>
              <option value="" disabled>
                Interested Course
              </option>
              <option>Full Stack Developer</option>
              <option>Data Science & Machine Learning</option>
              <option>Software Testing with Selenium</option>
              <option>Python / Java / .NET</option>
              <option>Power BI / Tableau</option>
              <option>AWS / Azure Cloud & DevOps</option>
            </select>
            <select defaultValue="">
              <option value="" disabled>
                Preferred Contact Time
              </option>
              <option>Morning (9 AM - 12 PM)</option>
              <option>Afternoon (12 PM - 4 PM)</option>
              <option>Evening (4 PM - 8 PM)</option>
            </select>
            <textarea placeholder="Tell us about your goal and any questions (optional)" rows={4} />
            <button className="primary-btn full-width" type="submit">
              Request Free Career Counselling
            </button>
            <p className="form-helper">No spam. No hidden fees. 100% personalised counselling.</p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

