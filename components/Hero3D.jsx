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

  /* ---------------- THREE JS SETUP ---------------- */
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

    const geometry = new THREE.SphereGeometry(2.5, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.15,
      metalness: 0.9,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light1 = new THREE.PointLight(0x00ffff, 3.5);
    light1.position.set(6, 6, -4);
    const light2 = new THREE.PointLight(0x9400d3, 3.5);
    light2.position.set(-6, -6, -4);
    const ambient = new THREE.AmbientLight(0x444444, 0.6);
    scene.add(light1, light2, ambient);

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(
      512, 512, 50,
      512, 512, 500
    );

    gradient.addColorStop(0, "rgba(245,245,245,0.55)");
    gradient.addColorStop(0.3, "rgba(200,200,220,0.25)");
    gradient.addColorStop(1, "rgba(180,180,255,0.1)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1024, 1024);

    const texture = new THREE.CanvasTexture(canvas);

    const halo = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 18),
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
        depthTest: false,
      })
    );

    halo.position.z = -3.5;
    scene.add(halo);

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

  /* ---------------- UI ---------------- */
  /* ---------------- UI ---------------- */
return (
  <section className="relative w-full flex justify-center items-center py-28 bg-white overflow-hidden">
    
    <div
      className="relative w-[1250px] h-[650px] flex flex-row justify-between
      items-center rounded-[40px] p-12"
    >

      {/* LEFT = 3D ORB */}
      <div className="flex flex-col items-center justify-center w-[45%] relative translate-x-[-60px]">

        {/* Three.js canvas */}
        <div
          ref={mountRef}
          className="h-[520px] w-[520px] relative"
        />

        {/* Orbiting Icons */}
        {icons.map((item, index) => {
          const angle = (index / icons.length) * Math.PI * 2;
          const radius = 200;

          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{ x: -24, y: -50 }}
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
                <p className="text-xs md:text-sm text-gray-700 mt-1 font-bold">
                  {item.label}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

 {/* RIGHT = ORIMIND TEXT SUPER BIG */}
<div className="flex flex-col justify-center w-[60%] pl-10 pr-10">

  <h1 className="text-[130px] font-extrabold text-black leading-[0.95] tracking-[0.10em]">
    ORIMIND
  </h1>

  {/* MOVIE STYLE TAGLINE */}
  <p className="text-black mt-1 text-5xl font-bold tracking-wide">
    One Command. Infinite Execution.
  </p>

  <p className="mt-4 text-3xl font-semibold text-gray-600 italic tracking-tight">
    Where Ideas Build Themselves.
  </p>

</div>



    </div>

  </section>
);
}
