function Progress({ label, value }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>

      <div
        style={{
          width: "100%",
          height: "10px",
          background: "#e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            borderRadius: "10px",
            background:
              value >= 80
                ? "#22c55e"
                : value >= 60
                ? "#3b82f6"
                : value >= 40
                ? "#f59e0b"
                : "#ef4444",
          }}
        />
      </div>
    </div>
  );
}

function HiringProbabilityCard({ hiringProbability }) {
  if (!hiringProbability) return null;

  return (
    <div className="report-section">
      <h3>🏢 Company Hiring Probability</h3>

      <Progress
        label="Google"
        value={hiringProbability.google || 0}
      />

      <Progress
        label="Amazon"
        value={hiringProbability.amazon || 0}
      />

      <Progress
        label="Microsoft"
        value={hiringProbability.microsoft || 0}
      />

      <Progress
        label="Adobe"
        value={hiringProbability.adobe || 0}
      />

      <Progress
        label="Infosys"
        value={hiringProbability.infosys || 0}
      />

      <Progress
        label="TCS"
        value={hiringProbability.tcs || 0}
      />

      <Progress
        label="Accenture"
        value={hiringProbability.accenture || 0}
      />

      <hr />

      <h4>
        🌟 Overall Market Readiness
      </h4>

      <Progress
        label="Placement Ready"
        value={
          hiringProbability.overallMarketReadiness || 0
        }
      />
    </div>
  );
}

export default HiringProbabilityCard;