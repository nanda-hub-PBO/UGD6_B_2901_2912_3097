// components/Hero.js
export default function Hero() {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 border border-purple-900/50 bg-purple-950/20 rounded-full px-4 py-1.5 mb-6 text-[10px] tracking-[0.3em] text-[#b44fff] uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#b44fff] animate-pulse shadow-[0_0_10px_#b44fff]"></span>
            Maritime Intelligence Solutions
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-black font-orbitron leading-[1.1] mb-8 tracking-tighter text-white">
            Navigate <br />
            <span className="text-[#b44fff] drop-shadow-[0_0_20px_rgba(180,79,255,0.7)] italic">The Future</span>
          </h1>
          
          <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-10">
            TESSERA menghadirkan ekosistem manajemen armada laut modern. Memantau posisi realtime, cuaca, dan rute dalam satu dashboard terintegrasi untuk efisiensi maksimal.
          </p>
          
          <div className="flex gap-4">
            <button className="bg-[#b44fff] text-black font-bold px-8 py-3.5 rounded-sm text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(180,79,255,0.5)]">
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Futuristic Terminal Box */}
        <div className="bg-[#12121f]/60 backdrop-blur-sm border border-purple-900/30 p-7 rounded-xl shadow-[0_0_50px_rgba(180,79,255,0.15)] relative group overflow-hidden">
          {/* Terminal Header */}
          <div className="flex gap-2.5 mb-6 border-b border-purple-900/30 pb-4">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/60" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/60" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/60" />
            <span className="ml-auto font-mono text-[10px] text-gray-600 tracking-widest">TESSERA_OS v3.2</span>
          </div>
          
          {/* Terminal Content */}
          <div className="font-mono text-[13px] space-y-3 text-green-400/90 leading-relaxed">
            <p className="text-gray-500">{'>'} Initializing satellite link...</p>
            <p className="text-gray-500">{'>'} Connecting to vessel database...</p>
            <p className="text-white flex items-center gap-2">
              <span className="text-[#b44fff]">$</span> status --active-vessels
            </p>
            <p className="text-[#b44fff] font-bold drop-shadow-[0_0_5px_rgba(180,79,255,0.5)]">
              [SYSTEM] 142 Vessels Online. All systems nominal.
            </p>
            <p className="text-white flex items-center gap-2">
              <span className="text-[#b44fff]">$</span> <span className="animate-pulse">_</span>
            </p>
          </div>
          
          {/* Corner Decor */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#b44fff]/20 group-hover:border-[#b44fff]/50 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  )
}