"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Code2, Cpu, PenTool, Rocket } from "lucide-react";

const icons = [
  { icon: <Cpu size={28} />, label: "Research" },
  { icon: <PenTool size={28} />, label: "Design" },
  { icon: <Code2 size={28} />, label: "Code" },
  { icon: <Rocket size={28} />, label: "Deploy" },
];

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Black glossy sphere
    const geometry = new THREE.SphereGeometry(2.5, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.15,
      metalness: 0.9,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    /* -------------------------------------------------------
       🔥 NEW LIGHTING SYSTEM FOR STRONG BEHIND GLOW
    ------------------------------------------------------- */

    // Cyan glow light behind orb
    const light1 = new THREE.PointLight(0x00ffff, 3.5);
    light1.position.set(6, 6, -4);

    // Violet glow light behind orb
    const light2 = new THREE.PointLight(0x9400d3, 3.5);
    light2.position.set(-6, -6, -4);

    // Soft ambient fill light
    const ambient = new THREE.AmbientLight(0x444444, 0.6);
    scene.add(light1, light2, ambient);

    /* -------------------------------------------------------
       🔥 SUNRISE-STYLE RADIAL HALO BEHIND ORB
    ------------------------------------------------------- */

    // Create radial gradient canvas texture
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(
      512, 512, 50,      // inner circle
      512, 512, 500      // outer circle
    );

   gradient.addColorStop(0, "rgba(245,245,245,0.55)");   // almost-white center
gradient.addColorStop(0.3, "rgba(200,200,220,0.25)"); // soft icy gray-blue mid
gradient.addColorStop(1, "rgba(180,180,255,0.1)");     // subtle soft blue outer edge



    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1024, 1024);

    const texture = new THREE.CanvasTexture(canvas);

    // Round halo plane behind orb
    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 18),
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        depthTest: false,
      })
    );

    halo.position.z = -3.5; // move behind orb
    scene.add(halo);

    /* ------------------------------------------------------- */

    camera.position.z = 7;

    const animate = () => {
      sphere.rotation.y += 0.004;
      sphere.rotation.x += 0.002;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const resizeHandler = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      {/* Background pattern grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:22px_22px] opacity-40 -z-10" />

      {/* Soft global glow */}
      <div className="absolute w-[680px] h-[680px] rounded-full bg-gradient-to-r from-cyan-400/40 via-white/5 to-violet-400/40 blur-[180px] -z-20" />

      {/* Three.js Orb Container */}
      <div
        ref={mountRef}
        className="h-[480px] w-[480px] md:h-[580px] md:w-[580px] relative"
      />

      {/* Orbiting Icons */}
      {icons.map((item, index) => {
        const angle = (index / icons.length) * Math.PI * 2;
        const radius = 180;

        return (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{ x: -24, y: -90 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="flex flex-col items-center"
              style={{
                x: radius * Math.cos(angle),
                y: radius * Math.sin(angle),
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            >
              <div className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-md border border-gray-200">
                {item.icon}
              </div>
              <p className="text-xs text-gray-700 mt-1 font-medium">
                {item.label}
              </p>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Text Section */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black">
          ORIMIND
        </h1>

        <p className="text-gray-700 mt-3 text-xl md:text-2xl">
          One Command. Infinite Execution.
        </p>

        <p className="mt-4 text-lg md:text-xl font-medium typing-text">
          Where Ideas Build Themselves.
        </p>
      </div>
    </div>
  );
}