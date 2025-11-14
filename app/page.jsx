"use client";

import Hero3D from "../components/Hero3D";
import "../styles/animations.css";   // ✅ correct



export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <Hero3D />
    </main>
  );
}
