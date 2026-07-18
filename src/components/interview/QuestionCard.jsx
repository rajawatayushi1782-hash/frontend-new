import "./interview.css";

function QuestionCard({
  question,
  questionNumber,
}) {
  return (
    <div className="question-card">

      <div className="question-top">

        <h2>
          Question {questionNumber}
        </h2>

        <span className="live-badge">
          🔴 LIVE
        </span>

      </div>

      <div className="question-box">

        {question ? (
          <p>{question}</p>
        ) : (
          <p>Waiting for AI...</p>
        )}

      </div>

    </div>
  );
}

export default QuestionCard;