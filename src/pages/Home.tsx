import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { BrandSection } from '@/components/BrandSection';
import { TrendSection } from '@/components/TrendSection';
import { TeamSection } from '@/components/TeamSection';
import { TechSection } from '@/components/TechSection';
import { ProcessSection } from '@/components/ProcessSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ROISection } from '@/components/ROISection';
import { CooperationSection } from '@/components/CooperationSection';
import { ContactSection } from '@/components/ContactSection';
import { Navigation } from '@/components/Navigation';
import { PDFExportButton } from '@/components/PDFExportButton';
import { SectionTitle } from '@/components/SectionTitle';

const sectionIds = ['hero', 'brand', 'trend', 'team', 'tech', 'process', 'solutions', 'roi', 'cooperation', 'contact'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      revealObserver.observe(el);
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} />
      <PDFExportButton />

      <HeroSection />

      <div className="section-divider" />

      <section id="brand">
        <div className="pt-6">
          <SectionTitle number="第一章" title="品牌定位与核心理念" />
        </div>
        <BrandSection />
      </section>

      <div className="section-divider" />

      <section id="trend">
        <div className="pt-6">
          <SectionTitle number="第二章" title="行业趋势与机遇" subtitle="为什么2026是AI智能体落地元年？" />
        </div>
        <TrendSection />
      </section>

      <div className="section-divider" />

      <section id="team">
        <div className="pt-6">
          <SectionTitle number="第三章" title="核心团队" />
        </div>
        <TeamSection />
      </section>

      <div className="section-divider" />

      <section id="tech">
        <div className="pt-6">
          <SectionTitle number="第四章" title="技术架构与核心优势" />
        </div>
        <TechSection />
      </section>

      <div className="section-divider" />

      <section id="process">
        <div className="pt-6">
          <SectionTitle number="第五章" title="服务流程" subtitle="七步定制开发法" />
        </div>
        <ProcessSection />
      </section>

      <div className="section-divider" />

      <section id="solutions">
        <div className="pt-6">
          <SectionTitle number="第六章" title="行业解决方案" subtitle="六大行业，专属定制" />
        </div>
        <SolutionSection />
      </section>

      <div className="section-divider" />

      <section id="roi">
        <div className="pt-6">
          <SectionTitle number="第七章" title="客户价值与投资回报" />
        </div>
        <ROISection />
      </section>

      <div className="section-divider" />

      <section id="cooperation">
        <div className="pt-6">
          <SectionTitle number="第八章" title="合作模式" />
        </div>
        <CooperationSection />
      </section>

      <div className="section-divider" />

      <section id="contact">
        <div className="pt-6">
          <SectionTitle number="第九章" title="联系我们" />
        </div>
        <ContactSection />
      </section>
    </div>
  );
}
