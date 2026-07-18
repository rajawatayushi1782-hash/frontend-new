import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/history.css";
import { API_URL } from "../config";

const History = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [statusFilter, setStatusFilter] = useState("All");
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/history`);
      setInterviews(res.data.interviews);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteInterview = async (id) => {
    if (!window.confirm("Delete this interview?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/history/${id}`);
      fetchHistory();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  const filteredInterviews = interviews.filter((item) => {
  const role = item.role?.toLowerCase() || "";
  const company = item.company?.toLowerCase() || "";

  const matchesSearch =
    role.includes(search.toLowerCase()) ||
    company.includes(search.toLowerCase());

  const matchesStatus =
  statusFilter === "All" ||
  item.status?.toLowerCase() === statusFilter.toLowerCase();

  return matchesSearch && matchesStatus;
});

const sortedInterviews = [...filteredInterviews].sort((a, b) => {
  if (sortOrder === "latest") {
    return new Date(b.createdAt) - new Date(a.createdAt);
  }

  return new Date(a.createdAt) - new Date(b.createdAt);
});
const totalInterviews = interviews.length;

const completedInterviews = interviews.filter(
  (item) => item.status?.toLowerCase() === "completed"
).length;

const ongoingInterviews = interviews.filter(
  (item) => item.status?.toLowerCase() === "ongoing"
).length;

const averageScore =
  interviews.length > 0
    ? (
        interviews.reduce(
          (sum, item) => sum + (item.analysis?.overallScore || 0),
          0
        ) / interviews.length
      ).toFixed(1)
    : 0;
  return (
    <div className="history-page">
      <h1>Interview History</h1>
      <div className="history-stats">

  <div className="stat-card">
    <h3>Total</h3>
    <p>{totalInterviews}</p>
  </div>

  <div className="stat-card">
    <h3>Completed</h3>
    <p>{completedInterviews}</p>
  </div>

  <div className="stat-card">
    <h3>Ongoing</h3>
    <p>{ongoingInterviews}</p>
  </div>

  <div className="stat-card">
    <h3>Average Score</h3>
    <p>{averageScore}%</p>
  </div>

</div>
     <div className="history-controls">

  <input
    type="text"
    placeholder="Search by role or company..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="history-search"
  />

  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    className="history-filter"
  >
    <option value="latest">Latest First</option>
    <option value="oldest">Oldest First</option>
  </select>

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="history-filter"
  >
    <option value="All">All Status</option>
    <option value="completed">Completed</option>
    <option value="ongoing">Ongoing</option>
  </select>

</div>

      {sortedInterviews.length === 0 ? (
        <p>No interviews found.</p>
        
      ) : (
        sortedInterviews.map((item) => (
          <div key={item._id} className="history-card">
            <h2>{item.role}</h2>

            <p>
              <strong>Company:</strong> {item.company}
            </p>

            <p>
              <strong>Status:</strong> {item.status}
            </p>

            <p>
              <strong>Score:</strong>{" "}
              {item.analysis?.overallScore ?? "N/A"}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(item.createdAt).toLocaleDateString()}
            </p>

            <div className="history-actions">
              <button
                onClick={() =>
                  navigate(`/report/${item._id}`)
                }
              >
                View Report
              </button>

              <button
                onClick={() => deleteInterview(item._id)}
              >
                Delete
              </button>
            </div>

            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default History;