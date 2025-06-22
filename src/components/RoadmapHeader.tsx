
import React from 'react';
import { Star, Award, TrendingUp, Shuffle } from 'lucide-react';

const RoadmapHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Star className="w-8 h-8 text-yellow-400" />
          <span className="text-sm font-medium tracking-wider uppercase">Premium Roadmap</span>
          <Star className="w-8 h-8 text-yellow-400" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-pink-100 bg-clip-text text-transparent">
          Roadmap Investasi Pemula
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-200">
          Mix & Match Strategy
        </h2>
        
        <p className="text-xl md:text-2xl mb-4 text-blue-100">
          Memulai Perjalanan Finansial dengan Modal 2 Juta
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-medium">Modal: Rp 2.000.000</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="font-medium">Target: 12-18% per tahun</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            <Shuffle className="w-5 h-5 text-purple-400" />
            <span className="font-medium">Portofolio Hybrid</span>
          </div>
        </div>
        
        <p className="text-lg text-blue-200 max-w-3xl mx-auto">
          Dipersembahkan oleh <span className="font-bold text-white">Hendra</span> - 
          Strategi Mix & Match untuk membangun portofolio yang seimbang dan menguntungkan
        </p>
      </div>
    </div>
  );
};

export default RoadmapHeader;
