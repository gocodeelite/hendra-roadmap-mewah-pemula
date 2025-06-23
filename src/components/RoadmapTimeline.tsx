
import React from 'react';
import TimelineStep from './TimelineStep';

const RoadmapTimeline = () => {
  const roadmapSteps = [
    {
      step: 1,
      title: "Pondasi Keuangan: Dana Darurat & Deposito",
      duration: "Bulan 1-2",
      budget: "Rp 500.000",
      description: "Fokus utama di tahap ini adalah memastikan keamanan modal. Anda akan mengalokasikan sebagian dari modal investasi awal ke deposito karena risikonya sangat rendah dan memberikan likuiditas yang baik. Ini adalah langkah awal yang bijak sebelum memasuki instrumen yang lebih berisiko. (Dialokasikan ke deposito sebagai bagian dari portofolio investasi Anda, terpisah dari dana darurat utama yang seharusnya sudah Anda miliki).",
      skills: ["Perencanaan Dana Darurat", "Strategi Deposito", "Manajemen Likuiditas", "Penilaian Risiko Dasar"],
      tools: ["Bank Deposito", "Tabungan High-Yield", "Aplikasi Perbankan", "Kalkulator Bunga"]
    },
    {
      step: 2,
      title: "Campuran Konservatif: Pasar Uang + Pendapatan Tetap",
      duration: "Bulan 3-4",
      budget: "Rp 500.000",
      description: "Mulai diversifikasi portofolio Anda dengan berinvestasi pada reksadana pasar uang dan reksadana pendapatan tetap. Kombinasi ini bertujuan untuk memberikan potensi keuntungan yang lebih tinggi dibandingkan deposito, namun dengan risiko yang masih relatif rendah dan tingkat fleksibilitas yang baik untuk investor pemula.",
      skills: ["Analisis Pendapatan Tetap (dasar)", "Pemahaman Pasar Uang", "Pemilihan Reksa Dana (dasar)", "Keseimbangan Risiko-Return"],
      tools: ["Platform Reksadana (Bibit, Bareksa, Tanamduit)", "Fund Factsheets"]
    },
    {
      step: 3,
      title: "Portofolio Berimbang: Reksa Dana Campuran",
      duration: "Bulan 5-7",
      budget: "Rp 600.000",
      description: "Tingkatkan eksposur Anda ke pasar modal secara tidak langsung melalui reksadana campuran. Reksa dana ini mengalokasikan dananya ke saham, obligasi, dan pasar uang, memberikan potensi pertumbuhan yang lebih besar. Tahap ini akan membantu Anda memahami konsep alokasi aset dan pentingnya diversifikasi lintas kelas aset.",
      skills: ["Alokasi Aset (dasar)", "Analisis Reksa Dana Campuran", "Pemahaman Siklus Pasar (dasar)", "Rebalancing Portofolio (dasar)"],
      tools: ["Aplikasi Pelacak Portofolio", "Alat Alokasi Aset Online", "Riset Pasar", "Kalkulator Rebalancing"]
    },
    {
      step: 4,
      title: "Komponen Pertumbuhan: Saham & Reksa Dana Saham",
      duration: "Bulan 8-10",
      budget: "Rp 400.000",
      description: "Tambahkan elemen pertumbuhan dengan berinvestasi pada reksadana saham (Equity Fund). Jika Anda sudah memiliki pemahaman yang cukup dan toleransi risiko yang lebih tinggi, Anda bisa mulai mempertimbangkan saham individu pilihan. Fokuslah pada saham blue chip atau perusahaan dengan fundamental yang kuat. Pelajari analisis fundamental untuk memaksimalkan potensi keuntungan jangka panjang.",
      skills: ["Analisis Saham Dasar", "Analisis Fundamental (dasar)", "Valuasi Perusahaan (dasar)", "Diversifikasi Sektor (dasar)"],
      tools: ["Platform Broker Saham", "RTI Business", "TradingView", "Laporan Keuangan Perusahaan"]
    },
    {
      step: 5,
      title: "Optimasi Portofolio: Rebalancing & Penyesuaian",
      duration: "Bulan 11-12",
      budget: "Sisa Modal/Investasi Rutin",
      description: "Mengoptimalkan portofolio Anda melalui rebalancing berkala dan fine-tuning alokasi sesuai tujuan investasi dan perubahan kondisi pasar. Tahap ini membantu Anda membangun disiplin investasi jangka panjang dan memahami strategi pengambilan keuntungan atau penyesuaian risiko yang tepat.",
      skills: ["Optimasi Portofolio", "Strategi Rebalancing", "Efisiensi Pajak", "Perencanaan Jangka Panjang"],
      tools: ["Alat Rebalancing Online", "Kalkulator Pajak Investasi", "Analitik Portofolio", "Jurnal Investasi"]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Roadmap Mix & Match Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Strategi hybrid ini memadukan berbagai instrumen investasi untuk menciptakan portofolio yang seimbang, 
            fleksibel, dan dirancang untuk mengoptimalkan risk-adjusted return Anda seiring waktu
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-4xl mx-auto">
            <p className="text-yellow-800 font-medium">
              <strong>Penting Sebelum Berinvestasi:</strong> Pastikan Anda sudah memiliki <strong>dana darurat yang cukup</strong> 
              (disarankan minimal 3-6 bulan pengeluaran wajib) dan telah melunasi <strong>utang konsumtif dengan bunga tinggi</strong> 
              (seperti utang kartu kredit atau pinjaman online). Ini adalah fondasi keuangan yang sangat penting sebelum memulai investasi.
            </p>
          </div>
        </div>

        <div className="relative space-y-16">
          {roadmapSteps.map((step, index) => (
            <TimelineStep
              key={step.step}
              {...step}
              isCompleted={index < 1}
              isActive={index === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
