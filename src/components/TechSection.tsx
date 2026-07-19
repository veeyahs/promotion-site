import { Shield, Target, Coins } from 'lucide-react';

export function TechSection() {
  const archLayers = [
    { label: '您的业务场景与需求', color: 'from-whale-teal/30 to-whale-teal/10', border: 'border-whale-teal/30' },
    { label: 'OpenClaw 智能体框架', sub: '开源/可控', color: 'from-sky-blue/30 to-sky-blue/10', border: 'border-sky-blue/30' },
    { label: 'RAG 知识库系统', sub: '企业私有数据', color: 'from-gold-accent/30 to-gold-accent/10', border: 'border-gold-accent/30' },
    { label: 'LLM 大语言模型', sub: '灵活选型/本地部署', color: 'from-whale-teal/30 to-whale-teal/10', border: 'border-whale-teal/30' },
    { label: '本地服务器 / 私有云 / 混合云', color: 'from-ocean-light/50 to-ocean-mid/30', border: 'border-slate-500/30' },
  ];

  const advantages = [
    { icon: Shield, title: '数据隐私安全护城河', explain: '所有数据留在您自己的服务器，不上传任何第三方', value: '商业机密零泄露风险，符合数据合规要求', color: 'whale-teal' },
    { icon: Target, title: '100%业务还原度', explain: '不是套模板，而是完全按您的业务流程定制', value: '智能体就是您的"数字分身"，懂您的业务逻辑', color: 'gold-accent' },
    { icon: Coins, title: '成本可控、风险极低', explain: '一次性开发投入，无持续高额订阅费', value: '投入产出比清晰，技术风险可预期', color: 'sky-blue' },
  ];

  const getColor = (color: string) => color === 'whale-teal' ? 'text-whale-teal' : color === 'gold-accent' ? 'text-gold-accent' : 'text-sky-blue';
  const getBg = (color: string) => color === 'whale-teal' ? 'bg-whale-teal/10' : color === 'gold-accent' ? 'bg-gold-accent/10' : 'bg-sky-blue/10';

  return (
    <section id="tech-inner" className="relative py-6 md:py-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-dark/30 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Architecture */}
        <div className="reveal mb-6">
          <h3 className="font-heading text-lg font-bold text-white mb-3 text-center">技术架构</h3>
          <div className="max-w-lg mx-auto space-y-1.5">
            {archLayers.map((layer, index) => (
              <div
                key={index}
                className={`reveal glass-card p-2.5 text-center border ${layer.border} transition-all duration-300 hover:scale-[1.02]`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <p className="text-white font-bold text-sm">{layer.label}</p>
                {layer.sub && <p className="text-slate-400 text-xs">{layer.sub}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div>
          <h3 className="font-heading text-lg font-bold text-white mb-3 text-center">三大核心优势</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="reveal glass-card p-4 group" style={{ transitionDelay: `${index * 0.15}s` }}>
                  <div className={`w-10 h-10 rounded-xl ${getBg(adv.color)} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${getColor(adv.color)}`} />
                  </div>
                  <h4 className={`font-heading text-sm font-bold ${getColor(adv.color)} mb-1.5`}>{adv.title}</h4>
                  <p className="text-slate-400 text-xs mb-2">{adv.explain}</p>
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-slate-300 text-xs">{adv.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
