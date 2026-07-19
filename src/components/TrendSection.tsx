import { Bot, Cpu, Server } from 'lucide-react';

export function TrendSection() {
  return (
    <section id="trend-inner" className="relative py-6 md:py-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-dark/50 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Key stat */}
        <div className="reveal text-center mb-6">
          <div className="inline-flex flex-col items-center">
            <p className="text-slate-400 text-sm mb-1">为什么2026是AI智能体落地元年？</p>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-4xl md:text-6xl font-extrabold teal-text">40%</span>
            </div>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              的企业应用将集成任务型AI智能体<span className="text-slate-500">（2025年不足5%）</span>
            </p>
            <p className="text-xs text-slate-500 mt-0.5">数据来源：Gartner预测</p>
          </div>
        </div>

        {/* Core shift */}
        <div className="reveal glass-card p-4 md:p-5 mb-6 text-center max-w-3xl mx-auto">
          <p className="text-slate-400 text-xs mb-1">核心转变</p>
          <p className="text-base text-white">
            AI从<span className="text-slate-500">"回答问题"</span>进化到<span className="teal-text font-bold">"完成任务"</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">从 Copilot（副驾驶）→ Agentic AI（自主执行者）</p>
        </div>

        {/* Three trends */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="reveal glass-card p-4 group" style={{ transitionDelay: '0.1s' }}>
            <div className="w-9 h-9 rounded-lg bg-whale-teal/10 flex items-center justify-center mb-3 group-hover:bg-whale-teal/20 transition-colors">
              <Bot className="w-5 h-5 text-whale-teal" />
            </div>
            <h3 className="font-heading text-sm font-bold text-white mb-1.5">从单智能体到多智能体协作</h3>
            <p className="text-slate-400 text-xs mb-2">多个专业智能体协同完成复杂工作流</p>
            <div className="pt-2 border-t border-white/5">
              <p className="text-whale-teal text-xs font-bold uppercase tracking-wider">对企业的意义</p>
              <p className="text-slate-300 text-sm mt-1">业务流程全面自动化</p>
            </div>
          </div>

          <div className="reveal glass-card p-4 group" style={{ transitionDelay: '0.2s' }}>
            <div className="w-9 h-9 rounded-lg bg-gold-accent/10 flex items-center justify-center mb-3 group-hover:bg-gold-accent/20 transition-colors">
              <Cpu className="w-5 h-5 text-gold-accent" />
            </div>
            <h3 className="font-heading text-sm font-bold text-white mb-1.5">领域专用模型超越通用模型</h3>
            <p className="text-slate-400 text-xs mb-2">针对特定行业微调的小模型更精准、更经济</p>
            <div className="pt-2 border-t border-white/5">
              <p className="text-gold-accent text-xs font-bold uppercase tracking-wider">对企业的意义</p>
              <p className="text-slate-300 text-sm mt-1">本地化部署成为可能</p>
            </div>
          </div>

          <div className="reveal glass-card p-4 group" style={{ transitionDelay: '0.3s' }}>
            <div className="w-9 h-9 rounded-lg bg-sky-blue/10 flex items-center justify-center mb-3 group-hover:bg-sky-blue/20 transition-colors">
              <Server className="w-5 h-5 text-sky-blue" />
            </div>
            <h3 className="font-heading text-sm font-bold text-white mb-1.5">AI从项目变为基础设施</h3>
            <p className="text-slate-400 text-xs mb-2">企业不再问"AI能不能用"，而是"如何规模化部署"</p>
            <div className="pt-2 border-t border-white/5">
              <p className="text-sky-blue text-xs font-bold uppercase tracking-wider">对企业的意义</p>
              <p className="text-slate-300 text-sm mt-1">早部署者获得竞争优势</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
