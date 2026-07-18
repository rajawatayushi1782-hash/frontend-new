function StreakCard({ stats }) {
  const completed = stats.completedInterviews || 0;

  let consistency = "Beginner";

  if (completed >= 5) consistency = "Consistent";
  if (completed >= 10) consistency = "Excellent";
  if (completed >= 20) consistency = "Outstanding";

  return (
    <div className="streak-card">
      <h2>🔥 Interview Streak</h2>

      <div className="streak-item">
        <span>Current Streak</span>
        <strong>{completed} Days</strong>
      </div>

      <div className="streak-item">
        <span>Longest Streak</span>
        <strong>{completed + 2} Days</strong>
      </div>

      <div className="streak-item">
        <span>Completed Interviews</span>
        <strong>{completed}</strong>
      </div>

      <div className="streak-item">
        <span>Consistency</span>
        <strong>{consistency}</strong>
      </div>
    </div>
  );
}

export default StreakCard;