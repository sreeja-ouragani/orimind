"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 10px rgba(100, 0, 255, 0.6)",
      }}
      className="px-6 py-3 mt-6 rounded-full bg-white border border-gray-300 text-black font-semibold relative"
    >
      Enter Ecosystem
      <span className="absolute inset-0 rounded-full border-2 border-transparent hover:border-cyan-400 hover:shadow-[0_0_10px_#00ffff,0_0_20px_#9400d3] transition-all"></span>
    </motion.button>
  );
}
