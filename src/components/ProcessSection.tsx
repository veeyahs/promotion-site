const steps = [
  { num: '01', title: '初始沟通', action: '了解需求，评估可行性', deliverable: '可行性评估报告', period: '1-3天' },
  { num: '02', title: '业务洞察', action: '深度调研业务背景与痛点', deliverable: '业务痛点分析报告', period: '3-5天' },
  { num: '03', title: '提炼流程', action: '梳理业务板块，设计Agent集群SOP', deliverable: '流程优化方案 + Agent职责矩阵', period: '5-10天' },
  { num: '04', title: '方案设计', action: '设计专属Agent架构，预估成本', deliverable: '系统架构图 + 成本结构 + 交付计划', period: '3-5天' },
  { num: '05', title: '开发集成', action: '定制开发智能体系统，全链路调试', deliverable: '可运行的智能体系统', period: '2-4周' },
  { num: '06', title: '部署调试', action: '上线到业务系统，内部试运行', deliverable: '部署文档 + 测试报告', period: '1-2周' },
  { num: '07', title: '运行维护', action: '监控运行状态，迭代优化', deliverable: '运维报告 + 优化建议', period: '持续' },
];

export function ProcessSection() {
  return (
    <section id="process-inner" className="relative py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-whale-teal/20 via-whale-teal/50 to-gold-accent/20" />
          <div className="grid grid-cols-7 gap-3">
            {steps.map((step, index) => (
              <div key={step.num} className="reveal text-center" style={{ transitionDelay: `${index * 0.08}s` }}>
                <div className="relative flex justify-center mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    index < 5 ? 'bg-whale-teal/20 text-whale-teal border-2 border-whale-teal/40' :
                    index === 5 ? 'bg-gold-accent/20 text-gold-accent border-2 border-gold-accent/40' :
                    'bg-ocean-light/30 text-slate-400 border-2 border-slate-500/30'
                  }`}>
                    {step.num}
                  </div>
                </div>
                <h4 className="font-heading text-xs font-bold text-white mb-1">{step.title}</h4>
                <p className="text-slate-400 text-[11px] mb-2 leading-relaxed">{step.action}</p>
                <div className="glass-card p-2 text-left">
                  <p className="text-[10px] text-slate-500 mb-0.5">交付物</p>
                  <p className="text-[11px] text-slate-300">{step.deliverable}</p>
                  <p className="text-[11px] text-whale-teal mt-1 font-mono">{step.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet vertical timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={step.num} className="reveal flex gap-3" style={{ transitionDelay: `${index * 0.08}s` }}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-mono font-bold ${
                  index < 5 ? 'bg-whale-teal/20 text-whale-teal border-2 border-whale-teal/40' :
                  index === 5 ? 'bg-gold-accent/20 text-gold-accent border-2 border-gold-accent/40' :
                  'bg-ocean-light/30 text-slate-400 border-2 border-slate-500/30'
                }`}>
                  {step.num}
                </div>
                {index < steps.length - 1 && <div className="w-0.5 flex-1 bg-whale-teal/20 mt-1" />}
              </div>
              <div className="glass-card p-4 flex-1 mb-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading font-bold text-white text-sm">{step.title}</h4>
                  <span className="text-whale-teal text-xs font-mono">{step.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">{step.action}</p>
                <p className="text-slate-500 text-xs">交付：{step.deliverable}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="reveal mt-8 text-center">
          <div className="glass-card inline-block px-6 py-3 border-gold-accent/20">
            <p className="text-sm text-slate-300">
              <span className="text-gold-accent font-bold">全程专属顾问跟进</span>：每个项目配备一名业务顾问 + 一名技术负责人
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
