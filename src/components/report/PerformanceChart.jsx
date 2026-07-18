import "../../styles/Report.css";

function PerformanceChart({

  technical = 82,

  communication = 88,

  confidence = 79,

  grammar = 91,

  fluency = 85,

}) {

  const scores = [

    {
      title: "Technical",
      value: technical,
    },

    {
      title: "Communication",
      value: communication,
    },

    {
      title: "Confidence",
      value: confidence,
    },

    {
      title: "Grammar",
      value: grammar,
    },

    {
      title: "Fluency",
      value: fluency,
    },

  ];

  return (

    <div className="report-section">

      <h3>

        📊 Performance Breakdown

      </h3>

      <div className="performance-grid">

        {scores.map((item) => (

          <div
            key={item.title}
            className="performance-item"
          >

            <div className="performance-top">

              <span>{item.title}</span>

              <span>{item.value}%</span>

            </div>

            <div className="performance-bar">

              <div
                className="performance-fill"
                style={{
                  width: `${item.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default PerformanceChart;