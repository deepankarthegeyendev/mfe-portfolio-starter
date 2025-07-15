import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero({ theme }) {
  const isDark = theme === 'dark';
  return (
    <div id="hero" className="text-center" style={{ marginTop: 0, paddingTop: 0, marginBottom: 24 }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '2.2rem', marginBottom: 0, color: isDark ? 'white' : '#222' }}>Deepan Karthegeyen</h1>
      <div style={{ fontSize: '1.2rem', color: isDark ? '#bbb' : '#444' }}>A Full Stack Architect</div>
      <hr style={{ borderTop: `3px solid #ffffff`, width: '60%', margin: '1rem auto' }} />
      <style>{`
        .hero-social-icon {
          color: #bada55;
          transition: background 0.2s;
          border-radius: 8px;
          padding: 0.2em 0.4em;
        }
        .hero-social-icon:hover {
          background: rgba(25, 200, 155, 0.18);
        }
        .hero-viewwork-btn {
          background: #19c89b;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          border-radius: 12px;
          padding: 0.7rem 2rem;
          margin-top: 18px;
          cursor: pointer;
          box-shadow: 0 2px 8px #0002;
          display: inline-block;
          transition: background 0.2s;
        }
        .hero-viewwork-btn:hover {
          background: rgba(25, 200, 155, 0.82);
        }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '2rem', marginBottom: 0 }}>
        <a href="contact" className="hero-social-icon hover-highlight" title="Contact" aria-label="Contact"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/deepankarthegeyen" target="_blank" rel="noopener noreferrer" className="hero-social-icon hover-highlight" title="LinkedIn" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/deepankarthegeyendev" target="_blank" rel="noopener noreferrer" className="hero-social-icon hover-highlight" title="GitHub" aria-label="GitHub"><FaGithub /></a>
      </div>
      {/* <a
        href="projects"
        className="btn hover-highlight"
        style={{
          backgroundColor: '#bada55',
          color: '#222',
          padding: '0.6rem 1.2rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}
      >
        View My Work
      </a> */}
    </div>
  );
} 