function SkillGapCard({ skillGap }) {
  if (!skillGap) return null;

  return (
    <div className="report-section">
      <h3>🧠 Skill Gap Analysis</h3>

      <div className="stats-grid">

        <div className="stat-card">
          <h4>✅ Current Skills</h4>

          {skillGap.currentSkills?.length ? (
            <ul>
              {skillGap.currentSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No data</p>
          )}
        </div>

        <div className="stat-card">
          <h4>❌ Missing Skills</h4>

          {skillGap.missingSkills?.length ? (
            <ul>
              {skillGap.missingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No data</p>
          )}
        </div>

        <div className="stat-card">
          <h4>📚 Learning Priority</h4>

          {skillGap.priority?.length ? (
            <ol>
              {skillGap.priority.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ol>
          ) : (
            <p>No data</p>
          )}
        </div>

        <div className="stat-card">
          <h4>⏳ Estimated Time</h4>

          <span>
            {skillGap.estimatedDays || 0} Days
          </span>
        </div>

      </div>
    </div>
  );
}

export default SkillGapCard;