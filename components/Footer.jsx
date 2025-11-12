import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Orimind Clone — Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
