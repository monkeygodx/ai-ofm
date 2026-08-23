export default function Nav() {
  return (
    <nav>
      <div className="nav-in">
        <a href="#" className="nav-logo">
          <div className="logo-mark">V</div>
          VAULT
        </a>
        <div className="nav-links">
          <a href="#curriculum" className="nav-link">Curriculum</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#results" className="nav-link">Results</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>
        <div className="nav-actions">
          <button className="btn-ghost">Sign in</button>
          <a href="#pricing" className="btn-nav-cta">Get access</a>
        </div>
      </div>
    </nav>
  )
}
