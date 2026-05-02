// components/Contact.tsx — SERVER COMPONENT

// SVG icons — theme-aware, always look crisp in dark mode
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contacts = [
  {
    Icon: MailIcon,
    label: "Email",
    value: "athibanthangaraja05@gmail.com",
    href: "mailto:athibanthangaraja05@gmail.com",
  },
  {
    Icon: PhoneIcon,
    label: "Phone",
    value: "+91 9360781070",
    href: "tel:+919360781070",
  },
  {
    Icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/a-t-r",
    href: "https://linkedin.com/in/a-t-r",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#030712]">
      <div className="section-wrapper">
        <p className="section-subtitle">// get in touch</p>
        <h2 className="section-title">Contact</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
          {/* Left — message */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s build something{" "}
              <span className="gradient-text">remarkable</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Whether you have an exciting product to build, a cloud architecture
              challenge to solve, or just want to talk tech — my inbox is open.
            </p>

            <a
              href="mailto:athibanthangaraja05@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              Say Hello
              {/* Inline SVG — always dark-mode friendly */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
              </svg>
            </a>
          </div>

          {/* Right — contact cards */}
          <div className="space-y-4">
            {contacts.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card p-4 flex items-center gap-4 group"
              >
                {/* Icon box — uses text-cyan-400 which is always visible on dark bg */}
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20
                                flex items-center justify-center text-cyan-400
                                group-hover:bg-cyan-500/20 transition-colors shrink-0">
                  <Icon />
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">{label}</div>
                  <div className="text-white text-sm group-hover:text-cyan-400 transition-colors">
                    {value}
                  </div>
                </div>
                <div className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
