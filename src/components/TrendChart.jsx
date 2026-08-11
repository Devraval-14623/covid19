import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-line bg-panel px-3 py-2 shadow-xl">
      <p className="font-mono text-[10px] text-mist uppercase tracking-wider mb-0.5">
        Day {label}
      </p>

      <p className="font-mono text-sm text-paper tabular-nums">
        {payload[0].value.toLocaleString("en-US")}
      </p>
    </div>
  );
}

export default function TrendChart({ data }) {
  return (
    <div className="h-64 md:h-80 w-full -ml-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 16,
            bottom: 0,
            left: 0,
          }}
        >
          <defs>
            <linearGradient
              id="trendFill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="var(--color-cases)"
                stopOpacity={0.35}
              />

              <stop
                offset="100%"
                stopColor="var(--color-cases)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="var(--color-line)"
            strokeDasharray="3 6"
            vertical={false}
          />

          <XAxis
            dataKey="day"
            tickFormatter={(d) => `${d}.05`}
            tick={{
              fill: "var(--color-mist)",
              fontSize: 11,
              fontFamily: "JetBrains Mono",
            }}
            axisLine={{
              stroke: "var(--color-line)",
            }}
            tickLine={false}
          />

          <YAxis
            tickFormatter={(v) => `${(v / 1e6).toFixed(1)}m`}
            tick={{
              fill: "var(--color-mist)",
              fontSize: 11,
              fontFamily: "JetBrains Mono",
            }}
            axisLine={false}
            tickLine={false}
            width={44}
            domain={["dataMin - 100000", "dataMax + 100000"]}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "var(--color-line)",
            }}
          />

          <Area
            type="monotone"
            dataKey="cases"
            stroke="var(--color-cases)"
            strokeWidth={2}
            fill="url(#trendFill)"
            dot={{
              r: 3,
              fill: "var(--color-cases)",
              strokeWidth: 0,
            }}
            activeDot={{
              r: 5,
              fill: "var(--color-cases)",
              strokeWidth: 0,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}