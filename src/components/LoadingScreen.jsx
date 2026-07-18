import "../styles/loading.css";
import {
  FaRobot,
  FaCheckCircle
} from "react-icons/fa";

function LoadingScreen() {
  return (
    <div className="loading-container">

      <FaRobot className="robot-icon" />

      <h2>AI is Analyzing Your Resume...</h2>

      <p>
        Please wait while InterviewAce AI
        checks your resume.
      </p>

      <div className="progress-bar">

        <div className="progress-fill"></div>

      </div>

      <div className="loading-steps">

        <div className="step">
          <FaCheckCircle />
          Reading Resume
        </div>

        <div className="step">
          <FaCheckCircle />
          Checking ATS Score
        </div>

        <div className="step">
          <FaCheckCircle />
          Matching Skills
        </div>

        <div className="step">
          <FaCheckCircle />
          Finding Missing Keywords
        </div>

        <div className="step">
          <FaCheckCircle />
          Generating AI Suggestions
        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;