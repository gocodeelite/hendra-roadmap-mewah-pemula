
import React from 'react';
import { Smartphone, TrendingUp, BarChart3, Calculator, Star, ExternalLink } from 'lucide-react';

const ToolsRecommendation = () => {
  const categories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Platform Investasi",
      color: "from-blue-500 to-cyan-500",
      tools: [
        { name: "Bibit", price: "Gratis", rating: 5, description: "Reksadana terbaik untuk pemula" },
        { name: "Bareksa", price: "Gratis", rating: 5, description: "Platform reksadana terlengkap" },
        { name: "Stockbit", price: "Gratis", rating: 4, description: "Social trading & analisis saham" },
        { name: "IPOT", price: "Gratis", rating: 4, description: "Trading saham dan reksadana" }
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analisis & Research",
      color: "from-purple-500 to-pink-500",
      tools: [
        { name: "RTI Business", price: "Gratis", rating: 5, description: "Data fundamental perusahaan" },
        { name: "TradingView", price: "Gratis - $15/bulan", rating: 5, description: "Chart analysis professional" },
        { name: "Yahoo Finance", price: "Gratis", rating: 4, description: "Berita dan data finansial" },
        { name: "Investing.com", price: "Gratis", rating: 4, description: "Global market data" }
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Portfolio Tracking",
      color: "from-green-500 to-teal-500",
      tools: [
        { name: "Personal Capital", price: "Gratis", rating: 5, description: "Portfolio management tools" },
        { name: "Tiller", price: "$79/tahun", rating: 4, description: "Spreadsheet-based tracking" },
        { name: "YNAB", price: "$14/bulan", rating: 4, description: "Budgeting dan investment tracking" },
        { name: "Mint", price: "Gratis", rating: 4, description: "Financial planning tools" }
      ]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Kalkulator & Tools",
      color: "from-orange-500 to-red-500",
      tools: [
        { name: "Compound Calculator", price: "Gratis", rating: 5, description: "Hitung bunga majemuk" },
        { name: "Portfolio Visualizer", price: "Gratis", rating: 5, description: "Backtest portfolio strategy" },
        { name: "Risk Calculator", price: "Gratis", rating: 4, description: "Assess investment risk" },
        { name: "Retirement Calculator", price: "Gratis", rating: 4, description: "Plan long-term goals" }
      ]
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
            Platform & Tools Investasi Terbaik
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kumpulan platform dan aplikasi terbaik yang telah terbukti membantu investor sukses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Strategy Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Strategi Investasi Berdasarkan Modal</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Conservative (60%)</h4>
              <p className="text-3xl font-bold text-green-400">Rp 1.2jt</p>
              <p className="text-sm mt-2">Dana Darurat + Pasar Uang</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Moderate (30%)</h4>
              <p className="text-3xl font-bold text-yellow-400">Rp 600k</p>
              <p className="text-sm mt-2">Reksadana Campuran</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Aggressive (10%)</h4>
              <p className="text-3xl font-bold text-red-400">Rp 200k</p>
              <p className="text-sm mt-2">Saham & Growth Stocks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsRecommendation;
