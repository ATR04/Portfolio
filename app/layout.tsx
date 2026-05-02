// ╔══════════════════════════════════════════════════════════════╗
// ║  app/layout.tsx — ROOT LAYOUT                               ║
// ║                                                              ║
// ║  📚 WHAT IS THE ROOT LAYOUT?                                ║
// ║  In Next.js App Router, layout.tsx wraps EVERY page in its  ║
// ║  directory. This root layout wraps the entire application.  ║
// ║                                                              ║
// ║  Think of it as the HTML shell:                             ║
// ║    layout.tsx  →  <html><body>{children}</body></html>      ║
// ║                                                              ║
// ║  Whatever you put here (Navbar, Footer, fonts) appears on   ║
// ║  every single page without you needing to repeat it.        ║
// ║                                                              ║
// ║  📌 "use client" vs Server Component                        ║
// ║  This file does NOT have "use client" — it's a             ║
// ║  SERVER COMPONENT by default. Server components:            ║
// ║    ✅ Run on the server (faster initial load, SEO-friendly) ║
// ║    ❌ Cannot use useState, useEffect, onClick               ║
// ║  Client components (marked "use client") run in the browser ║
// ║  and CAN use hooks, events, and browser APIs.               ║
// ╚══════════════════════════════════════════════════════════════╝

import type { Metadata } from "next";
import "./globals.css";

// 📌 Metadata export — Next.js reads this and injects into <head>
// This powers SEO: search engines read <title> and <description>
export const metadata: Metadata = {
  title: "Athiban Thangaraja | Senior Software Engineer",
  description:
    "Full Stack Developer | AWS Cloud | Real-Time Systems | Performance-Focused Engineer. 3 years of experience building scalable web and mobile applications.",
  keywords: [
    "Athiban Thangaraja",
    "Senior Software Engineer",
    "Full Stack Developer",
    "AWS",
    "Node.js",
    "React Native",
    "Angular",
  ],
  // Open Graph tags make your link look great when shared on Slack/Twitter
  openGraph: {
    title: "Athiban Thangaraja | Senior Software Engineer",
    description: "Full Stack Developer | AWS Cloud | Real-Time Systems",
    type: "website",
  },
};

// 📌 RootLayout receives "children" — whatever page is currently active
// gets passed in as children. This is React's composition model.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/*
        📌 suppressHydrationWarning is needed because the server renders
        HTML and sends it to the browser. The browser then "hydrates" it
        (attaches event listeners). Sometimes there's a tiny mismatch
        (e.g. browser extensions adding attributes) — this silences it.
      */}
      <body suppressHydrationWarning className="bg-[#030712] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
