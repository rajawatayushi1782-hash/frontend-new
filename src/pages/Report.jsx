import "../styles/report.css";

import { useEffect, useState } from "react";

import axios from "axios";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

import {
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

import ScoreCard from "../components/report/ScoreCard";
import PerformanceChart from "../components/report/PerformanceChart";
import SuggestionCard from "../components/report/SuggestionCard";
import SummaryCard from "../components/report/SummaryCard";
import DownloadButton from "../components/report/DownloadButton";
import RecommendationCard
from "../components/report/RecommendationCard";
import LearningRoadmap from "../components/report/LearningRoadmap";
import ResumeMatchCard from "../components/report/ResumeMatchCard";
import SkillGapCard from "../components/report/SkillGapCard";
import HiringProbabilityCard from "../components/report/HiringProbabilityCard";
import { API_URL } from "../config";
function Report() {
    const reportRef = useRef(null);

  const navigate = useNavigate();

  const { state } = useLocation();
  const { id } = useParams();

  const [loading, setLoading] =
    useState(true);

  const [report, setReport] =
    useState(null);
  
    const [messages, setMessages] = useState([]);
const [interviewInfo, setInterviewInfo] = useState(null);

const [insights, setInsights] = useState(null);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const fetchReport = async () => {

      const interviewId = state?.interviewId || id;

      if (!interviewId) {

        setError(
          "Interview report not found."
        );

        setLoading(false);

        return;

      }

      try {

        const response =
  await axios.get(
    `${API_URL}/api/ai/report/${interviewId}`
  );
        setReport(
          response.data.report
        );
        setMessages(response.data.messages || []);
        
        const userAnswers = (response.data.messages || [])
  .filter((m) => m.role === "user");

if (userAnswers.length) {

  const technicalScores =
    userAnswers.map(
      (m) => m.scores?.technical || 0
    );

  const communicationScores =
    userAnswers.map(
      (m) => m.scores?.communication || 0
    );

  const confidenceScores =
    userAnswers.map(
      (m) => m.scores?.confidence || 0
    );

  const averageTechnical =
    Math.round(
      technicalScores.reduce(
        (a, b) => a + b,
        0
      ) / technicalScores.length
    );

  const highestTechnical =
    Math.max(...technicalScores);

  const lowestTechnical =
    Math.min(...technicalScores);

  const bestAnswer =
    technicalScores.indexOf(
      highestTechnical
    ) + 1;

  const weakestAnswer =
    technicalScores.indexOf(
      lowestTechnical
    ) + 1;

  const avgCommunication =
    Math.round(
      communicationScores.reduce(
        (a, b) => a + b,
        0
      ) / communicationScores.length
    );

  const avgConfidence =
    Math.round(
      confidenceScores.reduce(
        (a, b) => a + b,
        0
      ) / confidenceScores.length
    );

  setInsights({

    averageTechnical,

    highestTechnical,

    lowestTechnical,

    bestAnswer,

    weakestAnswer,

    avgCommunication,

    avgConfidence,

  });

}
        setInterviewInfo(
         response.data.interview || null
         );
      } catch (err) {

        console.log(err);

        setError(
          "Failed to load report."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchReport();

  }, [state, id]);

  const handleDownload = () => {

  if (!reportRef.current) return;

  const options = {

    margin: 0.5,

    filename: "InterviewAce_Report.pdf",

    image: {

      type: "jpeg",

      quality: 1,

    },

    html2canvas: {

  scale: 3,

  useCORS: true,

  backgroundColor: "#111827",

  logging: false,

},

    jsPDF: {

      unit: "in",

      format: "a4",

      orientation: "portrait",

    },

  };

  html2pdf()

    .set(options)

    .from(reportRef.current)

    .save();

};

  const handleShare = () => {

    if (navigator.share) {

      navigator.share({

        title: "InterviewAce AI Report",

        text: "Check out my Interview Performance Report!",

        url: window.location.href,

      });

    } else {

      alert("Sharing is not supported on this browser.");

    }

  };
    if (loading) {

    return (

      <div className="report-page">

        <div className="report-container">
          <h2> Loading Report... </h2>

        </div>

      </div>

    );

  }

  if (error) {

    return (

      <div className="report-page">

        <div className="report-container">

          <h2>

            {error}

          </h2>

        </div>

      </div>

    );

  }
  return (

    <div className="report-page">

      <div
  ref={reportRef}
  className="report-container"
>

        <div className="report-header">

          <h2>

             Interview Performance Report

          </h2>

          <span className="success-badge">

            Completed

          </span>

        </div>

        <ScoreCard

  overallScore={
    report?.overallScore || 0
  }

/>

        <div className="stats-grid">

  <div className="stat-card">

    <h4>Technical</h4>

    <span>

      {report?.technical || 0}%

    </span>

  </div>

  <div className="stat-card">

    <h4>Communication</h4>

    <span>

      {report?.communication || 0}%

    </span>

  </div>

  <div className="stat-card">

    <h4>Confidence</h4>

    <span>

      {report?.confidence || 0}%

    </span>

  </div>

  <div className="stat-card">

    <h4>Grammar</h4>

    <span>

      {report?.grammar || 0}%

    </span>

  </div>

</div>

       <PerformanceChart

  technical={
    report?.technical
  }

  communication={
    report?.communication
  }

  confidence={
    report?.confidence
  }

  grammar={
    report?.grammar
  }

  fluency={
    report?.fluency
  }

/>

        <SuggestionCard

  strengths={
    report?.strengths
  }

  weaknesses={
    report?.weaknesses
  }

  suggestions={
    report?.suggestions
  }

/>
<LearningRoadmap
    weaknesses={report?.weaknesses}
/>
<ResumeMatchCard
    atsScore={report?.atsScore || 0}
    interviewScore={report?.overallScore || 0}
/>
<RecommendationCard
  recommendation={report?.recommendation}
  details={report?.recommendationDetails}
/>
<SkillGapCard
  skillGap={report?.skillGap}
/>
<HiringProbabilityCard
  hiringProbability={report?.hiringProbability}
/>

<SummaryCard

  summary={
    report?.summary
  }

/>

{insights && (

<div className="report-section">

<h3>
📈 Interview Insights
</h3>

<div className="stats-grid">

<div className="stat-card">

<h4>
Average Technical
</h4>

<span>

{insights.averageTechnical}%

</span>

</div>

<div className="stat-card">

<h4>
Highest Score
</h4>

<span>

{insights.highestTechnical}%

</span>

</div>

<div className="stat-card">

<h4>
Lowest Score
</h4>

<span>

{insights.lowestTechnical}%

</span>

</div>

<div className="stat-card">

<h4>
Communication
</h4>

<span>

{insights.avgCommunication}%

</span>

</div>

<div className="stat-card">

<h4>
Confidence
</h4>

<span>

{insights.avgConfidence}%

</span>

</div>

<div className="stat-card">

<h4>
Best Answer
</h4>

<span>

Q{insights.bestAnswer}

</span>

</div>

<div className="stat-card">

<h4>
Weakest Answer
</h4>

<span>

Q{insights.weakestAnswer}

</span>

</div>

</div>

</div>

)}
<div
  style={{
    marginTop: "40px",
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
  }}
>
  <h2
    style={{
      marginBottom: "25px",
      color: "white",
    }}
  >
    Interview Replay
  </h2>

  {messages.map((msg, index) => (

    <div
      key={index}
      style={{
        marginBottom: "25px",
        borderBottom:
          "1px solid rgba(255,255,255,.08)",
        paddingBottom: "20px",
      }}
    >

      {msg.role === "assistant" && (

        <div>

          <h4 style={{ color: "#60a5fa" }}>
            AI Question
          </h4>

          <p>{msg.content}</p>

        </div>

      )}

      {msg.role === "user" && (

        <div>

          <h4 style={{ color: "#22c55e" }}>
            Your Answer
          </h4>

          <p>{msg.content}</p>

          <div
            style={{
              marginTop: "15px",
              background: "#0f172a",
              padding: "15px",
              borderRadius: "10px",
            }}
          >

            <strong>
              AI Feedback
            </strong>

            <p>
              {msg.feedback || "No feedback"}
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >

              <span>
                Technical:
                {msg.scores?.technical || 0}%
              </span>

              <span>
                Communication:
                {msg.scores?.communication || 0}%
              </span>

              <span>
                Confidence:
                {msg.scores?.confidence || 0}%
              </span>

              <span>
                Grammar:
                {msg.scores?.grammar || 0}%
              </span>

              <span>
                Fluency:
                {msg.scores?.fluency || 0}%
              </span>

            </div>

          </div>

        </div>

      )}

    </div>

  ))}

</div>
        <DownloadButton

          onDownload={handleDownload}

          onShare={handleShare}

        />

      </div>

    </div>

  );

}

export default Report;