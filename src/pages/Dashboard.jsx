import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import StatsCards from "../components/dashboard/StatsCards";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import StreakCard from "../components/dashboard/StreakCard";
import "../styles/dashboard.css";
import { API_URL } from "../config";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );
  const [stats, setStats] = useState({
  totalInterviews: 0,
  completedInterviews: 0,
  ongoingInterviews: 0,
  averageScore: 0,
});

const [recentInterviews, setRecentInterviews] = useState([]);
const [showResumeModal, setShowResumeModal] = useState(false);
const [savedInterview, setSavedInterview] = useState(null);
useEffect(() => {

  const interview = localStorage.getItem("currentInterview");

  if (interview) {
    setSavedInterview(JSON.parse(interview));
    setShowResumeModal(true);
  }

}, []);
const handleResumeInterview = () => {
  setShowResumeModal(false);
  navigate("/interview", {
    state: savedInterview,
  });

};

const handleDiscardInterview = () => {

  localStorage.removeItem("currentInterview");

  setShowResumeModal(false);

};
useEffect(() => {

  const fetchDashboard = async () => {

    try {

      const token = localStorage.getItem("token");

const response = await axios.get(
  `${API_URL}/api/dashboard`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      setStats(response.data.statistics);

      setRecentInterviews(
        response.data.recentInterviews
      );

    } catch (err) {

      console.log(err);

    }

  };

  fetchDashboard();

}, []);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px",
        color: "white",
        fontFamily: "Arial",
      }}
    >
    {showResumeModal && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        width: "420px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "16px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2>Resume Previous Interview?</h2>

      <p style={{ color: "#cbd5e1", marginTop: "15px" }}>
        You have an unfinished interview.
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <button
          onClick={handleResumeInterview}
          style={{
            background: "#22c55e",
            color: "white",
            border: "none",
            padding: "12px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Resume Interview
        </button>

        <button
          onClick={handleDiscardInterview}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "12px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Discard
        </button>
      </div>
    </div>
  </div>
)}
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >

        <div>

          <h1
            style={{
              fontSize: "36px",
              marginBottom: "10px",
            }}
          >
              Welcome, {user?.fullName}
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
            }}
          >
            Ready for your next AI Interview?
          </p>

        </div>

        <button
          onClick={handleLogout}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Logout
        </button>

      </div>

      {/* Statistics */}

      <StatsCards stats={stats} />

      {/* Quick Actions */}

      <div
        style={{
          marginTop: "40px",
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          ⚡ Quick Actions
        </h2>

        <div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  <button
    onClick={() => navigate("/interview-setup")}
    style={{
      padding: "15px 30px",
      background: "#22c55e",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    🚀 Start New Interview
  </button>

  <button
    onClick={() => navigate("/history")}
    style={{
      padding: "15px 30px",
      background: "#9333ea",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
    }}
  >
    📜 Interview History
  </button>

  <button
    onClick={() => {
  if (recentInterviews.length > 0) {
    navigate(`/report/${recentInterviews[0]._id}`);
  } else {
    alert("No interview report found.");
  }
}}
    style={{
      padding: "15px 30px",
      background: "#0ea5e9",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
    }}
  >
    📊 Latest Report
  </button>
</div>

      </div>
{/* Recent Interviews */}

<div
  style={{
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "25px",
    marginTop: "50px",
  }}
>

  {/* Left */}

  <div
    style={{
      background: "#1e293b",
      padding: "25px",
      borderRadius: "18px",
      border: "1px solid rgba(255,255,255,.08)",
    }}
  >

    <h2
      style={{
        marginBottom: "20px",
      }}
    >
       Recent Interviews
    </h2>

    {recentInterviews.map((item) => (
      

      <div
        key={item.company}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 0",
          borderBottom:
            "1px solid rgba(255,255,255,.08)",
        }}
      >

        <div>

<h3>{item.company || "General Interview"}</h3>
          <p
            style={{
              color: "#94a3b8",
            }}
          >
{item.role || "Software Engineer"}          </p>

        </div>

        <span
          style={{
            color:
              item.status === "Completed"
                ? "#22c55e"
                : "#f59e0b",
            fontWeight: "bold",
          }}
        >
          {item.status}
        </span>

      </div>

    ))}

  </div>

  {/* Right */}

  <div
    style={{
      background: "#1e293b",
      padding: "25px",
      borderRadius: "18px",
      border: "1px solid rgba(255,255,255,.08)",
    }}
  >

    <h2>
       Today's Goal
    </h2>

    <ul
      style={{
        marginTop: "20px",
        lineHeight: "2",
        color: "#cbd5e1",
      }}
    >
      <li>Complete 2 Mock Interviews</li>

      <li>Improve Technical Score</li>

      <li>Practice HR Questions</li>

      <li>Upload Updated Resume</li>

    </ul>

  </div>

</div>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "25px",
    marginTop: "40px",
  }}
>
  <PerformanceChart />

  <StreakCard stats={stats} />
</div>
    </div>

  );

}

export default Dashboard;