"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Data for the Steps, including side for staggered layout ---
const steps = [
  // Swapped the side of the final step to 'left' as requested
  { id: 1, text: "User gives command", side: "left" },
  { id: 2, text: "AI understands intent", side: "right" },
  { id: 3, text: "Agents collaborate autonomously", side: "left" },
  { id: 4, text: "Execution engine builds & deploys", side: "right" },
  { id: 5, text: "Output delivered instantly", side: "left" }, // <-- MOVED TO LEFT
];

// Inner component for each timeline bubble
const FlowStep = ({ text, index, side }) => {
    // Determine positioning classes based on side
    let positionClass = '';
    let isFinalStep = index === steps.length - 1;

    if (side === 'left') {
        positionClass = 'step-left';
    } else if (side === 'right') {
        positionClass = 'step-right';
    }

    return (
        <motion.div
            className={`flow-step ${positionClass} ${isFinalStep ? 'final-step-style' : ''}`}
            // Use index to stagger vertical positioning
            style={{ top: `${80 + index * 100}px` }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
        >
            <p className="step-text">{text}</p>
        </motion.div>
    );
};


const HowItWorksSection = () => {
    /* ---------- INLINE CSS BLOCK ---------- */
    const styleContent = `
        /* Starry Night Sky Background setup */
        .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 3000px; /* Increased width to handle continuous movement without gaps */
            height: 3000px; /* Increased height */
            background: transparent;
            /* Generating subtle star-like dots using box-shadow */
            box-shadow: 
                0px 0px 1px #fff,
                100px 100px 2px rgba(255, 255, 255, 0.8),
                200px 300px 1px #fff,
                300px 50px 1px rgba(255, 255, 255, 0.7),
                450px 250px 2px #fff,
                600px 150px 1px #fff,
                750px 400px 2px rgba(255, 255, 255, 0.9),
                900px 200px 1px #fff,
                1050px 50px 1px rgba(255, 255, 255, 0.6),
                1200px 350px 2px #fff,
                1500px 800px 1px #fff,
                1800px 1200px 2px rgba(255, 255, 255, 0.7),
                2200px 600px 1px #fff;
            animation: stars-move 300s linear infinite;
            z-index: 1;
        }

        /* Keyframes for subtle star movement (Removed scale/translate that caused the issue) */
        @keyframes stars-move {
            from { transform: translate(0, 0); }
            to { transform: translate(-2000px, 1500px); } /* Increased translation for slower, wider movement */
        }

        /* Main Section Background: Black with space feel */
        .how-section {
            position: relative;
            background: #000; /* Pure Black Background */
            padding: 120px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
            min-height: 100vh;
            width: 100%; /* Ensure the section itself spans full width */
        }

        /* Title Wrapper for the background shine */
        .title-wrapper {
            position: relative;
            z-index: 10;
            margin-bottom: 60px; /* This sets the spacing below the title */
            display: inline-block;
        }

        /* Pseudo-element for the background shine */
        .title-wrapper::before {
            content: '';
            position: absolute;
            top: -15px;
            left: -30px;
            right: -30px;
            bottom: -15px;
            z-index: 5; /* Behind the h2 */
            
            /* Radial Gradient Glow Effect (Light Blue/White) */
            background: radial-gradient(circle at center, 
                                        rgba(173, 216, 230, 0.5) 0%, /* Light blue */
                                        rgba(0, 0, 0, 0) 70%);
            filter: blur(20px); /* Blur the gradient heavily */
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.8;
        }


        /* SECTION TITLE */
        .how-title {
            font-size: 3rem;
            font-weight: 800;
            color: #fff; 
            text-align: center;
            /* Margin is now handled by .title-wrapper */
            z-index: 10; 
            position: relative; /* Ensure the text stays above the ::before glow */
        }

        /* Large Central Glass Container (The main canvas) */
        .glass-container {
            position: relative;
            width: 90%;
            max-width: 1200px; /* <--- INCREASED WIDTH for desktop view */
            min-height: 600px;
            
            /* Glass/Frosted Background on dark */
            background: rgba(255, 255, 255, 0.05); /* Lighter transparency for contrast */
            backdrop-filter: blur(15px);
            border-radius: 40px; 
            
            /* Inner gradient/glow */
            box-shadow: 0 0 50px rgba(173, 216, 230, 0.15), /* Light blue glow */
                        inset 0 0 80px rgba(173, 216, 230, 0.05);

            /* The core gradient background inside the glass container */
            background-image: radial-gradient(circle at 50% 50%, 
                                             rgba(173, 216, 230, 0.1) 0%, 
                                             rgba(0, 0, 0, 0.3) 30%, 
                                             rgba(0, 0, 0, 0.5) 100%);
            z-index: 5; /* Ensure container is above stars */
        }

        /* Faint Center Line (The timeline backbone) */
        .center-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 1px;
            transform: translateX(-50%);
            background: rgba(173, 216, 230, 0.5); /* Light blue line */
            pointer-events: none;
            /* Subtle vertical gradient/glow */
            mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
        }

        /* Individual Step Bubbles */
        .flow-step {
            position: absolute;
            width: 250px; /* <--- WIDER BUBBLES */
            padding: 10px 15px;
            border-radius: 20px;
            text-align: center;
            z-index: 20;

            /* Bubble Style: White Glass */
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }

        .flow-step:hover {
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.9);
        }
        
        .step-text {
            font-size: 0.9rem;
            font-weight: 600;
            color: #000;
        }

        /* Step Positioning: Aligned relative to center line (ADJUSTED FOR WIDER LAYOUT) */
        .step-left {
            right: 60%; /* Position further to the left of the center */
        }

        .step-right {
            left: 60%; /* Position further to the right of the center */
        }
        
        /* Highlighted Final Step Style */
        .final-step-style {
            background: linear-gradient(90deg, #5352ed, #1e3a8a); /* Deep blue gradient */
            box-shadow: 0 0 15px #5352ed;
            width: 320px; /* <--- Make the final step wider to stand out */
            right: 60%; /* Keeps it on the left side */
        }

        .final-step-style .step-text {
             color: #fff;
             font-weight: 700;
        }
        
        /* The Sparkle/Glow Effect at the bottom */
        .sparkle-effect {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 50px;
            background: radial-gradient(circle at center, 
                                        rgba(173, 216, 230, 0.7) 0%, /* Light blue */
                                        rgba(0, 0, 0, 0) 70%);
            box-shadow: 0 0 30px rgba(173, 216, 230, 1);
            border-radius: 50%;
            opacity: 0.5;
            animation: pulseGlow 2s infinite alternate;
        }

        @keyframes pulseGlow {
            0% { opacity: 0.4; transform: scale(0.9) translateX(-50%); }
            100% { opacity: 0.6; transform: scale(1) translateX(-50%); }
        }

        /* --- Connecting Line Dots (Visual anchors on the center line) --- */
        .line-dot {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 10px;
            height: 10px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 0 8px #fff;
            z-index: 15;
        }

        /* Responsive adjustments: Center all steps on mobile */
        @media (max-width: 900px) { /* Adjust breakpoint for the new wider design */
             .step-left, .step-right {
                 left: 50%;
                 right: auto;
                 transform: translateX(-50%);
            }
            .flow-step {
                width: 70%; 
                max-width: 350px;
                transform: translateX(-50%);
            }
            .final-step-style {
                width: 80%;
            }
        }
        
        @media (max-width: 650px) {
            .glass-container {
                width: 95%;
                min-height: 750px; /* Increased height for mobile */
            }
            .flow-step {
                width: 80%; 
                max-width: 300px;
            }
            .final-step-style {
                width: 90%;
            }
        }
    `;

    // Map through steps to create the component and the corresponding dots
    const timelineElements = steps.map((step, i) => (
        <React.Fragment key={step.id}>
            {/* The Step Bubble */}
            <FlowStep text={step.text} index={i} side={step.side} />
            
            {/* The Dot on the central line */}
            <div 
                className="line-dot" 
                style={{ top: `${100 + i * 100}px` }} // Adjust dot placement to align with step center
            ></div>
        </React.Fragment>
    ));

    /* ---------- RETURN JSX ---------- */
    return (
        <section className="how-section">
            <style>{styleContent}</style>

            {/* The Star Field for the night sky effect */}
            <div className="stars"></div>

            {/* Title with Shine Wrapper */}
            <div className="title-wrapper">
                <h2 className="how-title">How It Works</h2>
            </div>


            {/* Main Glass Container */}
            <motion.div 
                className="glass-container"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Glowing vertical line */}
                <div className="center-line"></div>

                {/* Steps and Dots */}
                {timelineElements}

                {/* Sparkle effect at the bottom */}
                <div className="sparkle-effect"></div>

            </motion.div>
        </section>
    );
};

export default HowItWorksSection;