import React from 'react';

export default function SystemDesign() {
  return (
    <div className="system-design-content" style={{ maxWidth: 900, margin: '40px auto', padding: '2.5rem', background: '#fff', color: '#222', borderRadius: 24, boxShadow: '0 2px 16px #0001' }}>
      <h1 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', marginBottom: 24 }}>System Design</h1>
      <div style={{ marginBottom: 32, textAlign: 'center', color: '#888' }}>
        <div style={{
          width: '100%',
          height: 280,
          background: '#f5f5f5',
          border: '2px dashed #bbb',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          color: '#888',
        }}>
          [ Architecture Diagram Placeholder ]
        </div>
      </div>
      <div>
        <h2 style={{ fontWeight: 600, fontSize: '1.3rem', color: '#222', marginBottom: 12 }}>Tech Stack</h2>
        <ul style={{ color: '#444', fontSize: '1.08rem', paddingLeft: 24 }}>
          <li>React</li>
          <li>Vite</li>
          <li>React Bootstrap</li>
          <li>Module Federation</li>
          <li>Tailwind CSS</li>
          <li>Chakra UI</li>
          <li>OpenAI API</li>
        </ul>
      </div>
    </div>
  );
} 