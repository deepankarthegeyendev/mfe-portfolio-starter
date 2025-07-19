import React, { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegCopyright } from "react-icons/fa";
import logo from "./assets/DK-logo.svg";
import SystemDesign from "./components/SystemDesign";

const resumeData = {
  name: "Deepan Karthegeyen A",
  title: "Software Architect | Expert in Full Stack Development & Cloud Architecture",
  contact: {
    phone: "9790912033",
    email: "deepan_31@yahoo.co.in",
    location: "Chennai",
    links: [
      {
        label: "deepankarthegeyendev",
        url: "https://github.com/deepankarthegeyendev",
      },
    ],
  },
  summary: `Software Architect with 14+ years of experience in designing scalable, cloud-native, and offline-first systems. Skilled in distributed architectures, cross-functional leadership, and delivering cost-effective enterprise solutions. Currently exploring GenAI, Agentic AI driving innovation in modern platforms.`,
  experience: [
    {
      title: "Technical Lead, Infoservices India, Chennai",
      date: "November 2024 - Now",
      details: [
        "Architected and delivered offline-first architecture using .NET Core, PostgreSQL, PowerSync, and AWS DMS, ensuring resilient sync.",
        "Designed scalable .NET Web API integrated with React frontend.",
        "Led development of InterviewIQ, a Generative AI-based interview platform using Python, WebRTC, GPT-4o, DynamoDB, Cognito, Lambda, and S3.",
      ],
    },
    {
      title: "Lead II Software Engineering, UST Global, Chennai",
      date: "September 2021 - November 2024",
      details: [
        "Architected and led the development of scalable solutions using .NET Core, Angular, SQL, Azure CI CD and DevOps",
        "Developed and implemented distinct Microservices to support each Angular Micro-Frontend. Led cross-functional teams in agile sprints, improving delivery",
      ],
    },
    {
      title: "Lead Application Developer, ADP India, Chennai",
      date: "June 2017 - August 2021",
      details: [
        "Directed the development of full-stack applications with .NET Core, Angular, SQL and AWS. Managed implementations across multiple countries including regions such as Southeast Asia (SEA) and Asia-Pacific (APAC).",
        "Implemented Fedlet SSO for secure user authentication using Single Sign-On.",
      ],
    },
    {
      title: "Senior Software Engineer, ADP India, Chennai",
      date: "November 2011 - May 2017",
      details: [
        "Led a team of developers to design and implement a new development in ASP.NET Web Forms application into a modern Angular front-end with .NET Core back-end architecture.",
        "Conducted regular code reviews to ensure high-quality standards and unit testing and mentored team on delivery of modules.",
      ],
    },
    {
      title: "Information Systems Trainee, Indian Oil Corporation, Chennai",
      date: "March 2010 - February 2011",
      details: [
        "Converted Intranet Classic ASP, DHTML Web application to ASP.NET C# Web Form application.",
      ],
    },
  ],
  education: [
    {
      degree: "B.E. Computer Science and Engineering, Anna University, Chennai",
      date: "2005 - 2009",
    },
  ],
  skillsFormatted: [
    {
      category: "Front-end",
      technologies: ["Angular (Expert)", "JavaScript (Proficient)", "jQuery (Proficient)"]
    },
    {
      category: "Back-end",
      technologies: ["C# 8", ".NET Core (Expert)", "ASP.NET (Expert)"]
    },
    {
      category: "Databases",
      technologies: ["MS SQL (Expert)", "PostgreSQL"]
    },
    {
      category: "Cloud Platforms",
      technologies: ["AWS (S3, Lambda, SNS, SQS, Cognito, RDS, DMS)"]
    },
    {
      category: "DevOps",
      technologies: ["Docker (Intermediate)"]
    },
    {
      category: "Security",
      technologies: ["Fedlet SSO (Expert)", "Google SSO", "AWS Cognito", "JWT (Expert)"]
    },
    {
      category: "Other Skills",
      technologies: ["LINQ", "Entity Framework Core", "Dapper"]
    },
    {
      category: "Architectural Design",
      technologies: ["Micro-Frontend", "Microservices (Intermediate)", "RESTful APIs (Expert)"]
    },
  ],
  languages: ["Tamil", "English"],
};

