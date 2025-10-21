// LeadIntroTrend.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * Trendy, centered intro banner for personal portfolio pages.
 * - No buttons, compact
 * - Slight glass effect, left accent bar, tech chips
 * - Subtitle color increased for better contrast
 *
 * Usage: place above Projects (Col md={10})
 */
export default function LeadIntroTrend({
  title = "Senior Engineering Leader — Full-Stack & AI",
  subtitle = "Senior engineering leader with 14+ years delivering enterprise-grade web platforms and cloud-native SaaS. Focused on leveraging AI/ML and strategic tooling to accelerate product outcomes.",
  chips = [" .NET ", " Angular ", " AI / ML "]
}) {
  return (
    <section
      aria-label="Lead intro"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px 12px",
        marginBottom: 22
      }}
    >
      {/* Inline styles + small local CSS for animation */}
      <style>{`
        /* fade/slide in */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .lit-card { 
          animation: fadeSlideUp 420ms ease both;
        }
      `}</style>

      <div
        className="lit-card"
        style={{
          maxWidth: 980,
          width: "100%",
          textAlign: "center",
          padding: "20px 26px",
          borderRadius: 14,
          display: "block",
          position: "relative",
          overflow: "hidden",
          // glass / subtle gradient
          background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
          border: "1px solid rgba(255,255,255,0.04)",
          boxShadow: "0 8px 30px rgba(2,6,23,0.6)"
        }}
      >
        {/* left accent bar */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 6,
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            background: "linear-gradient(180deg,#9EE37C,#5EE0B5)",
            opacity: 0.98
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h2
            style={{
              margin: 0,
              fontSize: "1.18rem",
              color: "#E8F9B6", // soft lime for headline
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "0.3px",
              paddingLeft: 12 // create breathing from accent
            }}
          >
            {title}
          </h2>

          <p
            style={{
              marginTop: 10,
              marginBottom: 12,
              // subtitle darker / more contrast (more visible than previous)
              color: "rgba(255,255,255,0.96)",
              fontSize: "0.98rem",
              fontWeight: 500,
              lineHeight: 1.45,
              maxWidth: 840,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: 6,
              paddingRight: 6
            }}
          >
            {subtitle}
          </p>

          {/* chips row */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", paddingTop: 6 }}>
            {chips.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontSize: "0.83rem",
                  fontWeight: 700,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.03)"
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

LeadIntroTrend.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  chips: PropTypes.arrayOf(PropTypes.string)
};