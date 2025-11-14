"use client";

import Hero3D from "../components/Hero3D";
import BuildingBlocksSection from "../sections/BuildingBlocksSection";
import "../styles/animations.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-white">
      {/* Hero Section */}
      <Hero3D />

      {/* Building Blocks Section */}
      <BuildingBlocksSection />
    </main>
  );
}
