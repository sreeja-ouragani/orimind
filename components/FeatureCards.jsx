import React from "react";

const cards = [
  { title: "No Code", desc: "Drag, drop, and deploy in seconds." },
  { title: "Smart Agents", desc: "AI-driven logic that adapts to your workflow." },
  { title: "Cloud Ready", desc: "Instant deployment to edge with scalability built-in." },
];

export default function Features() {
  return (
    <section id="product" className="py-24">
      <div className="container grid md:grid-cols-3 gap-10">
        {cards.map((c) => (
          <div
            key={c.title}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 text-left hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-2xl font-semibold mb-3">{c.title}</h3>
            <p className="text-gray-300 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
