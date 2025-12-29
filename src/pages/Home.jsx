import '../App.css'

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-badge">20+ Years of Excellence • 6400+ Hiring Partners</p>
          <h1>
            Best <span>IT Training</span> Institute
            <br />
            with Global-Standard Curriculum.
          </h1>
          <p className="hero-subtitle">
            Master Full Stack, Data Science, Testing, and Cloud with real-time industry mentors. 
            Learn on an international-level curriculum that makes you job‑ready from Day 1.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Book Free Counselling</button>
            <button className="ghost-btn">Download Course Catalog</button>
          </div>
          <div className="hero-metrics">
            <div>
              <span className="metric-number">45,000+</span>
              <span className="metric-label">Students Placed</span>
            </div>
            <div>
              <span className="metric-number">6400+</span>
              <span className="metric-label">Hiring Companies</span>
            </div>
            <div>
              <span className="metric-number">4.9 / 5</span>
              <span className="metric-label">Avg. Learner Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <span className="pulse-dot" />
            <span className="hero-card-title">Request Call Back</span>
          </div>
          <p className="hero-card-subtitle">
            Share your details and our counsellor will call you within 15 minutes.
          </p>
          <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email ID" required />
            <select defaultValue="">
              <option value="" disabled>
                Interested Course
              </option>
              <option>Full Stack Developer</option>
              <option>Data Science & Machine Learning</option>
              <option>Software Testing with Selenium</option>
              <option>Python / Java / .NET</option>
              <option>Power BI / Tableau</option>
            </select>
            <textarea placeholder="Tell us about your goal (optional)" rows={3} />
            <button className="primary-btn full-width" type="submit">
              Get Free Career Guidance
            </button>
            <p className="form-helper">No spam. No hidden fees. 100% personalised counselling.</p>
          </form>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section">
        <div className="section-header">
          <p className="section-tag">Popular Job-Ready Programs</p>
          <h2>Industry-Curated Courses</h2>
          <p className="section-subtitle">
            Hands-on, mentor-led programs designed with input from 100+ tech hiring managers.
          </p>
        </div>

        <div className="cards-grid">
          <article className="course-card">
            <p className="course-label">Most Popular</p>
            <h3>Full Stack Developer - MERN / .NET / Java</h3>
            <p className="course-meta">6 Months • Live + Lab • Placement Track</p>
            <ul>
              <li>Build 5+ production-ready applications</li>
              <li>Master frontend, backend, DB and deployment</li>
              <li>Interview prep, mock interviews & portfolio</li>
            </ul>
            <button className="ghost-btn small">View Detailed Syllabus</button>
          </article>

          <article className="course-card">
            <p className="course-label">Data Careers</p>
            <h3>Data Science & Machine Learning</h3>
            <p className="course-meta">5 Months • Python • Real Datasets</p>
            <ul>
              <li>Statistics, ML, SQL, Power BI / Tableau</li>
              <li>End‑to‑end capstone projects with mentoring</li>
              <li>Interview case studies and hackathons</li>
            </ul>
            <button className="ghost-btn small">Download Syllabus PDF</button>
          </article>

          <article className="course-card">
            <p className="course-label">High Demand</p>
            <h3>Software Testing with Selenium</h3>
            <p className="course-meta">3 Months • Manual + Automation</p>
            <ul>
              <li>Manual, Automation, API and Agile Testing</li>
              <li>Hands-on with Selenium, TestNG & CI/CD</li>
              <li>Scenario-based interview preparation</li>
            </ul>
            <button className="ghost-btn small">Talk to Testing Mentor</button>
          </article>
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

      {/* Reviews */}
      <section className="section">
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
            <p className="review-text">
              "AthhiraByte's Full Stack program gave me exactly what I needed – practical projects, 
              strong fundamentals and continuous interview support. I cracked my dream role in 90 days."
            </p>
            <p className="review-name">Akshay Kumar</p>
            <p className="review-role">Full Stack Developer, Product Company in Bangalore</p>
          </article>
          <article className="review-card">
            <p className="review-text">
              "The Data Science course content is truly international standard. The mentors helped me 
              build a portfolio that stood out to recruiters in India and abroad."
            </p>
            <p className="review-name">Shreya Menon</p>
            <p className="review-role">Data Analyst, Global Analytics MNC</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default Home

