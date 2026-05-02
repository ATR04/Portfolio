// components/Footer.tsx — SERVER COMPONENT

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#21262d] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-cyan-400 font-bold tracking-wide">&lt;ATR&#8202;/&gt;</span>

        <p className="text-gray-600 text-sm text-center">
          © {new Date().getFullYear()} Athiban Thangaraja D · Built with{" "}
          <span className="text-cyan-500">Next.js</span> &{" "}
          <span className="text-cyan-500">Tailwind CSS</span>
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:athibanthangaraja05@gmail.com"
            className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/a-t-r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
