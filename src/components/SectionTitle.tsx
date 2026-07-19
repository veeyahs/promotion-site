export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-5 reveal">
      <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1.5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="w-12 h-0.5 bg-whale-teal" />
        <span className="w-2 h-2 rounded-full bg-gold-accent" />
        <span className="w-12 h-0.5 bg-whale-teal" />
      </div>
    </div>
  );
}
