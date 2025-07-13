import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Projects({ theme }) {
  const isDark = theme === 'dark';
  const panel1Bg = isDark ? '#46605a' : '#e6f0fa';
  const panel2Bg = isDark ? '#7a5fa0' : '#f5e6fa';
  const panelText = isDark ? 'white' : '#222';
  const tagColor = isDark ? '#eaeaea' : '#444';
  return (
    <div className="text-center mb-3">
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
    </div>
  );
} 