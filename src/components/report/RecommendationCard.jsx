import "../../styles/Report.css";

function RecommendationCard({

  recommendation = "Consider",

  details = {},

}) {

  const hiring =
    details?.recommendation || recommendation;

  const confidence =
    details?.confidence || 0;

  const role =
    details?.role || "Software Developer";

  const reason =
    details?.reason ||
    "No detailed recommendation available.";

  let emoji = "🟡";
  let color = "#facc15";

  const text = hiring.toLowerCase();

  if (text.includes("strong hire")) {

    emoji = "🟢";
    color = "#22c55e";

  } else if (text.includes("hire")) {

    emoji = "🟢";
    color = "#16a34a";

  } else if (
    text.includes("borderline")
  ) {

    emoji = "🟠";
    color = "#f97316";

  } else if (
    text.includes("reject")
  ) {

    emoji = "🔴";
    color = "#ef4444";

  }

  return (

    <div className="report-section recommendation-card">

      <h3>
        🎯 AI Hiring Decision
      </h3>

      <div className="recommendation-box">

        <h2 style={{ color }}>

          {emoji} {hiring}

        </h2>

        <p
          style={{
            marginTop: "18px",
            color: "#cbd5e1",
          }}
        >
          <strong>Confidence:</strong>{" "}
          {confidence}%
        </p>

        <p
          style={{
            marginTop: "8px",
            color: "#cbd5e1",
          }}
        >
          <strong>Recommended Role:</strong>{" "}
          {role}
        </p>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "1.8",
            color: "#e2e8f0",
          }}
        >
          {reason}
        </p>

      </div>

    </div>

  );

}

export default RecommendationCard;