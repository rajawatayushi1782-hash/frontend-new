import "./interview.css";

function ProgressBar({
  questionNumber,
  totalQuestions,
}) {
  const progress =
    Math.min(
      (questionNumber / totalQuestions) * 100,
      100
    );

  return (
    <div className="progress-card">

      <div className="progress-top">

        <h2>
          Interview Progress
        </h2>

        <span>
          {questionNumber} / {totalQuestions}
        </span>

      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="progress-bottom">

        <span>
          {Math.round(progress)}% Completed
        </span>

      </div>

    </div>
  );
}

export default ProgressBar;