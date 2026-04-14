// components/Bottom.js
export default function Bottom() {
  return (
    <footer className="pt-24 pb-12 border-t border-purple-900/20 text-center relative overflow-hidden">
       {/* Decorative Glow */}
       <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#b44fff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Logo Neon */}
        <div className="font-orbitron text-3xl font-black text-[#b44fff] mb-6 tracking-widest drop-shadow-[0_0_10px_#b44fff]">
          TESSERA<span className="text-white">.</span>
        </div>
        
        {/* Copyright */}
        <p className="text-gray-600 text-[10px] tracking-[0.4em] uppercase mb-8 font-semibold">
          © 2026 TESSERA Nusantara. All Rights Reserved.
        </p>
        
        {/* Links */}
        <div className="flex justify-center gap-8 text-gray-400 text-xs font-medium tracking-wide">
          <span className="hover:text-[#b44fff] cursor-pointer transition-colors duration-300">Privacy Policy</span>
          <span className="hover:text-[#b44fff] cursor-pointer transition-colors duration-300">Terms of Service</span>
          <span className="hover:text-[#b44fff] cursor-pointer transition-colors duration-300">Contact Us</span>
        </div>
      </div>
    </footer>
  )
}