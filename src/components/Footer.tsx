import React from 'react';
import { TrendingUp, DollarSign, Briefcase, Instagram, Twitter, Linkedin, Mail, Star } from 'lucide-react'; // <-- Tambahkan Star di sini!

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Hendra Capital Insights</h3>
                <p className="text-purple-200">Panduan Investasi untuk Pertumbuhan Kekayaan</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Panduan komprehensif dan strategi teruji untuk membangun portofolio investasi yang solid.
              Dari dasar hingga strategi lanjutan untuk mencapai tujuan finansial Anda.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-300">Dipercaya oleh 1000+ investor cerdas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Akses Cepat</h4>
            <ul className="space-y-3">
              {[
                "Dasar-dasar Investasi",
                "Analisis Pasar", 
                "Strategi Portofolio",
                "Manajemen Risiko",
                "Peluang Keuntungan"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6">Terhubung dengan Kami</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">info@hendracapital.com</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, color: "hover:bg-pink-600" },
                { icon: <Twitter className="w-5 h-5" />, color: "hover:bg-blue-500" },
                { icon: <Linkedin className="w-5 h-5" />, color: "hover:bg-blue-700" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-gray-800 p-3 rounded-lg transition-colors ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10Jt+", label: "Modal Awal Disarankan", desc: "Mulai investasi dengan potensi maksimal" },
              { number: "6-12", label: "Bulan Mencapai Kemandirian Finansial", desc: "Estimasi waktu dengan strategi yang tepat" },
              { number: "10-20%", label: "Potensi Keuntungan Tahunan", desc: "Target pengembalian investasi realistis" },
              { number: "24/7", label: "Dukungan & Analisis Pasar", desc: "Akses materi dan insight kapan saja" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>Dibangun dengan</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>oleh Hendra | Ahli Strategi Investasi</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 Hendra Capital Insights. Semua Hak Dilindungi.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
