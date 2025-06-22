
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Wallet, TrendingUp, Shield } from 'lucide-react';

const BudgetBreakdown = () => {
  const budgetData = [
    { name: 'Dana Darurat', value: 500000, color: '#10B981' },
    { name: 'Reksadana Pasar Uang', value: 400000, color: '#06B6D4' },
    { name: 'Reksadana Campuran', value: 600000, color: '#8B5CF6' },
    { name: 'Saham Blue Chip', value: 300000, color: '#F59E0B' },
    { name: 'Diversifikasi', value: 200000, color: '#EF4444' }
  ];

  const monthlyInvestment = [
    { bulan: 'Bulan 1-3', darurat: 500000, reksadana: 400000, saham: 0, diversifikasi: 0 },
    { bulan: 'Bulan 4-6', darurat: 0, reksadana: 600000, saham: 0, diversifikasi: 0 },
    { bulan: 'Bulan 7-9', darurat: 0, reksadana: 0, saham: 300000, diversifikasi: 0 },
    { bulan: 'Bulan 10-12', darurat: 0, reksadana: 0, saham: 0, diversifikasi: 200000 }
  ];

  const totalBudget = budgetData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Wallet className="w-8 h-8 text-purple-600" />
            <span className="text-sm font-medium tracking-wider uppercase text-purple-600">Alokasi Modal</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Breakdown Investasi Modal 2 Juta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pembagian modal yang optimal untuk memaksimalkan return dengan meminimalkan risiko
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Alokasi Dana
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
                    formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Alokasi']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend */}
            <div className="grid grid-cols-1 gap-3 mt-6">
              {budgetData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600">
                    Rp {item.value.toLocaleString('id-ID')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Timeline */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Timeline Investasi Bertahap
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
                    <Bar dataKey="darurat" stackId="a" fill="#10B981" name="Dana Darurat" />
                    <Bar dataKey="reksadana" stackId="a" fill="#06B6D4" name="Reksadana" />
                    <Bar dataKey="saham" stackId="a" fill="#8B5CF6" name="Saham" />
                    <Bar dataKey="diversifikasi" stackId="a" fill="#EF4444" name="Diversifikasi" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Investment Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-medium">Total Modal</span>
                </div>
                <p className="text-2xl font-bold">
                  Rp {totalBudget.toLocaleString('id-ID')}
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6" />
                  <span className="font-medium">Target Return</span>
                </div>
                <p className="text-2xl font-bold">15-20% p.a</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
