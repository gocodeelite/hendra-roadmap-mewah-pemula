
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Wallet, TrendingUp, Shield } from 'lucide-react';

const BudgetBreakdown = () => {
  const budgetData = [
    { name: 'Software & Tools', value: 800000, color: '#8B5CF6' },
    { name: 'Perangkat Keras', value: 600000, color: '#06B6D4' },
    { name: 'Kursus Online', value: 400000, color: '#10B981' },
    { name: 'Stock Assets', value: 200000, color: '#F59E0B' }
  ];

  const monthlyInvestment = [
    { bulan: 'Bulan 1', software: 300000, hardware: 500000, kursus: 200000 },
    { bulan: 'Bulan 2', software: 200000, hardware: 100000, kursus: 100000 },
    { bulan: 'Bulan 3', software: 150000, hardware: 0, kursus: 100000 },
    { bulan: 'Bulan 4', software: 150000, hardware: 0, kursus: 0 }
  ];

  const totalBudget = budgetData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Wallet className="w-8 h-8 text-purple-600" />
            <span className="text-sm font-medium tracking-wider uppercase text-purple-600">Budget Planning</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Breakdown Investasi Modal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alokasi dana yang optimal untuk memulai perjalanan desain grafis profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Distribusi Budget
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Budget']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {budgetData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Rp {item.value.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Timeline */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Timeline Investasi Bulanan
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyInvestment}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bulan" />
                    <YAxis tickFormatter={(value) => `${value/1000}k`} />
                    <Tooltip 
                      formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, '']}
                    />
                    <Legend />
                    <Bar dataKey="software" stackId="a" fill="#8B5CF6" name="Software" />
                    <Bar dataKey="hardware" stackId="a" fill="#06B6D4" name="Hardware" />
                    <Bar dataKey="kursus" stackId="a" fill="#10B981" name="Kursus" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Budget Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-medium">Total Budget</span>
                </div>
                <p className="text-2xl font-bold">
                  Rp {totalBudget.toLocaleString('id-ID')}
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6" />
                  <span className="font-medium">ROI Estimasi</span>
                </div>
                <p className="text-2xl font-bold">6-12 Bulan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
