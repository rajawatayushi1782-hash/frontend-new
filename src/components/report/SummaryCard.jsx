import "../../styles/report.css";

function SummaryCard({

  summary = `You demonstrated good communication skills and maintained a clear structure while answering most questions. Your technical knowledge is solid, but some answers could include more practical examples. Overall, this was a confident interview with room for improvement in depth and confidence during complex technical discussions.`,

}) {

  return (

    <div className="report-section summary-section">

      <h3>

        📄 Interview Summary

      </h3>

      <p className="summary-text">

        {summary}

      </p>

    </div>

  );

}

export default SummaryCard;