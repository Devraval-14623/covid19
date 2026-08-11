export default function SpreadGrid({ items }) {
  const max = Math.max(...items.map((i) => i.percent));
  const sorted = [...items].sort((a, b) => b.percent - a.percent);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {sorted.map((item) => {
        const ratio = item.percent / max;

        return (
          <div
            key={item.code}
            className="relative overflow-hidden rounded-xl border border-line bg-panel-2/60 p-3.5 flex flex-col justify-between h-24"
          >
            <div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-active/25 to-transparent"
              style={{
                height: `${Math.max(ratio * 100, 8)}%`,
              }}
            />

            <span className="relative font-mono text-[10px] uppercase tracking-wider text-mist">
              {item.code}
            </span>

            <span className="relative font-display text-xl text-paper">
              {item.percent}%
            </span>
          </div>
        );
      })}
    </div>
  );
}