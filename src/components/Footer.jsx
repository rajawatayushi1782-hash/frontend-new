import "../styles/footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>
            Interview<span>Ace</span>
          </h2>

          <p>
            AI-powered Resume Analyzer & Mock Interview Platform
            built to help students crack their dream jobs.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>

          <a href="#">Features</a>

          <a href="#">Resume Analyzer</a>

          <a href="#">Mock Interview</a>

        </div>

        <div className="footer-links">

          <h3>Resources</h3>

          <a href="#">Dashboard</a>

          <a href="#">FAQ</a>

          <a href="#">Contact</a>

          <a href="#">Privacy Policy</a>

        </div>

        <div className="footer-social">

          <h3>Connect</h3>

          <div className="social-icons">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 InterviewAce AI. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;