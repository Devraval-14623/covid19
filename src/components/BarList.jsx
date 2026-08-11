function formatNumber(n) {
  return n.toLocaleString("en-US");
}

export default function BarList({
  items,
  accent = "var(--color-cases)",
  valueFormatter,
  maxOverride,
}) {
  const max = maxOverride ?? Math.max(...items.map((i) => i.value));

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, idx) => {
        const pct =
          item.value == null
            ? 0
            : Math.max((item.value / max) * 100, 2);

        return (
          <div
            key={item.code}
            className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3"
          >
            <span className="font-mono text-[11px] text-mist text-right tabular-nums">
              {String(idx + 1).padStart(2, "0")}
            </span>

            <div className="relative h-8 rounded-md bg-panel-2/70 overflow-hidden">
              {item.value != null ? (
                <div
                  className="h-full rounded-md transition-all duration-700 ease-out flex items-center pl-2.5"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: accent,
                    minWidth: "2.75rem",
                  }}
                >
                  <span className="font-mono text-[10px] font-semibold text-ink/80 whitespace-nowrap">
                    {item.code}
                  </span>
                </div>
              ) : (
                <span className="absolute inset-0 flex items-center pl-2.5 font-mono text-[10px] font-semibold text-mist">
                  {item.code}
                </span>
              )}
            </div>

            <div className="text-right min-w-[5.5rem]">
              <div className="font-mono text-sm text-paper tabular-nums leading-tight">
                {item.value == null
                  ? "N/A"
                  : valueFormatter
                    ? valueFormatter(item.value)
                    : formatNumber(item.value)}
              </div>

              {item.delta != null && (
                <div className="font-mono text-[10px] text-active tabular-nums">
                  +{formatNumber(item.delta)}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}