import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaFileUpload,
  FaTrash,
  FaEdit,
  FaEye,
  FaFilePdf,
  FaRobot,
  FaPlay,
  FaCheckCircle,
  FaBrain,
} from "react-icons/fa";

import "../styles/resumeUpload.css";

function ResumeUpload() {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);

  const [loading, setLoading] = useState(false);

  const [analysisDone, setAnalysisDone] = useState(false);

  const [resumeText, setResumeText] = useState("");

  const [analysis, setAnalysis] = useState(null);

  const fileInputRef = useRef(null);

  const handleResume = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setResume(file);

    setAnalysisDone(false);

    setResumeText("");

    setAnalysis(null);
  };

  const openPicker = () => {
    fileInputRef.current.click();
  };

  const removeResume = () => {
    setResume(null);

    setAnalysis(null);

    setResumeText("");

    setAnalysisDone(false);

    if (fileInputRef.current)
      fileInputRef.current.value = "";
  };

  const previewResume = () => {
    if (!resume) return;

    const url = URL.createObjectURL(resume);

    window.open(url, "_blank");
  };

  const analyzeResume = async () => {
    if (!resume) {
      alert("Please upload resume.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resume);

      const user = JSON.parse(localStorage.getItem("user"));

      if (user?.id) {
        formData.append("userId", user.id);
      }

      const response = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      );

      setResumeText(response.data.resumeText);

      setAnalysis(response.data.analysis);
      localStorage.setItem("resumeId", response.data.resumeId);

      setAnalysisDone(true);

    } catch (err) {
      console.log(err);

      alert("Resume Analysis Failed");
    } finally {
      setLoading(false);
    }
  };
    return (
    <div className="resume-upload-container">

      <input
        type="file"
        hidden
        accept=".pdf,.doc,.docx"
        ref={fileInputRef}
        onChange={handleResume}
      />

      {!resume ? (

        <div
          className="upload-box"
          onClick={openPicker}
        >
          <FaFileUpload className="upload-icon" />

          <h3>Upload Resume</h3>

          <p>Drag & Drop or Click to Upload</p>

          <small>PDF • DOC • DOCX</small>

        </div>

      ) : (

        <div className="uploaded-card">

          <div className="resume-file">

            <FaFilePdf className="pdf-icon" />

            <div>
              <h3>{resume.name}</h3>

              <p>
                {(resume.size / 1024).toFixed(2)} KB
              </p>
            </div>

          </div>

          <div className="resume-actions">

            <button
              className="action-btn"
              onClick={previewResume}
            >
              <FaEye />
              Preview
            </button>

            <button
              className="action-btn"
              onClick={openPicker}
            >
              <FaEdit />
              Replace
            </button>

            <button
              className="action-btn"
              onClick={removeResume}
            >
              <FaTrash />
              Remove
            </button>

          </div>

          <button
            className="resume-btn"
            onClick={analyzeResume}
            disabled={loading}
          >
            <FaRobot />

            {loading
              ? "AI is Analyzing..."
              : "Analyze Resume"}
          </button>

          {loading && (

            <div className="loading-box">

              <div className="loader"></div>

              <p>
                Gemini AI is reading your resume...
              </p>

            </div>

          )}

          {analysisDone && analysis && (

            <div className="analysis-result">

              <h3>

                <FaCheckCircle
                  color="#22c55e"
                />

                Resume Analysis Complete

              </h3>

              <div className="score-box">

                <h2>ATS Score</h2>

                <span>

                  {analysis.atsScore}%

                </span>

              </div>

              <div
                style={{
                  marginTop: "25px",
                }}
              >
                <h3>

                  <FaBrain />

                  AI Summary

                </h3>

                <p>

                  {analysis.summary}

                </p>

              </div>

              <div
                style={{
                  marginTop: "25px",
                }}
              >
                <h3>Skills</h3>

                <ul>

                  {analysis.skills?.map(
                    (skill, index) => (

                      <li key={index}>

                        {skill}

                      </li>

                    )
                  )}

                </ul>

              </div>

              <div
                style={{
                  marginTop: "25px",
                }}
              >
                <h3>Strengths</h3>

                <ul>

                  {analysis.strengths?.map(
                    (item, index) => (

                      <li key={index}>

                        {item}

                      </li>

                    )
                  )}

                </ul>

              </div>

              <div
                style={{
                  marginTop: "25px",
                }}
              >
                <h3>Areas to Improve</h3>

                <ul>

                  {analysis.weaknesses?.map(
                    (item, index) => (

                      <li key={index}>

                        {item}

                      </li>

                    )
                  )}

                </ul>

              </div>

              <div
                style={{
                  marginTop: "30px",
                }}
              >
                <h3>Resume Extracted Text</h3>

                <textarea
                  value={resumeText}
                  readOnly
                  rows={12}
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "10px",
                    resize: "none",
                  }}
                />

              </div>

              <button
                className="resume-btn"
                style={{
                  marginTop: "25px",
                }}
                onClick={() =>
                  navigate("/interview", {
                    state: {
                      resumeId: analysis.resumeId,
                      resumeText,
                      analysis,
                    },
                  })
                }
              >
                <FaPlay />

                Start Resume Based Interview

              </button>

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default ResumeUpload;