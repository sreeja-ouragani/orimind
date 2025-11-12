"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-wide text-white hover:text-white/80 transition"
        >
          orimind
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <a href="#how" className="text-white hover:text-gray-200 transition">
            How it works
          </a>
          <a href="#product" className="text-white hover:text-gray-200 transition">
            Product
          </a>
          <a
            href="#waitlist"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 transition-transform"
          >
            Join Waitlist
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <a
            href="#waitlist"
            className="border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/10 transition"
          >
            Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
