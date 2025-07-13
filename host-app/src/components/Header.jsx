import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../assets/profile.jpg';
import { FaFileAlt, FaEnvelope, FaMoon, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Header({ theme, onToggleTheme }) {
  const navigate = useNavigate();
  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="lg" className="mb-5">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" style={{ paddingRight: 0, cursor: 'pointer' }}>
          <img src={profile} alt="Profile" width={48} height={48} className="rounded-circle" style={{ objectFit: 'cover', border: '2px solid #bada55' }} />
        </Navbar.Brand>
        <div className="flex-grow-1" />
        <Nav className="ms-auto align-items-center justify-content-end" style={{ gap: '0.5rem' }}>
          <Nav.Link onClick={() => navigate('/resume')} style={{ color: theme === 'dark' ? 'white' : '#222', display: 'flex', alignItems: 'center' }}>
            <FaFileAlt style={{ marginRight: 6 }} /> Resume
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/contact')} style={{ color: theme === 'dark' ? 'white' : '#222', display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ marginRight: 6 }} /> Contact
          </Nav.Link>
          <Nav.Link style={{ color: theme === 'dark' ? 'white' : '#222', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={onToggleTheme}>
            <FaMoon style={{ marginRight: 6 }} /> Theme
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
} 