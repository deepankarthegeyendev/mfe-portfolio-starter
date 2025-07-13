import React from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';

export default function Contact({ theme }) {
  const isDark = theme === 'dark';
  const bodyStyle = {
    background: isDark ? '#322430' : '#f7f7fa',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 0 10px #0002',
    border: '1px solid #4b3a4d'
  };
  return (
    <div style={bodyStyle}>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Col md={6} style={{ background: isDark ? '#322430' : '#f7f7fa', borderRadius: '10px', padding: '2rem', boxShadow: '0 0 10px #0002', border: '1px solid #4b3a4d' }}>
          <div className="text-center mb-3">
            <h2 className="mb-0" style={{ fontWeight: 'bold', color: isDark ? 'white' : '#222' }}>Contact Me</h2>
          </div>
          <div className="text-center mb-3" style={{ fontWeight: 'bold', color: isDark ? '#bada55' : '#222', fontSize: '1.2rem' }}>
            at <a href="mailto:deepan_31@yahoo.co.in" style={{ color: isDark ? '#bada55' : '#222', textDecoration: 'underline' }}>deepan_31@yahoo.co.in</a>
          </div>
          <hr style={{ borderTop: '3px solid #bada55', width: '60%', margin: '0 auto 2rem auto' }} />
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Type your message here..." />
            </Form.Group>
            <Button type="submit" style={{ background: '#bada55', border: 'none', color: '#222', width: '100%', fontWeight: 'bold' }}>Submit</Button>
          </Form>
        </Col>
      </Container>
    </div>
  );
} 