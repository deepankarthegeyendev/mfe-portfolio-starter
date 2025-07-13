import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SystemDesign from './components/SystemDesign'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Container, Row, Col, Form, Button, Navbar, Nav } from 'react-bootstrap'
import { FaRegCopyright, FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaMoon } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import profile from './assets/profile.jpg'

const resumeData = {
  name: 'Deepan Karthegeyen A',
  title: 'Software Architect',
  contact: {
    phone: '9790912033',
    email: 'deepan_31@yahoo.co.in',
    location: 'Chennai',
    links: [
      { label: 'deepankarthegeyen', url: 'https://github.com/deepankarthegeyen' }
    ]
  },
  summary: `Software Architect with 14+ years of experience in designing scalable, cloud-native,\nand offline-first systems. Skilled in distributed architectures, cross-functional\nleadership, and delivering cost-effective enterprise solutions. Currently exploring\nGenAI, Agentic AI driving innovation in modern platforms.`,
  experience: [
    {
      title: 'Technical Lead, Infoservices India, Chennai',
      date: 'November 2024 - Now',
      details: [
        'Architected and delivered offline-first architecture using .NET Core, PostgreSQL, PowerSync, and AWS DMS, ensuring resilient sync.',
        'Designed scalable .NET Web API integrated with React frontend.',
        'Led development of InterviewIQ, a Generative AI-based interview platform using Python, WebRTC, GPT-4o, DynamoDB, Cognito, Lambda, and S3.'
      ]
    },
    {
      title: 'Lead II Software Engineering, UST Global, Chennai',
      date: 'September 2021 - November 2024',
      details: [
        'Architected and led the development of scalable solutions using .NET Core, Angular, SQL, Azure CI CD and DevOps',
        'Developed and implemented distinct Microservices to support each Angular Micro-Frontend. Led cross-functional teams in agile sprints, improving delivery'
      ]
    },
    {
      title: 'Lead Application Developer, ADP India, Chennai',
      date: 'June 2017 - August 2021',
      details: [
        'Directed the development of full-stack applications with .NET Core, Angular, SQL and AWS. Managed implementations across multiple countries including regions such as Southeast Asia (SEA) and Asia-Pacific (APAC).',
        'Implemented Fedlet SSO for secure user authentication using Single Sign-On.'
      ]
    },
    {
      title: 'Senior Software Engineer, ADP India, Chennai',
      date: 'November 2011 - May 2017',
      details: [
        'Led a team of developers to design and implement a new development in ASP.NET Web Forms application into a modern Angular front-end with .NET Core back-end architecture.',
        'Conducted regular code reviews to ensure high-quality standards and unit testing and mentored team on delivery of modules.'
      ]
    },
    {
      title: 'Information Systems Trainee, Indian Oil Corporation, Chennai',
      date: 'March 2010 - February 2011',
      details: [
        'Converted Intranet Classic ASP, DHTML Web application to ASP.NET C# Web Form application.'
      ]
    }
  ],
  education: [
    {
      degree: 'B.E. Computer Science and Engineering, Anna University, Chennai',
      date: '2005 - 2009'
    }
  ],
  skills: [
    { label: 'Problem Solving', level: 'Expert' },
    { label: 'API Development', level: 'Expert' },
    { label: 'System Design', level: 'Skillful' },
    { label: 'Cloud Computing', level: 'Experienced' }
  ],
  languages: [
    'Tamil', 'English'
  ],
  projects: [
    {
      title: 'Offline-First Data Sync Solution with PowerSync, PostgreSQL & AWS',
      date: 'November 2024 -',
      details: [
        'Architected and implemented an offline-first data sync system using Power Sync-, PostgreSQL, AWS DMS, Mobile App using React Native ensuring seamless connectivity.',
        'Designed bi-directional sync strategies and local storage schema, enabling resilient mobile/web experiences with real-time replication to AWS RDS.'
      ]
    },
    {
      title: 'InterviewIQ – AI-Powered Interview Platform',
      details: [
        'Developed a GenAI interview assistant using Python, WebRTC, OpenAI GPT-4o, and .NET APIs, deployed via Lambda and DynamoDB.',
        'Enabled real-time STT/TTS voice interaction and video recording with cheat detection via client-side streaming.',
        'Used Cognito for secure identity, S3 for file storage, and React/Next.js as the front end.'
      ]
    },
    {
      title: 'Tires Modernization | Retail | US & Canada',
      date: 'June 2022 - Now',
      details: [
        'Architected and led a team of 11 engineers to modernize legacy AS400 systems into a scalable solution using .NET 8, Angular 14, MS SQL, and CosmosDB.',
        'Developed and maintained Angular micro-frontend applications with corresponding .NET-based microservices, orchestrated using Single-SPA.',
        'Oversaw development workflows, conducted code reviews, mentored junior developers, and authored HLD/LLD ensure consistent delivery and code quality.'
      ]
    },
    {
      title: 'Employee Self Service | HCM | India, SEA & APAC',
      date: 'November 2011 - August 2021',
      details: [
        'Led the modernization of HR modules (Flexi, Leave, IDP, Rewards & Exit) across APAC by transforming a monolithic system into a Modular Monolith, improving scalability and maintainability.',
        'Integrated Elasticsearch for real-time search and analytics, and implemented infrastructure optimizations including ELB sticky sessions, HAProxy, NAS storage, and DB replication.',
        'Conducted code reviews and enforced automated unit testing standards using nUnit for .NET and Jasmine for Angular.'
      ]
    }
  ]
}

