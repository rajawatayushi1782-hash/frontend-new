import "../styles/interview.css";

import {
  FaMicrophone,
  FaVideo,
  FaRobot,
  FaChartLine
} from "react-icons/fa";

function InterviewSection() {
  return (
    <section className="interview">

      {/* LEFT SIDE */}

      <div className="interview-left">

        <span className="interview-tag">
          AI Mock Interview
        </span>

        <h2>
          Practice Interviews Like a Real Candidate
        </h2>

        <p>
          Improve your confidence by practicing HR,
          Technical and Behavioral interviews powered
          by Artificial Intelligence. Get instant AI
          feedback on your communication, confidence,
          technical skills and overall performance.
        </p>

        <button className="interview-btn">
          Start Mock Interview
        </button>

      </div>

      {/* RIGHT SIDE */}

      <div className="interview-right">

        <div className="interview-card">

          {/* AI Avatar */}

          <div className="ai-avatar">
            🤖
          </div>

          <h3>AI Interview Assistant</h3>

          <p className="ai-question">
            "Tell me about yourself."
          </p>

          {/* Voice Animation */}

          <div className="voice-wave">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>

          {/* Features */}

          <div className="feature">

            <FaMicrophone />

            <span>Live Voice Interview</span>

          </div>

          <div className="feature">

            <FaVideo />

            <span>Camera Analysis</span>

          </div>

          <div className="feature">

            <FaRobot />

            <span>Instant AI Feedback</span>

          </div>

          <div className="feature">

            <FaChartLine />

            <span>Confidence Analytics</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default InterviewSection;