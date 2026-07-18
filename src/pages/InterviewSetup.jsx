import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function InterviewSetup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [level, setLevel] = useState("Easy");
  const [experience, setExperience] = useState("Fresher");
  const [type, setType] = useState("Technical");
  const [company, setCompany] = useState("");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);

  const startInterview = async () => {
  if (!role.trim()) {
    alert("Enter Job Role");
    return;
  }
  

  try {
      setLoading(true);

      const resumeId = localStorage.getItem("resumeId");

      const response = await axios.post(
        "http://localhost:5000/api/ai/question",
        {
          role,
          level,
          experience,
          type,
          company,
          language,
          resumeId,
        }
      );

      navigate("/interview", {
        state: {
          interviewId: response.data.interviewId,
          role,
          level,
          question: response.data.question,
          resumeId,
        },
      });
    } catch (err) {
      console.log(err);
      alert("Failed to start interview.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          background: "#1e293b",
          padding: "35px",
          borderRadius: "15px",
        }}
      >
        <h1>  AI Interview Setup</h1>

        <label>Job Role</label>

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Example: AI Engineer, Doctor, Lawyer, UPSC, Data Scientist..."
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
          }}
        />
        <div className="setup-field">
  <label>Target Company</label>

  <select
    value={company}
    onChange={(e) => setCompany(e.target.value)}
  >
    <option>General</option>
    <option>Google</option>
    <option>Amazon</option>
    <option>Microsoft</option>
    <option>Meta</option>
    <option>Apple</option>
    <option>TCS</option>
    <option>Infosys</option>
    <option>Wipro</option>
    <option>Accenture</option>
    <option>Capgemini</option>
    <option>Cognizant</option>
    <option>Mu Sigma</option>
  </select>
</div>

        <label>Experience</label>

        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
          }}
        >
          <option>Fresher</option>
          <option>1-2 Years</option>
          <option>3-5 Years</option>
          <option>Senior</option>
        </select>

        <label>Interview Type</label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
          }}
        >
          <option>Technical</option>
          <option>HR</option>
          <option>Behavioral</option>
          <option>Mixed</option>
        </select>

        <label>Difficulty</label>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
          }}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <label>Target Company (Optional)</label>

        

        <label>Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "30px",
          }}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Hinglish</option>
        </select>

        <button
          onClick={startInterview}
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {loading ? "Generating..." : "🚀 Start AI Interview"}
        </button>
      </div>
    </div>
  );
}

export default InterviewSetup;