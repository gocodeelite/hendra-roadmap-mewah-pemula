
import React from 'react';
import { Target, TrendingUp, Users, Award, DollarSign, Clock } from 'lucide-react';

const SuccessMetrics = () => {
  const metrics = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Target Portfolio",
      value: "5-7",
      unit: "Instrumen",
      description: "Diversifikasi optimal untuk modal 2 juta",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Target Return",
      value: "15-20",
      unit: "% per tahun",
      description: "Return realistis untuk investor pemula",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Waktu Investasi",
      value: "3-5",
      unit: "Tahun minimum",
      description: "Jangka waktu untuk hasil optimal",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Learning Time",
      value: "2-3",
      unit: "Jam/minggu",
      description: "Waktu belajar konsisten untuk sukses",
      color: "from-orange-500 to-red-500"
    }
  ];

  const milestones = [
    {
      month: "Bulan 1-3",
      title: "Foundation Building",
      achievements: [
        "Dana darurat Rp 500k terbentuk",
        "Memahami dasar-dasar investasi",
        "Mulai investasi reksadana pasar uang"
      ]
    },
    {
      month: "Bulan 4-6", 
      title: "Portfolio Growth",
      achievements: [
        "Portfolio mencapai Rp 1 juta",
        "Diversifikasi ke reksadana campuran",
        "Return 8-12% dari investasi awal"
      ]
    },
    {
      month: "Bulan 7-9",
      title: "Risk Taking",
      achievements: [
        "Mulai investasi saham blue chip",
        "Portfolio value Rp 1.5 juta",
        "Memahami analisis fundamental"
      ]
    },
    {
      month: "Bulan 10-12",
      title: "Optimization",
      achievements: [
        "Portfolio terdiversifikasi penuh",
        "Target return 15-20% tercapai",
        "Strategi jangka panjang matang"
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
            Target & Milestone Investasi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indikator kesuksesan dan milestone yang realistis untuk investasi modal 2 juta rupiah
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
            <p className="text-gray-600">Timeline realistis untuk mencapai target investasi</p>
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

        {/* ROI Projection */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Proyeksi Pertumbuhan Modal</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-2">Modal Awal</h4>
              <p className="text-4xl font-bold text-yellow-300">Rp 2 Juta</p>
              <p className="text-green-100 mt-2">Starting capital</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Tahun ke-3</h4>
              <p className="text-4xl font-bold text-yellow-300">Rp 3.5 Juta</p>
              <p className="text-green-100 mt-2">Target konservatif (15% p.a)</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Tahun ke-5</h4>
              <p className="text-4xl font-bold text-yellow-300">Rp 5.2 Juta</p>
              <p className="text-green-100 mt-2">Dengan compound growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;
