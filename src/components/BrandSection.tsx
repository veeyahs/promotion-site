import { Mountain, Waves, Brain } from 'lucide-react';

export function BrandSection() {
  return (
    <section id="brand-inner" className="relative py-6 md:py-8 print-white-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Quote */}
        <div className="reveal text-center mb-6">
          <div className="inline-block">
            <div className="text-4xl text-whale-teal/20 font-heading leading-none mb-1">"</div>
            <p className="text-lg md:text-xl text-white font-body leading-relaxed max-w-3xl">
              让AI成为您的专属数字员工，而非只是一个聊天工具
            </p>
          </div>
        </div>

        {/* Positioning statement */}
        <div className="reveal glass-card p-4 md:p-5 mb-6 max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            <span className="teal-text font-bold">山海鲸</span>为企业提供<span className="text-gold-accent font-bold">完全定制化</span>的AI智能体系统，本地化部署，<span className="text-gold-accent font-bold">100%贴合业务需求</span>，让数据资产真正属于您自己。
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="reveal glass-card p-4 text-center group" style={{ transitionDelay: '0.1s' }}>
            <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-gradient-to-br from-ocean-light/50 to-ocean-mid/50 flex items-center justify-center border border-whale-teal/20 group-hover:border-whale-teal/60 transition-colors">
              <Mountain className="w-5 h-5 text-whale-teal" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-0.5">山</h3>
            <p className="text-gold-accent font-bold mb-1.5 text-xs tracking-wider">坚实可靠</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              本地化部署，数据安全如高山般稳固
            </p>
          </div>

          <div className="reveal glass-card p-4 text-center group" style={{ transitionDelay: '0.2s' }}>
            <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-gradient-to-br from-ocean-light/50 to-ocean-mid/50 flex items-center justify-center border border-whale-teal/20 group-hover:border-whale-teal/60 transition-colors">
              <Waves className="w-5 h-5 text-sky-blue" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-0.5">海</h3>
            <p className="text-gold-accent font-bold mb-1.5 text-xs tracking-wider">包容万象</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              全量定制化，覆盖各行各业业务场景
            </p>
          </div>

          <div className="reveal glass-card p-4 text-center group" style={{ transitionDelay: '0.3s' }}>
            <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-gradient-to-br from-ocean-light/50 to-ocean-mid/50 flex items-center justify-center border border-whale-teal/20 group-hover:border-whale-teal/60 transition-colors">
              <Brain className="w-5 h-5 text-gold-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-0.5">鲸</h3>
            <p className="text-gold-accent font-bold mb-1.5 text-xs tracking-wider">智慧庞大</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              大模型驱动，智能体集群协同作业
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
