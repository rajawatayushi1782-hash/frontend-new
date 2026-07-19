import "../styles/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Background Blur Circles */}
      <div className="circle one"></div>
      <div className="circle two"></div>
      <div className="circle three"></div>

      <div className="hero-content">

        <h1>
          Land Your Dream Job <span>With AI</span>
        </h1>

        <p>
          Experience realistic AI-powered mock interviews, analyze your resume,
          improve communication skills, and receive detailed AI feedback to boost
          your confidence.
        </p>

        <div className="hero-buttons">

          <Link to="/login" className="start-btn">
            Start Interview
          </Link>

          <a href="#features" className="learn-btn">
            Learn More
          </a>

        </div>

        {/* Stats Cards */}
        <div className="hero-stats">

          <div className="stat-card">
            <h2>10K+</h2>
            <p>Mock Interviews</p>
          </div>

          <div className="stat-card">
            <h2>95%</h2>
            <p>Success Rate</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>AI Support</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;