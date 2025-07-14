import React from 'react';
import { FaEnvelope, FaLinkedin, FaMedium, FaGlobe, FaGithub } from 'react-icons/fa';
import profile from './assets/profile.jpg';

const projects = [
  {
    title: 'InterviewIQ',
    description: 'A GenAI-powered resume-JD matcher that leverages OpenAI embeddings and cosine similarity.',
    tags: ['AI', 'OpenAI', '.NET', 'Azure', 'Resume Matching'],
    website: 'https://interviewiq.example.com',
    github: 'https://github.com/deepankarthegeyen/interviewiq',
  },
  {
    title: 'Micro-Frontend Application',
    description: 'A scalable micro-frontend architecture using React, NextJs, and .NET Core for modular enterprise applications.',
    tags: ['React', 'Next.js', '.NET Core'],
    website: '#',
    github: '#',
  },
];

const systemDesigns = [
  {
    title: 'HRMS Payroll Microservices',
    description:
      'Decomposed a monolithic payroll system into microservices including Tax, Salary, Leave, and Timesheet. Used React and .NET Core.',
  },
  {
    title: 'InterviewIQ AI Bot Architecture',
    description:
      'Build a GenAI-powered resume-matching system using OpenAI + cosine similarity. Stateless frontend on React and backend APIs on Azure Functions.',
  },
];

const headerHeight = 88;

const socialLinks = [
  { icon: <FaEnvelope />, url: 'mailto:deepan_31@yahoo.co.in', label: 'Email' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/deepankarthegeyen', label: 'LinkedIn' },
  { icon: <FaMedium />, url: 'https://medium.com/', label: 'Medium' },
];

const App: React.FC = () => {
  return (
    <div style={{ background: '#23182a', minHeight: '100vh', color: 'white', fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Fixed Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: '#23182a',
          zIndex: 1050,
          boxShadow: '0 2px 8px #0002',
          padding: '0 0',
          height: headerHeight,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={profile}
          alt="Profile"
          style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginLeft: 32, border: '2px solid #bada55' }}
        />
        <div style={{ marginLeft: 32 }}>
          <h1 style={{ fontWeight: 700, fontSize: '2.5rem', margin: 0, color: 'white', letterSpacing: '-1px' }}>Deepan Karthegeyen</h1>
          <div style={{ fontSize: '1.25rem', color: '#bbb', marginTop: 2 }}>A Full Stack Architect</div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#bada55', fontSize: 28, background: 'none', border: 'none' }}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main style={{ paddingTop: headerHeight + 32, maxWidth: 700, margin: '0 auto' }}>
        <button
          style={{
            background: '#19c89b',
            color: 'white',
            fontWeight: 600,
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: 12,
            padding: '0.9rem 2.2rem',
            margin: '32px 0 40px 0',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0002',
            display: 'block',
          }}
        >
          View My Work
        </button>
        {/* Projects Section */}
        <h2 style={{ fontWeight: 700, fontSize: '2rem', margin: '32px 0 18px 0' }}>Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((proj) => (
            <div
              key={proj.title}
              style={{
                background: proj.title === 'InterviewIQ' ? '#46605a' : '#7a5fa0',
                borderRadius: 16,
                padding: '1.5rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 0 6px #0002',
                minHeight: 120,
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 4 }}>{proj.title}</div>
                <div style={{ color: '#eaeaea', fontSize: '1.08rem', marginBottom: 8 }}>{proj.description}</div>
                <div style={{ color: '#bada55', fontSize: '1.05rem', marginBottom: 0, fontWeight: 500 }}>
                  {proj.tags.join(' · ')}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginLeft: 32, minWidth: 120 }}>
                <a
                  href={proj.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#19c89b',
                    color: 'white',
                    borderRadius: 8,
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '0.6rem 1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 1px 4px #0001',
                  }}
                >
                  <FaGlobe style={{ marginRight: 8, fontSize: '1.1rem' }} /> Website
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#19c89b',
                    color: 'white',
                    borderRadius: 8,
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '0.6rem 1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 1px 4px #0001',
                  }}
                >
                  <FaGithub style={{ marginRight: 8, fontSize: '1.1rem' }} /> Github
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* System Design Section */}
        <h2 style={{ fontWeight: 700, fontSize: '2rem', margin: '40px 0 18px 0' }}>System Design</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 24, flexWrap: 'wrap' }}>
          {systemDesigns.map((sys) => (
            <div
              key={sys.title}
              style={{
                background: '#23272f',
                borderRadius: 16,
                padding: '1.2rem 1.1rem',
                minWidth: 260,
                flex: 1,
                boxShadow: '0 0 6px #0002',
                marginBottom: 24,
                maxWidth: 340,
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{sys.title}</div>
              <div style={{ color: '#eaeaea', fontSize: '1.05rem' }}>{sys.description}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App; 