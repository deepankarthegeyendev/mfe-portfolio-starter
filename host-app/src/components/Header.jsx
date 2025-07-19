import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { FaSitemap, FaFileAlt, FaEnvelope, FaMoon } from "react-icons/fa";

export default function Header({ theme, onToggleTheme }) {
  const navigate = useNavigate();
  return (
    <Navbar
      bg={theme === "dark" ? "dark" : undefined}
      variant={theme === "dark" ? "dark" : "light"}
      expand="lg"
      className="fixed-header"
      style={theme === "dark" ? {} : { background: "#f8f5e6" }}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          style={{ paddingRight: 0, cursor: "pointer" }}
        >
          <img
            src={profile}
            alt="Profile"
            width={48}
            height={48}
            className="rounded-circle"
            style={{
              objectFit: "cover",
              border: "2px solid #bada55",
              cursor: "pointer",
            }}
            onClick={() => {
              const heroSection = document.getElementById("hero");
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </Navbar.Brand>
        <Nav.Link
          onClick={() => navigate(process.env.NODE_ENV === 'production'
                  ? "/"
                  : "/")}
          className="header-name"
          style={{
            color: theme === "dark" ? "white" : "#222",
            display: "flex",
            alignItems: "center",
          }}
        >
        Deepan Karthegeyen
        </Nav.Link>
        <div className="flex-grow-1" />
        <Nav
          className="ms-auto align-items-center justify-content-end header-icons-row"
          style={{ gap: "0.5rem", display: 'flex', flexDirection: 'row' }}
        >
          <Nav.Link
            onClick={() => navigate("/system-design")}
            style={{
              color: theme === "dark" ? "white" : "#222",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaSitemap style={{ marginRight: 6 }} /> <span className="header-btn-text">Architecture</span>
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/resume")}
            style={{
              color: theme === "dark" ? "white" : "#222",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaFileAlt style={{ marginRight: 6 }} /> <span className="header-btn-text">Resume</span>
          </Nav.Link>
          <Nav.Link style={{ color: theme === 'dark' ? 'white' : '#222', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={onToggleTheme}>
            <FaMoon style={{ marginRight: 6 }} /> <span className="header-btn-text">Theme</span>
          </Nav.Link>
        </Nav>
      </Container>
      {/* Responsive CSS: Hide name and text labels on mobile, keep icons in a row */}
      <style>{`
        @media (max-width: 600px) {
          .header-name, .header-btn-text {
            display: none !important;
          }
          .header-icons-row {
            flex-direction: row !important;
            justify-content: flex-end !important;
            align-items: center !important;
            gap: 0.5rem !important;
            width: auto !important;
          }
        }
      `}</style>
    </Navbar>
  );
}
