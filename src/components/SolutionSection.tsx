import {
  ShoppingBag, BookOpen, TrendingUp, MapPin, Briefcase, Building2,
  Play, Package, Users, FileText, Calendar,
  Phone, BarChart3, Search, PenTool, Megaphone, Scale, ClipboardList, Footprints,
  Coins
} from 'lucide-react';

type IconType = typeof Play;

type CaseItem = {
  icon: IconType;
  title: string;
  desc: string;
  color: 'whale-teal' | 'gold-accent' | 'sky-blue' | 'coral-red';
  features?: { icon?: IconType; text: string }[];
  flow?: string[];
  subModules?: { icon: IconType; title: string; desc: string; color: 'whale-teal' | 'gold-accent' | 'sky-blue' | 'coral-red' }[];
  note?: string;
};

type IndustryGroup = {
  icon: IconType;
  title: string;
  tag: string;
  tagColor: 'whale-teal' | 'gold-accent' | 'sky-blue' | 'coral-red';
  color: 'whale-teal' | 'gold-accent' | 'sky-blue' | 'coral-red';
  cases: CaseItem[];
};

const colorTextMap = {
  'whale-teal': 'text-whale-teal',
  'gold-accent': 'text-gold-accent',
  'sky-blue': 'text-sky-blue',
  'coral-red': 'text-coral-red',
};

const colorBgMap = {
  'whale-teal': 'bg-whale-teal/10',
  'gold-accent': 'bg-gold-accent/10',
  'sky-blue': 'bg-sky-blue/10',
  'coral-red': 'bg-coral-red/10',
};

const colorBorderMap = {
  'whale-teal': 'border-whale-teal/30',
  'gold-accent': 'border-gold-accent/30',
  'sky-blue': 'border-sky-blue/30',
  'coral-red': 'border-coral-red/30',
};

