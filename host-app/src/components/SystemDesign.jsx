import React from 'react';

export default function SystemDesign() {
  return (
    <section id="system-design" className="py-5 px-2" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#bada55', marginBottom: '2rem', textAlign: 'center' }}>System Design</h2>
      <div className="row justify-content-center" style={{ gap: '0.5rem' }}>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <div style={{ background: '#23272f', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 8px #0002', width: '100%', maxWidth: 400 }}>
            <h3 style={{ fontSize: '1.25rem', color: 'white', fontWeight: 600 }}>HRMS Payroll Microservices</h3>
            <p style={{ color: '#ccc', marginTop: 12 }}>
              Decomposed a monolithic payroll system into microservices including Tax, Salary, Leave, and Timesheet.
              Implemented <strong>SAGA</strong> pattern with distributed transactions and <strong>Event-driven architecture</strong> using Kafka and Azure Functions.
            </p>
            <ul style={{ marginTop: 16, fontSize: '0.97rem', color: '#bada55', paddingLeft: 20 }}>
              <li>Tech Stack: .NET Core, Azure, Kafka, PostgreSQL, Docker</li>
              <li>Outcome: Improved scalability, reduced payroll run time by 60%</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
          <div style={{ background: '#23272f', padding: '1.5rem', borderRadius: 12, boxShadow: '0 2px 8px #0002', width: '100%', maxWidth: 400 }}>
            <h3 style={{ fontSize: '1.25rem', color: 'white', fontWeight: 600 }}>InterviewIQ AI Bot Architecture</h3>
            <p style={{ color: '#ccc', marginTop: 12 }}>
              Built a GenAI-powered resume-matching system using OpenAI + cosine similarity. Stateless frontend using React and backend APIs in .NET hosted on Azure Functions.
            </p>
            <ul style={{ marginTop: 16, fontSize: '0.97rem', color: '#bada55', paddingLeft: 20 }}>
              <li>Tech Stack: React, .NET Web API, OpenAI, Azure Blob, Durable Functions</li>
              <li>Outcome: Real-time JD/resume scoring engine with 95% uptime</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 