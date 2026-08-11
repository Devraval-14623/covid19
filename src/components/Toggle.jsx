export default function Toggle({ options, active, onChange }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line bg-panel-2/60 p-1 font-mono text-[11px] uppercase tracking-wider">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`rounded-full px-3 py-1.5 transition-colors duration-200 cursor-pointer ${
            active === opt.value
              ? "bg-paper text-ink"
              : "text-mist hover:text-fog"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}