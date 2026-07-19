import "../styles/cta.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-box">

        <h2>
          Ready to Crack Your Dream Job?
        </h2>

        <p>
          Practice AI-powered interviews, improve your resume,
          and get hired faster with InterviewAce AI.
        </p>
<div className="cta-buttons">

  <Link to="/signup" className="primary-btn">
    Start Free
  </Link>

  <a href="#features" className="secondary-btn">
    Learn More
  </a>

</div>

      </div>

    </section>
  );
}

export default CTA;