const skillLevelMap = {
  'Expert': 100,
  'Experienced': 80,
  'Skillful': 60,
  'Proficient': 50,
  'Familiar': 30
}

function ResumePage({ theme }) {
  const isDark = theme === 'dark'
  const bodyStyle = {
    background: isDark ? '#23182a' : '#f7f7fa',
    minHeight: '100vh',
    color: isDark ? 'white' : '#222',
    transition: 'background 0.3s, color 0.3s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const linkColor = '#222'
  const cardStyle = {
    background: 'white',
    color: '#222',
    borderRadius: 16,
    boxShadow: '0 2px 16px #0002',
    padding: '2.5rem 2rem',
    width: '100%',
    margin: '2rem 0',
    height: 'auto',
    alignSelf: 'flex-start',
    display: 'block'
  }
  return (
    <div style={bodyStyle}>
      <div className="container-fluid" style={{ maxWidth: 1400 }}>
        <div className="row" style={{ gap: 0, alignItems: 'flex-start' }}>
          {/* Left Panel: Skills & Languages */}
          <div className="col-12 col-md-3 d-block mb-4 mb-md-0" style={{ paddingRight: 0 }}>
            <div style={{ ...cardStyle, minWidth: 260, maxWidth: 340, margin: '2rem 0 2rem 0' }}>
              <div className="mb-4">
                <h6 style={{ fontWeight: 'bold' }}>SKILLS</h6>
                <ul style={{ marginBottom: 0, listStyle: 'none', paddingLeft: 0 }}>
                  {resumeData.skills.map((s, i) => (
                    <li key={i} style={{ marginBottom: 18 }}>
                      <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{s.label}</div>
                      <div style={{ background: '#e9ecef', borderRadius: 8, height: 10, width: '100%' }}>
                        <div style={{ width: `${skillLevelMap[s.level] || 40}%`, height: 10, background: '#bada55', borderRadius: 8 }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h6 style={{ fontWeight: 'bold' }}>LANGUAGES</h6>
                <ul style={{ marginBottom: 0 }}>
                  {resumeData.languages.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right Panel: Main Resume Content */}
          <div className="col-12 col-md-8 d-flex justify-content-center">
            <div style={cardStyle}>
              <div className="text-center mb-4">
                <img src={profile} alt="Profile" width={72} height={72} className="rounded-circle mb-2" style={{ objectFit: 'cover', border: '2px solid #bada55' }} />
                <h2 style={{ fontWeight: 'bold', marginBottom: 0 }}>{resumeData.name}</h2>
                <div style={{ color: linkColor, fontSize: '1rem', marginTop: 4 }}>
                  <a href="https://deepankarthegeyen.github.io/personal-website/" target="_blank" rel="noopener noreferrer" style={{ color: linkColor, textDecoration: 'underline', fontWeight: 'bold', marginRight: 12 }}>deepankarthegeyen</a>
                  <span style={{ color: '#888', margin: '0 8px' }}>|</span>
                  <a href="mailto:deepan_31@yahoo.co.in" style={{ color: linkColor, textDecoration: 'underline', fontWeight: 'bold', marginLeft: 12 }}>deepan_31@yahoo.co.in</a>
                </div>
              </div>
              <div className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'justify' }}>
                {resumeData.summary}
              </div>
              <div className="mb-4">
                <h5 style={{ fontWeight: 'bold' }}>EXPERIENCE</h5>
                {resumeData.experience.map((exp, i) => (
                  <div key={i} className="mb-3">
                    <div style={{ fontWeight: 'bold' }}>{exp.title} <span style={{ color: '#666', fontWeight: 'normal' }}>| {exp.date}</span></div>
                    <ul style={{ marginBottom: 0 }}>
                      {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <h5 style={{ fontWeight: 'bold' }}>EDUCATION</h5>
                {resumeData.education.map((edu, i) => (
                  <div key={i}>{edu.degree} <span style={{ color: '#666' }}>| {edu.date}</span></div>
                ))}
              </div>
              <div className="mb-4">
                <h5 style={{ fontWeight: 'bold' }}>PROJECTS</h5>
                {resumeData.projects.map((proj, i) => (
                  <div key={i} className="mb-3">
                    <div style={{ fontWeight: 'bold' }}>{proj.title} {proj.date && <span style={{ color: '#666', fontWeight: 'normal' }}>| {proj.date}</span>}</div>
                    <ul style={{ marginBottom: 0 }}>
                      {proj.details.map((d, j) => <li key={j}>{d}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LandingPage({ theme }) {
  const isDark = theme === 'dark'
  const panel1Bg = isDark ? '#46605a' : '#e6f0fa'
  const panel2Bg = isDark ? '#7a5fa0' : '#f5e6fa'
  const panelText = isDark ? 'white' : '#222'
  const tagColor = isDark ? '#eaeaea' : '#444'

  return (
    <div style={{ background: isDark ? '#23182a' : '#f7f7fa', minHeight: '100vh', color: isDark ? 'white' : '#222', transition: 'background 0.3s, color 0.3s' }}>
      <Container className="py-3">
        <Row className="justify-content-center mb-4">
          <Col md="auto" className="text-center">
            {/* <Link to="/" style={{ display: 'inline-block' }}>
              <img src={profile} alt="Profile" width={64} height={64} className="rounded-circle mb-2" style={{ objectFit: 'cover', border: '2px solid #bada55', cursor: 'pointer' }} />
            </Link> */}
            <h1 style={{ fontWeight: 'bold', fontSize: '2.2rem', marginBottom: 0, color: panelText }}>Deepan Karthegeyen</h1>
            <div style={{ fontSize: '1.2rem', color: isDark ? '#bbb' : '#444' }}>A Full Stack Architect</div>
            <hr style={{ borderTop: `3px solid #bada55`, width: '60%', margin: '1rem auto' }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '2rem' }}>
              <a href="mailto:deepan_31@yahoo.co.in" style={{ color: '#bada55' }} title="Mail"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/deepankarthegeyen" target="_blank" rel="noopener noreferrer" style={{ color: '#bada55' }} title="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:deepan_31@gmail.com" style={{ color: '#bada55' }} title="Gmail"><SiGmail /></a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col md={10} className="text-center">
            <h2 style={{ color: panelText }}>Projects</h2>
            <div className="row justify-content-center" style={{ gap: '0.5rem' }}>
              <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                <div style={{ background: panel1Bg, borderRadius: '7px', padding: '1.2rem', boxShadow: '0 0 6px #0002', color: panelText, width: '100%', maxWidth: 400 }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: panelText }}>InterviewIQ</div>
                    <div style={{ color: tagColor, marginBottom: 8 }}>A GenAI-powered resume-JD matcher that leverages OpenAI embeddings and cosine similarity. Built with .NET Web API, React, and Azure Functions.</div>
                    <div style={{ color: tagColor, fontSize: '0.95rem' }}>
                      <span style={{ marginRight: 12 }}>Tags: AI · OpenAI · .NET · Azure · Resume Matching</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: 120, marginTop: 12 }}>
                    <a href="https://interviewiq.example.com" target="_blank" rel="noopener noreferrer" style={{ background: '#bada55', color: '#222', fontWeight: 'bold', borderRadius: 5, padding: '0.4rem 1.2rem', textDecoration: 'none', marginBottom: 6 }}>Website</a>
                    <a href="https://github.com/deepankarthegeyen/interviewiq" target="_blank" rel="noopener noreferrer" style={{ background: '#bada55', color: '#222', fontWeight: 'bold', borderRadius: 5, padding: '0.4rem 1.2rem', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaGithub style={{ marginRight: 6, fontSize: '1.2rem' }} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                <div style={{ background: panel2Bg, borderRadius: '7px', padding: '1.2rem', boxShadow: '0 0 6px #0002', color: panelText, width: '100%', maxWidth: 400 }}>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: panelText }}>Micro-Frontend Application</div>
                    <div style={{ color: tagColor, marginBottom: 8 }}>A scalable micro-frontend architecture using React, NextJs, and .NET Core for modular enterprise applications.</div>
                    <div style={{ color: tagColor, fontSize: '0.95rem', marginBottom: 8 }}>Tags: React · NextJs · .NET Core</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: 120, marginTop: 12 }}>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ background: '#bada55', color: '#222', fontWeight: 'bold', borderRadius: 5, padding: '0.4rem 1.2rem', textDecoration: 'none', marginBottom: 6 }}>Website</a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ background: '#bada55', color: '#222', fontWeight: 'bold', borderRadius: 5, padding: '0.4rem 1.2rem', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaGithub style={{ marginRight: 6, fontSize: '1.2rem' }} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: '1rem' }}>
          <SystemDesign />
        </div>
      </Container>
    </div>
  )
}

function ContactPage({ theme }) {
  const isDark = theme === 'dark'
  const bodyStyle = {
    background: isDark ? '#322430' : '#f7f7fa',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 0 10px #0002',
    border: '1px solid #4b3a4d'
  }

  return (
    <div style={bodyStyle}>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Col md={6} style={{ background: isDark ? '#322430' : '#f7f7fa', borderRadius: '10px', padding: '2rem', boxShadow: '0 0 10px #0002', border: '1px solid #4b3a4d' }}>
          <div className="text-center mb-3">
            <h2 className="mb-0" style={{ fontWeight: 'bold', color: isDark ? 'white' : '#222' }}>Contact Me</h2>
          </div>
          <div className="text-center mb-3" style={{ fontWeight: 'bold', color: isDark ? '#bada55' : '#222', fontSize: '1.2rem' }}>
            at <a href="mailto:deepan_31@yahoo.co.in" style={{ color: isDark ? '#bada55' : '#222', textDecoration: 'underline' }}>deepan_31@yahoo.co.in</a>
          </div>
          <hr style={{ borderTop: '3px solid #bada55', width: '60%', margin: '0 auto 2rem auto' }} />
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Type your message here..." />
            </Form.Group>
            <Button type="submit" style={{ background: '#bada55', border: 'none', color: '#222', width: '100%', fontWeight: 'bold' }}>Submit</Button>
          </Form>
        </Col>
      </Container>
    </div>
  )
}

function AppNavbar({ theme, onToggleTheme }) {
  const navigate = useNavigate()
  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="lg" className="mb-5">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" style={{ paddingRight: 0, cursor: 'pointer' }}>
          <img src={profile} alt="Profile" width={48} height={48} className="rounded-circle" style={{ objectFit: 'cover', border: '2px solid #bada55' }} />
        </Navbar.Brand>
        <div className="flex-grow-1" />
        <Nav className="ms-auto align-items-center justify-content-end" style={{ gap: '0.5rem' }}>
          <Nav.Link onClick={() => navigate('/resume')} style={{ color: theme === 'dark' ? 'white' : '#222', display: 'flex', alignItems: 'center' }}>
            <FaFileAlt style={{ marginRight: 6 }} /> Resume
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/contact')} style={{ color: theme === 'dark' ? 'white' : '#222', display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ marginRight: 6 }} /> Contact
          </Nav.Link>
          <Nav.Link style={{ color: theme === 'dark' ? 'white' : '#222', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={onToggleTheme}>
            <FaMoon style={{ marginRight: 6 }} /> Theme
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

function AppFooter({ theme }) {
  const isDark = theme === 'dark'
  return (
    <footer style={{ width: '100%', background: isDark ? '#18121e' : '#eaeaea', color: isDark ? '#bbb' : '#222', textAlign: 'center', padding: '1rem 0', marginTop: '2rem' }}>
      <span style={{ verticalAlign: 'middle', fontSize: '0.75rem' }}>
        <FaRegCopyright style={{ marginRight: 4, fontSize: '0.09rem' }} />2025-2030{' '}
        <a href="https://github.com/deepankarthegeyen" target="_blank" rel="noopener noreferrer" style={{ color: isDark ? '#bbb' : '#222', textDecoration: 'underline' }}>Deepan Karthegeyen</a>
      </span>
    </footer>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')
  const isDark = theme === 'dark'
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  const bodyStyle = {
    background: isDark ? '#23182a' : '#f7f7fa',
    minHeight: '100vh',
    color: isDark ? 'white' : '#222',
    transition: 'background 0.3s, color 0.3s',
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <div style={bodyStyle}>
      <Router>
        <AppNavbar theme={theme} onToggleTheme={toggleTheme} />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage theme={theme} />} />
            <Route path="/contact" element={<ContactPage theme={theme} />} />
            <Route path="/resume" element={<ResumePage theme={theme} />} />
          </Routes>
        </div>
        <AppFooter theme={theme} />
      </Router>
    </div>
  )
}

export default App