const industries: IndustryGroup[] = [
  {
    icon: ShoppingBag,
    title: '跨境电商',
    tag: '热门',
    tagColor: 'whale-teal',
    color: 'whale-teal',
    cases: [
      {
        icon: Play,
        title: 'TikTok内容运营智能体',
        desc: '看到爆款带货视频，一句话让Agent帮你复刻，省时省力还能规避原创风险。',
        color: 'whale-teal',
        flow: ['搜索爆款', '分析套路', '复刻脚本', '合成视频'],
      },
      {
        icon: Package,
        title: '跨境电商上架智能体',
        desc: '把商品图片/视频上传，Agent自动完成多平台、多语言、多地区的上架工作。',
        color: 'gold-accent',
        features: [
          { icon: FileText, text: '智能标题生成' },
          { icon: PenTool, text: '本地化文案' },
          { icon: Search, text: '图片优化处理' },
          { icon: Calendar, text: '库存智能监控' },
        ],
      },
    ],
  },
  {
    icon: BookOpen,
    title: '企业知识库',
    tag: '刚需',
    tagColor: 'sky-blue',
    color: 'sky-blue',
    cases: [
      {
        icon: Users,
        title: '企业助手智能体集群',
        desc: '员工一句话，即刻了解企业所有信息，7x24小时专属服务。接通企业IM（钉钉/企微/飞书）。',
        color: 'sky-blue',
        subModules: [
          { icon: Users, title: 'HR助手', desc: '招聘/考勤/福利', color: 'whale-teal' },
          { icon: BarChart3, title: '财务助手', desc: '报销/预算/税务', color: 'gold-accent' },
          { icon: ClipboardList, title: '行政助手', desc: '办公/会议/后勤', color: 'sky-blue' },
        ],
      },
    ],
  },
  {
    icon: TrendingUp,
    title: '投资助手',
    tag: '专业',
    tagColor: 'gold-accent',
    color: 'gold-accent',
    cases: [
      {
        icon: TrendingUp,
        title: '股票交易行助手',
        desc: '您的专属投资分析师，实时行情、市场分析、投资建议一手掌握。',
        color: 'gold-accent',
        features: [
          { icon: BarChart3, text: '每日大盘实时行情' },
          { icon: FileText, text: '管理关注股票清单' },
          { icon: Calendar, text: '个股行情异动推送' },
          { icon: Phone, text: '行业/个股实时解答' },
          { icon: TrendingUp, text: '专业市场分析报告' },
          { icon: Users, text: '个性化投资建议' },
        ],
        note: '可对接主流券商API、财经数据接口（需客户提供接口权限）',
      },
    ],
  },
  {
    icon: MapPin,
    title: '本地生活电商',
    tag: '增长',
    tagColor: 'coral-red',
    color: 'coral-red',
    cases: [
      {
        icon: Search,
        title: '情报侦探Agent',
        desc: '实时掌握周边行业情报、营销动态、竞品上新，让您快人一步。每日/每周自动生成情报简报推送至企业微信/钉钉。',
        color: 'coral-red',
      },
      {
        icon: Megaphone,
        title: '助农Agent',
        desc: '帮助农产品商家自动创作营销内容并优化投放策略，让好货被看见。',
        color: 'whale-teal',
        subModules: [
          { icon: Megaphone, title: '内容创作Agent', desc: '卖点提炼→脚本→视频→成品', color: 'whale-teal' },
          { icon: BarChart3, title: '投放策略Agent', desc: '数据分析→精准定向→效果追踪', color: 'gold-accent' },
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    title: '商务专用',
    tag: '效率',
    tagColor: 'sky-blue',
    color: 'sky-blue',
    cases: [
      {
        icon: Briefcase,
        title: '商务专用助手',
        desc: '商务人员的专属智能秘书，从方案输出到报价管理全搞定。可对接CRM系统、企业邮箱、日历系统。',
        color: 'sky-blue',
        subModules: [
          { icon: FileText, title: '商务方案生成', desc: '输入需求→专业方案', color: 'sky-blue' },
          { icon: Coins, title: '智能报价系统', desc: '自动生成+多级审批', color: 'gold-accent' },
          { icon: Calendar, title: '日程管理', desc: '会议/待办/拜访规划', color: 'whale-teal' },
          { icon: Phone, title: '客户跟进', desc: '沟通记录+意向分析', color: 'coral-red' },
        ],
      },
    ],
  },
  {
    icon: Building2,
    title: '政企单位',
    tag: '安全',
    tagColor: 'whale-teal',
    color: 'whale-teal',
    cases: [
      {
        icon: Scale,
        title: '政策助手',
        desc: '政策解读、宣传文案、通知发文，一句话搞定，让政务工作更高效。本地化部署，符合等保2.0/3.0要求。',
        color: 'whale-teal',
        features: [
          { icon: FileText, text: '政策解读' },
          { icon: PenTool, text: '宣传文案' },
          { icon: FileText, text: '公文起草' },
          { icon: Search, text: '智能检索' },
        ],
      },
      {
        icon: Footprints,
        title: '街道办助手',
        desc: '基层治理的智能助手，客服接待、矛盾调解、自动化办公、走访辅助全覆盖。支持国产化信创环境部署。',
        color: 'gold-accent',
        features: [
          { icon: Phone, text: '客服Agent' },
          { icon: Users, text: '矛盾调解' },
          { icon: ClipboardList, text: '自动化办公' },
          { icon: Footprints, text: '走访辅助' },
        ],
      },
    ],
  },
];

export function SolutionSection() {
  return (
    <section id="solutions-inner" className="relative py-6 md:py-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-dark/30 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Industry groups - all cases expanded by default */}
        <div className="space-y-5">
          {industries.map((industry, indIndex) => {
            const IndustryIcon = industry.icon;
            return (
              <div key={indIndex} className="reveal" style={{ transitionDelay: `${indIndex * 0.1}s` }}>
                {/* Industry header */}
                <div className={`glass-card p-3 mb-3 flex items-center gap-3 border ${colorBorderMap[industry.color]}`}>
                  <div className={`w-10 h-10 rounded-lg ${colorBgMap[industry.color]} flex items-center justify-center flex-shrink-0`}>
                    <IndustryIcon className={`w-5 h-5 ${colorTextMap[industry.color]}`} />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <h3 className="font-heading text-base font-bold text-white">{industry.title}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${colorBgMap[industry.color]} ${colorTextMap[industry.color]} font-bold`}>
                      {industry.tag}
                    </span>
                    <span className="text-slate-500 text-xs ml-auto">{industry.cases.length} 个方案</span>
                  </div>
                </div>

                {/* Cases grid - all expanded */}
                <div className={`grid gap-3 ${industry.cases.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                  {industry.cases.map((caseItem, caseIndex) => {
                    const CaseIcon = caseItem.icon;
                    return (
                      <div
                        key={caseIndex}
                        className={`glass-card p-4 border ${colorBorderMap[caseItem.color]} hover:scale-[1.01] transition-transform`}
                      >
                        {/* Case header */}
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <div className={`w-9 h-9 rounded-lg ${colorBgMap[caseItem.color]} flex items-center justify-center flex-shrink-0`}>
                            <CaseIcon className={`w-4.5 h-4.5 ${colorTextMap[caseItem.color]}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-heading text-sm font-bold text-white">{caseItem.title}</h4>
                            <p className="text-slate-500 text-[11px]">{industry.title} · 案例{caseIndex + 1}</p>
                          </div>
                        </div>

                        {/* Case description */}
                        <p className="text-slate-300 text-xs leading-relaxed mb-2.5">{caseItem.desc}</p>

                        {/* Flow display */}
                        {caseItem.flow && (
                          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                            {caseItem.flow.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-center gap-1.5">
                                <span className={`px-2 py-0.5 rounded ${colorBgMap[caseItem.color]} ${colorTextMap[caseItem.color]}`}>
                                  {step}
                                </span>
                                {stepIndex < caseItem.flow!.length - 1 && (
                                  <span className="text-slate-600">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Features list */}
                        {caseItem.features && (
                          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                            {caseItem.features.map((feat, featIndex) => {
                              const FeatIcon = feat.icon;
                              return (
                                <div key={featIndex} className="flex items-center gap-1.5 text-slate-300">
                                  {FeatIcon && <FeatIcon className={`w-3 h-3 ${colorTextMap[caseItem.color]}`} />}
                                  <span>{feat.text}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Sub-modules */}
                        {caseItem.subModules && (
                          <div className="grid grid-cols-2 gap-2">
                            {caseItem.subModules.map((sub, subIndex) => {
                              const SubIcon = sub.icon;
                              return (
                                <div key={subIndex} className="p-2.5 rounded-lg bg-ocean-dark/50 flex items-center gap-2">
                                  <SubIcon className={`w-4 h-4 ${colorTextMap[sub.color]} flex-shrink-0`} />
                                  <div className="min-w-0">
                                    <p className="text-xs text-white font-bold truncate">{sub.title}</p>
                                    <p className="text-[10px] text-slate-500 truncate">{sub.desc}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Note */}
                        {caseItem.note && (
                          <p className="text-slate-500 text-[10px] mt-2 italic">{caseItem.note}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

