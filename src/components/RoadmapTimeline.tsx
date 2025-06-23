
import React from 'react';
import TimelineStep from './TimelineStep';

const RoadmapTimeline = () => {
  const roadmapSteps = [
    {
      step: 1,
      title: "Foundation: Dana Darurat & Deposito",
      duration: "Bulan 1-2",
      budget: "Rp 500.000",
      description: "Membangun fondasi keuangan dengan dana darurat yang kuat dan deposito sebagai anchor portfolio. Prioritas utama adalah keamanan dan likuiditas sebelum masuk ke instrumen yang lebih berisiko. Deposito bisa menjadi tempat parkir dana yang aman untuk bagian portofolio investasi ini.",
      skills: ["Emergency Fund Planning", "Deposito Strategy", "Liquidity Management", "Basic Risk Assessment"],
      tools: ["Bank Deposito", "Tabungan High-Yield", "Aplikasi Perbankan", "Kalkulator Bunga"]
    },
    {
      step: 2,
      title: "Conservative Mix: Pasar Uang + Pendapatan Tetap",
      duration: "Bulan 3-4",
      budget: "Rp 500.000",
      description: "Memulai diversifikasi dengan reksadana pasar uang dan pendapatan tetap. Kombinasi ini memberikan potensi return lebih baik dari deposito dengan risiko relatif rendah dan fleksibilitas tinggi, cocok untuk pemula.",
      skills: ["Fixed Income Analysis (dasar)", "Money Market Understanding", "Fund Selection (dasar)", "Risk-Return Balance"],
      tools: ["Bibit", "Bareksa", "Tanamduit", "Fund Factsheets"]
    },
    {
      step: 3,
      title: "Balanced Portfolio: Reksadana Campuran",
      duration: "Bulan 5-7",
      budget: "Rp 600.000",
      description: "Meningkatkan exposure ke pasar modal secara tidak langsung melalui reksadana campuran untuk potensi pertumbuhan. Tahap ini mengajarkan konsep asset allocation dan pentingnya diversifikasi lintas kelas aset. Reksadana campuran memiliki alokasi ke saham, obligasi, dan pasar uang.",
      skills: ["Asset Allocation (dasar)", "Balanced Fund Analysis", "Market Cycle Understanding (dasar)", "Portfolio Rebalancing (dasar)"],
      tools: ["Portfolio Tracker", "Asset Allocation Tools", "Market Research", "Rebalancing Calculator"]
    },
    {
      step: 4,
      title: "Growth Component: Saham & Equity Fund",
      duration: "Bulan 8-10",
      budget: "Rp 400.000",
      description: "Menambahkan komponen pertumbuhan dengan reksadana saham (Equity Fund) dan, jika sudah lebih percaya diri, saham pilihan. Fokus pada saham blue chip atau reksadana saham yang terbukti baik fundamentalnya. Mempelajari analisis fundamental sangat disarankan di tahap ini jika ingin membeli saham individual.",
      skills: ["Stock Analysis (dasar)", "Fundamental Analysis (dasar)", "Company Valuation (dasar)", "Sector Diversification (dasar)"],
      tools: ["Stockbit", "RTI Business", "TradingView", "Financial Statements"]
    },
    {
      step: 5,
      title: "Optimization: Rebalancing & Fine-tuning",
      duration: "Bulan 11-12",
      budget: "Sisa Modal/Investasi Rutin",
      description: "Mengoptimalkan portofolio melalui rebalancing berkala dan fine-tuning alokasi. Membangun disiplin investasi jangka panjang dan memahami strategi exit yang tepat.",
      skills: ["Portfolio Optimization", "Rebalancing Strategy", "Tax Efficiency", "Long-term Planning"],
      tools: ["Rebalancing Tools", "Tax Calculator", "Portfolio Analytics", "Investment Journal"]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Roadmap Mix & Match Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Strategi hybrid yang menggabungkan berbagai instrumen investasi untuk menciptakan portofolio yang seimbang, 
            fleksibel, dan mengoptimalkan risk-adjusted return
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-4xl mx-auto">
            <p className="text-yellow-800 font-medium">
              <strong>Penting:</strong> Sebelum memulai investasi, pastikan Anda memiliki <strong>dana darurat yang cukup</strong> 
              (minimal 3-6 bulan pengeluaran) dan telah melunasi <strong>utang konsumtif dengan bunga tinggi</strong>.
            </p>
          </div>
        </div>

        <div className="relative space-y-16">
          {roadmapSteps.map((step, index) => (
            <TimelineStep
              key={step.step}
              {...step}
              isCompleted={index < 1}
              isActive={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
