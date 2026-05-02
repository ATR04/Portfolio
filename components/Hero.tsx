// components/Hero.tsx — Hero / Landing Section
"use client";

import { useEffect, useState } from "react";
// Typing animation — cycles through role descriptions
const roles = [
  "Senior Software Engineer",
  "Full Stack Developer",
  "AWS Cloud Architect",
  "Real-Time Systems Builder",
  "Mobile App Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);
  const [charIdx, setCharIdx]     = useState(0);

  // 📌 Typewriter effect using useState + useEffect
  //    No library needed — pure React state manipulation.
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      // typing forward
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((i) => i + 1);
      }, 80);
    } else if (!deleting && charIdx > current.length) {
      // pause at full word then start deleting
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx >= 0) {
      // deleting backwards
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((i) => i - 1);
      }, 40);
    } else {
      // move to next role
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      setCharIdx(0);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="section-wrapper text-center relative z-10">

        {/* Greeting chip */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
          Athiban{" "}
          <span className="gradient-text">Thangaraja</span>
        </h1>

        {/* Animated role */}
        <div className="h-12 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl font-mono text-cyan-300">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
          </span>
        </div>

        {/* Summary tagline */}
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-10">
          3 years building{" "}
          <span className="text-white font-medium">scalable web & mobile apps</span>,
          architecting on{" "}
          <span className="text-white font-medium">AWS (ECS Fargate)</span>, integrating{" "}
          <span className="text-white font-medium">AI with Gemini API</span>, and shipping
          production-grade real-time systems. The youngest project lead at
          L&Q Technologies.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#experience" className="btn-primary">
            View My Work →
          </a>
          <a href="#contact" className="btn-ghost">
            Get In Touch
          </a>
        </div>

        {/* Stat counters */}
        <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto mt-16">
          {[
            { value: "3+", label: "Years Exp." },
            { value: "5+", label: "Production Apps" },
            { value: "3×", label: "Performance Awards" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
