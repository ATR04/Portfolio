// ╔══════════════════════════════════════════════════════════╗
// ║  next.config.js  — Next.js Runtime Configuration        ║
// ║                                                          ║
// ║  📚 WHAT IS THIS FILE?                                  ║
// ║  Every Next.js project has a next.config file. It       ║
// ║  controls how Next.js compiles, serves, and optimises   ║
// ║  your app. Think of it as "settings for the framework". ║
// ║                                                          ║
// ║  Note: Next.js 14 only supports .js or .mjs here.      ║
// ║  TypeScript config (.ts) is a Next.js 15+ feature.     ║
// ╚══════════════════════════════════════════════════════════╝

/** @type {import('next').NextConfig} */
// 📌 The JSDoc @type comment above gives you full TypeScript
//    intellisense/autocomplete even in a plain .js file.

const nextConfig = {
  // 📌 reactStrictMode: Enables React's Strict Mode in development.
  // It intentionally double-invokes certain functions to surface bugs early.
  // Has ZERO effect on your production build.
  reactStrictMode: true,

  // 📌 images: Tells Next.js which external domains are allowed
  // to serve images through its built-in <Image> component.
  // The <Image> component auto-optimises images (lazy load, WebP, etc.)
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
