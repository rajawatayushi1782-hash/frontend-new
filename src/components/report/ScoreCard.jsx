import "../../styles/Report.css";

function ScoreCard({
  overallScore,
}) {
  return (
    <div className="score-card">

      <div className="score-circle-large">

        {overallScore}%

      </div>

      <div>

        <h3>
          Overall Interview Score
        </h3>

        <p>
          This score represents your overall
          interview performance based on
          communication, technical knowledge,
          confidence and AI evaluation.
        </p>

      </div>

    </div>
  );
}

export default ScoreCard;