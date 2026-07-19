import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Interview<span>Ace</span>
      </Link>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>

        <ul className="nav-links">
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>

          <li>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-btns">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;