import React from "react";
import Navbar from "@/components/NavBar";
import Hero3D from "@/components/Hero3D";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-20"> {/* push content under navbar */}
        <Hero3D />
      </main>
    </>
  );
}
