import React from 'react';

export default function TesseraPage() {
  return (
    <div style={{ backgroundColor: '#08050d', minHeight: '100vh', color: '#f0eaff', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* BACKGROUND GRID & GLOW (Ini yang bikin UI "Hidup.") */}
      <div style={{ 
        position: 'absolute', inset: 0, 
        backgroundImage: 'linear-gradient(to right, rgba(180, 79, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(180, 79, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px', zIndex: 0 
      }}></div>
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(180, 79, 255, 0.15)', filter: 'blur(100px)', zIndex: 0 }}></div>

      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(8, 5, 13, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(180, 79, 255, 0.2)', zIndex: 100 }}>
        <div style={{ fontSize: '24px', fontWeight: '900', color: '#b44fff', letterSpacing: '3px', textShadow: '0 0 15px #b44fff' }}>
          TESSERA<span style={{ color: '#fff' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: '#9e8fba' }}>
          <span style={{ cursor: 'pointer' }}>Home</span>
          <span style={{ cursor: 'pointer' }}>Services</span>
          <span style={{ cursor: 'pointer' }}>About</span>
          <span style={{ border: '1px solid #b44fff', padding: '5px 15px', color: '#b44fff', borderRadius: '4px', marginTop: '-5px', boxShadow: '0 0 10px rgba(180, 79, 255, 0.3)' }}>Login</span>
        </div>
      </nav>

      <main style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '150px 20px' }}>
        
        {/* HERO SECTION */}
        <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '100px' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '5px 15px', border: '1px solid rgba(180, 79, 255, 0.3)', borderRadius: '20px', fontSize: '10px', color: '#b44fff', letterSpacing: '2px', marginBottom: '20px', background: 'rgba(180, 79, 255, 0.1)' }}>
              ● MARITIME INTELLIGENCE
            </div>
            <h1 style={{ fontSize: '65px', fontWeight: '900', lineHeight: '1', marginBottom: '25px', color: '#fff' }}>
              Navigate <br /> <span style={{ color: '#b44fff', textShadow: '0 0 30px rgba(180, 79, 255, 0.6)', fontStyle: 'italic' }}>The Future</span>
            </h1>
            <p style={{ color: '#9e8fba', lineHeight: '1.6', fontSize: '16px', maxWidth: '450px' }}>
              TESSERA menyediakan dashboard tracking kapal dengan standar militer untuk navigasi aman di kondisi cahaya redup.
            </p>
          </div>

          {/* TERMINAL UI */}
          <div style={{ background: '#12121f', border: '1px solid rgba(180, 79, 255, 0.3)', borderRadius: '12px', padding: '25px', boxShadow: '0 0 40px rgba(180, 79, 255, 0.15)' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '13px', color: '#27c93f' }}>
              <p style={{ color: '#9e8fba' }}>// Connecting to Sat-07...</p>
              <p style={{ marginTop: '10px' }}>{'>'} Status: <span style={{ color: '#b44fff' }}>Active</span></p>
              <p>{'>'} Vessels: 142 Tracked</p>
              <p>{'>'} Weather: Clear - Sea State 2</p>
              <p style={{ marginTop: '10px', borderLeft: '2px solid #b44fff', paddingLeft: '10px', color: '#fff' }}>System Ready_</p>
            </div>
          </div>
        </section>

        {/* MISSION SECTION (Cards) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ background: '#0f0f1a', border: '1px solid rgba(180, 79, 255, 0.1)', padding: '30px', borderRadius: '15px', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 0, left: '20%', width: '40%', height: '1px', background: '#b44fff', boxShadow: '0 0 10px #b44fff' }}></div>
               <h3 style={{ color: '#b44fff', fontSize: '24px', fontWeight: '900', marginBottom: '15px' }}>0{i}</h3>
               <p style={{ color: '#9e8fba', fontSize: '14px' }}>Optimalisasi navigasi laut dengan teknologi sensor tercanggih untuk armada TESSERA.</p>
            </div>
          ))}
        </div>

      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(180, 79, 255, 0.1)', padding: '50px', textAlign: 'center', marginTop: '100px' }}>
         <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#b44fff', marginBottom: '10px' }}>TESSERA</div>
         <p style={{ fontSize: '10px', color: '#555', letterSpacing: '3px' }}>© 2026 PT TESSERA NUSANTARA</p>
      </footer>
    </div>
  );
}