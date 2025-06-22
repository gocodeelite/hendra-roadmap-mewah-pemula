
import React from 'react';
import TimelineStep from './TimelineStep';

const RoadmapTimeline = () => {
  const roadmapSteps = [
    {
      step: 1,
      title: "Dana Darurat & Persiapan",
      duration: "Bulan 1",
      budget: "Rp 500.000",
      description: "Membangun fondasi keuangan yang kuat dengan dana darurat dan mempersiapkan mental investasi. Langkah penting sebelum memulai investasi jangka panjang.",
      skills: ["Financial Planning", "Emergency Fund", "Risk Assessment", "Basic Investment Knowledge"],
      tools: ["Tabungan Bank", "Aplikasi Finansial", "Kalkulator Investasi", "Buku Edukasi"]
    },
    {
      step: 2,
      title: "Reksadana Pasar Uang",
      duration: "Bulan 2-3",
      budget: "Rp 400.000",
      description: "Memulai dengan instrumen investasi yang paling aman dan liquid. Cocok untuk pemula yang ingin belajar sambil mendapat return yang lebih baik dari tabungan.",
      skills: ["Reksadana Basics", "Risk Management", "Platform Trading", "Market Analysis"],
      tools: ["Bareksa", "Bibit", "Tanamduit", "Ajaib"]
    },
    {
      step: 3,
      title: "Reksadana Campuran",
      duration: "Bulan 4-6",
      budget: "Rp 600.000",
      description: "Meningkatkan exposure ke saham melalui reksadana campuran untuk potensi return yang lebih tinggi dengan risiko yang masih terkendali.",
      skills: ["Asset Allocation", "Diversification", "Market Timing", "Performance Analysis"],
      tools: ["Portfolio Tracker", "Investment Apps", "Market Research", "Fund Analysis"]
    },
    {
      step: 4,
      title: "Saham Blue Chip",
      duration: "Bulan 7-9",
      budget: "Rp 300.000",
      description: "Mulai investasi langsung di saham perusahaan besar dan stabil. Belajar analisis fundamental dan teknikal untuk memilih saham yang tepat.",
      skills: ["Stock Analysis", "Fundamental Analysis", "Technical Analysis", "Portfolio Management"],
      tools: ["Stockbit", "RTI Business", "IPOT", "Trading Platform"]
    },
    {
      step: 5,
      title: "Diversifikasi & Optimasi",
      duration: "Bulan 10-12",
      budget: "Rp 200.000",
      description: "Mengoptimalkan portfolio dengan diversifikasi ke berbagai instrumen dan sektor. Focus pada rebalancing dan strategi jangka panjang.",
      skills: ["Portfolio Optimization", "Rebalancing", "Tax Planning", "Long-term Strategy"],
      tools: ["Portfolio Management", "Tax Calculator", "Investment Tracker", "Financial Advisor"]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Roadmap Investasi Bertahap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategi investasi sistematis dari pemula hingga investor yang berpengalaman dengan alokasi dana yang optimal
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
