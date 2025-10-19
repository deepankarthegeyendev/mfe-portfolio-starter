import React from 'react';
import { FaEnvelope, FaLinkedin, FaMedium, FaGlobe, FaGithub } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SystemDesign from './components/SystemDesign';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ResumeGPTApp from './components/ResumeGPTApp';
import profile from './assets/profile.jpg';

const projects = [
  {
    title: 'tourist-explorer - Remote MFE 1 (Angular) with Module Federation',
    description: 'A modular micro frontend that showcases top tourist attractions across cities and states in India.',
    features: [
      'Dynamic location-based suggestions',
      'Image gallery & local highlights',
      'Weather API & embedded maps',
      'Exposed as tourist/TouristApp via Module Federation',
    ],
    tech: 'React, Tailwind, Vite, REST API',
    website: '#',
    github: '#',
  },
  {
    title: 'resumegpt - React',
    description: 'A lightweight AI-powered tool that helps users generate and improve resumes based on job descriptions.',
    features: [
      'GPT-based suggestion for resume bullet points',
      'Live JD parser and skill gap analysis',
      'Export as PDF',
      'Exposed as resumegpt/ResumeApp via Module Federation',
    ],
    tech: 'React, OpenAI API, Vite, Chakra UI',
    website: '/resumegpt',
    github: 'https://github.com/yourusername/mfe-portfolio-starter/tree/main/resumeGPT',
  },
];

const headerHeight = 88;

const socialLinks = [
  { icon: <FaEnvelope />, url: 'mailto:deepan_31@yahoo.co.in', label: 'Email' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/deepankarthegeyen', label: 'LinkedIn' },
  { icon: <FaMedium />, url: 'https://medium.com/', label: 'Medium' },
];

function MainPage() {
  return (
    <div style={{ background: '#23182a', minHeight: '100vh', color: 'white', fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Fixed Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          background: '#23182a',
          zIndex: 1050,
          boxShadow: '0 2px 8px #0002',
          padding: '0 0',
          height: headerHeight,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={profile}
          alt="Profile"
          style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginLeft: 32, border: '2px solid #bada55' }}
        />
        <div style={{ marginLeft: 32 }}>
          <h1 style={{ fontWeight: 700, fontSize: '2.5rem', margin: 0, color: 'white', letterSpacing: '-1px' }}>Deepan Karthegeyen</h1>
          <div style={{ fontSize: '1.25rem', color: '#bbb', marginTop: 2 }}>A Full Stack Architect</div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#bada55', fontSize: 28, background: 'none', border: 'none' }}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main style={{ paddingTop: headerHeight + 32, maxWidth: 1100, margin: '0 auto' }}>
        <button
          style={{
            background: '#19c89b',
            color: 'white',
            fontWeight: 600,
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: 12,
            padding: '0.9rem 2.2rem',
            margin: '32px 0 40px 0',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0002',
            display: 'block',
          }}
        >
          View My Work
        </button>
        {/* Projects Section */}
        <h2 style={{ fontWeight: 700, fontSize: '2rem', margin: '32px 0 18px 0' }}>Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((proj) => (
            <div
              key={proj.title}
              style={{
                background: '#46605a',
                borderRadius: 16,
                padding: '1.5rem 1.2rem',
                display: 'flex',
                alignItems: 'flex-start',
                boxShadow: '0 0 6px #0002',
                minHeight: 120,
                marginBottom: 12,
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 4 }}>{proj.title}</div>
                <div style={{ color: '#eaeaea', fontSize: '1.08rem', marginBottom: 8 }}>{proj.description}</div>
                <ul style={{ color: '#bada55', fontSize: '1.05rem', marginBottom: 8, fontWeight: 500, paddingLeft: 20 }}>
                  {proj.features && proj.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div style={{ color: '#bada55', fontSize: '1.05rem', marginBottom: 0, fontWeight: 500 }}>
                  {proj.tech}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginLeft: 32, minWidth: 120 }}>
                <a
                  href={proj.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#19c89b',
                    color: 'white',
                    borderRadius: 8,
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '0.6rem 1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 1px 4px #0001',
                  }}
                >
                  <FaGlobe style={{ marginRight: 8, fontSize: '1.1rem' }} /> Website
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#19c89b',
                    color: 'white',
                    borderRadius: 8,
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '0.6rem 1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 1px 4px #0001',
                  }}
                >
                  <FaGithub style={{ marginRight: 8, fontSize: '1.1rem' }} /> Github
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, marginBottom: 70, textAlign: 'center' }}>
          <Link to="/system-design" style={{ color: '#bada55', fontWeight: 700, fontSize: '1.25rem', textDecoration: 'underline' }}>
            My Portfolio Site - Design
          </Link>
        </div>
        <div style={{ marginTop: 0 }}>
          {/* Hero (Let's Connect) will be rendered here by parent or route */}
        </div>
      </main>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isSystemDesign = location.pathname === '/system-design';
  const isResume = location.pathname === '/resume';
  const isHome = location.pathname === '/';
  const theme = isSystemDesign || isResume || isHome ? 'light' : 'dark';

  // Floating contact button state
  const [openContact, setOpenContact] = React.useState(false);
  const [fabPos, setFabPos] = React.useState({ x: window.innerWidth - 96, y: window.innerHeight - 120 });
  const [dragging, setDragging] = React.useState(false);
  const dragOffset = React.useRef({ x: 0, y: 0 });

  // Drag handlers
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    dragOffset.current = {
      x: clientX - fabPos.x,
      y: clientY - fabPos.y,
    };
    e.stopPropagation();
  };
  const onDrag = (e: MouseEvent | TouchEvent) => {
    if (!dragging) return;
    const clientX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = 'touches' in e ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
    let newX = clientX - dragOffset.current.x;
    let newY = clientY - dragOffset.current.y;
    // Keep within window bounds
    const btnSize = 64;
    newX = Math.max(8, Math.min(window.innerWidth - btnSize - 8, newX));
    newY = Math.max(8, Math.min(window.innerHeight - btnSize - 8, newY));
    setFabPos({ x: newX, y: newY });
  };
  const onDragEnd = () => setDragging(false);

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onDrag);
      window.addEventListener('mouseup', onDragEnd);
      window.addEventListener('touchmove', onDrag);
      window.addEventListener('touchend', onDragEnd);
    } else {
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('touchmove', onDrag);
      window.removeEventListener('touchend', onDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onDrag);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('touchmove', onDrag);
      window.removeEventListener('touchend', onDragEnd);
    };
    // eslint-disable-next-line
  }, [dragging, fabPos]);

  return (
    <div
      style={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Debug: Fixed TEST box in top left */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, background: 'red', color: 'white', padding: 8 }}>
        TEST
      </div>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/system-design" element={<SystemDesign />} />
          <Route path="/resumegpt" element={<ResumeGPTApp />} />
        </Routes>
      </div>
      {/* Floating Contact Button (always visible) */}
      <button
        className="contact-fab zoom-hover"
        onClick={() => setOpenContact(true)}
        aria-label="Open contact sidebar"
        style={{
          left: fabPos.x,
          top: fabPos.y,
          position: 'fixed',
          zIndex: 2000,
          touchAction: 'none',
          cursor: dragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
      >
        <span style={{ fontSize: 28, fontWeight: 700 }}>@</span>
      </button>
      <Contact open={openContact} onClose={() => setOpenContact(false)} theme={theme} fabPos={fabPos} />
      <Footer theme={theme} />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App; 