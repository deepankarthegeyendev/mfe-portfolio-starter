import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

export default function Projects({ theme }) {
  const isDark = theme === 'dark';
  const panelBg = isDark ? '#46605a' : '#e6f0fa';
  const panelText = isDark ? 'white' : '#222';
  const tagColor = isDark ? '#eaeaea' : '#444';
  const badgeBg = isDark ? '#ffaa00' : '#ffcc00';
  const badgeColor = '#000';

  const comingSoonBadgeAug = (
    <div style={{
      backgroundColor: badgeBg,
      color: badgeColor,
      fontSize: '0.75rem',
      fontWeight: 'bold',
      borderRadius: '4px',
      padding: '2px 6px',
      display: 'inline-block',
      marginTop: '4px'
    }}>
      🚧 Coming Sep'25
    </div>
  );

  const comingSoonBadgeSep = (
    <div style={{
      backgroundColor: badgeBg,
      color: badgeColor,
      fontSize: '0.75rem',
      fontWeight: 'bold',
      borderRadius: '4px',
      padding: '2px 6px',
      display: 'inline-block',
      marginTop: '4px'
    }}>
      🚧 Coming Sep'25
    </div>
  );

  return (
    <div className="text-center mb-3">
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#bada55', marginBottom: '2rem', textAlign: 'center' }}>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>

        {/* ResumeGPT */}
        <div
          className="project-card hover-highlight"
          role="link"
          tabIndex={0}
          aria-label="Open ResumeGPT website"
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
              React &nbsp;·&nbsp; OpenAI API &nbsp;·&nbsp; .NET Core
            </div>
            {comingSoonBadgeAug}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginLeft: 24, minWidth: 110 }}>
            <a href="#" rel="noopener noreferrer" className="project-btn-vertical project-bounce" style={{ textDecoration: 'none' }}>
              Website
            </a>
            <a href="#" rel="noopener noreferrer" className="project-btn-vertical project-bounce" style={{ textDecoration: 'none' }}>
              <FaGithub style={{ marginRight: 6, fontSize: '1.1rem' }} />GitHub
            </a>
          </div>
        </div>

        {/* Tourist Explorer */}
        <div
          className="project-card hover-highlight"
          role="link"
          tabIndex={0}
          aria-label="Open Tourist Explorer website"
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
            {comingSoonBadgeSep}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginLeft: 24, minWidth: 110 }}>
            <a href="#" rel="noopener noreferrer" className="project-btn-vertical project-bounce" style={{ textDecoration: 'none' }}>
              Website
            </a>
            <a href="#" rel="noopener noreferrer" className="project-btn-vertical project-bounce" style={{ textDecoration: 'none' }}>
              <FaGithub style={{ marginRight: 6, fontSize: '1.1rem' }} />GitHub
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .project-bounce {
          transition: transform 0.18s cubic-bezier(.4,1.6,.6,1);
        }
        .project-bounce:hover {
          transform: translateY(-7px) scale(1.07);
          box-shadow: 0 4px 18px #0002;
        }
      `}</style>
    </div>
  );
}