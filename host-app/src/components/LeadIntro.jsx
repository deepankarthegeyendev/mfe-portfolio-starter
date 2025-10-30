// LeadIntroTrend.jsx
import { motion } from "framer-motion";

/**
 * Trendy, centered intro banner for personal portfolio pages.
 * - No buttons, compact
 * - Slight glass effect, left accent bar, tech chips
 * - Subtitle color increased for better contrast
 *
 * Usage: place above Projects (Col md={10})
 */
export default function LeadIntroTrend({ theme }) {
  const title = "Senior Engineering Leader — Full-Stack & AI";
  const subtitle =
    "Senior engineering leader with 14+ years delivering enterprise-grade web platforms and cloud-native SaaS. Focused on leveraging AI/ML and strategic tooling to accelerate product outcomes.";
  const chips = [" .NET ", " Angular ", " AI / ML "];
  const isDark = theme === "dark";
  const panelBg = isDark ? "#46605a" : "#e6f0fa";
  const panelText = isDark ? "white" : "#222";
  const tagColor = isDark ? "#eaeaea" : "#444";
  const badgeBg = isDark ? "#ffaa00" : "#ffcc00";
  const badgeColor = "#000";
  const chipBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
  const chipBorder = isDark ? '1px solid rgba(255,255,255,0.03)' : '1px solid rgba(0,0,0,0.06)';

  const MotionDiv = motion.div;

  return (
    <section
      aria-label="Lead intro"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px 12px",
        marginBottom: 22,
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
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
          border: "1px solid rgba(255,255,255,0.04)",
          //boxShadow: "0 8px 30px rgba(2,6,23,0.6)"
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
            opacity: 0.98,
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h2
            style={{
              margin: 0,
              fontSize: "1.18rem",
              color: panelText, //"#E8F9B6", // soft lime for headline
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "0.3px",
              paddingLeft: 12, // create breathing from accent
            }}
          >
            {title}
          </h2>

          <p
            style={{
              marginTop: 10,
              marginBottom: 12,
              // subtitle darker / more contrast (more visible than previous)
              color: panelText, //"rgba(255,255,255,0.96)",
              fontSize: "0.98rem",
              fontWeight: 500,
              lineHeight: 1.45,
              maxWidth: 840,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: 6,
              paddingRight: 6,
            }}
          >
            {subtitle}
          </p>

          {/* chips row - animate each chip individually with a small stagger */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", paddingTop: 6 }}>
            {chips.map((c, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
                style={{
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontSize: "0.83rem",
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #667EEA, #764BA2)",
                  border: chipBorder,
                  color: panelText,
                  display: "inline-block"
                }}
              >
                {c}
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// LeadIntroTrend.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   chips: PropTypes.arrayOf(PropTypes.string)
// };
