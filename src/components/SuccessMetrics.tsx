
import React from 'react';
import { Target, TrendingUp, Users, Award, DollarSign, Clock, BarChart3, Shuffle } from 'lucide-react';

const SuccessMetrics = () => {
  const metrics = [
    {
      icon: <Shuffle className="w-8 h-8" />,
      title: "Diversifikasi Optimal",
      value: "5-6",
      unit: "Instrumen",
      description: "Jenis instrumen yang optimal untuk modal Rp 2 juta",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Target Potensi",
      value: "8-15",
      unit: "% per tahun",
      description: "Potensi keuntungan, bukan jaminan",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Rebalancing",
      value: "3-4",
      unit: "Kali/tahun",
      description: "Frekuensi optimal menjaga alokasi",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Risk Level",
      value: "Moderat",
      unit: "Berimbang",
      description: "Nyaman dan sesuai untuk pemula",
      color: "from-orange-500 to-red-500"
    }
  ];

  const milestones = [
    {
      month: "Bulan 1-3",
      title: "Membangun Pondasi",
      achievements: [
        "Dana darurat sudah mapan dan terpisah",
        "Rp 500k dialokasikan ke deposito investasi awal",
        "Memahami konsep dasar risk-return trade-off",
        "Portofolio awal dengan instrumen konservatif terbentuk"
      ]
    },
    {
      month: "Bulan 4-6", 
      title: "Fase Diversifikasi",
      achievements: [
        "Reksa dana pasar uang dan pendapatan tetap sudah aktif",
        "Nilai portofolio mencapai sekitar Rp 1.2 juta*",
        "Mulai merasakan manfaat diversifikasi",
        "Pemahaman instrumen investasi meningkat"
      ]
    },
    {
      month: "Bulan 7-9",
      title: "Integrasi Pertumbuhan",
      achievements: [
        "Reksa dana campuran sudah terintegrasi penuh",
        "Nilai portofolio mencapai sekitar Rp 1.6 juta*",
        "Pemahaman tentang dinamika alokasi aset meningkat",
        "Toleransi risiko semakin matang"
      ]
    },
    {
      month: "Bulan 10-12",
      title: "Optimasi Portofolio",
      achievements: [
        "Portofolio hybrid sudah terbentuk dan dioptimalkan",
        "Target potensi keuntungan tahunan mulai terlihat",
        "Menguasai strategi rebalancing dasar",
        "Siap untuk perjalanan investasi jangka panjang"
      ]
    }
  ];

  const longTermProjections = [
    {
      year: "Tahun 1",
      conservative: "Rp 2.16 juta",
      moderate: "Rp 2.24 juta", 
      aggressive: "Rp 2.30 juta",
      scenario: "Contoh return (8-15%)"
    },
    {
      year: "Tahun 3",
      conservative: "Rp 2.52 juta",
      moderate: "Rp 2.81 juta",
      aggressive: "Rp 3.04 juta", 
      scenario: "Kumulatif (8-15% p.a.)"
    },
    {
      year: "Tahun 5",
      conservative: "Rp 2.94 juta",
      moderate: "Rp 3.52 juta",
      aggressive: "Rp 4.02 juta",
      scenario: "Kumulatif (8-15% p.a.)"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Award className="w-8 h-8 text-purple-600" />
            <span className="text-sm font-medium tracking-wider uppercase text-purple-600">Indikator Keberhasilan</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Target & KPI Realistis untuk Investor Pemula
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indikator kesuksesan dan milestone yang terukur untuk strategi Mix & Match 
            dengan modal Rp 2 juta rupiah
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
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <span className="font-medium text-purple-600">Linimasa Progres</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Milestone Mix & Match</h3>
            <p className="text-gray-600">Timeline realistis untuk pembelajaran dan pertumbuhan portofolio</p>
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

        {/* Long-term Projections */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4 text-center">Proyeksi Jangka Panjang Portofolio Mix & Match</h3>
          <p className="text-center text-green-100 mb-8">
            <strong>Penting:</strong> Proyeksi ini HANYA ILUSTRASI dan tidak menjamin hasil investasi di masa depan. 
            Kinerja investasi riil dapat bervariasi secara signifikan.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {longTermProjections.map((projection, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-4 text-center text-yellow-300">
                  {projection.year}
                </h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-200">Konservatif (8%):</span>
                    <span className="font-bold">{projection.conservative}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Moderat (12%):</span>
                    <span className="font-bold">{projection.moderate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-200">Agresif (15%):</span>
                    <span className="font-bold">{projection.aggressive}</span>
                  </div>
                </div>
                
                <p className="text-center text-sm mt-4 text-gray-200">
                  {projection.scenario}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg mb-4">
              <span className="font-bold">Kunci Sukses Mix & Match:</span> Konsistensi Berinvestasi + Disiplin Rebalancing + Komitmen Jangka Panjang
            </p>
            <p className="text-green-200">
              "Dengan strategi hybrid yang tepat dan konsisten, modal Rp 2 juta dapat menjadi langkah awal yang kuat untuk membangun kekayaan Anda." - Hendra
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-4xl mx-auto rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>*Catatan:</strong> Nilai portofolio yang disebutkan tergantung kinerja pasar dan bersifat ilustratif. 
              Investasi selalu mengandung risiko dan hasil tidak dijamin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;
