import "./interview.css";

function FeedbackCard({
  feedback,
  score,
}) {

  if (!feedback) return null;

  return (

    <div className="feedback-card">

      <div className="feedback-header">

        <h2>🤖 AI Feedback</h2>

        {score !== undefined && (

          <div className="score-pill">

            ⭐ {score}/10

          </div>

        )}

      </div>

      <div className="feedback-body">

        <p>{feedback}</p>

      </div>

      <div className="feedback-footer">

        <div className="feedback-tip">

          💡 Try giving more structured answers with examples to improve your AI score.

        </div>

      </div>

    </div>

  );

}

export default FeedbackCard;