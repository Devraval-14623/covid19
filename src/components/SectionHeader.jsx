export default function SectionHeader({
  eyebrow,
  title,
  description,
  right,
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
      <div>
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist mb-2">
            {eyebrow}
          </p>
        )}

        <h2 className="font-display text-2xl md:text-3xl font-medium text-paper">
          {title}
        </h2>

        {description && (
          <p className="text-fog text-sm mt-1.5 max-w-md">
            {description}
          </p>
        )}
      </div>

      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}