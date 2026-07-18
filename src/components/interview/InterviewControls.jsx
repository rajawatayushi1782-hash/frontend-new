import "./Interview.css";

function InterviewControls({
  loading,
  answer,
  onNext,
  onSkip,
  onEnd,
  questionNumber,
}) {
  return (
    <div className="controls-card">

      <div className="controls-top">

        <h2>
          🎯 Interview Controls
        </h2>

        <span className="question-badge">
          Question {questionNumber}
        </span>

      </div>

      <div className="controls-buttons">

        <button
          className="submit-btn"
          disabled={loading || !answer.trim()}
          onClick={onNext}
        >
          {loading
            ? "AI Thinking..."
            : "✅ Submit Answer"}
        </button>

        <button
          className="skip-btn"
          disabled={loading}
          onClick={onSkip}
        >
          ⏭ Skip Question
        </button>

        <button
          className="end-btn"
          onClick={onEnd}
        >
          🛑 End Interview
        </button>

      </div>

      <div className="controls-info">

        <div className="info-card">
          <span>💡</span>

          <p>
            Give detailed answers for better
            AI feedback.
          </p>
        </div>

        <div className="info-card">
          <span>🎤</span>

          <p>
            You can answer using voice or
            keyboard.
          </p>
        </div>

        <div className="info-card">
          <span>🚀</span>

          <p>
            AI automatically adjusts the
            difficulty.
          </p>
        </div>

      </div>

    </div>
  );
}

export default InterviewControls;