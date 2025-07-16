import React from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact({ theme }) {
  const isDark = theme === "dark";
  const bodyStyle = {
    background: isDark ? "#322430" : "#f7f7fa",
    borderRadius: "10px",
    padding: "2rem",
    boxShadow: "0 0 10px #0002",
    border: "1px solid #4b3a4d",
  };

  const form = useRef();
  const [showThankYou, setShowThankYou] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

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
        "service_vh0fb0q", // Your EmailJS service ID
        "template_ujwygov", // Your EmailJS template ID
        {
          title: "Message from my Personal Portfolio!!!", // You can add any custom variable
          name: name,
          email: email,
          message: message,
        },
        "opNNg_TtfBfauxogB" // Your EmailJS public key
      )
      .then(
        (result) => {
          // 2. Send thank you email to the user
          emailjs.send(
            "service_vh0fb0q",
            "template_vorlxk9", // Your thank you template ID
            {
              name: name,
              email: email, // This will be used as the "To" in the template
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
    <div style={bodyStyle}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh", position: "relative" }}
      >
        {showToast && (
          <div
            style={{
              position: "fixed",
              top: 20,
              left: 0,
              right: 0,
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#bada55",
                color: "#222",
                padding: "1rem 2rem",
                borderRadius: "8px",
                boxShadow: "0 2px 8px #0002",
                fontWeight: "bold",
              }}
            >
              {toastMessage}
            </div>
          </div>
        )}
        <Col
          md={6}
          style={{
            background: isDark ? "#322430" : "#f7f7fa",
            borderRadius: "10px",
            padding: "2rem",
            boxShadow: "0 0 10px #0002",
            border: "1px solid #4b3a4d",
          }}
        >
          <div className="text-center mb-3">
            {!showThankYou && (
              <h2
                className="mb-0"
                style={{ fontWeight: "bold", color: isDark ? "white" : "#222" }}
              >
                Contact Me
              </h2>
            )}
          </div>
          <div
            className="text-center mb-3"
            style={{
              fontWeight: "bold",
              color: isDark ? "#bada55" : "#222",
              fontSize: "1.2rem",
            }}
          >
            at{" "}
            <a
              href="mailto:deepan_31@yahoo.co.in"
              style={{
                color: isDark ? "#bada55" : "#222",
                textDecoration: "underline",
              }}
            >
              deepan_31@yahoo.co.in
            </a>
          </div>
          <hr
            style={{
              borderTop: "3px solid #bada55",
              width: "60%",
              margin: "0 auto 2rem auto",
            }}
          />
          {!showThankYou ? (
            <Form ref={form} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Your Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Type your message here..."
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  background: "#bada55",
                  border: "none",
                  color: "#222",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </Form>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "2rem 0",
                color: isDark ? "#bada55" : "#222",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              Thank you for contacting me!<br />
              Keep visiting my site next time.
              <div style={{ marginTop: "2rem" }}>
                <Button
                  style={{
                    background: "#bada55",
                    border: "none",
                    color: "#222",
                    fontWeight: "bold",
                    padding: "0.5rem 2rem",
                    borderRadius: "8px",
                  }}
                  onClick={() => navigate("/")}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Container>
    </div>
  );
}
