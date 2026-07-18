import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Interview<span>Ace</span>
      </Link>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-btns">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="signup-btn">
            Sign Up
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;