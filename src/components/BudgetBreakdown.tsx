
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Wallet, TrendingUp, Shield, Shuffle } from 'lucide-react';

const BudgetBreakdown = () => {
  const hybridPortfolio = [
    { name: 'Deposito (Pondasi)', value: 500000, color: '#10B981', risk: 'Sangat Rendah', percentage: '25%' },
    { name: 'Pasar Uang', value: 300000, color: '#06B6D4', risk: 'Rendah', percentage: '15%' },
    { name: 'Pendapatan Tetap', value: 200000, color: '#8B5CF6', risk: 'Rendah-Sedang', percentage: '10%' },
    { name: 'Reksadana Campuran', value: 600000, color: '#F59E0B', risk: 'Sedang', percentage: '30%' },
    { name: 'Saham/Equity Fund', value: 400000, color: '#EF4444', risk: 'Sedang-Tinggi', percentage: '20%' }
  ];

  const rebalancingSchedule = [
    { periode: 'Q1', conservative: 800000, moderate: 600000, aggressive: 400000, target: 'Membangun Pondasi' },
    { periode: 'Q2', conservative: 700000, moderate: 700000, aggressive: 400000, target: 'Diversifikasi' },
    { periode: 'Q3', conservative: 600000, moderate: 800000, aggressive: 400000, target: 'Integrasi Pertumbuhan' },
    { periode: 'Q4', conservative: 500000, moderate: 900000, aggressive: 400000, target: 'Optimasi' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Shuffle className="w-8 h-8 text-purple-600" />
            <span className="text-sm font-medium tracking-wider uppercase text-purple-600">Mix & Match Strategy</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contoh Alokasi Awal Portofolio Hybrid dengan Modal Rp 2 Juta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Ini adalah contoh pembagian modal awal ke berbagai instrumen investasi. 
            Alokasi ini dapat Anda sesuaikan sesuai dengan profil risiko, tujuan investasi, dan pemahaman Anda yang terus berkembang
          </p>
          <p className="text-sm text-gray-500 italic">
            *Proporsi dapat disesuaikan seiring bertambahnya modal dan perubahan profil risiko
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Hybrid Portfolio Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Alokasi Portofolio Hybrid
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={hybridPortfolio}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {hybridPortfolio.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Alokasi']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend with Risk Level */}
            <div className="grid grid-cols-1 gap-3 mt-6">
              {hybridPortfolio.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div>
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <p className="text-xs text-gray-600">Risiko: {item.risk} | {item.percentage}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-600">
                    Rp {item.value.toLocaleString('id-ID')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Rebalancing Strategy */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Pentingnya Rebalancing Portofolio
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rebalancingSchedule}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="periode" />
                    <YAxis tickFormatter={(value) => `${value/1000}k`} />
                    <Tooltip 
                      formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, '']}
                    />
                    <Legend />
                    <Bar dataKey="conservative" stackId="a" fill="#10B981" name="Konservatif" />
                    <Bar dataKey="moderate" stackId="a" fill="#8B5CF6" name="Moderat" />
                    <Bar dataKey="aggressive" stackId="a" fill="#EF4444" name="Agresif" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Risk Management Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6" />
                  <span className="font-medium">Risk Level</span>
                </div>
                <p className="text-2xl font-bold">Moderat</p>
                <p className="text-sm opacity-90">Berimbang</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-medium">Target Potensi</span>
                </div>
                <p className="text-2xl font-bold">8-15%*</p>
                <p className="text-sm opacity-90">Per tahun</p>
              </div>
            </div>

            {/* Diversification Benefits */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Manfaat Diversifikasi
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Mengurangi volatilitas portofolio secara keseluruhan</li>
                <li>• Perlindungan terhadap risiko spesifik instrumen</li>
                <li>• Fleksibilitas rebalancing sesuai kondisi pasar</li>
                <li>• Optimasi risk-adjusted return untuk pemula</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
