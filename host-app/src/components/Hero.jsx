import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', background: 'none' }}>
      <div style={{
        background: 'rgba(30,22,35,0.97)',
        borderRadius: 20,
        boxShadow: '0 2px 16px #0004',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        maxWidth: 520,
        width: '100%',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: 12 }}>Let's Connect</h2>
        <div style={{ color: '#e0e0e0', fontSize: '1.18rem', marginBottom: 32, fontWeight: 500, lineHeight: 1.4 }}>
          I share .NET and Architecture tips on social media.<br />Follow me and let's connect.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 56, marginBottom: 18 }}>
          <a href="https://www.linkedin.com/in/deepankarthegeyen" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#bada55', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaLinkedin size={56} />
            <span style={{ marginTop: 12, fontWeight: 500, color: '#fff', fontSize: '1.08rem' }}>LinkedIn</span>
          </a>
          <a href="https://github.com/deepankarthegeyen" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaGithub size={56} />
            <span style={{ marginTop: 12, fontWeight: 500, color: '#fff', fontSize: '1.08rem' }}>GitHub</span>
          </a>
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              outline: 'none',
              textDecoration: 'none',
            }}
          >
            <span style={{
              display: 'inline-block',
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: '#bada55',
              color: '#222',
              fontWeight: 700,
              fontSize: 32,
              lineHeight: '56px',
              textAlign: 'center',
              marginBottom: 0,
            }}>@</span>
            <span style={{ marginTop: 12, fontWeight: 500, color: '#fff', fontSize: '1.08rem' }}>Contact</span>
          </button>
        </div>
        <div style={{ color: '#bbb', fontSize: '0.98rem', marginTop: 16 }}>
          <span role="img" aria-label="lock">🔓</span> DM always open — feel free to say hi!
        </div>
      </div>
    </div>
  );
} 