function ResumePage({ theme }) {
  const isDark = theme === "dark";

  const bodyStyle = {
    background: "white",
    color: "#222",
    minHeight: "100vh",
    padding: "2rem 1rem",
    fontFamily: "Segoe UI, sans-serif",
    marginTop: '-73px',
    marginBottom: '-30px',
  };

  const sectionStyle = {
    maxWidth: 1100,
    margin: "0 auto",
  };

  const sectionHeader = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  };

  return (
    <div style={bodyStyle}>
      <div style={sectionStyle}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src={logo}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-circle"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <h2 style={{ margin: "0.5rem 0" }}>{resumeData.name}</h2>
          <p>{resumeData.title}</p>
          <p>
            <a href={resumeData.contact.links[0].url} target="_blank" rel="noopener noreferrer">
              {resumeData.contact.links[0].label}
            </a>
            {" | "}
            <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
          </p>
        </div>

        <section style={{ marginBottom: "2rem" }}>
          <div style={sectionHeader}>Summary</div>
          <p style={{ lineHeight: 1.7 }}>{resumeData.summary}</p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <div style={sectionHeader}>Skills</div>
          <ul style={{ paddingLeft: "1rem" }}>
            {resumeData.skillsFormatted.map((skill, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                <strong>{skill.category}:</strong> {skill.technologies.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <div style={sectionHeader}>Experience</div>
          {resumeData.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "1.5rem" }}>
              <strong>{exp.title}</strong>
              <div style={{ color: "#777" }}>{exp.date}</div>
              <ul style={{ paddingLeft: "1.25rem" }}>
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <div style={sectionHeader}>Education</div>
          {resumeData.education.map((edu, i) => (
            <p key={i}>
              {edu.degree} <span style={{ color: "#777" }}>| {edu.date}</span>
            </p>
          ))}
        </section>
      </div>
    </div>
  );
}

function LandingPage({ theme, onOpenContact, fabPos, onFabMove }) {
  const isDark = theme === "dark";
  const panel1Bg = isDark ? "#46605a" : "#e6f0fa";
  const panel2Bg = isDark ? "#7a5fa0" : "#f5e6fa";
  const panelText = isDark ? "white" : "#222";
  const tagColor = isDark ? "#eaeaea" : "#444";

  return (
    <div
      style={{
        background: isDark ? "#23182a" : "#f7f7fa",
        minHeight: "100vh",
        color: isDark ? "white" : "#222",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <Container style={{ paddingTop: 0 }}>
        <Row className="justify-content-center mb-3">
          <Col md={10} className="text-center">
            <Projects theme={theme} />
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col md={10} className="text-center">
            <Hero theme={theme} onOpenContact={onOpenContact} fabPos={fabPos} onFabMove={onFabMove} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [openContact, setOpenContact] = useState(false);
  const [contactSide, setContactSide] = useState('right'); // 'left' or 'right'
  const [fabPos, setFabPos] = useState({ x: window.innerWidth - 96, y: window.innerHeight - 120 });
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  // Called by Hero when @ icon is clicked
  const handleOpenContact = () => {
    // Open from left if icon is on left half, else right
    const side = fabPos.x < window.innerWidth / 2 ? 'left' : 'right';
    setContactSide(side);
    setOpenContact((prev) => !prev);
  };

  const handleFabMove = (pos) => setFabPos(pos);

  const bodyStyle = {
    background: isDark ? "#23182a" : "#f7f7fa",
    minHeight: "100vh",
    color: isDark ? "white" : "#222",
    transition: "background 0.3s, color 0.3s",
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh",
  };

  return (
    <div style={bodyStyle}>
      <Router>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route
              path={
                process.env.NODE_ENV === "production"
                  ? "/"
                  : "/"
              }
              element={<LandingPage theme={theme} onOpenContact={handleOpenContact} fabPos={fabPos} onFabMove={handleFabMove} />}
            />
            <Route path="/resume" element={<ResumePage theme={theme} />} />
            <Route path="/system-design" element={<SystemDesign theme={theme} />} />
          </Routes>
          <Contact open={openContact} onClose={() => setOpenContact(false)} theme={theme} fabPos={fabPos} />
        </div>
        <Footer theme={theme} />
      </Router>
    </div>
  );
}

export default App;
