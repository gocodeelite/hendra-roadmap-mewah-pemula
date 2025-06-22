
import React from 'react';
import { Monitor, Smartphone, Cloud, Zap, Star, ExternalLink } from 'lucide-react';

const ToolsRecommendation = () => {
  const categories = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Software Design",
      color: "from-blue-500 to-cyan-500",
      tools: [
        { name: "Adobe Creative Suite", price: "Rp 280k/bulan", rating: 5, description: "Industry standard untuk professional" },
        { name: "Affinity Designer", price: "Rp 800k sekali bayar", rating: 4, description: "Alternatif terjangkau Adobe" },
        { name: "Canva Pro", price: "Rp 150k/bulan", rating: 4, description: "Perfect untuk pemula dan social media" },
        { name: "Figma", price: "Gratis - Rp 180k/bulan", rating: 5, description: "UI/UX design dan collaboration" }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Stock & Assets",
      color: "from-purple-500 to-pink-500",
      tools: [
        { name: "Shutterstock", price: "Rp 400k/bulan", rating: 5, description: "Premium stock photos & vectors" },
        { name: "Unsplash", price: "Gratis", rating: 4, description: "High-quality free photos" },
        { name: "Freepik", price: "Rp 120k/bulan", rating: 4, description: "Vectors, icons, dan templates" },
        { name: "Adobe Stock", price: "Rp 300k/bulan", rating: 5, description: "Terintegrasi dengan Adobe CC" }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Tools",
      color: "from-green-500 to-teal-500",
      tools: [
        { name: "Adobe Creative Mobile", price: "Rp 150k/bulan", rating: 4, description: "Design on-the-go" },
        { name: "Procreate", price: "Rp 150k sekali bayar", rating: 5, description: "Digital illustration (iPad)" },
        { name: "Canva Mobile", price: "Gratis - Rp 150k/bulan", rating: 4, description: "Quick design mobile" },
        { name: "Over", price: "Rp 120k/bulan", rating: 4, description: "Mobile design & templates" }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Productivity",
      color: "from-orange-500 to-red-500",
      tools: [
        { name: "Notion", price: "Gratis - Rp 100k/bulan", rating: 5, description: "Project management & notes" },
        { name: "Trello", price: "Gratis - Rp 80k/bulan", rating: 4, description: "Task management" },
        { name: "Dropbox", price: "Rp 200k/bulan", rating: 4, description: "File storage & sharing" },
        { name: "Time Doctor", price: "Rp 100k/bulan", rating: 4, description: "Time tracking untuk freelancer" }
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
            Rekomendasi Tools & Software
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pilihan tools terbaik yang telah terbukti digunakan oleh designer professional di seluruh dunia
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

        {/* Budget Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Estimasi Budget Software Bulanan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Paket Pemula</h4>
              <p className="text-3xl font-bold text-yellow-400">Rp 300k</p>
              <p className="text-sm mt-2">Canva Pro + Freepik + Notion</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Paket Menengah</h4>
              <p className="text-3xl font-bold text-yellow-400">Rp 600k</p>
              <p className="text-sm mt-2">Adobe CC + Stock + Productivity</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Paket Professional</h4>
              <p className="text-3xl font-bold text-yellow-400">Rp 1.2jt</p>
              <p className="text-sm mt-2">Full Adobe Suite + Premium Assets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsRecommendation;
