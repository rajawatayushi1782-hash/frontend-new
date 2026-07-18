import "../styles/auth.css";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-container">

      <div className="auth-left">
        <h1>InterviewAce AI</h1>
        <h2>Crack Your Dream Job With AI</h2>

        <p>
          Practice interviews, improve your resume,
          get AI feedback and prepare for placements
          with confidence.
        </p>
      </div>

      <div className="auth-right">

        <div className="auth-card">

          <h2>{title}</h2>

          <p>{subtitle}</p>

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;