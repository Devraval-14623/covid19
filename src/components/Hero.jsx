import Counter from "./Counter";

export default function Hero({ totals, lastUpdated }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="absolute -top-24 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cases/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="flex items-center gap-2 mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
          <span className="h-1.5 w-1.5 rounded-full bg-active" />
          Last updated {lastUpdated}
        </div>

        <h1 className="font-display font-medium text-paper text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-2xl">
          Tracking the pandemic,
          <br />
          country by country.
        </h1>

        <p className="mt-5 max-w-lg text-fog text-sm md:text-base">
          A public-information snapshot of the 16 worst-affected countries —
          cases, fatalities, recoveries and rate of spread, visualised in one
          place.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl border border-line bg-line overflow-hidden">
          <StatBlock
            label="Confirmed cases"
            value={totals.cases}
            delta={totals.casesDelta}
            accentVar="var(--color-cases)"
            pulse
          />

          <StatBlock
            label="Fatalities"
            value={totals.fatalities}
            delta={totals.fatalitiesDelta}
            accentVar="var(--color-fatal)"
          />

          <StatBlock
            label="Active cases"
            value={totals.activeCases}
            accentVar="var(--color-active)"
          />
        </div>
      </div>
    </section>
  );
}

function StatBlock({ label, value, delta, accentVar, pulse }) {
  return (
    <div className="relative bg-panel px-6 py-7 flex flex-col gap-3">
      {pulse && (
        <span
          className="pulse-ring absolute top-7 right-6 h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: accentVar }}
        />
      )}

      <div className="flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full shrink-0"
          style={{ backgroundColor: accentVar }}
        />

        <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
          {label}
        </span>
      </div>

      <Counter
        value={value}
        className="font-display text-3xl md:text-[2.5rem] text-paper tabular-nums"
      />

      {delta != null && (
        <span className="font-mono text-xs text-active">
          +{delta.toLocaleString("en-US")} in 24h
        </span>
      )}
    </div>
  );
}