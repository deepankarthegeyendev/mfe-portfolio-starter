// LeadIntroTrend.jsx  (hover-fixed version)
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function LeadIntroTrend({ theme = "light" }) {
  const title = "Senior Engineering Leader — Full-Stack & AI";
  const subtitle =
    "Senior engineering leader with 14+ years delivering enterprise-grade web platforms and cloud-native SaaS. Focused on leveraging AI/ML and strategic tooling to accelerate product outcomes.";
  const chips = [".NET", "Angular", "AI / ML"];

  const TITLE_ANIM_DURATION = 2.1;
  const TITLE_DELAY = 0.18;
  const HOVER_LIFT = 8;

  const isDark = theme === "dark";
  const reduce = useReducedMotion();

  const panelText = isDark ? "#F7FAFC" : "#0B1720";
  const accentGradient = "linear-gradient(180deg,#9EE37C,#5EE0B5)";
  const chipGradient = "linear-gradient(90deg,#667EEA,#764BA2)";

  // variants
  const titleVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: TITLE_ANIM_DURATION, ease: [0.2, 0.85, 0.25, 1], delay: TITLE_DELAY },
    },
  };

  const chipsContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: TITLE_DELAY + 0.18 } } };
  const chipVariant = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.42 } } };

  // hover props for Framer Motion
  const hoverProps = reduce
    ? {}
    : {
        whileHover: {
          y: -HOVER_LIFT,
          scale: 1.005,
          boxShadow:
            isDark
              ? `0 ${HOVER_LIFT * 1.4}px ${HOVER_LIFT * 6}px rgba(0,0,0,0.5), inset 0 -6px 18px rgba(255,255,255,0.03)`
              : `0 ${HOVER_LIFT * 1.4}px ${HOVER_LIFT * 5}px rgba(12,18,28,0.12), inset 0 -8px 18px rgba(255,255,255,0.28)`,
        },
        transition: { type: "spring", stiffness: 220, damping: 28 },
      };

  return (
    <section
      aria-label="Lead intro"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "26px 12px",
        marginBottom: 18,
      }}
    >
      {/* motion card with whileHover */}
      <motion.div
        className="lit-card"
        initial={reduce ? "visible" : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          maxWidth: 980,
          width: "100%",
          textAlign: "center",
          padding: "26px 28px",
          borderRadius: 14,
          position: "relative",
          overflow: "hidden",
          background: isDark
            ? "linear-gradient(180deg, rgba(20,28,32,0.62), rgba(10,12,14,0.36))"
            : "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,249,251,0.98))",
          border: isDark ? "1px solid rgba(255,255,255,0.03)" : "1px solid rgba(2,6,23,0.04)",
          boxShadow: isDark ? "0 10px 30px rgba(2,6,23,0.55)" : "0 12px 40px rgba(12,18,28,0.04)",
          display: "block",
          willChange: "transform, box-shadow",
          cursor: "default",
        }}
        {...hoverProps}
        onHoverStart={() => {
          /* placeholder if you want state on hover */
        }}
        onHoverEnd={() => {
          /* placeholder if you want state on hover end */
        }}
      >
        {/* left accent bar */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 12,
            bottom: 12,
            width: 8,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            background: accentGradient,
            opacity: 0.98,
            zIndex: 1,
            boxShadow: "0 6px 18px rgba(46,180,120,0.08)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, paddingLeft: 16 }}>
          {/* slow title animation */}
          <motion.h2
            variants={titleVariant}
            initial={reduce ? "visible" : "hidden"}
            animate="visible"
            style={{
              margin: 0,
              paddingLeft: 8,
              fontSize: "clamp(1.1rem, 3.2vw, 2.1rem)",
              color: panelText,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "0.2px",
            }}
          >
            {title}
          </motion.h2>

          <p
            style={{
              marginTop: 10,
              marginBottom: 12,
              color: panelText,
              fontSize: "clamp(0.95rem, 1.4vw, 1.02rem)",
              fontWeight: 500,
              lineHeight: 1.45,
              maxWidth: 820,
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: 6,
              paddingRight: 6,
            }}
          >
            {subtitle}
          </p>

          {/* chips row */}
          <motion.div
            initial={reduce ? "visible" : "hidden"}
            animate="visible"
            variants={chipsContainer}
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
              paddingTop: 6,
            }}
          >
            {chips.map((c, i) => (
              <motion.span
                key={i}
                variants={chipVariant}
                style={{
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  background: chipGradient,
                  color: "#fff",
                  display: "inline-block",
                  boxShadow: "0 8px 22px rgba(102,126,234,0.12)",
                  pointerEvents: "auto",
                }}
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* helpful CSS: make sure overlays and heavy background elements don't block pointer events */}
      <style>{`
        /* If you have a video or decorative overlay inside the hero, ensure they don't block hover */
        .lead-hero__video, .lead-hero__overlay {
          pointer-events: none;
        }

        /* keyboard focus-visible styling */
        .lit-card:focus-within {
          outline: 3px solid rgba(102,126,234,0.12);
          outline-offset: 6px;
        }

        @media (prefers-reduced-motion: reduce) {
          .lit-card { transition: none !important; transform: none !important; box-shadow: none !important; }
        }
      `}</style>
    </section>
  );
}