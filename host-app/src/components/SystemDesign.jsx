import React, { useState } from 'react';
import arch from "../assets/Personal-Website.svg";

export default function SystemDesign() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ background: '#fff', boxSizing: 'border-box', padding: 0, margin: 0, paddingTop: '72px', marginBottom: '-30px', marginTop: '-73px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <section id="system-design" style={{ maxWidth: 1200, margin: '0 auto', padding: '2.5rem 1rem 0 1rem', paddingTop: 0, marginTop: 0, flex: 1 }}>
        {/* Section 1: Mono-repo + Micro Frontends */}
        <h3 style={{ color: 'black', fontSize: '2rem', marginBottom: '1.2rem', fontWeight: 700 }}>Under the Hood: My Portfolio Architecture</h3>
        <p style={{ color: 'black', fontSize: '1.15rem', marginBottom: 16 }}>
          My portfolio is organized as a mono-repo with several micro-frontend projects. I use Webpack Module Federation so each project—like ResumeGPT, and Tourist Explorer—can run independently but also work together inside the main app.
        </p>
        <ul style={{ marginTop: 0, marginBottom: 32, paddingLeft: 24, color: 'black', fontSize: '1.08rem' }}>
          <li>I can load different apps on demand as web components.</li>
          <li>Lerna and Yarn workspaces help manage dependencies and builds.</li>
          <li>This setup makes it easy to update or deploy features separately.</li>
        </ul>

        {/* Architecture Diagram */}
        <h3 style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem', marginTop: 40 }}>The Architecture</h3>
        <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
          <img
            src={arch}
            alt="Website Architecture Diagram"
            style={{
              maxWidth: '100%',
              borderRadius: 0,
              boxShadow: 'none',
              cursor: 'zoom-in',
              transition: 'box-shadow 0.2s',
              border: 'none',
            }}
            onClick={() => setShowModal(true)}
            title="Click to zoom"
          />
        </div>

        {/* Modal for zoomed image */}
        {showModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
            onClick={() => setShowModal(false)}
          >
            <img
              src={arch}
              alt="Zoomed Architecture Diagram"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: 0,
                boxShadow: 'none',
                background: '#fff',
                padding: 0,
                border: 'none',
              }}
            />
          </div>
        )}

        {/* Section 2: CI/CD with AWS CodePipeline */}
        <h3 style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem', marginTop: 40 }}>CI/CD Pipeline</h3>
        <p style={{ color: 'black', fontSize: '1.08rem' }}>
          Whenever I push code to GitHub, a webhook triggers an AWS Lambda function, which starts a CodePipeline for the specific micro-frontend.
        </p>
        <ul style={{ marginTop: 0, marginBottom: 32, paddingLeft: 24, color: 'black', fontSize: '1.08rem' }}>
          <li>CodeBuild handles the build process for each app.</li>
          <li>The static files go into separate S3 folders.</li>
          <li>After deployment, CloudFront cache is invalidated automatically.</li>
          <li>I use AWS CDK to manage all the infrastructure as code.</li>
        </ul>

        {/* Section 3: Scalable & Secure Hosting */}
        <h3 style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem' }}>Scalable & Secure Hosting</h3>
        <p style={{ color: 'black', fontSize: '1.08rem' }}>
          Everything is served through Amazon CloudFront, with Lambda@Edge for custom request routing.
        </p>
        <ul style={{ marginTop: 0, marginBottom: 32, paddingLeft: 24, color: 'black', fontSize: '1.08rem' }}>
          <li>AWS WAF helps protect against attacks.</li>
          <li>S3 files are private and only accessible through CloudFront.</li>
          <li>Lambda@Edge lets me route requests based on the URL.</li>
        </ul>

        {/* Section 4: Messaging & Decoupling with SNS and SQS */}
        <h3 style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem' }}>Messaging with SNS & SQS</h3>
        <p style={{ color: 'black', fontSize: '1.08rem' }}>
          I'm planning to use AWS SNS (Simple Notification Service) for sending emails to users. For example, when a user signs up or requests a password reset, SNS can trigger an email notification easily and reliably.
        </p>
        <p style={{ color: 'black', fontSize: '1.08rem' }}>
          For background processing and decoupling parts of my apps, AWS SQS (Simple Queue Service) is a good fit. In projects like Tourist Explorer and ResumeGPT, I could use SQS to queue up tasks like processing user uploads, generating reports, or handling heavy API requests. This way, the main app stays responsive, and background jobs can be processed separately by worker services.
        </p>

        <p style={{ marginTop: '2.5rem', color: 'black', fontSize: '1.08rem' }}>
          This approach keeps things modular, fast, and easy to maintain. All my portfolio projects use this foundation.
        </p>
      </section>
    </div>
  );
}