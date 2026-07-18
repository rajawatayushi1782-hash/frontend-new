import "../styles/report.css";
import {
  FaCheckCircle,
  FaDownload,
  FaRedoAlt,
  FaChartLine,
  FaLightbulb,
  FaExclamationTriangle
} from "react-icons/fa";

function ResumeReport() {
  return (
    <div className="report-container">

      <div className="report-header">

        <h2>
          <FaChartLine />
          AI Resume Report
        </h2>

        <span className="success-badge">
          Analysis Complete
        </span>

      </div>

      {/* ATS Score */}

      <div className="score-card">

        <div className="score-circle-large">
          92%
        </div>

        <div>

          <h3>ATS Score</h3>

          <p>
            Excellent! Your resume is highly ATS compatible.
          </p>

        </div>

      </div>

      {/* Stats */}

      <div className="stats-grid">

        <div className="stat-card">
          <h4>Grammar</h4>
          <span>96%</span>
        </div>

        <div className="stat-card">
          <h4>Formatting</h4>
          <span>94%</span>
        </div>

        <div className="stat-card">
          <h4>Keyword Match</h4>
          <span>89%</span>
        </div>

        <div className="stat-card">
          <h4>Skills Match</h4>
          <span>91%</span>
        </div>

      </div>

      {/* Strengths */}

      <div className="report-section">

        <h3>

          <FaCheckCircle />

          Strengths

        </h3>

        <ul>

          <li>ATS Friendly Resume</li>

          <li>Well Structured Sections</li>

          <li>Strong Technical Skills</li>

          <li>Good Readability</li>

        </ul>

      </div>

      {/* Missing Skills */}

      <div className="report-section warning">

        <h3>

          <FaExclamationTriangle />

          Missing Skills

        </h3>

        <ul>

          <li>Docker</li>

          <li>AWS</li>

          <li>Redux Toolkit</li>

          <li>REST API Projects</li>

        </ul>

      </div>

      {/* Suggestions */}

      <div className="report-section tips">

        <h3>

          <FaLightbulb />

          AI Suggestions

        </h3>

        <ul>

          <li>Add GitHub Profile Link</li>

          <li>Improve Professional Summary</li>

          <li>Mention Quantifiable Achievements</li>

          <li>Add One More Full Stack Project</li>

        </ul>

      </div>

      {/* Buttons */}

      <div className="report-buttons">

        <button className="download-btn">

          <FaDownload />

          Download Report

        </button>

        <button className="reanalyze-btn">

          <FaRedoAlt />

          Analyze Again

        </button>

      </div>

    </div>
  );
}

export default ResumeReport;