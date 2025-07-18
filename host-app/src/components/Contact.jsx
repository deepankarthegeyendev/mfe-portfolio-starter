import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact({ open, onClose, theme, fabPos }) {
  const isDark = theme === "dark";
  const [showThankYou, setShowThankYou] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const form = useRef();
  const popupRef = useRef();
  const [popupPos, setPopupPos] = useState({ left: 0, top: 0 });

  // Reset form state when closed
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setShowThankYou(false);
        setShowToast(false);
        setToastMessage("");
      }, 350); // match transition duration
    }
  }, [open]);

  // Dynamically position the popup above or below the @ icon based on actual height
  useLayoutEffect(() => {
    if (!open || !fabPos) return;
    const popupWidth = 320;
    const btnSize = 64;
    const gap = 12;
    let left = fabPos.x + btnSize / 2 - popupWidth / 2;
    if (left < 8) left = 8;
    if (left + popupWidth > window.innerWidth - 8) left = window.innerWidth - popupWidth - 8;
    let top = 0;
    const popupEl = popupRef.current;
    if (popupEl) {
      const popupHeight = popupEl.offsetHeight;
      // Try above the button
      let tryTop = fabPos.y - popupHeight - gap;
      if (tryTop >= 8) {
        top = tryTop;
      } else {
        // Not enough space above, show below
        top = fabPos.y + btnSize + gap;
        // If it overflows bottom, clamp
        if (top + popupHeight > window.innerHeight - 8) {
          top = window.innerHeight - popupHeight - 8;
        }
      }
    } else {
      // Fallback: show below
      top = fabPos.y + btnSize + gap;
    }
    setPopupPos({ left, top });
  }, [open, fabPos, showThankYou, showToast, toastMessage]);

  const popupStyle = {
    position: 'fixed',
    left: popupPos.left,
    top: popupPos.top,
    zIndex: 1301,
    minWidth: 260,
    maxWidth: 320,
    maxHeight: Math.floor(window.innerHeight * 0.9),
    background: isDark ? "#322430" : "#fff",
    color: isDark ? "#fff" : "#222",
    borderRadius: 16,
    boxShadow: '0 4px 32px #0003',
    padding: '1.2rem 1rem 1rem 1rem',
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
    transform: open ? 'scale(1)' : 'scale(0.85)',
    transition: 'opacity 0.3s, transform 0.3s',
    overflowY: 'auto',
  };

  // Prevent overlay click from closing when clicking inside popup
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.target;
    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }
    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    emailjs
      .send(
        "service_vh0fb0q",
        "template_ujwygov",
        {
          title: "Message from my Personal Portfolio!!!",
          name: name,
          email: email,
          message: message,
        },
        "opNNg_TtfBfauxogB"
      )
      .then(
        (result) => {
          emailjs.send(
            "service_vh0fb0q",
            "template_vorlxk9",
            {
              name: name,
              email: email,
            },
            "opNNg_TtfBfauxogB"
          );
          setShowThankYou(true);
          setToastMessage("Message sent successfully! Thank you!!!");
          setShowToast(true);
          setTimeout(() => setShowToast(false), 4000);
          e.target.reset();
        },
        (error) => {
          setToastMessage("Failed to send message, please try again.");
          setShowToast(true);
          setTimeout(() => setShowToast(false), 4000);
        }
      );
  };

  return (
    <>
      <div
        className={`contact-overlay${open ? " open" : " closed"}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <div ref={popupRef} style={popupStyle} onClick={handlePopupClick}>
        <button className="contact-close-btn" onClick={onClose} aria-label="Close contact form" style={{ position: 'absolute', top: 10, right: 12, background: 'none', border: 'none', fontSize: 22, color: '#bada55', cursor: 'pointer', zIndex: 2 }}>×</button>
        {showToast && (
          <div className="contact-toast">{toastMessage}</div>
        )}
        <div className="text-center mb-2">
          {!showThankYou && (
            <h2 className="mb-0" style={{ fontWeight: "bold", color: isDark ? "white" : "#222", fontSize: '1.3rem' }}>Contact Me</h2>
          )}
        </div>
        <div className="text-center mb-2" style={{ fontWeight: "bold", color: isDark ? "#bada55" : "#222", fontSize: "1.05rem" }}>
          <a href="mailto:deepan_31@yahoo.co.in" style={{ color: isDark ? "#bada55" : "#222", textDecoration: "underline" }}>deepan_31@yahoo.co.in</a>
        </div>
        <hr style={{ borderTop: "2px solid #bada55", width: "60%", margin: "0 auto 1rem auto" }} />
        {!showThankYou ? (
          <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="Enter your name" required size="sm" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formEmail">
              <Form.Label>Your Email:</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="Enter your email" required size="sm" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" name="message" rows={3} placeholder="Type your message here..." required size="sm" />
            </Form.Group>
            <Button type="submit" style={{ background: "#bada55", border: "none", color: "#222", width: "100%", fontWeight: "bold", marginTop: 8 }} size="sm">Submit</Button>
          </Form>
        ) : (
          <div style={{ textAlign: "center", padding: "1.2rem 0 0.5rem 0", color: isDark ? "#bada55" : "#222", fontWeight: "bold", fontSize: "1.1rem" }}>
            Thank you for contacting me!<br />Keep visiting my site next time.
            <div style={{ marginTop: "1.2rem" }}>
              <Button style={{ background: "#bada55", border: "none", color: "#222", fontWeight: "bold", padding: "0.4rem 1.2rem", borderRadius: "8px" }} onClick={onClose} size="sm">Close</Button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .contact-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.18);
          z-index: 1200;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s;
        }
        .contact-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        .contact-overlay.closed {
          opacity: 0;
          pointer-events: none;
        }
        .contact-toast {
          position: fixed;
          top: 32px;
          left: 50%;
          transform: translateX(-50%);
          background: #bada55;
          color: #222;
          padding: 0.7rem 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px #0002;
          font-weight: bold;
          z-index: 1500;
          font-size: 1rem;
        }
        @media (max-width: 600px) {
          .contact-popup {
            min-width: 90vw !important;
            max-width: 98vw !important;
            left: 2vw !important;
            right: 2vw !important;
            top: 10vh !important;
          }
        }
      `}</style>
    </>
  );
}
