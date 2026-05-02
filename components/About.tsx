// components/About.tsx
// 📚 This is a SERVER COMPONENT (no "use client") — it has no interactivity,
//    so Next.js renders it on the server and sends plain HTML to the browser.
//    This is FASTER because the browser has less JavaScript to parse.

export default function About() {
  const highlights = [
    { icon: "☁️", label: "AWS Cloud",       desc: "EC2 · ECS · ALB · Lambda · S3 · CloudFront" },
    { icon: "⚡", label: "Real-Time",        desc: "Live trading systems · MQTT · Event-driven" },
    { icon: "📱", label: "Mobile",           desc: "React Native · Ionic Capacitor → Play Store & App Store" },
    { icon: "🤖", label: "AI & Automation",   desc: "Google Gemini API · Prompt Engineering · Power Automate" },
    { icon: "🚀", label: "Performance",      desc: "Redis caching · Query optimisation · Horizontal scaling" },
    { icon: "🏗️", label: "Architecture",    desc: "Microservices · MVC · Docker containerisation" },
    { icon: "👑", label: "Leadership",       desc: "Youngest Project Lead · Sprint planning · Cross-functional" },
  ];

  return (
    <section id="about" className="bg-[#0d1117]">
      <div className="section-wrapper">
        {/* Section header */}
        <p className="section-subtitle">// about me</p>
        <h2 className="section-title">Who I Am</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Bio text */}
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              I'm a <span className="text-white font-semibold">Results-driven Full Stack Developer</span> with
              3 years of experience building high-performance web and hybrid mobile applications.
              I thrive at the intersection of clean code and cloud infrastructure.
            </p>
            <p>
              At <span className="text-cyan-400 font-semibold">L&Q Technologies</span>, I grew from developer
              to the <span className="text-white font-semibold">youngest Project Lead</span> — driving
              architecture decisions, sprint planning, and cross-functional delivery of production-grade
              enterprise solutions.
            </p>
            <p>
              My expertise spans Angular, React Native, Ionic, Node.js, and Python microservices, backed by
              deep AWS cloud knowledge (Docker, EC2, ECS Fargate, ALB, API Gateway, Lambda, Redis,
              S3, CloudFront, EventBridge). I also build AI-powered tools and automations using
              Google Gemini API and Microsoft Power Automate.
            </p>
            <p>
              Outside code I'm a{" "}
              <span className="text-cyan-400">🎸 guitarist</span>,
              <span className="text-cyan-400"> ♟ chess player</span>, and passionate traveller.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="mailto:athibanthangaraja05@gmail.com"
                 className="skill-tag text-xs">
                ✉ athibanthangaraja05@gmail.com
              </a>
              <a href="https://linkedin.com/in/a-t-r" target="_blank" rel="noopener noreferrer"
                 className="skill-tag text-xs">
                🔗 linkedin.com/in/a-t-r
              </a>
              <span className="skill-tag text-xs">📞 9360781070</span>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="glass-card p-4">
                <div className="text-2xl mb-2">{h.icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{h.label}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
