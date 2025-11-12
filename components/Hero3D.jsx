"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import entrepreneurPic from "../public/ennn.jpeg"; // your entrepreneur pic

function FloatingSphere() {
  return (
    <Icosahedron args={[1.6, 2]}>
      <MeshDistortMaterial
        color="#000" // black sphere for white theme
        speed={1.2}
        distort={0.25}
        metalness={0.9}
        roughness={0.1}
      />
    </Icosahedron>
  );
}

export default function Hero3D() {
  return (
    <section className="relative flex flex-col md:flex-row justify-center items-center min-h-screen text-center overflow-hidden bg-white">
      
      {/* Left: Hero Text + Animated Circle */}
      <div className="flex-1 flex flex-col items-start justify-center relative z-10 px-6 md:px-16">
        {/* Animated circle behind text */}
        <motion.div
          className="absolute w-64 h-64 border-2 border-black rounded-full top-20 md:top-24 left-0 md:left-10"
          animate={{ scale: [1, 1.05, 1], opacity: [0.7,1,0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          One command.<br />
          <span className="bg-gradient-text text-transparent bg-clip-text">
            Results delivered.
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-800 text-lg md:text-xl mb-10 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Autonomous AI that researches, builds, and ships — end-to-end execution for startups.
        </motion.p>

        <div className="flex justify-start gap-4">
          <a href="#waitlist" className="btn-primary">Join Waitlist</a>
          <a href="#how" className="btn-ghost">How it works</a>
        </div>
      </div>

      {/* Right: Entrepreneur Picture + 3D Sphere */}
      <div className="flex-1 relative w-full max-w-md mt-10 md:mt-0">
        {/* Entrepreneur pic */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image
            src={entrepreneurPic}
            alt="Entrepreneur"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* 3D Sphere behind picture for depth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -bottom-10 right-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
        >
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1,1.5]}>
            <ambientLight intensity={0.6} />
            <directionalLight intensity={1.2} position={[3, 2, 5]} />
            <FloatingSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}