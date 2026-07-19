export function Navigation({ activeSection }: { activeSection: string }) {
  const sections = [
    { id: 'hero', label: '封面' },
    { id: 'brand', label: '品牌' },
    { id: 'trend', label: '趋势' },
    { id: 'team', label: '团队' },
    { id: 'tech', label: '技术' },
    { id: 'process', label: '流程' },
    { id: 'solutions', label: '方案' },
    { id: 'roi', label: '价值' },
    { id: 'cooperation', label: '合作' },
    { id: 'contact', label: '联系' },
  ];

  return (
    <nav className="no-print fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center justify-end"
          title={section.label}
        >
          <span className="absolute right-6 px-2 py-1 text-xs text-whale-teal bg-ocean-dark/90 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-whale-teal/20">
            {section.label}
          </span>
          <span
            className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-whale-teal scale-150 shadow-[0_0_10px_rgba(0,180,166,0.6)]'
                : 'bg-white/20 hover:bg-whale-teal/60'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
