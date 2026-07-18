function StatsCards({ stats }) {

  const cards = [

    {
      title: "Total Interviews",
      value: stats.totalInterviews,
      icon: "🎤",
      color: "#2563eb",
    },

    {
      title: "Completed",
      value: stats.completedInterviews,
      icon: "✅",
      color: "#16a34a",
    },

    {
      title: "Average Score",
      value: `${stats.averageScore}%`,
      icon: "⭐",
      color: "#f59e0b",
    },

    {
      title: "Ongoing",
      value: stats.ongoingInterviews,
      icon: "⏳",
      color: "#9333ea",
    },

  ];

  return (

    <div className="stats-grid">

      {cards.map((card) => (

        <div
          key={card.title}
          className="stats-card"
        >

          <div
            className="stats-icon"
            style={{
              background: card.color,
            }}
          >
            {card.icon}
          </div>

          <h2>{card.value}</h2>

          <p>{card.title}</p>

        </div>

      ))}

    </div>

  );

}

export default StatsCards;