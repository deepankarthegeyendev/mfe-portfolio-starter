import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

export default function Projects({ theme }) {
  const isDark = theme === 'dark';
  const panel1Bg = isDark ? '#46605a' : '#e6f0fa';
  const panel2Bg = isDark ? '#7a5fa0' : '#f5e6fa';
  const panelText = isDark ? 'white' : '#222';
  const tagColor = isDark ? '#eaeaea' : '#444';
  return (
    <div className="text-center mb-3">
      <h2 style={{ color: panelText, marginTop: 0 }}>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
        {/* Project 1 */}
        <div style={{ display: 'flex', flexDirection: 'row', background: panel1Bg, borderRadius: '10px', padding: '1.2rem', boxShadow: '0 0 6px #0002', color: panelText, width: '100%', maxWidth: 700, alignItems: 'stretch' }}>
          <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: panelText, marginBottom: 4 }}>InterviewIQ</div>
            <div style={{ color: tagColor, marginBottom: 8, fontSize: '1.08rem' }}>A GenAI-powered resume-JD matcher that leverages OpenAI embeddings and cosine similarity.</div>
            <div style={{ color: tagColor, fontSize: '1.05rem', marginBottom: 8 }}>
              AI · OpenAI · .NET · Azure · Resume Matching
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', justifyContent: 'center', marginLeft: 24, minWidth: 120 }}>
            <a href="https://interviewiq.example.com" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-vertical" title="Visit project website">
              <FaGlobe style={{ marginRight: 8, fontSize: '1.1rem' }} /> <span style={{ fontWeight: 600 }}>Website</span>
            </a>
            <a href="https://github.com/deepankarthegeyen/interviewiq" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-vertical" title="View source code on GitHub">
              <FaGithub style={{ marginRight: 8, fontSize: '1.1rem' }} /> <span style={{ fontWeight: 600 }}>GitHub</span>
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div style={{ display: 'flex', flexDirection: 'row', background: panel2Bg, borderRadius: '10px', padding: '1.2rem', boxShadow: '0 0 6px #0002', color: panelText, width: '100%', maxWidth: 700, alignItems: 'stretch' }}>
          <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.3rem', color: panelText, marginBottom: 4 }}>Micro-Frontend Application</div>
            <div style={{ color: tagColor, marginBottom: 8, fontSize: '1.08rem' }}>A scalable micro-frontend architecture using React, NextJs, and .NET Core for modular enterprise applications.</div>
            <div style={{ color: tagColor, fontSize: '1.05rem', marginBottom: 8 }}>
              React · NextJs · .NET Core
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', justifyContent: 'center', marginLeft: 24, minWidth: 120 }}>
            <a href="#" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-vertical" title="Visit project website">
              <FaGlobe style={{ marginRight: 8, fontSize: '1.1rem' }} /> <span style={{ fontWeight: 600 }}>Website</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="project-btn project-btn-vertical" title="View source code on GitHub">
              <FaGithub style={{ marginRight: 8, fontSize: '1.1rem' }} /> <span style={{ fontWeight: 600 }}>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 