import { Award, Target, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: '吴阳阳',
    title: 'CEO',
    icon: Award,
    education: '中南财经政法大学 会计学学士',
    achievement: '累计主管融资规模逾20亿元，服务对象覆盖高净值个人、企业客户、政府平台及金融机构',
    value: '深度理解客户的决策逻辑、财富焦虑与传承需求，确保AI智能体方案真正解决商业痛点',
    color: 'whale-teal' as const,
  },
  {
    name: '朱元国',
    title: 'COO',
    icon: Target,
    education: '华中科技大学电气工程学士，北京大学汇丰商学院EMBA硕士',
    achievement: '国家认证项目经理，高级能源管理师，持有6项专利（含1项发明专利）',
    value: '确保每个项目按时、按质、按预算交付',
    color: 'gold-accent' as const,
  },
  {
    name: '甘冰春',
    title: 'CTO',
    icon: Lightbulb,
    education: '东华理工大学 软件工程学士',
    achievement: '十余年头部互联网研发与团队管理经验，资深软件工程师、认证敏捷教练',
    value: '将前沿AI技术转化为可落地的商业解决方案',
    color: 'sky-blue' as const,
  },
];

const colorMap = {
  'whale-teal': { bg: 'bg-whale-teal/10', text: 'text-whale-teal', ring: 'ring-whale-teal/20' },
  'gold-accent': { bg: 'bg-gold-accent/10', text: 'text-gold-accent', ring: 'ring-gold-accent/20' },
  'sky-blue': { bg: 'bg-sky-blue/10', text: 'text-sky-blue', ring: 'ring-sky-blue/20' },
};

export function TeamSection() {
  return (
    <section id="team-inner" className="relative py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => {
            const colors = colorMap[member.color];
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className="reveal glass-card p-6 text-center group"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${colors.bg} ring-2 ${colors.ring} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-0.5">{member.name}</h3>
                <p className={`${colors.text} font-bold text-xs tracking-wider mb-4`}>{member.title}</p>
                <div className="space-y-3 text-left">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">学历背景</p>
                    <p className="text-sm text-slate-300">{member.education}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">核心成就</p>
                    <p className="text-sm text-slate-300">{member.achievement}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">独特价值</p>
                    <p className={`text-sm ${colors.text} font-medium`}>{member.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-8 glass-card p-4 md:p-5 text-center border-gold-accent/20">
          <p className="text-base text-white">
            <span className="text-whale-teal font-bold">金融洞察</span>
            <span className="text-slate-500 mx-2">+</span>
            <span className="text-gold-accent font-bold">工程管理</span>
            <span className="text-slate-500 mx-2">+</span>
            <span className="text-sky-blue font-bold">技术落地</span>
            <span className="text-slate-500 mx-2">=</span>
            <span className="gold-text font-bold">真正懂业务的AI智能体服务商</span>
          </p>
        </div>
      </div>
    </section>
  );
}
