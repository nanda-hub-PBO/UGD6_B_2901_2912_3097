export default function Bottom(){
  return(
    <div className="bottom">
      <div className="card">
        <h3>COMPANY INFO</h3>
        <div className="list">
          <div className="info-row"><span className="label">📅 Tahun Berdiri</span><span className="value">2024</span></div>
          <div className="info-row"><span className="label">🚢 Armada</span><span className="value">100+ kapal</span></div>
          <div className="info-row"><span className="label">🌍 Area Operasional</span><span className="value">Nasional & Internasional</span></div>
          <div className="info-row"><span className="label">📍 Lokasi</span><span className="value">Jakarta, Indonesia</span></div>
        </div>
      </div>
      <div className="card">
        <h3>STRENGTHS</h3>
        <div className="strengths-grid">
          <div className="strength-item"><div className="st-title">Dashboard Terpadu</div><div className="st-desc">Semua informasi dalam satu layar</div></div>
          <div className="strength-item"><div className="st-title">Real-time Update</div><div className="st-desc">Update 30-60 detik</div></div>
          <div className="strength-item"><div className="st-title">Dark Mode Design</div><div className="st-desc">Ramah untuk ruang kontrol gelap</div></div>
          <div className="strength-item"><div className="st-title">Sistem Stabil</div><div className="st-desc">Menjamin uptime hingga 99,9%</div></div>
          <div className="strength-item"><div className="st-title">Visual Indikator</div><div className="st-desc">Warna dan icon yang jelas</div></div>
          <div className="strength-item"><div className="st-title">Multi-Platform</div><div className="st-desc">Dapat digunakan pada tampilan Desktop & Mobile</div></div>
        </div>
      </div>
    </div>
  )
}