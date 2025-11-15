"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, X } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionarySection() {
  return (
    <section className="relative w-full flex justify-center items-center py-28 bg-white overflow-hidden mt-20">

      <div
        className="relative bg-white rounded-[40px] p-12 shadow-2xl
        w-[950px] h-[520px] flex flex-row justify-between items-center z-[5]"
      >
        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center w-[450px] pl-4">
          
          {/* BIG BOLD TITLE */}
          <h2 className="text-[42px] font-extrabold italic leading-tight text-black mb-6 font-poppins">
            Meet the Visionary Mind Behind - OriMind
          </h2>

          {/* BODY TEXT */}
          <p className="text-[18px] leading-7 text-[#444] mb-6 font-medium italic">
            Ganesh Nayak is a tech innovator passionate about creating systems 
            that let AI execute imagination. With expertise in AI, ML, and automation, 
            he founded OriMind to build a world where machines act on intent — 
            not just instructions.
          </p>

          {/* QUOTE */}
          <p className="text-[#555] text-[16px] mb-8 leading-relaxed font-semibold">
            “The future of AI isn’t about prompts — it’s about purpose and execution.”
          </p>

          {/* FOLLOW BUTTONS */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-[17px] font-semibold text-black flex items-center gap-1">
              Follow Journey  →  
            </span>

            <a
              href="https://www.linkedin.com/company/orimind/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] rounded-full border border-black
              flex items-center justify-center cursor-pointer transition hover:bg-black hover:text-white"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://x.com/orimind_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] rounded-full border border-black
              flex items-center justify-center cursor-pointer transition hover:bg-black hover:text-white"
            >
              <X size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE — FAST CONTINUOUS FLIP */}
        <motion.div
          animate={{
            rotateY: [0, 15, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="relative flex-shrink-0 pr-2 flex flex-col items-center"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 w-[380px] h-[460px] -top-4 -right-4
            rounded-2xl blur-[70px] opacity-70 pointer-events-none
            bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.25),rgba(138,43,226,0.25),transparent_70%)]"
          ></div>

          {/* PHOTO — NOW BLACK AND WHITE */}
          <Image
            src="/images/ennn.jpeg"
            alt="Visionary"
            width={350}
            height={430}
            className="relative z-[2] rounded-[25px] object-cover border border-[#e2e2e2] grayscale"
          />

          {/* NAME */}
          <p className="mt-4 text-[18px] text-black font-semibold text-center">
            <b>Ganesh Nayak, Founder & CEO - OriMind</b>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
