import React from 'react';
const skillLevelMap = {
  'Expert': 100,
  'Experienced': 80,
  'Skillful': 60,
  'Proficient': 50,
  'Familiar': 30
};
export default function Skills({ resumeData }) {
  return (
    <div style={{ background: 'white', color: '#222', borderRadius: 16, boxShadow: '0 2px 16px #0002', padding: '2.5rem 2rem', minWidth: 260, maxWidth: 340, margin: '2rem auto' }}>
      <div className="mb-4">
        <h6 style={{ fontWeight: 'bold' }}>SKILLS</h6>
        <ul style={{ marginBottom: 0, listStyle: 'none', paddingLeft: 0 }}>
          {resumeData.skills.map((s, i) => (
            <li key={i} style={{ marginBottom: 18 }}>
              <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{s.label}</div>
              <div style={{ background: '#e9ecef', borderRadius: 8, height: 10, width: '100%' }}>
                <div style={{ width: `${skillLevelMap[s.level] || 40}%`, height: 10, background: '#bada55', borderRadius: 8 }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h6 style={{ fontWeight: 'bold' }}>LANGUAGES</h6>
        <ul style={{ marginBottom: 0 }}>
          {resumeData.languages.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 