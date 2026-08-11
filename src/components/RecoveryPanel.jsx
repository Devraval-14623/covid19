import Counter from "./Counter";

export default function RecoveryPanel({ fatalities, recoveries }) {
  const total = fatalities + recoveries;
  const recoveryPct = (recoveries / total) * 100;

  return (
    <div className="flex flex-col gap-6">
      <div className="h-4 w-full rounded-full overflow-hidden bg-panel-2 flex">
        <div
          className="h-full bg-recover transition-all duration-1000 ease-out"
          style={{ width: `${recoveryPct}%` }}
        />

        <div
          className="h-full bg-fatal transition-all duration-1000 ease-out"
          style={{ width: `${100 - recoveryPct}%` }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-line bg-panel-2/60 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-recover" />

            <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
              Recoveries
            </span>
          </div>

          <Counter
            value={recoveries}
            className="font-display text-3xl md:text-4xl text-paper tabular-nums"
          />

          <p className="text-xs text-mist mt-1">
            {recoveryPct.toFixed(1)}% of resolved cases
          </p>
        </div>

        <div className="rounded-xl border border-line bg-panel-2/60 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-fatal" />

            <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
              Fatalities
            </span>
          </div>

          <Counter
            value={fatalities}
            className="font-display text-3xl md:text-4xl text-paper tabular-nums"
          />

          <p className="text-xs text-mist mt-1">
            {(100 - recoveryPct).toFixed(1)}% of resolved cases
          </p>
        </div>
      </div>
    </div>
  );
}