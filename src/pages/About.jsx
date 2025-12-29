import '../App.css'

function About() {
  return (
    <>
      <section className="hero" style={{ gridTemplateColumns: '1fr', marginTop: '24px' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="hero-badge">Why Choose AthhiraByte</p>
          <h1>
            Your <span>Career Success</span> Partner
          </h1>
          <p className="hero-subtitle">
            We're not just a training institute – we're your bridge to a successful tech career. 
            With 20+ years of excellence, we've helped 45,000+ students land their dream jobs.
          </p>
          <div className="hero-image-container" style={{ marginTop: '20px' }}>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop&q=80" 
              alt="AthhiraByte Academy Campus" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder" style={{ display: 'none' }}>
              🏢 Our Modern Campus
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section muted-section">
        <div className="section-header">
          <p className="section-tag">Why AthhiraByte</p>
          <h2>More Than Just a Training Center</h2>
          <p className="section-subtitle">
            A complete career ecosystem: from first class to first day at your dream company.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-item">
            <h3>Job Assist Program</h3>
            <p>
              Dedicated placement team, curated interviews, resume branding, LinkedIn optimisation 
              and soft-skills training included with every flagship course.
            </p>
          </div>
          <div className="why-item">
            <h3>Global-Standard Curriculum</h3>
            <p>
              Regularly updated syllabus aligned to international industry expectations so you are 
              prepared for roles in India and overseas.
            </p>
          </div>
          <div className="why-item">
            <h3>Mentors from Top Companies</h3>
            <p>
              Learn directly from working professionals from leading MNCs who bring real project 
              experience into every session.
            </p>
          </div>
          <div className="why-item">
            <h3>Premium Learning Experience</h3>
            <p>
              Small batch size, guided labs, code reviews and learning dashboard to track your 
              progress week-by-week.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="section-header">
          <p className="section-tag">Our Impact</p>
          <h2>Numbers That Speak</h2>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">45,000+</span>
            <span className="stat-label">Students Placed</span>
            <p className="stat-description">Successfully placed in top tech companies worldwide</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">6400+</span>
            <span className="stat-label">Hiring Partners</span>
            <p className="stat-description">Active partnerships with leading tech companies</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">20+</span>
            <span className="stat-label">Years Experience</span>
            <p className="stat-description">Two decades of excellence in IT training</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">4.9 / 5</span>
            <span className="stat-label">Average Rating</span>
            <p className="stat-description">Rated by thousands of satisfied students</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section muted-section">
        <div className="section-header">
          <p className="section-tag">Student Stories</p>
          <h2>Learners Who Trusted Us</h2>
          <p className="section-subtitle">
            From fresh graduates to career switchers, our learners now work at leading product 
            and service companies worldwide.
          </p>
        </div>

        <div className="reviews-grid">
          <article className="review-card">
            <img 
              src="https://i.pravatar.cc/150?img=12" 
              alt="Akshay Kumar" 
              className="review-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p className="review-text">
              "AthhiraByte's Full Stack program gave me exactly what I needed – practical projects, 
              strong fundamentals and continuous interview support. I cracked my dream role in 90 days."
            </p>
            <p className="review-name">Akshay Kumar</p>
            <p className="review-role">Full Stack Developer, Product Company in Bangalore</p>
          </article>
          <article className="review-card">
            <img 
              src="https://i.pravatar.cc/150?img=47" 
              alt="Shreya Menon" 
              className="review-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p className="review-text">
              "The Data Science course content is truly international standard. The mentors helped me 
              build a portfolio that stood out to recruiters in India and abroad."
            </p>
            <p className="review-name">Shreya Menon</p>
            <p className="review-role">Data Analyst, Global Analytics MNC</p>
          </article>
          <article className="review-card">
            <img 
              src="https://i.pravatar.cc/150?img=33" 
              alt="Rajesh Patel" 
              className="review-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p className="review-text">
              "The placement support was exceptional. They helped me prepare for interviews, 
              negotiate offers, and I landed a role at a Fortune 500 company within 2 months."
            </p>
            <p className="review-name">Rajesh Patel</p>
            <p className="review-role">Software Engineer, Global Tech MNC</p>
          </article>
          <article className="review-card">
            <img 
              src="https://i.pravatar.cc/150?img=20" 
              alt="Priya Sharma" 
              className="review-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p className="review-text">
              "Best investment I made in my career. The mentors are industry experts and the 
              curriculum is always updated with latest technologies."
            </p>
            <p className="review-name">Priya Sharma</p>
            <p className="review-role">QA Engineer, Leading Product Company</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default About

