import "../styles/resume.css";
import { BsStars } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import ResumeUpload from "./ResumeUpload";

function ResumeSection() {
  return (
    <section className="resume">

      {/* LEFT */}

      <div className="resume-left">

        <span className="resume-tag">
          <BsStars />
          AI Powered
        </span>

        <h2>Smart Resume Analyzer</h2>

        <p>
          Upload your resume and receive instant ATS analysis,
          keyword optimization, AI suggestions and recruiter-ready
          improvements within seconds.
        </p>

        {/* Resume Upload Component */}

        <ResumeUpload />

      </div>

      {/* RIGHT */}

      <div className="resume-right">

        <div className="resume-card">

          <h3>AI Analysis Report</h3>

          <div className="score-circle">
            92%
          </div>

          <div className="resume-status">

            <div className="status-row">
              <span>
                <IoCheckmarkDoneCircle />
                ATS Friendly
              </span>

              <span>98%</span>
            </div>

            <div className="status-row">
              <span>
                <IoCheckmarkDoneCircle />
                Skills Match
              </span>

              <span>89%</span>
            </div>

            <div className="status-row">
              <span>
                <IoCheckmarkDoneCircle />
                Formatting
              </span>

              <span>Excellent</span>
            </div>

            <div className="status-row">
              <span>
                <IoCheckmarkDoneCircle />
                Keywords
              </span>

              <span>Good</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ResumeSection;