import React from 'react';

const ResumeGPTApp: React.FC = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      border: 'none',
      background: '#f7fafc'
    }}>
      <iframe
        src="http://localhost:5173"
        width="100%"
        height="100%"
        frameBorder="0"
        title="ResumeGPT Application"
        style={{
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
};

export default ResumeGPTApp;

