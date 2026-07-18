function LearningRoadmap({ weaknesses }) {
  const roadmap = [];

  if (
    weaknesses?.join(" ").toLowerCase().includes("python")
  ) {
    roadmap.push({
      week: "Week 1",
      topics: [
        "Python Basics",
        "Variables",
        "Loops",
        "Functions",
      ],
    });
  }

  if (
    weaknesses?.join(" ").toLowerCase().includes("data")
  ) {
    roadmap.push({
      week: "Week 2",
      topics: [
        "Arrays",
        "Linked List",
        "Stack",
        "Queue",
      ],
    });
  }

  if (
    weaknesses?.join(" ").toLowerCase().includes("communication")
  ) {
    roadmap.push({
      week: "Week 3",
      topics: [
        "HR Questions",
        "Self Introduction",
        "Communication Practice",
      ],
    });
  }

  if (roadmap.length === 0) {
    roadmap.push({
      week: "Week 1",
      topics: [
        "Mock Interview",
        "Revision",
        "Problem Solving",
      ],
    });
  }

  return (
    <div className="roadmap-card">
      <h2>📚 AI Learning Roadmap</h2>

      {roadmap.map((item, index) => (
        <div
          key={index}
          className="roadmap-week"
        >
          <h3>{item.week}</h3>

          <ul>
            {item.topics.map((topic) => (
              <li key={topic}>✅ {topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default LearningRoadmap;