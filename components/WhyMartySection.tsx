function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-lg border border-white/10 p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-white/50">{label}</div>
      <div className="mt-1 text-2xl font-extrabold">{value}</div>
      {sub && <div className="mt-1 text-xs text-white/60">{sub}</div>}
    </div>
  );
}
export function ValuePanel() {
  return (
    <section aria-labelledby="value-heading" className="mt-12">
      <h3 id="value-heading" className="mb-4 text-lg font-bold text-white/90">Why this makes money</h3>

      {/* Top stats — one-glance read */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Stat label="North Star" value="3×8×3" sub="3 sessions · 8 min · 3 weeks" />
        <Stat label="Monetization" value="4 streams" sub="Premium · Merch · Coaching · B2B" />
        <Stat label="Brand" value="High signal" sub="Cuts through pastel sameness" />
      </div>

      {/* One-line thesis */}
      <p className="mt-6 text-sm text-white/80">
        <span className="font-semibold text-white">Flywheel:</span> persona fit → activation → streaks → retention → ARPU.
      </p>

      {/* Levers */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 p-4">
          <h4 className="mb-2 text-sm font-semibold text-white/80">Conversion levers</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Persona fit for avoiders/overthinkers → higher day‑7 activation vs generic bots</li>
            <li>• DBT/EF scaffolds → task completion → streaks</li>
            <li>• Pattern memory + timely nudges → predictable daily returns</li>
          </ul>
        </div>
        <div className="rounded-lg border border-white/10 p-4">
          <h4 className="mb-2 text-sm font-semibold text-white/80">Revenue levers</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Premium ($8–15/mo): advanced modules, voice logs, pattern reports</li>
            <li>• Merch & affiliate: “MARTY ≠ THERAPY” drops + tools → direct margin</li>
            <li>• B2B licensing: EF/DBT toolkit → schools, employers, insurers</li>
          </ul>
        </div>
      </div>

      {/* Outcome line */}
      <div className="mt-6 text-xs uppercase tracking-[0.18em] text-white/50">
        Higher retention → higher LTV · Brand edge → lower CAC
      </div>
    </section>
  );
}