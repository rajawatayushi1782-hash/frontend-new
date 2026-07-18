import "../styles/features.css";

function Features() {
  return (
    <section className="features" id="features">
      <h2>Why Choose InterviewAce?</h2>

      <div className="feature-container">

        <div className="card">
          <h3>🤖 AI Interview</h3>
          <p>
            Practice unlimited HR and Technical interviews with AI-powered
            questions and instant feedback.
          </p>
        </div>

        <div className="card">
          <h3>📄 Resume Analyzer</h3>
          <p>
            Upload your resume and receive ATS score, skill suggestions,
            and improvement tips.
          </p>
        </div>

        <div className="card">
          <h3>📊 Performance Analytics</h3>
          <p>
            Track your interview history, strengths, weaknesses,
            and overall progress.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;