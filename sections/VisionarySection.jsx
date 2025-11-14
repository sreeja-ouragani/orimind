"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionarySection() {
  return (
    <section
      className="relative w-full flex justify-center items-center py-28 bg-white overflow-hidden mt-20"
    >
      <div
        className="relative bg-white rounded-[40px] p-12 shadow-2xl
        w-[950px] h-[520px] flex flex-row justify-between items-center z-[5]"
      >
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center w-[450px] pl-4"
        >
          <h2 className="text-[30px] font-black leading-snug text-black mb-4">
            Meet the Visionary<br />Mind Behind OriMind
          </h2>

          <p className="text-[15px] leading-7 text-[#444] mb-5">
            <span className="font-semibold">Ganesh Nayak</span> is a tech innovator passionate
            about creating systems that let AI execute <span className="font-semibold">imagination</span>.
            With expertise in AI, ML, and automation, she founded OriMind to build a world
            where machines act on intent — not just instructions.
          </p>

          <p className="italic text-[#666] text-[14px] mb-8">
            “The future of AI isn’t about prompts — it’s about purpose and execution.”
          </p>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-[15px] font-semibold text-black flex items-center gap-1">
              Follow Journey →
            </span>

            <div
              className="w-[40px] h-[40px] rounded-full border border-black
              flex items-center justify-center cursor-pointer transition hover:bg-black hover:text-white"
            >
              <Linkedin size={18} />
            </div>

            <div
              className="w-[40px] h-[40px] rounded-full border border-black
              flex items-center justify-center cursor-pointer transition hover:bg-black hover:text-white"
            >
              <Twitter size={18} />
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex-shrink-0 pr-2"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 w-[380px] h-[460px] -top-4 -right-4
            rounded-2xl blur-[70px] opacity-70 pointer-events-none
            bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.25),rgba(138,43,226,0.25),transparent_70%)]"
          ></div>

          <Image
            src="/images/ennn.jpeg"
            alt="Visionary"
            width={350}
            height={430}
            className="relative z-[2] rounded-[25px] object-cover border border-[#e2e2e2]
            filter grayscale contrast-125 brightness-95"
          />
        </motion.div>
      </div>
    </section>
  );
}
