export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep" />

      {/* Animated wave layers */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="absolute bottom-0 w-[200%] animate-wave-slow" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z" fill="rgba(0,180,166,0.05)" />
        </svg>
        <svg className="absolute bottom-0 w-[200%] animate-wave-medium" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80C360 40 720 120 1080 80C1260 60 1350 90 1440 80V120H0V80Z" fill="rgba(0,180,166,0.08)" />
        </svg>
        <svg className="absolute bottom-0 w-[200%] animate-wave-fast" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 90C180 60 360 110 540 90C720 70 900 100 1080 90C1260 80 1350 95 1440 90V120H0V90Z" fill="rgba(0,180,166,0.12)" />
        </svg>
      </div>

      {/* Particle decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-whale-teal/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-whale-teal/5 rounded-full blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-accent/5 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <div className="mb-6 animate-float">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-whale-teal/20 to-ocean-mid/40 border border-whale-teal/30 backdrop-blur-sm">
            <svg viewBox="0 0 80 80" className="w-14 h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 12C24 12 12 24 12 38C12 44 14 50 18 54L12 64L26 58C30 60 35 62 40 62C56 62 68 50 68 38C68 24 56 12 40 12Z" fill="url(#whaleGrad)" stroke="rgba(0,180,166,0.6)" strokeWidth="1.5" />
              <path d="M28 34C28 32 30 30 32 32C34 34 32 36 30 36C28 36 28 35 28 34Z" fill="white" />
              <path d="M34 44C36 46 42 46 46 44" stroke="rgba(0,180,166,0.8)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M40 12C40 8 38 4 42 2" stroke="rgba(0,180,166,0.5)" strokeWidth="1" strokeLinecap="round" />
              <circle cx="43" cy="1" r="1.5" fill="rgba(0,180,166,0.4)" />
              <defs>
                <linearGradient id="whaleGrad" x1="12" y1="12" x2="68" y2="62">
                  <stop offset="0%" stopColor="#00B4A6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0D1F3C" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="teal-text">山海鲸</span>
        </h1>

        <p className="font-heading text-lg md:text-xl text-whale-teal/80 tracking-[0.3em] mb-6 uppercase">
          ONENESS
        </p>

        {/* Tagline */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl md:text-2xl font-body text-white/90 leading-relaxed">
            让AI成为您的<span className="teal-text font-bold">专属数字员工</span>
          </p>
          <p className="text-base text-slate-400 mt-2">
            而非只是一个聊天工具
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#brand"
            className="px-7 py-3 bg-whale-teal text-ocean-deep font-bold rounded-full hover:bg-whale-teal-light transition-all duration-300 hover:scale-105 shadow-lg shadow-whale-teal/20"
          >
            了解更多
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-whale-teal/40 text-whale-teal font-bold rounded-full hover:bg-whale-teal/10 transition-all duration-300"
          >
            联系我们
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 no-print">
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-6 bg-gradient-to-b from-whale-teal/60 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
