import React from "react";

export default function CTA() {
  return (
    <section id="waitlist" className="py-28">
      <div className="container text-center">
        <div className="mx-auto max-w-3xl bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-md">
          <h3 className="text-4xl font-semibold mb-4">Ready to Command Your AI?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Join the waitlist to experience true end-to-end automation.
          </p>
          <a href="#waitlist" className="btn-primary">Join the Waitlist</a>
        </div>
      </div>
    </section>
  );
}
