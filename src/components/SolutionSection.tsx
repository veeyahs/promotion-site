import {
  ShoppingBag, BookOpen, TrendingUp, MapPin, Briefcase, Building2,
  Play, Package, Users, FileText, Calendar,
  Phone, BarChart3, Search, PenTool, Megaphone, Scale, ClipboardList, Footprints,
  Coins
} from 'lucide-react';

const solutions = [
  {
    icon: ShoppingBag,
    title: '跨境电商',
    tag: '热门',
    tagColor: 'bg-whale-teal',
    color: 'whale-teal',
  },
  {
    icon: BookOpen,
    title: '企业知识库',
    tag: '刚需',
    tagColor: 'bg-sky-blue',
    color: 'sky-blue',
  },
  {
    icon: TrendingUp,
    title: '投资助手',
    tag: '专业',
    tagColor: 'bg-gold-accent',
    color: 'gold-accent',
  },
  {
    icon: MapPin,
    title: '本地生活电商',
    tag: '增长',
    tagColor: 'bg-coral-red',
    color: 'coral-red',
  },
  {
    icon: Briefcase,
    title: '商务专用助手',
    tag: '效率',
    tagColor: 'bg-sky-blue',
    color: 'sky-blue',
  },
  {
    icon: Building2,
    title: '政企单位',
    tag: '安全',
    tagColor: 'bg-whale-teal',
    color: 'whale-teal',
  },
];

