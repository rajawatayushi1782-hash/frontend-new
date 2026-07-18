function ResumeMatchCard({
  atsScore = 0,
  interviewScore = 0,
}) {
  const overall = Math.round(
    (atsScore + interviewScore) / 2
  );

  let status = "Needs Improvement";

  if (overall >= 80) status = "Excellent";
  else if (overall >= 65) status = "Good";
  else if (overall >= 50) status = "Average";

  return (
    <div className="resume-match-card">

      <h2>📄 Resume vs Interview Analysis</h2>

      <div className="match-grid">

        <div className="match-box">
          <h4>ATS Resume Score</h4>
          <h3>{atsScore}%</h3>
        </div>

        <div className="match-box">
          <h4>Interview Score</h4>
          <h3>{interviewScore}%</h3>
        </div>

        <div className="match-box">
          <h4>Overall Hiring Score</h4>
          <h3>{overall}%</h3>
        </div>

        <div className="match-box">
          <h4>Status</h4>
          <h3>{status}</h3>
        </div>

      </div>

    </div>
  );
}

export default ResumeMatchCard;