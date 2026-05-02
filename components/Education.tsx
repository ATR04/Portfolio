// components/Education.tsx — SERVER COMPONENT

export default function Education() {
  return (
    <section id="education" className="bg-[#0d1117]">
      <div className="section-wrapper">
        <p className="section-subtitle">// education</p>
        <h2 className="section-title">Academic History</h2>

        <div className="mt-10 max-w-2xl">
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full" />

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl">
                🎓
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Bachelor of Civil Engineering
                </h3>
                <p className="text-cyan-400 font-semibold mb-1">
                  Coimbatore Institute of Technology
                </p>
                <p className="text-gray-500 text-sm font-mono mb-4">2019 – 2023</p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">CGPA</span>
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 font-mono font-bold text-sm">
                      8.5 / 10
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Graduation</span>
                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-mono text-sm">
                      With Distinction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
