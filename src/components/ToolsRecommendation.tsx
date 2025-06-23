
import React from 'react';
import { Smartphone, TrendingUp, BarChart3, Calculator, Star, ExternalLink, Shuffle, Shield } from 'lucide-react';

const ToolsRecommendation = () => {
  const categories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Platform Multi-Asset",
      color: "from-blue-500 to-cyan-500",
      tools: [
        { name: "Bibit", price: "Gratis", rating: 5, description: "One-stop untuk reksadana & diversifikasi" },
        { name: "Bareksa", price: "Gratis", rating: 5, description: "Platform lengkap semua instrumen" },
        { name: "Ajaib", price: "Gratis", rating: 4, description: "Reksadana + saham dalam satu app" },
        { name: "Pluang", price: "Gratis", rating: 4, description: "Mikro investing & portfolio building" }
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Portfolio Analysis",
      color: "from-purple-500 to-pink-500",
      tools: [
        { name: "Portfolio Visualizer", price: "Gratis", rating: 5, description: "Backtest & optimization tools" },
        { name: "Morningstar", price: "Gratis - Premium", rating: 5, description: "Fund analysis & rating" },
        { name: "Yahoo Finance", price: "Gratis", rating: 4, description: "Market data & portfolio tracking" },
        { name: "Google Sheets Templates", price: "Gratis", rating: 4, description: "Custom portfolio tracker" }
      ]
    },
    {
      icon: <Shuffle className="w-8 h-8" />,
      title: "Rebalancing Tools",
      color: "from-green-500 to-teal-500",
      tools: [
        { name: "Personal Capital", price: "Gratis", rating: 5, description: "Automated rebalancing insights" },
        { name: "Sharesight", price: "$19/bulan", rating: 4, description: "Portfolio performance tracking" },
        { name: "Tiller + Templates", price: "$79/tahun", rating: 4, description: "Spreadsheet-based rebalancing" },
        { name: "M1 Finance Tools", price: "Gratis", rating: 4, description: "Automated portfolio management" }
      ]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Risk & Calculator",
      color: "from-orange-500 to-red-500",
      tools: [
        { name: "Asset Allocation Calculator", price: "Gratis", rating: 5, description: "Optimal mix calculator" },
        { name: "Rebalancing Calculator", price: "Gratis", rating: 5, description: "When & how to rebalance" },
        { name: "Risk Tolerance Quiz", price: "Gratis", rating: 4, description: "Assess your risk profile" },
        { name: "Compound Growth Calculator", price: "Gratis", rating: 4, description: "Long-term projections" }
      ]
    }
  ];

  const rebalancingStrategy = [
    {
      trigger: "Time-based",
      frequency: "Quarterly",
      description: "Rebalance setiap 3 bulan",
      allocation: "25% effort"
    },
    {
      trigger: "Threshold-based", 
      frequency: "5% deviation",
      description: "Rebalance saat alokasi menyimpang >5%",
      allocation: "50% effort"
    },
    {
      trigger: "Combination",
      frequency: "Flexible",
      description: "Gabungan time + threshold approach",
      allocation: "25% effort"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tools untuk Mix & Match Strategy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Platform dan tools terbaik untuk mengelola portofolio hybrid, 
            rebalancing, dan optimasi risk-return
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 text-center`}>
                <div className="flex justify-center mb-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Tools List */}
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white">{tool.name}</h4>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      {renderStars(tool.rating)}
                      <span className="text-sm font-medium text-green-400">{tool.price}</span>
                    </div>
                    
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rebalancing Strategy Guide */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Shield className="w-6 h-6" />
            Pentingnya Rebalancing Portofolio
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {rebalancingStrategy.map((strategy, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h4 className="font-bold text-lg mb-2 text-yellow-300">{strategy.trigger}</h4>
                <p className="text-2xl font-bold text-white mb-2">{strategy.frequency}</p>
                <p className="text-sm text-blue-100 mb-3">{strategy.description}</p>
                <div className="bg-white/20 rounded-lg p-2">
                  <span className="text-xs font-medium">Effort: {strategy.allocation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mix & Match Formula */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Formula Mix & Match Hendra</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Pondasi (25%)</h4>
              <p className="text-3xl font-bold text-green-400">Rp 500k</p>
              <p className="text-sm mt-2">Deposito (bagian investasi)</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Konservatif (25%)</h4>
              <p className="text-3xl font-bold text-blue-400">Rp 500k</p>
              <p className="text-sm mt-2">Pasar Uang + Pendapatan Tetap</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Berimbang (30%)</h4>
              <p className="text-3xl font-bold text-yellow-400">Rp 600k</p>
              <p className="text-sm mt-2">Reksadana Campuran</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Agresif (20%)</h4>
              <p className="text-3xl font-bold text-red-400">Rp 400k</p>
              <p className="text-sm mt-2">Saham + Equity Fund</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsRecommendation;
