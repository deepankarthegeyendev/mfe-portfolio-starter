import React from 'react';
import { Link } from 'react-router-dom';
import arch from "../assets/Personal-Website.svg";

export default function SystemDesign() {
  return (
    <section id="system-design" className="py-5 px-2" style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#bada55', marginBottom: '2rem', textAlign: 'center' }}>
        <Link to="/system-design" style={{ color: '#bada55', textDecoration: 'underline' }}>System Design</Link>
      </h2> */}

      <div style={{ background: '#ffff', padding: '2rem', borderRadius: 12, boxShadow: '0 2px 8px #0002', color: '#ccc' }}>
        
        {/* Section 1: Mono-repo + Micro Frontends */}
        <h3 style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem' }}>🧱 Mono-repo & Micro-Frontends</h3>
        <p style={{ color: 'black' }}>
          My portfolio projects are structured as micro-frontends inside a mono-repo, leveraging <strong>Webpack Module Federation</strong>. 
          Each project—like ResumeGPT, InterviewIQ Bot, and HRMS—is isolated yet dynamically composable within the host shell app.
        </p>
        <ul style={{ marginTop: '1rem', paddingLeft: 20, color: 'black' }}>
          <li>🔗 Enables dynamic lazy loading of apps as Web Components.</li>
          <li>🔧 Managed via <strong>Lerna</strong> and built using <strong>Yarn workspaces</strong>.</li>
          <li>🌐 Promotes feature-level independence and faster deployments.</li>
        </ul>

        {/* Architecture Diagram */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img
            src={arch}
            alt="Website Architecture Diagram"
            style={{
              maxWidth: '100%',
              borderRadius: 10,
              boxShadow: '0 0 10px #0005',
            }}
          />
        </div>

        {/* Section 2: CI/CD with AWS CodePipeline */}
        <h3 style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem' }}>🚀 CI/CD Pipeline (Service-Oriented)</h3>
        <p style={{ color: 'black' }}>
          GitHub commits to individual micro-frontends trigger <strong>AWS Lambda</strong> via webhooks through <strong>API Gateway</strong>. Each change spins up its own <strong>AWS CodePipeline</strong>, ensuring independent and fast delivery.
        </p>
        <ul style={{ marginTop: '1rem', paddingLeft: 20, color: 'black' }}>
          <li>📦 <strong>CodeBuild</strong>: Converts TypeScript/React code into optimized bundles.</li>
          <li>🗂️ <strong>S3 Buckets</strong>: Each app’s static files are stored in isolated S3 paths.</li>
          <li>🧹 <strong>Cache Invalidation</strong>: Automatically triggers CloudFront invalidation post-deploy.</li>
          <li>⚙️ <strong>CDK</strong>: Everything from Lambda to IAM is provisioned via AWS CDK for full automation.</li>
        </ul>

        {/* Section 3: Scalable & Secure Hosting */}
        <h3 style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem' }}>🌍 Scalable & Secure Global Hosting</h3>
        <p style={{ color: 'black' }}>
          The entire system is hosted using <strong>Amazon CloudFront</strong> integrated with <strong>Lambda@Edge</strong> for request-level routing. This setup ensures blazing-fast delivery across the globe with secure access via OAI.
        </p>
        <ul style={{ marginTop: '1rem', paddingLeft: 20, color: 'black' }}>
          <li>🛡️ <strong>WAF</strong>: Protects from common attacks and bots.</li>
          <li>🔐 <strong>S3 + OAI</strong>: Ensures files are never publicly accessible—only via CloudFront.</li>
          <li>🌐 <strong>Lambda@Edge</strong>: Adds dynamic request routing based on origin paths.</li>
        </ul>

        <p style={{ marginTop: '1.5rem', color: 'black' }}>
          This setup forms the foundation for all the projects listed in my portfolio—from GenAI bots to scalable enterprise tools—
          with a focus on performance, modularity, and cloud-native principles.
        </p>
      </div>
    </section>
  );
}