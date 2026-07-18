import "../styles/dashboardPreview.css";

import {
  FaChartLine,
  FaTrophy,
  FaBullseye,
  FaBrain
} from "react-icons/fa";

function DashboardPreview() {

  return (

    <section className="dashboard-preview">

      <div className="dashboard-left">

        <span className="dashboard-tag">

          Performance Dashboard

        </span>

        <h2>

          Track Every Interview
          With AI Analytics

        </h2>

        <p>

          Monitor your interview progress,
          confidence level, communication,
          technical skills and overall growth
          using detailed AI reports.

        </p>

      </div>

      <div className="dashboard-right">

        <div className="dashboard-card">

          <div className="dashboard-item">

            <FaChartLine />

            <div>

              <h4>Confidence</h4>

              <span>91%</span>

            </div>

          </div>

          <div className="dashboard-item">

            <FaBullseye />

            <div>

              <h4>Technical Score</h4>

              <span>88%</span>

            </div>

          </div>

          <div className="dashboard-item">

            <FaBrain />

            <div>

              <h4>Communication</h4>

              <span>94%</span>

            </div>

          </div>

          <div className="dashboard-item">

            <FaTrophy />

            <div>

              <h4>Overall Score</h4>

              <span>92%</span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default DashboardPreview;