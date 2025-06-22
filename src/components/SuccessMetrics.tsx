
import React from 'react';
import { Target, TrendingUp, Users, Award, DollarSign, Clock } from 'lucide-react';

const SuccessMetrics = () => {
  const metrics = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Target Portfolio",
      value: "15-20",
      unit: "Proyek",
      description: "Jumlah minimum proyek berkualitas dalam portfolio",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Income Target",
      value: "2-5",
      unit: "Juta/bulan",
      description: "Pendapatan yang realistis dalam 6-12 bulan",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Learning Hours",
      value: "4-6",
      unit: "Jam/hari",
      description: "Waktu belajar konsisten untuk hasil optimal",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Base",
      value: "5-10",
      unit: "Klien tetap",
      description: "Jumlah klien regular dalam 12 bulan",
      color: "from-orange-500 to-red-500"
    }
  ];

  const milestones = [
    {
      month: "Bulan 1-2",
      title: "Foundation Complete",
      achievements: [
        "Menguasai tools dasar Adobe",
        "Memahami design principles",
        "Membuat 3-5 practice projects"
      ]
    },
    {
      month: "Bulan 3-4",
      title: "Skill Development",
      achievements: [
        "Portfolio berisi 8-10 projects",
        "Menguasai typography & color theory",
        "Mendapat first paid project"
      ]
    },
    {
      month: "Bulan 5-6",
      title: "Professional Ready",
      achievements: [
        "Portfolio profesional lengkap",
        "Networking dengan 20+ designer",
        "Income Rp 1-2 juta/bulan"
      ]
    },
    {
      month: "Bulan 7-12",
      title: "Business Growth",
      achievements: [
        "Spesialisasi dalam 1-2 niche",
        "5+ klien regular",
        "Income Rp 3-5 juta/bulan"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Award className="w-8 h-8 text-purple-600" />
            <span className="text-sm font-medium tracking-wider uppercase text-purple-600">Success Metrics</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Target & Milestone Kesuksesan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indikator konkret untuk mengukur progress dan mencapai target karir sebagai desainer grafis profesional
          </p>
        </div>

        {/* Success Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className={`bg-gradient-to-r ${metric.color} rounded-xl p-4 w-fit mb-4`}>
                <div className="text-white">
                  {metric.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">{metric.title}</h3>
              
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-gray-800">{metric.value}</span>
                <span className="text-lg text-gray-600">{metric.unit}</span>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Milestone Timeline */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <span className="font-medium text-purple-600">Progress Timeline</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Milestone Pencapaian</h3>
            <p className="text-gray-600">Timeline realistis untuk mencapai target profesional</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-300 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10">
                  {/* Month Badge */}
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-4 py-2 text-sm font-bold text-center mb-4">
                    {milestone.month}
                  </div>
                  
                  {/* Milestone Content */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
                      {milestone.title}
                    </h4>
                    
                    <ul className="space-y-3">
                      {milestone.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Return on Investment (ROI)</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-2">Initial Investment</h4>
              <p className="text-4xl font-bold text-yellow-300">Rp 2 Juta</p>
              <p className="text-green-100 mt-2">Setup + Learning (4 bulan)</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Monthly Income (Target)</h4>
              <p className="text-4xl font-bold text-yellow-300">Rp 3-5 Juta</p>
              <p className="text-green-100 mt-2">Setelah 6-12 bulan</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">ROI Achievement</h4>
              <p className="text-4xl font-bold text-yellow-300">150-250%</p>
              <p className="text-green-100 mt-2">Dalam 12 bulan pertama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;
