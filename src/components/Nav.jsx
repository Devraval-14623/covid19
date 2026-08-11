const links = [
  { href: "#cases", label: "Cases" },
  { href: "#growth", label: "Growth" },
  { href: "#spread", label: "Spread" },
  { href: "#fatalities", label: "Fatalities" },
  { href: "#trend", label: "Trend" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cases opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cases" />
          </span>

          <span className="font-display text-sm md:text-base tracking-tight text-paper">
            Covid–19{" "}
            <span className="text-mist font-normal">
              / Global Data Dashboard
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-mist">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}