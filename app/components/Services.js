// components/Services.js
export default function Services() {
  const services = [
    { title: "Real-time Tracking", desc: "Pantau posisi armada presisi 24/7 via satelit." },
    { title: "Weather Analytics", desc: "Prediksi cuaca & gelombang untuk keamanan pelayaran." },
    { title: "Fleet Management", desc: "Optimalisasi operasional armada dalam satu dashboard." },
    { title: "Cargo Monitoring", desc: "Lacak status dan kondisi kargo secara *end-to-end*." }
  ];

  return (
    <section className="py-20 bg-[#0f0f1a] rounded-3xl px-10 py-12 border border-purple-900/20 shadow-[0_0_60px_-10px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-orbitron text-2xl font-black text-white tracking-widest">
          CORE_SOLUTIONS<span className="animate-pulse text-[#b44fff]">_</span>
        </h2>
        <button className="text-[10px] text-[#b44fff] font-bold uppercase tracking-[0.3em] border-b border-[#b44fff]/30 pb-1 hover:border-[#b44fff] transition-all">
          View All
        </button>
      </div>
      
      <div className="space-y-2">
        {services.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-6 border border-transparent rounded-lg hover:border-purple-900/50 hover:bg-[#b44fff]/5 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-6">
              <span className="text-xs font-mono text-gray-600 group-hover:text-[#b44fff] transition-colors">0{i+1}</span>
              <div>
                <h4 className="font-bold text-gray-100 group-hover:text-white transition-colors text-base tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 font-light tracking-wide">{item.desc}</p>
              </div>
            </div>
            <div className="text-gray-700 group-hover:text-[#b44fff] transition-all duration-300 group-hover:translate-x-1 text-xl">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}