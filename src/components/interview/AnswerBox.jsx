import "./interview.css";

function AnswerBox({
  answer,
  setAnswer,
}) {
  return (
    <div className="answer-card">

      <div className="answer-header">

        <h2>💬 Your Answer</h2>

      </div>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here or use the microphone..."
        rows={10}
        className="answer-textarea"
      />

      <div className="answer-info">

        <span>
          Characters : {answer.length}
        </span>

        <span>
          Words : {
            answer.trim()
              ? answer.trim().split(/\s+/).length
              : 0
          }
        </span>

      </div>

    </div>
  );
}

export default AnswerBox;