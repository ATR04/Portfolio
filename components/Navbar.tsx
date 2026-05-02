// ╔══════════════════════════════════════════════════════════╗
// ║  components/Navbar.tsx                                   ║
// ║                                                          ║
// ║  📚 "use client" — CLIENT COMPONENT                     ║
// ║  We need "use client" here because:                     ║
// ║   • useState tracks scroll position & mobile menu state ║
// ║   • useEffect adds a scroll event listener              ║
// ║   • onClick toggles the mobile menu                     ║
// ║  These are browser-only APIs — can't run on server.     ║
// ╚══════════════════════════════════════════════════════════╝
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// 📌 next/link: Next.js's smart <a> tag.
//   • Client-side navigation (no full page reload)
//   • Prefetches the linked page in the background
//   • Use <Link href="/page"> instead of <a href="/page">

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Awards",     href: "#awards"     },
  { label: "Education",  href: "#education"  },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActive] = useState("");

  // 📌 useEffect runs AFTER the component mounts in the browser.
  //    The empty [] dependency array means "run once on mount, clean up on unmount".
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active nav link based on scroll position
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/95 backdrop-blur-md border-b border-[#21262d] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-mono text-cyan-400 font-bold text-lg tracking-wider hover:text-cyan-300 transition-colors">
          &lt;ATR&#8202;/&gt;
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-[#21262d] px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
