import "./interview.css";

function InterviewHeader({
  role,
  level,
  company,
  experience,
  type,
  language,
}) {
  return (
    <div className="interview-header">

      <div className="header-left">

        <h1>🤖 InterviewAce AI</h1>

        <p>
          AI Powered Mock Interview Platform
        </p>

        <div className="live-indicator">

          <span className="live-dot"></span>

          LIVE INTERVIEW

        </div>

      </div>

      <div className="header-right">

        <div className="header-chip">
          💼 {role || "Software Engineer"}
        </div>

        <div className="header-chip">
          🎯 {level || "Intermediate"}
        </div>

        <div className="header-chip">
          👨‍💻 {experience || "0-2 Years"}
        </div>

        <div className="header-chip">
          📄 {type || "Technical"}
        </div>

        <div className="header-chip">
          🌍 {language || "English"}
        </div>

        {company && (
          <div className="header-chip">
            🏢 {company}
          </div>
        )}

      </div>

    </div>
  );
}

export default InterviewHeader;