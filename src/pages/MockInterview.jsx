function MockInterview() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>🎤 AI Mock Interview</h1>

      <p>
        Welcome to InterviewAce AI Interview Platform
      </p>

      <button
        style={{
          padding: "15px 30px",
          marginTop: "20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Start AI Interview
      </button>
    </div>
  );
}

export default MockInterview;