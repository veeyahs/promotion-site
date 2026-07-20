import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact-inner" className="relative py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="reveal mb-8">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">
            立即开启您的<span className="teal-text">AI智能体</span>之旅
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            第一步总是最简单的 —— 告诉我们您的业务痛点，我们来评估AI智能体是否能帮您解决。
          </p>
        </div>

        {/* Contact cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-xl mx-auto">
          <a href="tel:1859422334" className="glass-card p-5 flex items-center gap-4 hover:border-whale-teal/40 transition-colors group">
            <div className="w-11 h-11 rounded-xl bg-whale-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-whale-teal/20 transition-colors">
              <Phone className="w-5 h-5 text-whale-teal" />
            </div>
            <div className="text-left">
              <p className="text-slate-500 text-xs mb-0.5">电话</p>
              <p className="text-white text-lg font-mono font-bold">1859422334</p>
            </div>
          </a>
          <a href="https://weixin://dl/chat?1859422334" className="glass-card p-5 flex items-center gap-4 hover:border-gold-accent/40 transition-colors group">
            <div className="w-11 h-11 rounded-xl bg-gold-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-accent/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-gold-accent" />
            </div>
            <div className="text-left">
              <p className="text-slate-500 text-xs mb-0.5">微信</p>
              <p className="text-white text-lg font-mono font-bold">1859422334</p>
            </div>
          </a>
        </div>

        {/* CTA Button */}
        <div className="reveal">
          <a
            href="tel:1859422334"
            className="inline-flex items-center gap-3 px-8 py-3 bg-whale-teal text-ocean-deep font-bold rounded-full hover:bg-whale-teal-light transition-all duration-300 hover:scale-105 shadow-lg shadow-whale-teal/30 text-base group"
          >
            立即咨询
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Brand footer */}
        <div className="reveal mt-12">
          <div className="section-divider mb-6" />
          <p className="font-heading text-xl font-bold teal-text mb-1">山海鲸 · ONENESS</p>
          <p className="text-slate-500 text-sm">让AI成为您的专属数字员工</p>
          <p className="text-slate-600 text-xs mt-3">© 2026 山海鲸. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
