"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Activity, Zap, GitBranch, Server, ArrowRight } from "lucide-react";

// GlowBox component (for glowing borders)
const GlowBox = ({ children }) => (
  <div className="glow-box">
    {children}
    <div className="glow-effect"></div>
  </div>
);

// SectionTitle component (for section heading)
const SectionTitle = ({ title }) => (
  <h2 className="section-title">{title}</h2>
);

// Card component (each block)
const Card = ({ name, animation, description, idx }) => (
  <motion.div
    className="block-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: idx * 0.2 }}
  >
    {/* FIXED: Corrected typo in closing tag from </GowBox> to </GlowBox> */}
    <GlowBox>{animation}</GlowBox>
    <h3 className="block-name">{name}</h3>
    <p className="block-desc">{description}</p>
  </motion.div>
);

const blocks = [
  {
    name: "Intent Understanding",
    animation: <Activity size={32} className="intent-animation" />,
    description: "Subtle wave signals in gray.",
  },
  {
    name: "Orchestration",
    animation: <GitBranch size={32} className="orchestration-animation" />,
    description: "Branching lines.",
  },
  {
    name: "Execution",
    animation: <Cpu size={32} className="execution-animation" />,
    description: "Rotating outline gear.",
  },
  {
    name: "Memory",
    animation: <Server size={32} className="memory-animation" />,
    description: "Looping chip icon.",
  },
  {
    name: "Transparency",
    animation: <Zap size={32} className="transparency-animation" />,
    description: "Flickering bars.",
  },
  {
    name: "Pipeline",
    // INCREASED ARROW SIZE HERE
    animation: <ArrowRight size={48} className="pipeline-animation" />,
    description: "Glowing horizontal flow line.",
  },
];

const BuildingBlocksSection = () => {
  // Define a consistent bright color for Pipeline/Transparency flash
  const BRIGHT_CYAN = '#00CFFF'; 
  
  const styleContent = `
    /* Section Background */
    .building-blocks-section {
      position: relative;
      background: #ffffff;
      padding: 120px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
    }

    /* Section Title */
    .section-title {
      font-size: 2.5rem;
      font-weight: 800;
      text-align: center;
      color: #000;
      margin-bottom: 40px;
    }

    /* Container for cards - USING FR (FLEXIBLE UNITS) FOR PERFECT SPACING */
    .blocks-container {
      display: grid;
      /* Define 3 equal columns that share space, ensuring even gaps */
      grid-template-columns: repeat(3, 1fr);
      gap: 40px; /* Consistent gap between all cards horizontally and vertically */
      margin-top: 40px; 
      justify-content: center;
      position: relative;
      z-index: 10;
      /* Max width controls how wide the 3-column grid can get, ensuring a clean presentation */
      max-width: 900px;
      width: 100%; /* Important for grid to fill max-width */
      padding: 0 20px; /* Add slight padding for smaller desktop views */
      box-sizing: border-box;
    }

    /* Individual Block Card - Removed fixed width so it can flex with 1fr columns */
    .block-card {
      background: #000000;
      border-radius: 24px;
      padding: 30px;
      /* Removed fixed width (180px) so it fills the 1fr column */
      min-width: 150px; /* Ensure cards don't get too narrow */
      height: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
      text-align: center;
      position: relative;
      transition: transform 0.3s ease-out;
    }

    .block-card:hover {
      transform: scale(1.05);
    }

    /* Card Text */
    .block-name {
      color: #fff;
      font-weight: bold;
      margin-top: 20px;
      font-size: 16px;
    }

    .block-desc {
      color: #ccc;
      font-size: 12px;
      margin-top: 8px;
    }

    /* GlowBox (Wrapper for the icon) */
    .glow-box {
      position: relative;
      display: inline-block;
      padding: 8px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
    }

    .glow-box .glow-effect {
      position: absolute;
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border-radius: 20px;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
      z-index: -1;
      pointer-events: none;
      animation: glowPulse 2s infinite alternate;
    }

    @keyframes glowPulse {
      0% { box-shadow: 0 0 8px rgba(255, 255, 255, 0.2); }
      50% { box-shadow: 0 0 18px rgba(255, 255, 255, 0.5); }
      100% { box-shadow: 0 0 8px rgba(255, 255, 255, 0.2); }
    }

    /* Animations for individual blocks */
    .intent-animation {
      animation: wave 2s infinite;
      color: #ccc;
    }
    .orchestration-animation {
      animation: branch 2s infinite;
      color: #ccc;
    }
    .execution-animation {
      animation: rotateGear 2s linear infinite;
      color: #fff;
    }
    .memory-animation {
      animation: loopChip 2s infinite;
      color: #fff;
    }
    .transparency-animation {
      /* Applying the new, smoother pulse */
      animation: transparencyPulse 2.5s ease-in-out infinite; 
    }
    .pipeline-animation {
      /* Set base color and use glowFlow for the moving shadow effect */
      color: ${BRIGHT_CYAN};
      animation: glowFlow 2s infinite;
    }

    /* Keyframes */
    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    @keyframes branch {
      0%, 100% { transform: scaleX(1); }
      50% { transform: scaleX(1.1); } 
    }
    @keyframes rotateGear {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes loopChip {
      0%, 100% { transform: rotateY(0deg); }
      50% { transform: rotateY(180deg); }
    }
    
    /* NEW Transparency: Smoother, color-shifting pulse/glow */
    @keyframes transparencyPulse { 
      0% { 
        color: #fff; 
        filter: drop-shadow(0 0 0px rgba(0, 207, 255, 0)); /* Start with no shadow/white */
      }
      50% { 
        /* Full glow effect in cyan */
        color: ${BRIGHT_CYAN}; 
        filter: drop-shadow(0 0 15px ${BRIGHT_CYAN}); /* Stronger, defined glow */
      }
      100% {
        color: #fff; 
        filter: drop-shadow(0 0 0px rgba(0, 207, 255, 0)); /* Return to white, ready for next pulse */
      }
    }
    
    /* Pipeline Glow Flow (using brighter color and text-shadow for flow effect) */
    @keyframes glowFlow {
      0% { 
        text-shadow: 0 0 4px ${BRIGHT_CYAN}; 
        filter: drop-shadow(-2px 0 4px ${BRIGHT_CYAN}); /* Light starting left */
      } 
      50% { 
        text-shadow: 0 0 16px ${BRIGHT_CYAN}; 
        filter: drop-shadow(2px 0 4px ${BRIGHT_CYAN}); /* Light moving right */
      }
      100% { 
        text-shadow: 0 0 4px ${BRIGHT_CYAN}; 
        filter: drop-shadow(-2px 0 4px ${BRIGHT_CYAN}); /* Light returning left */
      }
    }

    /* Responsive adjustments for the Grid layout */

    /* Tablet/Mid-Screen: Drop to 2 columns */
    @media (max-width: 750px) {
        .blocks-container {
            /* Now uses 2 equal columns */
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
    }
    
    /* Mobile: Drop to 1 column */
    @media (max-width: 500px) {
        .blocks-container {
            /* 1 full-width column */
            grid-template-columns: 1fr;
            padding: 0 10px;
        }
    }
  `;

  return (
    <section className="building-blocks-section">
      <style>{styleContent}</style>
      <SectionTitle title="Inside the Mind of Autonomous Execution" />

      <div className="blocks-container">
        {blocks.map((block, idx) => (
          <Card
            key={idx}
            name={block.name}
            animation={block.animation}
            description={block.description}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default BuildingBlocksSection;