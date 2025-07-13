import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Hero({ theme }) {
  const isDark = theme === 'dark';
  return (
    <div className="text-center mb-4">
      <Link to="/" style={{ display: 'inline-block' }}>
        <img src={profile} alt="Profile" width={64} height={64} className="rounded-circle mb-2" style={{ objectFit: 'cover', border: '2px solid #bada55', cursor: 'pointer' }} />
      </Link>
      <h1 style={{ fontWeight: 'bold', fontSize: '2.2rem', marginBottom: 0, color: isDark ? 'white' : '#222' }}>Deepan Karthegeyen</h1>
      <div style={{ fontSize: '1.2rem', color: isDark ? '#bbb' : '#444' }}>A Full Stack Architect</div>
      <hr style={{ borderTop: `3px solid #bada55`, width: '60%', margin: '1rem auto' }} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '2rem' }}>
        <a href="mailto:deepan_31@yahoo.co.in" style={{ color: '#bada55' }} title="Mail"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/deepankarthegeyen" target="_blank" rel="noopener noreferrer" style={{ color: '#bada55' }} title="LinkedIn"><FaLinkedin /></a>
        <a href="mailto:deepan_31@gmail.com" style={{ color: '#bada55' }} title="Gmail"><SiGmail /></a>
      </div>
    </div>
  );
} 