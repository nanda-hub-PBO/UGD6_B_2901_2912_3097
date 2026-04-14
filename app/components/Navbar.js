// components/Navbar.js
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#08050d]/80 backdrop-blur-lg border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo dengan Efek Neon Glow */}
        <div className="font-orbitron text-2xl font-black text-[#b44fff] tracking-widest drop-shadow-[0_0_15px_rgba(180,79,255,1)]">
          TESSERA<span className="text-white">.</span>
        </div>
        
        {/* Menu Navigasi */}
        <ul className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <li className="hover:text-[#b44fff] hover:drop-shadow-[0_0_5px_rgba(180,79,255,0.5)] cursor-pointer transition-all duration-300">
            Home
          </li>
          <li className="hover:text-[#b44fff] hover:drop-shadow-[0_0_5px_rgba(180,79,255,0.5)] cursor-pointer transition-all duration-300">
            Services
          </li>
          <li className="hover:text-[#b44fff] hover:drop-shadow-[0_0_5px_rgba(180,79,255,0.5)] cursor-pointer transition-all duration-300">
            About
          </li>
          <li className="group">
            <button className="border-2 border-[#b44fff] px-5 py-2.5 rounded-sm text-[#b44fff] font-bold text-[10px] tracking-[0.3em] uppercase group-hover:bg-[#b44fff] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(180,79,255,0.3)] group-hover:shadow-[0_0_25px_rgba(180,79,255,0.6)]">
              Dashboard
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}