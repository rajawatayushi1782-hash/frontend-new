import "./interview.css";

function FinalReport({
  open,
  totalQuestions,
  score,
  strengths = [],
  weaknesses = [],
  onRestart,
  onClose,
}) {

  if (!open) return null;

  const percentage = Math.min(
    Math.max(score, 0),
    100
  );

  return (

    <div className="report-overlay">

      <div className="report-card">

        <div className="report-header">

          <h1>
            🎉 Interview Completed
          </h1>

          <button
            className="close-report"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="report-score">

          <div className="circle-score">

            <span>

              {percentage}%

            </span>

          </div>

          <h2>

            Overall AI Score

          </h2>

          <p>

            Questions Attempted :
            {" "}
            {totalQuestions}

          </p>

        </div>

        <div className="report-grid">

          <div className="report-section">

            <h2>

              ✅ Strengths

            </h2>

            <ul>

              {strengths.length === 0 ? (

                <li>

                  No strengths available.

                </li>

              ) : (

                strengths.map((item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                ))

              )}

            </ul>

          </div>

          <div className="report-section">

            <h2>

              ⚠ Areas to Improve

            </h2>

            <ul>

              {weaknesses.length === 0 ? (

                <li>

                  No weaknesses available.

                </li>

              ) : (

                weaknesses.map((item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                ))

              )}

            </ul>

          </div>

        </div>

        <div className="report-actions">

          <button
            className="restart-btn"
            onClick={onRestart}
          >
            🔄 Restart Interview
          </button>

          <button
            className="pdf-btn"
            onClick={() =>
              window.print()
            }
          >
            📄 Download Report
          </button>

        </div>

      </div>

    </div>

  );

}

export default FinalReport;