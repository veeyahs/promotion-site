import { useState } from 'react';
import { FileDown, Loader2 } from 'lucide-react';

export function PDFExportButton() {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      // Dynamic import to avoid SSR issues
      const html2pdf = (await import('html2pdf.js')).default;

      const element = document.getElementById('root');
      if (!element) return;

      // Prepare element for PDF: force all reveal animations visible
      const reveals = element.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      reveals.forEach((el) => el.classList.add('visible'));

      const opt = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: '山海鲸_AI智能体定制服务_宣传手册.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#0A1628',
          logging: false,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait' as const,
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error('PDF export failed:', err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={exporting}
      className="no-print fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 bg-whale-teal/90 hover:bg-whale-teal text-ocean-deep font-bold rounded-full shadow-lg shadow-whale-teal/20 transition-all duration-300 hover:scale-105 hover:shadow-whale-teal/40 backdrop-blur-sm group disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {exporting ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <FileDown className="w-5 h-5 group-hover:animate-bounce" />
      )}
      <span className="text-sm font-body">{exporting ? '导出中...' : '导出PDF'}</span>
    </button>
  );
}
