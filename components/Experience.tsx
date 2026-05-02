// components/Experience.tsx
// 📚 SERVER COMPONENT — rendered on the server, static HTML.

const roles = [
  {
    title: "☁️ Cloud Architecture & Scalability",
    points: [
      "Architected and deployed cloud-native applications on AWS using EC2, ECS (Fargate launch type), Auto Scaling, ALB, and API Gateway to handle peak traffic efficiently.",
      "Implemented scalable Docker containerised deployments improving system reliability and ensuring high availability during high-demand trading hours with optimised scaling.",
    ],
  },
  {
    title: "⚡ Backend Engineering & Performance Optimisation",
    points: [
      "Developed microservices using Node.js (Express) and Python (Flask), implementing asynchronous processing, event-driven architecture, and leveraging performance with horizontal scaling.",
      "Improved API response times and backend efficiency through optimised database queries, caching strategies using Redis, and structured logging.",
    ],
  },
  {
    title: "🖥️ Full Stack & Hybrid Mobile Development",
    points: [
      "Architected and delivered end-to-end full stack applications using Angular and Node.js, implementing modular RESTful APIs with MVC pattern, secure authentication flows, and scalable service-layer.",
      "Engineered and deployed cross-platform mobile applications using React Native and Ionic, optimised state management, and published production-ready builds to the Google Play Store and Apple App Store.",
    ],
  },
  {
    title: "📡 Real-Time Device & Automation Systems",
    points: [
      "Built a real-time options trading strategies system that processed live market data during trading hours with low-latency data streaming and seamless UI updates.",
      "Built rule-based automation engines enabling instant alerts, triggers, and intelligent system actions.",
    ],
  },
  {
    title: "🤖 AI & LLM Integration",
    points: [
      "Integrated Google Gemini API to build an AI-powered resume scoring tool — prompt-engineered Gemini to return deterministic JSON scoring outputs across 5 dimensions (relevance, clarity, impact, ATS compatibility, structure) with actionable keyword gap analysis.",
      "Built a fully automated recruitment pipeline using Microsoft Power Automate: email trigger → auto-save resume to OneDrive → call Gemini API for parsing and scoring → send automated response to candidate → log results in Excel on OneDrive. Zero manual intervention.",
    ],
  },
  {
    title: "👑 Leadership & Ownership",
    points: [
      "Became the youngest Project Lead, driving architectural decisions, sprint planning, task distribution, and cross-functional coordination.",
      "Ensured timely delivery of scalable, production-ready solutions while maintaining code quality and performance standards.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0d1117]">
      <div className="section-wrapper">
        <p className="section-subtitle">// work experience</p>
        <h2 className="section-title">Experience</h2>

        {/* Company banner */}
        <div className="mt-8 mb-10 glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Senior Software Engineer</h3>
            <p className="text-cyan-400 font-medium mt-1">L&Q Technologies Private Limited</p>
            <p className="text-gray-500 text-sm mt-1">Startup · Full-time</p>
          </div>
          <div className="text-right">
            <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-full font-mono">
              3 Years Experience
            </span>
          </div>
        </div>

        {/* Responsibility cards */}
        <div className="space-y-4">
          {roles.map((role, i) => (
            <details
              key={i}
              className="glass-card group"
              open={i === 0} // first card open by default
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                <span className="text-white font-semibold">{role.title}</span>
                {/* Chevron arrow — rotates when open */}
                <span className="text-gray-500 group-open:rotate-180 transition-transform duration-200 text-lg">
                  ▾
                </span>
              </summary>
              <ul className="px-5 pb-5 space-y-3 border-t border-[#21262d]">
                {role.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed pt-3">
                    <span className="text-cyan-500 mt-0.5 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