export function SolutionSection() {
  return (
    <section id="solutions-inner" className="relative py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-dark/30 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Solution overview cards */}
        <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            const colorText = s.color === 'whale-teal' ? 'text-whale-teal' : s.color === 'gold-accent' ? 'text-gold-accent' : s.color === 'coral-red' ? 'text-coral-red' : 'text-sky-blue';
            const colorBg = s.color === 'whale-teal' ? 'bg-whale-teal/10' : s.color === 'gold-accent' ? 'bg-gold-accent/10' : s.color === 'coral-red' ? 'bg-coral-red/10' : 'bg-sky-blue/10';
            return (
              <div key={i} className="reveal glass-card p-4 flex items-center gap-3 group" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={`w-10 h-10 rounded-lg ${colorBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${colorText}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-sm font-bold text-white">{s.title}</h3>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${s.tagColor} text-white`}>{s.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Case 1: TikTok */}
        <div className="reveal glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-whale-teal/10 flex items-center justify-center">
              <Play className="w-5 h-5 text-whale-teal" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">TikTok内容运营智能体</h3>
              <p className="text-slate-500 text-xs">跨境电商 · 案例1</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">看到爆款带货视频，一句话让Agent帮你复刻，省时省力还能规避原创风险。</p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-whale-teal/10 text-whale-teal">搜索爆款</span>
            <span className="text-slate-600">→</span>
            <span className="px-2 py-1 rounded bg-whale-teal/10 text-whale-teal">分析套路</span>
            <span className="text-slate-600">→</span>
            <span className="px-2 py-1 rounded bg-whale-teal/10 text-whale-teal">复刻脚本</span>
            <span className="text-slate-600">→</span>
            <span className="px-2 py-1 rounded bg-whale-teal/10 text-whale-teal">合成视频</span>
          </div>
        </div>

        {/* Case 2: E-commerce listing */}
        <div className="reveal glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gold-accent/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-gold-accent" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">跨境电商上架智能体</h3>
              <p className="text-slate-500 text-xs">跨境电商 · 案例2</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">把商品图片/视频上传，Agent自动完成多平台、多语言、多地区的上架工作。</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1 text-slate-300"><FileText className="w-3 h-3 text-gold-accent" />智能标题生成</div>
            <div className="flex items-center gap-1 text-slate-300"><PenTool className="w-3 h-3 text-gold-accent" />本地化文案</div>
            <div className="flex items-center gap-1 text-slate-300"><Search className="w-3 h-3 text-gold-accent" />图片优化处理</div>
            <div className="flex items-center gap-1 text-slate-300"><Calendar className="w-3 h-3 text-gold-accent" />库存智能监控</div>
          </div>
        </div>

        {/* Case 3: Knowledge Base */}
        <div className="reveal glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-sky-blue/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-sky-blue" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">企业助手智能体集群</h3>
              <p className="text-slate-500 text-xs">企业知识库</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">员工一句话，即刻了解企业所有信息，7x24小时专属服务。接通企业IM（钉钉/企微/飞书）</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 rounded-lg bg-ocean-dark/50">
              <Users className="w-5 h-5 text-whale-teal mx-auto mb-1" />
              <p className="text-xs text-white font-bold">HR助手</p>
              <p className="text-[10px] text-slate-500">招聘/考勤/福利</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-ocean-dark/50">
              <BarChart3 className="w-5 h-5 text-gold-accent mx-auto mb-1" />
              <p className="text-xs text-white font-bold">财务助手</p>
              <p className="text-[10px] text-slate-500">报销/预算/税务</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-ocean-dark/50">
              <ClipboardList className="w-5 h-5 text-sky-blue mx-auto mb-1" />
              <p className="text-xs text-white font-bold">行政助手</p>
              <p className="text-[10px] text-slate-500">办公/会议/后勤</p>
            </div>
          </div>
        </div>

        {/* Case 4: Investment */}
        <div className="reveal glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gold-accent/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-gold-accent" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">股票交易行助手</h3>
              <p className="text-slate-500 text-xs">投资助手</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">您的专属投资分析师，实时行情、市场分析、投资建议一手掌握。</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300"><BarChart3 className="w-3.5 h-3.5 text-gold-accent" />每日大盘实时行情</div>
            <div className="flex items-center gap-2 text-slate-300"><FileText className="w-3.5 h-3.5 text-gold-accent" />管理关注股票清单</div>
            <div className="flex items-center gap-2 text-slate-300"><Calendar className="w-3.5 h-3.5 text-gold-accent" />个股行情异动推送</div>
            <div className="flex items-center gap-2 text-slate-300"><Phone className="w-3.5 h-3.5 text-gold-accent" />行业/个股实时解答</div>
            <div className="flex items-center gap-2 text-slate-300"><TrendingUp className="w-3.5 h-3.5 text-gold-accent" />专业市场分析报告</div>
            <div className="flex items-center gap-2 text-slate-300"><Users className="w-3.5 h-3.5 text-gold-accent" />个性化投资建议</div>
          </div>
          <p className="text-slate-500 text-[10px] mt-3">可对接主流券商API、财经数据接口（需客户提供接口权限）</p>
        </div>

        {/* Case 5: Local Life - Intelligence Agent */}
        <div className="reveal glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-coral-red/10 flex items-center justify-center">
              <Search className="w-5 h-5 text-coral-red" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">情报侦探Agent</h3>
              <p className="text-slate-500 text-xs">本地生活电商 · 案例1</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm">实时掌握周边行业情报、营销动态、竞品上新，让您快人一步。每日/每周自动生成情报简报推送至企业微信/钉钉。</p>
        </div>

        {/* Case 6: Local Life - Agriculture Agent */}
        <div className="reveal glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-whale-teal/10 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-whale-teal" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">助农Agent（内容创作+投放策略）</h3>
              <p className="text-slate-500 text-xs">本地生活电商 · 案例2</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">帮助农产品商家自动创作营销内容并优化投放策略，让好货被看见。</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-ocean-dark/50">
              <p className="text-whale-teal font-bold text-xs mb-1">内容创作Agent</p>
              <p className="text-slate-400 text-[11px]">卖点提炼→脚本→视频→成品</p>
            </div>
            <div className="p-3 rounded-lg bg-ocean-dark/50">
              <p className="text-gold-accent font-bold text-xs mb-1">投放策略Agent</p>
              <p className="text-slate-400 text-[11px]">数据分析→精准定向→效果追踪</p>
            </div>
          </div>
        </div>

        {/* Case 7: Business Assistant */}
        <div className="reveal glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-sky-blue/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-sky-blue" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">商务专用助手</h3>
              <p className="text-slate-500 text-xs">商务专用</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">商务人员的专属智能秘书，从方案输出到报价管理全搞定。可对接CRM系统、企业邮箱、日历系统。</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-ocean-dark/50 flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-blue" />
              <div>
                <p className="text-xs text-white font-bold">商务方案生成</p>
                <p className="text-[10px] text-slate-500">输入需求→专业方案</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-ocean-dark/50 flex items-center gap-2">
              <Coins className="w-4 h-4 text-gold-accent" />
              <div>
                <p className="text-xs text-white font-bold">智能报价系统</p>
                <p className="text-[10px] text-slate-500">自动生成+多级审批</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-ocean-dark/50 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-whale-teal" />
              <div>
                <p className="text-xs text-white font-bold">日程管理</p>
                <p className="text-[10px] text-slate-500">会议/待办/拜访规划</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-ocean-dark/50 flex items-center gap-2">
              <Phone className="w-4 h-4 text-coral-red" />
              <div>
                <p className="text-xs text-white font-bold">客户跟进</p>
                <p className="text-[10px] text-slate-500">沟通记录+意向分析</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case 8: Policy Assistant */}
        <div className="reveal glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-whale-teal/10 flex items-center justify-center">
              <Scale className="w-5 h-5 text-whale-teal" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">政策助手</h3>
              <p className="text-slate-500 text-xs">政企单位 · 案例1</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">政策解读、宣传文案、通知发文，一句话搞定，让政务工作更高效。本地化部署，符合等保2.0/3.0要求。</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-whale-teal/10 text-whale-teal">政策解读</span>
            <span className="px-2 py-1 rounded bg-whale-teal/10 text-whale-teal">宣传文案</span>
            <span className="px-2 py-1 rounded bg-whale-teal/10 text-whale-teal">公文起草</span>
            <span className="px-2 py-1 rounded bg-whale-teal/10 text-whale-teal">智能检索</span>
          </div>
        </div>

        {/* Case 9: Street Office Assistant */}
        <div className="reveal glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gold-accent/10 flex items-center justify-center">
              <Footprints className="w-5 h-5 text-gold-accent" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">街道办助手</h3>
              <p className="text-slate-500 text-xs">政企单位 · 案例2</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-3">基层治理的智能助手，客服接待、矛盾调解、自动化办公、走访辅助全覆盖。支持国产化信创环境部署。</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-gold-accent/10 text-gold-accent">客服Agent</span>
            <span className="px-2 py-1 rounded bg-gold-accent/10 text-gold-accent">矛盾调解</span>
            <span className="px-2 py-1 rounded bg-gold-accent/10 text-gold-accent">自动化办公</span>
            <span className="px-2 py-1 rounded bg-gold-accent/10 text-gold-accent">走访辅助</span>
          </div>
        </div>
      </div>
    </section>
  );
}
