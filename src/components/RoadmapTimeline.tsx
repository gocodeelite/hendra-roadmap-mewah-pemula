
import React from 'react';
import TimelineStep from './TimelineStep';

const RoadmapTimeline = () => {
  const roadmapSteps = [
    {
      step: 1,
      title: "Foundation: Dana Darurat & Deposito",
      duration: "Bulan 1-2",
      budget: "Rp 500.000",
      description: "Membangun fondasi keuangan dengan dana darurat dan deposito sebagai anchor portfolio. Prioritas utama adalah keamanan dan likuiditas sebelum masuk ke instrumen yang lebih berisiko.",
      skills: ["Emergency Fund Planning", "Deposito Strategy", "Liquidity Management", "Risk Assessment"],
      tools: ["Bank Deposito", "Tabungan High-Yield", "Aplikasi Perbankan", "Kalkulator Bunga"]
    },
    {
      step: 2,
      title: "Conservative Mix: Pasar Uang + Pendapatan Tetap",
      duration: "Bulan 3-4",
      budget: "Rp 500.000",
      description: "Memulai diversifikasi dengan reksadana pasar uang dan pendapatan tetap. Kombinasi ini memberikan return lebih baik dari deposito dengan risiko minimal dan fleksibilitas tinggi.",
      skills: ["Fixed Income Analysis", "Money Market Understanding", "Fund Selection", "Risk-Return Balance"],
      tools: ["Bibit", "Bareksa", "Tanamduit", "Fund Factsheets"]
    },
    {
      step: 3,
      title: "Balanced Portfolio: Reksadana Campuran",
      duration: "Bulan 5-7",
      budget: "Rp 600.000",
      description: "Meningkatkan exposure ke saham melalui reksadana campuran untuk growth potential. Tahap ini mengajarkan konsep asset allocation dan pentingnya diversifikasi lintas kelas aset.",
      skills: ["Asset Allocation", "Balanced Fund Analysis", "Market Cycle Understanding", "Portfolio Rebalancing"],
      tools: ["Portfolio Tracker", "Asset Allocation Tools", "Market Research", "Rebalancing Calculator"]
    },
    {
      step: 4,
      title: "Growth Component: Saham & Equity Fund",
      duration: "Bulan 8-10",
      budget: "Rp 400.000",
      description: "Menambahkan komponen pertumbuhan dengan saham pilihan dan equity fund. Focus pada blue chip dan fundamental analysis untuk memaksimalkan potensi return jangka panjang.",
      skills: ["Stock Analysis", "Fundamental Analysis", "Company Valuation", "Sector Diversification"],
      tools: ["Stockbit", "RTI Business", "TradingView", "Financial Statements"]
    },
    {
      step: 5,
      title: "Optimization: Rebalancing & Fine-tuning",
      duration: "Bulan 11-12",
      budget: "Remaining Budget",
      description: "Mengoptimalkan portofolio melalui rebalancing berkala dan fine-tuning alokasi. Membangun disiplin investasi jangka panjang dan strategi exit yang tepat.",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategi hybrid yang menggabungkan berbagai instrumen investasi untuk menciptakan portofolio yang seimbang, 
            fleksibel, dan mengoptimalkan risk-adjusted return
          </p>
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
