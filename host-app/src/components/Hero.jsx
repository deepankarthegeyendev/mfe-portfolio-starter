import React, { useState, useRef } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Hero({ theme, onOpenContact, fabPos, onFabMove }) {
  const navigate = useNavigate();
  const isDark = theme === 'dark';
  const panelBg = isDark ? '#46605a' : '#e6f0fa';

  // Draggable FAB state (lifted to App)
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Mouse/touch handlers
  const onDragStart = (e) => {
    setDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    dragOffset.current = {
      x: clientX - fabPos.x,
      y: clientY - fabPos.y,
    };
    e.stopPropagation();
  };
  const onDrag = (e) => {
    if (!dragging) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    let newX = clientX - dragOffset.current.x;
    let newY = clientY - dragOffset.current.y;
    // Keep within window bounds
    const btnSize = 64;
    newX = Math.max(8, Math.min(window.innerWidth - btnSize - 8, newX));
    newY = Math.max(8, Math.min(window.innerHeight - btnSize - 8, newY));
    onFabMove({ x: newX, y: newY });
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
  }, [dragging, fabPos]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', background: 'none', position: 'relative' }}>
      <div
        className="lets-connect-panel zoom-hover"
        style={{
          background: panelBg,
          borderRadius: 20,
          boxShadow: '0 2px 16px #0004',
          padding: '2.5rem 2.5rem 2rem 2.5rem',
          maxWidth: 520,
          width: '100%',
          textAlign: 'center',
          color: isDark ? '#fff' : '#222',
          transition: 'transform 0.25s cubic-bezier(.4,1.6,.6,1), box-shadow 0.25s',
        }}
      >
        <h2 style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: 12 }}>Let's Connect</h2>
        <div style={{ color: isDark ? '#e0e0e0' : '#444', fontSize: '1.18rem', marginBottom: 32, fontWeight: 500, lineHeight: 1.4 }}>
          I share .NET and Architecture tips on social media.<br />Follow me and let's connect.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 56, marginBottom: 18 }}>
          <a href="https://www.linkedin.com/in/deepankarthegeyen" target="_blank" rel="noopener noreferrer" className="hero-bounce" style={{ textDecoration: 'none', color: '#bada55', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaLinkedin size={56} />
            <span style={{ marginTop: 12, fontWeight: 500, color: isDark ? '#fff' : '#222', fontSize: '1.08rem' }}>LinkedIn</span>
          </a>
          <a href="https://github.com/deepankarthegeyen" target="_blank" rel="noopener noreferrer" className="hero-bounce" style={{ textDecoration: 'none', color: isDark ? '#fff' : '#222', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaGithub size={56} />
            <span style={{ marginTop: 12, fontWeight: 500, color: isDark ? '#fff' : '#222', fontSize: '1.08rem' }}>GitHub</span>
          </a>
        </div>
        <div style={{ color: '#bbb', fontSize: '0.98rem', marginTop: 16 }}>
          <span role="img" aria-label="lock">🔓</span> DM always open — feel free to say hi!
        </div>
      </div>
      {/* Draggable Floating Contact Button */}
      <button
        className="contact-fab zoom-hover"
        onClick={onOpenContact}
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
      <style>{`
        .contact-fab {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #bada55;
          color: #222;
          border: none;
          box-shadow: 0 2px 16px #0003;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .contact-fab:hover {
          background: #a0c944;
        }
        .zoom-hover {
          transition: transform 0.25s cubic-bezier(.4,1.6,.6,1), box-shadow 0.25s;
        }
        .zoom-hover:hover {
          transform: scale(1.12);
          box-shadow: 0 6px 32px #0003;
        }
        @media (max-width: 600px) {
          .contact-fab {
            width: 54px;
            height: 54px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
} 