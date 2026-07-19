import { Shield, Target, Coins, CheckCircle } from 'lucide-react';

const roiData = [
  { scenario: '跨境电商内容创作', traditional: '2-3小时/条', ai: '10分钟/条', improvement: '10-15倍', color: 'whale-teal' },
  { scenario: '企业知识库查询', traditional: '人工反复解答', ai: '即时自动回答', improvement: '24/7在线', color: 'gold-accent' },
  { scenario: '商品多平台上架', traditional: '1-2天/款', ai: '30分钟/款', improvement: '30-50倍', color: 'sky-blue' },
  { scenario: '投资信息整理', traditional: '手动收集分析', ai: '自动推送报告', improvement: '实时+精准', color: 'coral-red' },
];

const promises = [
  { icon: Shield, title: '数据100%私有', desc: '您的数据只留在您的服务器' },
  { icon: Target, title: '业务100%贴合', desc: '完全按您的流程定制，不是套模板' },
  { icon: Coins, title: '成本100%可控', desc: '透明报价，无隐藏费用，无持续订阅绑架' },
];

export function ROISection() {
  return (
    <section id="roi-inner" className="relative py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Urgency banner */}
        <div className="reveal glass-card p-4 md:p-5 mb-6 text-center border-gold-accent/20">
          <p className="text-slate-400 text-xs mb-1">为什么现在就要行动？</p>
          <p className="text-sm md:text-base text-white">
            <span className="gold-text font-bold text-lg md:text-xl">80%</span> 的头部企业已部署AI智能体并产生可衡量的经济回报
          </p>
          <p className="text-slate-500 text-xs mt-1">您的竞争对手可能已经在用AI智能体处理重复性工作</p>
        </div>

        {/* ROI Table */}
        <div className="reveal mb-6">
          <h3 className="font-heading text-lg font-bold text-white mb-3 text-center">效率提升对比</h3>
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-3 border-b border-white/10 bg-ocean-dark/50">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">场景</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">传统方式</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">AI智能体方式</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider text-right">效率提升</p>
            </div>
            {roiData.map((row, index) => (
              <div key={index} className={`grid grid-cols-4 gap-4 p-3 ${index < roiData.length - 1 ? 'border-b border-white/5' : ''}`}>
                <p className="text-white text-sm font-medium">{row.scenario}</p>
                <p className="text-slate-500 text-sm line-through">{row.traditional}</p>
                <p className="text-whale-teal text-sm font-medium">{row.ai}</p>
                <p className="text-right">
                  <span className={`font-mono font-bold text-sm ${
                    row.color === 'whale-teal' ? 'text-whale-teal' :
                    row.color === 'gold-accent' ? 'text-gold-accent' :
                    row.color === 'sky-blue' ? 'text-sky-blue' : 'text-coral-red'
                  }`}>
                    {row.improvement}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Three promises */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            const colorClass = index === 0 ? 'text-whale-teal' : index === 1 ? 'text-gold-accent' : 'text-sky-blue';
            const bgClass = index === 0 ? 'bg-whale-teal/10' : index === 1 ? 'bg-gold-accent/10' : 'bg-sky-blue/10';
            return (
              <div key={index} className="reveal glass-card p-4 text-center" style={{ transitionDelay: `${index * 0.15}s` }}>
                <div className={`w-9 h-9 mx-auto rounded-full ${bgClass} flex items-center justify-center mb-2.5`}>
                  <CheckCircle className={`w-5 h-5 ${colorClass}`} />
                </div>
                <h4 className={`font-heading font-bold ${colorClass} mb-1`}>{promise.title}</h4>
                <p className="text-slate-400 text-xs">{promise.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
