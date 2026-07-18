import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function PerformanceChart() {

  const data = [

    {
      day: "Mon",
      score: 72,
    },

    {
      day: "Tue",
      score: 78,
    },

    {
      day: "Wed",
      score: 82,
    },

    {
      day: "Thu",
      score: 75,
    },

    {
      day: "Fri",
      score: 90,
    },

  ];

  return (

    <div
      className="stats-card"
      style={{
        marginTop: "35px",
      }}
    >

      <h2
        style={{
          marginBottom: "25px",
        }}
      >
        📈 Performance Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line

            type="monotone"

            dataKey="score"

            stroke="#3b82f6"

            strokeWidth={4}

          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default PerformanceChart;