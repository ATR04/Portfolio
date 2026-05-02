// components/Skills.tsx
// 📚 SERVER COMPONENT — static data, no interactivity needed.

const skillGroups = [
  {
    category: "Frontend & Mobile",
    color: "from-cyan-500 to-blue-500",
    skills: ["Angular", "React Native", "Ionic Capacitor", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend & APIs",
    color: "from-emerald-500 to-cyan-500",
    skills: ["Node.js (Express)", "Python (Flask)", "REST API Development", "Microservices", "Event-Driven Architecture"],
  },
  {
    category: "AWS Cloud",
    color: "from-orange-500 to-amber-500",
    skills: ["Amazon EC2", "Amazon ECS (Auto Scaling)", "ALB", "Lambda", "API Gateway", "S3", "CloudFront", "RDS", "EventBridge"],
  },
  {
    category: "DevOps & Infrastructure",
    color: "from-purple-500 to-pink-500",
    skills: ["Docker", "Containerisation", "Auto Scaling", "High Availability"],
  },
  {
    category: "Databases & Caching",
    color: "from-yellow-500 to-orange-500",
    skills: ["MySQL", "Cassandra", "Redis", "Amazon RDS"],
  },
  {
    category: "Protocols & Real-Time",
    color: "from-pink-500 to-rose-500",
    skills: ["MQTT", "WebSockets", "Real-Time Data Streaming", "Low-Latency Systems"],
  },
  {
    category: "AI & Automation",
    color: "from-violet-500 to-cyan-500",
    skills: ["Google Gemini API", "Prompt Engineering", "LLM Integration", "Microsoft Power Automate"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#030712]">
      <div className="section-wrapper">
        <p className="section-subtitle">// tech stack</p>
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-card p-6">
              {/* Category header with gradient line */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-8 glass-card p-6">
          <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-4">Languages</p>
          <div className="flex gap-3">
            {["English", "Tamil"].map((lang) => (
              <span key={lang} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
