export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-display text-paper text-lg">
            Covid–19{" "}
            <span className="text-mist font-normal">
              Global Data Dashboard
            </span>
          </p>

          <p className="text-xs text-mist mt-2 max-w-md leading-relaxed">
            Built for public information purposes only — not a comprehensive
            report, and not medical or policy guidance. Data is an illustrative
            snapshot and accuracy is not guaranteed.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="#top"
            className="font-mono text-[11px] uppercase tracking-wider text-mist hover:text-paper transition-colors"
          >
            Back to top ↑
          </a>

          <p className="text-[11px] text-mist">
            © 2026 — Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}