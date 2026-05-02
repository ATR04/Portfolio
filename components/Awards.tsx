// components/Awards.tsx — SERVER COMPONENT

const awards = [
  {
    icon: "🏆",
    title: "L&Q Pillar",
    org: "L&Q Technologies",
    year: "December 2025",
    color: "from-yellow-400 to-amber-500",
    desc: "Highest recognition — awarded for being a foundational pillar of the organisation.",
  },
  {
    icon: "⭐",
    title: "Star Performer",
    org: "L&Q Technologies",
    year: "December 2024",
    color: "from-cyan-400 to-blue-500",
    desc: "Outstanding performance and consistent delivery of high-impact solutions.",
  },
  {
    icon: "🌟",
    title: "Emerging Performer",
    org: "L&Q Technologies",
    year: "December 2023",
    color: "from-emerald-400 to-cyan-500",
    desc: "Recognised as a top emerging talent in the organisation.",
  },
  {
    icon: "🎓",
    title: "Full Stack Development",
    org: "Udemy Certification",
    year: "2023",
    color: "from-purple-400 to-pink-500",
    desc: "Comprehensive full stack development course certification.",
  },
  {
    icon: "👔",
    title: "Leadership Training Program",
    org: "L&Q Technologies",
    year: "2024",
    color: "from-orange-400 to-red-500",
    desc: "Completed the company's internal leadership and management training.",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="bg-[#030712]">
      <div className="section-wrapper">
        <p className="section-subtitle">// recognition</p>
        <h2 className="section-title">Awards & Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {awards.map((award) => (
            <div key={award.title} className="glass-card p-6 relative overflow-hidden group">
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="text-4xl mb-4">{award.icon}</div>

              <h3 className="text-white font-bold mb-1">{award.title}</h3>

              <div className={`text-xs font-mono font-medium bg-gradient-to-r ${award.color} bg-clip-text text-transparent mb-2`}>
                {award.org}
              </div>

              <div className="text-gray-500 text-xs mb-3 font-mono">{award.year}</div>

              <p className="text-gray-400 text-sm leading-relaxed">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
