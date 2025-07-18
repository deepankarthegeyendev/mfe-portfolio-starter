import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

export default function Projects({ theme }) {
  const isDark = theme === 'dark';
  const panelBg = isDark ? '#46605a' : '#e6f0fa';
  const panelText = isDark ? 'white' : '#222';
  const tagColor = isDark ? '#eaeaea' : '#444';
  return (
    <div className="text-center mb-3">
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#bada55', marginBottom: '2rem', textAlign: 'center' }}>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        {/* Project 1: Tourist Explorer */}
        <div
          className="project-card hover-highlight"
          role="link"
          tabIndex={0}
          aria-label="Open Tourist Explorer website"
          onClick={() => window.open('https://tourist-explorer.example.com', '_blank', 'noopener noreferrer')}
          onKeyDown={e => { if (e.key === 'Enter') window.open('https://tourist-explorer.example.com', '_blank', 'noopener noreferrer'); }}
          style={{
            display: 'flex',
            flexDirection: 'row',
          background: panelBg,
            borderRadius: '10px',
            padding: '0.9rem 1.1rem',
            color: panelText,
            width: '100%',
            maxWidth: 700,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.15rem', color: panelText, marginBottom: 2 }}>
              Tourist Explorer
            </div>
            <div style={{ color: tagColor, fontSize: '1.01rem', marginBottom: 4 }}>
              A modular micro frontend that showcases top tourist attractions across cities and states in India.
            </div>
            <div style={{ color: tagColor, fontSize: '0.98rem' }}>
              Web &nbsp;·&nbsp; Dynamic &nbsp;·&nbsp; Maps &nbsp;·&nbsp; Module Federation
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginLeft: 24, minWidth: 110 }}>
            <a
              href="https://tourist-explorer.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-vertical"
              style={{ textDecoration: 'none' }}
            >
              Website
            </a>
            <a
              href="https://github.com/deepankarthegeyen/tourist-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-vertical"
              style={{ textDecoration: 'none' }}
            >
              <FaGithub style={{ marginRight: 6, fontSize: '1.1rem' }} />GitHub
            </a>
          </div>
        </div>
        {/* Project 2: ResumeGPT */}
        <div
          className="project-card hover-highlight"
          role="link"
          tabIndex={0}
          aria-label="Open ResumeGPT website"
          onClick={() => window.open('https://resumegpt.example.com', '_blank', 'noopener noreferrer')}
          onKeyDown={e => { if (e.key === 'Enter') window.open('https://resumegpt.example.com', '_blank', 'noopener noreferrer'); }}
          style={{
            display: 'flex',
            flexDirection: 'row',
          background: panelBg,
            borderRadius: '10px',
            padding: '0.9rem 1.1rem',
            color: panelText,
            width: '100%',
            maxWidth: 700,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.15rem', color: panelText, marginBottom: 2 }}>
              ResumeGPT
            </div>
            <div style={{ color: tagColor, fontSize: '1.01rem', marginBottom: 4 }}>
              A lightweight AI-powered tool that helps users generate and improve resumes based on job descriptions.
            </div>
            <div style={{ color: tagColor, fontSize: '0.98rem' }}>
              React &nbsp;·&nbsp; OpenAI API &nbsp;·&nbsp; Vite
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginLeft: 24, minWidth: 110 }}>
            <a
              href="https://resumegpt.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-vertical"
              style={{ textDecoration: 'none' }}
            >
              Website
            </a>
            <a
              href="https://github.com/deepankarthegeyen/resumegpt"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-vertical"
              style={{ textDecoration: 'none' }}
            >
              <FaGithub style={{ marginRight: 6, fontSize: '1.1rem' }} />GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 