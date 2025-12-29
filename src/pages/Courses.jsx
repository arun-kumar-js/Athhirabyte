import '../App.css'

function Courses() {
  const courses = [
    {
      label: 'Most Popular',
      title: 'Full Stack Developer - MERN / .NET / Java',
      duration: '6 Months',
      type: 'Live + Lab • Placement Track',
      description: 'Master end-to-end web development with industry-standard frameworks and tools.',
      features: [
        'Build 5+ production-ready applications',
        'Master frontend, backend, DB and deployment',
        'Interview prep, mock interviews & portfolio',
        'Git, Docker, CI/CD pipelines',
        'Real-time project mentoring'
      ],
      syllabus: ['React/Vue.js', 'Node.js / .NET Core / Spring Boot', 'MongoDB / PostgreSQL', 'AWS / Azure Deployment', 'Agile & DevOps']
    },
    {
      label: 'Data Careers',
      title: 'Data Science & Machine Learning',
      duration: '5 Months',
      type: 'Python • Real Datasets',
      description: 'Transform data into insights with advanced analytics and machine learning models.',
      features: [
        'Statistics, ML, SQL, Power BI / Tableau',
        'End‑to‑end capstone projects with mentoring',
        'Interview case studies and hackathons',
        'Deep Learning & Neural Networks',
        'Portfolio of 8+ real-world projects'
      ],
      syllabus: ['Python & Pandas', 'Statistics & Probability', 'Machine Learning Algorithms', 'Deep Learning (TensorFlow)', 'SQL & Data Visualization']
    },
    {
      label: 'High Demand',
      title: 'Software Testing with Selenium',
      duration: '3 Months',
      type: 'Manual + Automation',
      description: 'Become a QA expert with hands-on automation testing skills.',
      features: [
        'Manual, Automation, API and Agile Testing',
        'Hands-on with Selenium, TestNG & CI/CD',
        'Scenario-based interview preparation',
        'Performance & Security Testing',
        'Test reporting & bug tracking tools'
      ],
      syllabus: ['Manual Testing', 'Selenium WebDriver', 'TestNG & JUnit', 'API Testing (Postman)', 'CI/CD Integration']
    },
    {
      label: 'Enterprise',
      title: 'Python / Java / .NET Development',
      duration: '4 Months',
      type: 'Backend Focus • Enterprise Apps',
      description: 'Build scalable backend systems and enterprise applications.',
      features: [
        'Object-oriented programming mastery',
        'RESTful APIs & Microservices architecture',
        'Database design & optimization',
        'Security & authentication',
        'Cloud deployment & scaling'
      ],
      syllabus: ['Core Programming', 'Framework Mastery', 'Database Management', 'API Development', 'Cloud Platforms']
    },
    {
      label: 'Analytics',
      title: 'Power BI / Tableau - Business Intelligence',
      duration: '2.5 Months',
      type: 'Visualization • Dashboards',
      description: 'Create compelling data visualizations and business intelligence dashboards.',
      features: [
        'Data modeling & ETL processes',
        'Interactive dashboards & reports',
        'DAX & calculated fields',
        'Real-time data connections',
        'Portfolio of 10+ dashboard projects'
      ],
      syllabus: ['Power BI Desktop', 'Tableau Desktop', 'SQL for BI', 'Data Modeling', 'Dashboard Design']
    },
    {
      label: 'Cloud & DevOps',
      title: 'AWS / Azure Cloud & DevOps',
      duration: '4 Months',
      type: 'Cloud Infrastructure • CI/CD',
      description: 'Master cloud platforms and DevOps practices for modern software delivery.',
      features: [
        'Cloud architecture & services',
        'Containerization with Docker & Kubernetes',
        'CI/CD pipelines (Jenkins, GitHub Actions)',
        'Infrastructure as Code (Terraform)',
        'Monitoring & logging solutions'
      ],
      syllabus: ['AWS / Azure Fundamentals', 'Docker & Kubernetes', 'CI/CD Tools', 'Infrastructure as Code', 'Cloud Security']
    }
  ]

  return (
    <>
      <section className="hero" style={{ gridTemplateColumns: '1fr', marginTop: '24px' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="hero-badge">Comprehensive Training Programs</p>
          <h1>
            Choose Your <span>Career Path</span>
          </h1>
          <p className="hero-subtitle">
            Industry-designed courses with live mentoring, real projects, and guaranteed placement support. 
            Start your journey to a high-paying tech career today.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="section-tag">All Courses</p>
          <h2>Explore Our Training Programs</h2>
          <p className="section-subtitle">
            Each course includes hands-on labs, mentor sessions, interview prep, and placement assistance.
          </p>
        </div>

        <div className="courses-detailed">
          {courses.map((course, index) => (
            <article key={index} className="course-card-detailed">
              <div className="course-header-detailed">
                <p className="course-label">{course.label}</p>
                <h3>{course.title}</h3>
                <p className="course-meta">{course.duration} • {course.type}</p>
              </div>
              <p className="course-description">{course.description}</p>
              
              <div className="course-content-grid">
                <div>
                  <h4>What You'll Learn</h4>
                  <ul>
                    {course.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Curriculum Highlights</h4>
                  <ul>
                    {course.syllabus.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="course-actions-detailed">
                <button className="primary-btn">Enroll Now</button>
                <button className="ghost-btn">Download Syllabus</button>
                <button className="ghost-btn">Talk to Mentor</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Courses

