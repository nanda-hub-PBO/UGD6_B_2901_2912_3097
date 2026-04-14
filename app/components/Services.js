export default function Services(){
  return(
    <div className="services">
      <h3>OUR SERVICES</h3>
      <div className="items">
        <div className="service">
          <span className="service-icon">📦</span>
          <h4>Fleet Monitoring</h4>
          <p>Pelacakan dan pemantauan status kapal secara real-time.</p>
        </div>
        <div className="service">
          <span className="service-icon">📍</span>
          <h4>Route Tracking</h4>
          <p>Perencanaan dan optimasi rute tingkat lanjut.</p>
        </div>
        <div className="service">
          <span className="service-icon">🌤️</span>
          <h4>Weather Monitoring</h4>
          <p>Informasi cuaca terkini dan peringatan badai.</p>
        </div>
        <div className="service">
          <span className="service-icon">🔔</span>
          <h4>Alert System</h4>
          <p>Pemberitahuan penting dan peringatan darurat.</p>
        </div>
      </div>
    </div>
  )
}