// components/Projects.tsx — SERVER COMPONENT

const projects = [
  {
    icon: "✨",
    title: "AI Resume Scorer",
    tagline: "Gemini API Integration",
    description:
      "Built a full-stack AI-powered resume scoring tool that analyses resumes across 5 dimensions — relevance, clarity, impact, ATS compatibility, and structure. Integrates Google Gemini API with a structured prompt to return consistent JSON scores, rendered as interactive score rings and breakdown bars.",
    tech: ["Next.js", "Google Gemini API", "TypeScript", "Tailwind CSS", "REST API"],
    highlights: [
      "Prompt-engineered Gemini to return deterministic JSON scoring output",
      "Client-side PDF text extraction with drag-and-drop upload",
      "ATS keyword gap analysis with actionable improvement suggestions",
      "Zero backend — Gemini called directly from the browser",
    ],
    accent: "from-cyan-500 to-blue-500",
    badge: "AI / LLM",
    badgeColor: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  },
  {
    icon: "⚡",
    title: "Automated Resume Pipeline",
    tagline: "Microsoft Power Automate · Gemini API · OneDrive · Excel",
    description:
      "Built a fully automated end-to-end recruitment pipeline using Microsoft Power Automate. When a candidate sends an email with their resume, the flow automatically saves the attachment to OneDrive, calls the Gemini API to parse and score the resume, sends an automated response to the candidate, and logs the score and parsed details into an Excel sheet on OneDrive — zero manual effort required.",
    tech: ["Microsoft Power Automate", "Gemini API", "OneDrive", "Excel", "Outlook", "HTTP Connector"],
    highlights: [
      "Trigger: email received with attachment → auto-save resume to OneDrive folder",
      "HTTP action calls Gemini API to parse and score the resume content",
      "Automated reply sent to the candidate with their score and feedback",
      "Results (name, email, score, strengths, improvements) appended to Excel on OneDrive",
      "Fully no-code orchestration — no server or manual intervention needed",
    ],
    accent: "from-blue-500 to-violet-500",
    badge: "Automation",
    badgeColor: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  },
  {
    icon: "📈",
    title: "Real-Time Options Trading Platform",
    tagline: "Live Market Data · AWS · Node.js",
    description:
      "Architected and delivered a real-time options trading strategies platform that streams live market data during trading hours. Built with event-driven microservices on AWS, featuring low-latency data pipelines and seamless UI updates.",
    tech: ["Node.js", "AWS ECS", "Redis", "Docker", "Angular", "EventBridge"],
    highlights: [
      "Sub-second latency data streaming during peak trading hours",
      "Rule-based automation engine for instant alerts and triggers",
      "Horizontally scaled microservices on AWS ECS with Auto Scaling",
      "Redis caching layer for optimised query performance",
    ],
    accent: "from-emerald-500 to-cyan-500",
    badge: "Real-Time Systems",
    badgeColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
  {
    icon: "📱",
    title: "Cross-Platform Mobile Applications",
    tagline: "React Native · Ionic · App Store & Play Store",
    description:
      "Engineered and published production-ready mobile applications to both the Google Play Store and Apple App Store using React Native and Ionic Capacitor. Implemented optimised state management and seamless native device integrations.",
    tech: ["React Native", "Ionic Capacitor", "TypeScript", "Node.js", "REST API"],
    highlights: [
      "Successfully shipped to both Google Play Store and Apple App Store",
      "Optimised state management for smooth 60fps interactions",
      "Native device API integrations via Capacitor plugins",
      "Shared codebase across iOS and Android platforms",
    ],
    accent: "from-purple-500 to-pink-500",
    badge: "Mobile",
    badgeColor: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#030712]">
      <div className="section-wrapper">
        <p className="section-subtitle">// what i've built</p>
        <h2 className="section-title">Projects</h2>

        <div className="mt-10 space-y-6">
          {projects.map((project, i) => (
            <div key={i} className="glass-card p-6 md:p-8 group relative overflow-hidden">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="grid md:grid-cols-[1fr_auto] gap-6">
                {/* Left content */}
                <div>
                  {/* Header row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-500 text-sm font-mono">{project.tagline}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full border font-mono ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key highlights */}
                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-gray-400 text-sm">
                        <span className="text-cyan-500 mt-0.5 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
