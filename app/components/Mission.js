// components/Mission.js
export default function Mission() {
  const missions = [
    { title: "Digitalization", desc: "Digitalisasi setiap aspek pergerakan kargo laut untuk transparansi total." },
    { title: "Optimization", desc: "Optimalisasi rute navigasi untuk efisiensi bahan bakar dan waktu." },
    { title: "Security", desc: "Membangun pertahanan keamanan data maritim yang tak tertembus." }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>

      <h2 className="text-center font-orbitron text-3xl font-black text-white mb-16 tracking-widest relative z-10">
        OUR <span className="text-[#b44fff] drop-shadow-[0_0_10px_#b44fff]">MISSION</span>_
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {missions.map((item, i) => (
          <div key={i} className="group p-8 bg-[#12121f] border border-purple-900/20 rounded-xl hover:border-[#b44fff]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(180,79,255,0.2)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-black font-orbitron text-purple-900 group-hover:text-[#b44fff] transition-colors duration-500 group-hover:drop-shadow-[0_0_5px_#b44fff]">
                0{i + 1}
              </div>
              <div className="w-full h-[1px] bg-purple-900/30 group-hover:bg-[#b44fff]/30 transition-colors duration-500"></div>
            </div>
            <h4 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#b44fff] transition-colors">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}