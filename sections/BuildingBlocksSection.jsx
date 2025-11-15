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
    // Re-introducing the hover cursor for feedback
    className="block-card group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: idx * 0.2 }}
  >
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
    animation: <ArrowRight size={48} className="pipeline-animation" />,
    description: "Glowing horizontal flow line.",
  },
];

const BuildingBlocksSection = () => {
  // Define a consistent bright color for the hover flash and pipeline effect
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
      grid-template-columns: repeat(3, 1fr);
      gap: 40px; 
      margin-top: 40px; 
      justify-content: center;
      position: relative;
      z-index: 10;
      max-width: 900px;
      width: 100%; 
      padding: 0 20px; 
      box-sizing: border-box;
    }

    /* Individual Block Card */
    .block-card {
      background: #000000;
      border-radius: 24px;
      padding: 30px;
      min-width: 150px; 
      height: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
      text-align: center;
      cursor: pointer; /* Added cursor pointer */
      
      /* Base styles for the sweep effect */
      position: relative; 
      overflow: hidden; /* CRUCIAL: Clips the large rotating pseudo-element */
      
      /* Re-added transform to the transition list */
      transition: transform 0.3s ease-out, border-color 0.3s, box-shadow 0.3s;
    }

    /* --- HOVER ANIMATION: LIFT AND SCALE (Increased Effect) --- */
    .block-card:hover {
      /* INCREASED LIFT: -5px to -10px */
      /* INCREASED SCALE: 1.05 to 1.08 */
      transform: translateY(-10px) scale(1.08); 
      border-color: ${BRIGHT_CYAN}; 
      /* Enhanced shadow for a bigger 'pop' */
      box-shadow: 0 15px 40px rgba(0, 207, 255, 0.4), 0 0 30px rgba(0, 207, 255, 0.5);
    }

    /* --- CONTINUOUS NEON BORDER FLOW EFFECT (ALWAYS ON) --- */

    /* 1. The Light Source (Pseudo-element) - Always visible */
    .block-card::before {
      content: "";
      position: absolute;
      
      /* Make it huge to cover the whole card and extend well beyond the border */
      width: 300%; 
      height: 300%;
      top: -100%;
      left: -100%;
      border-radius: 50%; /* Ensures smooth, continuous rotation */
      
      /* Use a conic gradient to define the light segment */
      background: conic-gradient(
        transparent 0deg,
        transparent 160deg,
        ${BRIGHT_CYAN} 180deg, /* The bright spot */
        transparent 200deg,
        transparent 360deg
      );
      
      /* Set the light behind the card's content */
      z-index: 1; 
      
      /* Apply heavy blur for the neon glow look */
      filter: blur(30px); 
      opacity: 0.8; 
      pointer-events: none;
      
      /* Start the continuous rotation animation (ALWAYS ON) */
      animation: border-sweep 4s linear infinite;
    }

    /* 2. Ensure all content (GlowBox, h3, p) is layered above the light */
    .block-card > * {
      position: relative;
      z-index: 5; 
    }

    /* 3. Define the Rotation Keyframe */
    @keyframes border-sweep {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* --- END NEON BORDER FLOW EFFECT --- */


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
      animation: transparencyPulse 2.5s ease-in-out infinite; 
    }
    .pipeline-animation {
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
        filter: drop-shadow(0 0 0px rgba(0, 207, 255, 0)); 
      }
      50% { 
        color: ${BRIGHT_CYAN}; 
        filter: drop-shadow(0 0 15px ${BRIGHT_CYAN}); 
      }
      100% {
        color: #fff; 
        filter: drop-shadow(0 0 0px rgba(0, 207, 255, 0)); 
      }
    }
    
    /* Pipeline Glow Flow */
    @keyframes glowFlow {
      0% { 
        text-shadow: 0 0 4px ${BRIGHT_CYAN}; 
        filter: drop-shadow(-2px 0 4px ${BRIGHT_CYAN}); 
      } 
      50% { 
        text-shadow: 0 0 16px ${BRIGHT_CYAN}; 
        filter: drop-shadow(2px 0 4px ${BRIGHT_CYAN}); 
      }
      100% { 
        text-shadow: 0 0 4px ${BRIGHT_CYAN}; 
        filter: drop-shadow(-2px 0 4px ${BRIGHT_CYAN}); 
      }
    }

    /* Responsive adjustments for the Grid layout */

    /* Tablet/Mid-Screen: Drop to 2 columns */
    @media (max-width: 750px) {
        .blocks-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
    }
    
    /* Mobile: Drop to 1 column */
    @media (max-width: 500px) {
        .blocks-container {
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