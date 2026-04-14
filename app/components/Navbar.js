export default function Navbar(){
  return(
    <div className="navbar">
      <div className="logo">
        <img src="/logo.jpeg" alt="logo" className="nav-logo" />
        <div className="logo-text">
          <span>TESSERA</span>
          <span className="logo-sub">MARITIME LOGISTICS SYSTEM</span>
        </div>
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Admin</li>
        <li className="active">Company</li>
      </ul>
      <div className="nav-right">
        <button className="nav-icon">🔔</button>
        <button className="admin-btn">👤 Admin</button>
      </div>
    </div>
  )
}