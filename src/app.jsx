import { useState } from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeader";
import Toggle from "./components/Toggle";
import BarList from "./components/BarList";
import SpreadGrid from "./components/SpreadGrid";
import RecoveryPanel from "./components/RecoveryPanel";
import TrendChart from "./components/TrendChart";

import {
  lastUpdated,
  globalTotals,
  casesByCountry,
  growthByCountry,
  spreadByCountry,
  fatalitiesByCountry,
  trend7Day,
} from "./data/covidData";

function Panel({ id, children }) {
  return (
    <section
      id={id}
      className="border-b border-line py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [casesMode, setCasesMode] = useState("total");
  const [growthMode, setGrowthMode] = useState("number");

  const casesItems = casesByCountry.map((country) => ({
    code: country.code,
    value:
      casesMode === "total"
        ? country.total
        : country.active,
  }));

  const growthItems = growthByCountry.map((country) => ({
    code: country.code,
    value:
      growthMode === "number"
        ? country.number
        : country.percent,
  }));

  const fatalityItems = fatalitiesByCountry.map((country) => ({
    code: country.code,
    value: country.number,
    delta: country.delta,
  }));

  return (
    <div className="min-h-screen bg-ink">
      <Nav />

      <Hero
        totals={globalTotals}
        lastUpdated={lastUpdated}
      />

      <Panel id="cases">
        <SectionHeader
          eyebrow="Confirmed cases"
          title="Virus cases by country"
          description="The 16 worst-affected countries, ranked by confirmed cases."
          right={
            <Toggle
              options={[
                {
                  value: "total",
                  label: "Total",
                },
                {
                  value: "active",
                  label: "Active",
                },
              ]}
              active={casesMode}
              onChange={setCasesMode}
            />
          }
        />

        <BarList
          items={casesItems}
          accent="var(--color-cases)"
        />
      </Panel>

      <Panel id="growth">
        <SectionHeader
          eyebrow="Past 24 hours"
          title="Recent growth by country"
          description="Increase in confirmed cases over the past day, top 8 countries."
          right={
            <Toggle
              options={[
                {
                  value: "number",
                  label: "By number",
                },
                {
                  value: "percent",
                  label: "By percent",
                },
              ]}
              active={growthMode}
              onChange={setGrowthMode}
            />
          }
        />

        <BarList
          items={growthItems}
          accent="var(--color-active)"
          valueFormatter={(value) =>
            growthMode === "percent"
              ? `+${value}%`
              : `+${value.toLocaleString("en-US")}`
          }
        />
      </Panel>

      <Panel id="spread">
        <SectionHeader
          eyebrow="Population impact"
          title="Virus spread by country"
          description="Confirmed cases as a share of each country's total population."
        />

        <SpreadGrid items={spreadByCountry} />
      </Panel>

      <Panel id="fatalities">
        <SectionHeader
          eyebrow="Mortality"
          title="Fatalities by country"
          description="Reported deaths and 24h change, top 16 countries by count."
        />

        <BarList
          items={fatalityItems}
          accent="var(--color-fatal)"
        />
      </Panel>

      <Panel id="recoveries">
        <SectionHeader
          eyebrow="Outcomes"
          title="Recoveries vs. fatalities"
          description="Global recoveries compared against global fatalities, among resolved cases."
        />

        <RecoveryPanel
          fatalities={globalTotals.fatalities}
          recoveries={globalTotals.recoveries}
        />
      </Panel>

      <Panel id="trend">
        <SectionHeader
          eyebrow="7-day trend"
          title="Total cases globally"
          description="Cumulative confirmed cases worldwide over the past week."
        />

        <TrendChart data={trend7Day} />
      </Panel>

      <Footer />
    </div>
  );
}