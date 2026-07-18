import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Background Blur Circles */}
      <div className="circle one"></div>
      <div className="circle two"></div>
      <div className="circle three"></div>

      <div className="hero-content">

        <h1>
          Crack Your Dream Job <span>With AI</span>
        </h1>

        <p>
          Practice HR & Technical Interviews, Analyze Your Resume,
          Improve Communication Skills and Get Instant AI Feedback.
        </p>

        <div className="hero-buttons">
          <button className="start-btn">
            Start Interview
          </button>

          <button className="learn-btn">
            Learn More
          </button>
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