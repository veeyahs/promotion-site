import { Package, Puzzle, MessageSquare, UserCheck, CalendarDays, BookOpen, Headphones } from 'lucide-react';

const serviceTypes = [
  { icon: Package, title: '全案定制', desc: '从需求分析到部署运维的完整服务', target: '有明确业务痛点，希望一站式解决', color: 'whale-teal' },
  { icon: Puzzle, title: '模块扩展', desc: '在现有系统上增加AI智能体模块', target: '已有IT系统，希望AI赋能', color: 'gold-accent' },
  { icon: MessageSquare, title: '咨询顾问', desc: '提供AI智能体落地规划与方案设计', target: '处于探索阶段，需要专业建议', color: 'sky-blue' },
];

const guarantees = [
  { icon: UserCheck, text: '专属顾问：每个项目配备一名业务顾问 + 一名技术负责人' },
  { icon: CalendarDays, text: '分期交付：按里程碑验收，降低项目风险' },
  { icon: BookOpen, text: '知识转移：交付时提供完整培训，确保您的团队能自主运维' },
  { icon: Headphones, text: '持续支持：上线后提供3个月免费运维期，后续可选维保服务' },
];

const getColor = (color: string) => color === 'whale-teal' ? 'text-whale-teal' : color === 'gold-accent' ? 'text-gold-accent' : 'text-sky-blue';
const getBg = (color: string) => color === 'whale-teal' ? 'bg-whale-teal/10' : color === 'gold-accent' ? 'bg-gold-accent/10' : 'bg-sky-blue/10';
const getBorderHover = (color: string) => color === 'whale-teal' ? 'hover:border-whale-teal/40' : color === 'gold-accent' ? 'hover:border-gold-accent/40' : 'hover:border-sky-blue/40';

export function CooperationSection() {
  return (
    <section id="cooperation-inner" className="relative py-6 md:py-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-dark/30 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {serviceTypes.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`reveal glass-card p-4 text-center group ${getBorderHover(service.color)} transition-colors`} style={{ transitionDelay: `${index * 0.15}s` }}>
                <div className={`w-11 h-11 mx-auto mb-3 rounded-xl ${getBg(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${getColor(service.color)}`} />
                </div>
                <h3 className={`font-heading text-base font-bold ${getColor(service.color)} mb-1.5`}>{service.title}</h3>
                <p className="text-slate-300 text-xs mb-2">{service.desc}</p>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-slate-500 text-xs">适合客户</p>
                  <p className="text-slate-400 text-xs mt-0.5">{service.target}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal">
          <h3 className="font-heading text-lg font-bold text-white mb-3 text-center">服务保障</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-3xl mx-auto">
            {guarantees.map((g, index) => {
              const Icon = g.icon;
              return (
                <div key={index} className="glass-card p-3 flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-whale-teal/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-whale-teal" />
                  </div>
                  <p className="text-slate-300 text-xs">{g.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
