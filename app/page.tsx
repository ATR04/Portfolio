// ╔══════════════════════════════════════════════════════════════╗
// ║  app/page.tsx — HOME PAGE                                   ║
// ║                                                              ║
// ║  📚 SERVER COMPONENT (no "use client")                     ║
// ║  This is the root page rendered at "/".                     ║
// ║                                                              ║
// ║  It composes all section components together.               ║
// ║  Notice: it imports CLIENT components (Navbar, Hero) and    ║
// ║  SERVER components (About, Skills, etc.) freely.            ║
// ║                                                              ║
// ║  KEY INSIGHT: A SERVER component CAN render client          ║
// ║  components as children — but NOT the other way around      ║
// ║  (a client component cannot import a server component).     ║
// ╚══════════════════════════════════════════════════════════════╝

import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import About      from "@/components/About";
import Skills     from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects   from "@/components/Projects";
import Awards     from "@/components/Awards";
import Education  from "@/components/Education";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

// 📌 @/ is an alias for the project root, configured in tsconfig.json
//    paths: { "@/*": ["./*"] }
//    So @/components/Navbar = ./components/Navbar from the project root

export default function HomePage() {
  return (
    <main>
      {/*
        📌 Component composition in React:
        Each section is an independent component. This makes the code:
          ✅ Easier to read — each file has one job
          ✅ Easier to test — components are isolated
          ✅ Easier to maintain — change one section without touching others
          ✅ Reusable — use the same component on multiple pages
      */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
