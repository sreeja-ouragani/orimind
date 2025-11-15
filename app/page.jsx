"use client";

import Hero3D from "../components/Hero3D";
import BuildingBlocksSection from "../sections/BuildingBlocksSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import VisionarySection from "../sections/VisionarySection";
import ChatbotSection from "../sections/ChatbotSection"; // Correct import
import "../styles/animations.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-white">
      {/* Hero Section */}
      <Hero3D />

      {/* Building Blocks Section */}
      <BuildingBlocksSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Visionary Section */}
      <VisionarySection />

      {/* Chatbot Section */}
      <ChatbotSection />
    </main>
  );
}
