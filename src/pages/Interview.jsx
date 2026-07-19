import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import InterviewHeader from "../components/interview/InterviewHeader";
import ProgressBar from "../components/interview/ProgressBar";
import QuestionCard from "../components/interview/QuestionCard";
import FeedbackCard from "../components/interview/FeedbackCard";
import AnswerBox from "../components/interview/AnswerBox";
import VoiceControls from "../components/interview/VoiceControls";
import InterviewControls from "../components/interview/InterviewControls";
import CameraPanel from "../components/interview/CameraPanel";
import Timer from "../components/interview/Timer";
import ConfirmModal from "../components/interview/ConfirmModal";

function Interview() {

  const navigate = useNavigate();

  const { state } = useLocation();
  const company = state?.company || "General";

  const [question, setQuestion] = useState(
    state?.question || ""
  );

  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState("");

  const [feedbackScore, setFeedbackScore] =
    useState(null);

  const [loading, setLoading] = useState(false);

  const [questionNumber, setQuestionNumber] =
    useState(1);

  const [totalQuestions] = useState(
    state?.totalQuestions || 10
  );

  const [showEndModal, setShowEndModal] =
    useState(false);

  const [insights, setInsights] = useState(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [tabWarnings, setTabWarnings] = useState(0);

  /* ---------------- Voice → Text ---------------- */

  useEffect(() => {

    setAnswer(transcript);

  }, [transcript]);
useEffect(() => {
  if (!state?.interviewId) return;

  localStorage.setItem(
    "currentInterview",
    JSON.stringify({
      interviewId: state.interviewId,
      role: state.role,
      company: state.company,
      question,
      questionNumber,
      totalQuestions,
    })
  );
}, [
  state?.interviewId,
  question,
  questionNumber,
  totalQuestions,
]);
  /* ---------------- AI Speaks Question ---------------- */

  useEffect(() => {

    if (!question) return;

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(question);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);

  }, [question]);

  /* ---------------- AI Speaks Feedback ---------------- */

  useEffect(() => {

    if (!feedback) return;

    const speech =
      new SpeechSynthesisUtterance(feedback);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

  }, [feedback]);
  useEffect(() => {

  const handleVisibilityChange = async () => {

    if (document.hidden) {

      try {
        const response = await axios.post(
  `${API_URL}/api/ai/violation`,
  {
    interviewId: state.interviewId,
    type: "tab",
  }
);

        if (response.data.status === "terminated") {
          navigate("/dashboard");
          return;
        }

      } catch (err) {
        console.error("Tab violation failed", err);
      }

      setTabWarnings(prev => {

        const warnings = prev + 1;

        alert(
          `Warning ${warnings}/3\n\nDo not switch tabs during the interview.`
        );

        if (warnings >= 3) {

          alert(
            "Interview terminated due to repeated tab switching."
          );

          navigate("/dashboard");

        }

        return warnings;

      });

    }

  };

  document.addEventListener(
    "visibilitychange",
    handleVisibilityChange
  );

  return () => {

    document.removeEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

  };

}, [navigate, state?.interviewId]);
useEffect(() => {

  const enterFullscreen = async () => {

    try {

      if (!document.fullscreenElement) {

        await document.documentElement.requestFullscreen();

      }

    } catch (err) {

      console.log(err);

    }

  };

  enterFullscreen();

}, []);
useEffect(() => {

  const handleFullscreenChange = async () => {

    if (!document.fullscreenElement) {
      try {
  const response = await axios.post(
  `${API_URL}/api/ai/violation`,
  {
    interviewId: state.interviewId,
    type: "fullscreen",
  }
);

  if (response.data.status === "terminated") {
    navigate("/dashboard");
    return;
  }

} catch (err) {
  console.error("Fullscreen violation failed", err);
}

      setTabWarnings(prev => {

        const warnings = prev + 1;

        alert(
          `Warning ${warnings}/3\n\nDo not exit fullscreen during the interview.`
        );

        if (warnings >= 3) {

          alert(
            "Interview terminated due to repeated fullscreen violations."
          );

          navigate("/dashboard");

        }

        return warnings;

      });

    }

  };

  document.addEventListener(
    "fullscreenchange",
    handleFullscreenChange
  );

  return () => {

    document.removeEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

  };

}, [navigate, state?.interviewId]);
 
  /* ---------------- Browser Support ---------------- */

  if (!browserSupportsSpeechRecognition) {

    return (
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Browser doesn't support Speech Recognition.
      </h2>
    );

  }

  /* ---------------- Route Safety ---------------- */

  if (!state) {

    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0f172a",
          color: "white",
        }}
      >
        No Interview Found
      </div>
    );

  }

  /* ---------------- Next Question ---------------- */

  const handleNext = async () => {

    if (!answer.trim()) {

      return;

    }

    try {

      setLoading(true);
const token = localStorage.getItem("token");

const response = await axios.post(
  `${API_URL}/api/ai/next-question`,
  {
    interviewId: state.interviewId,
    answer,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      setFeedback(response.data.feedback);

      setFeedbackScore(
        response.data.score ?? null
      );

      setQuestion(response.data.question);

      setQuestionNumber(prev => prev + 1);

      setAnswer("");

      resetTranscript();

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  /* ---------------- Skip Question ---------------- */

  const handleSkip = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

const response = await axios.post(
  `${API_URL}/api/ai/next-question`,
  {
    interviewId: state.interviewId,
    answer: "Skipped",
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      setFeedback("Question Skipped.");

      setFeedbackScore(null);

      setQuestion(response.data.question);

      setQuestionNumber(prev => prev + 1);

      setAnswer("");

      resetTranscript();

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  /* ---------------- End Interview ---------------- */

  const handleEnd = () => {

    setShowEndModal(true);

  };

  const confirmEndInterview = async () => {

  try {

    setLoading(true);

    window.speechSynthesis.cancel();

    SpeechRecognition.stopListening();

    const token = localStorage.getItem("token");

const response = await axios.post(
  `${API_URL}/api/ai/end-interview`,
  {
    interviewId: state.interviewId,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
    console.log("END API RESPONSE:", response.data);
    console.log("InterviewId:", response.data.interviewId);
    setShowEndModal(false);
if (document.fullscreenElement) {
   document.exitFullscreen();
}
localStorage.removeItem("currentInterview");
    navigate(`/report/${response.data.interviewId}`, {
  state: {
    interviewId: response.data.interviewId,
  },
});

  } catch (err) {

    console.error(err);

    const message =
  err?.response?.data?.message ||
  "Failed to end interview.";

alert(message);

  } finally {

    setLoading(false);

  }

};
  const handleTimeUp = () => {

    setShowEndModal(true);

  };
    return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px",
      }}
    >
      <InterviewHeader
        role={state?.role || "Software Engineer"}
        level={state?.level || "Intermediate"}
        company={state?.company || ""}
        experience={state?.experience || "0-2 Years"}
        type={state?.type || "Technical"}
        language={state?.language || "English"}
      />
      <div className="warning-box">
    Warnings: {tabWarnings}/3
</div>

      <ProgressBar
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          alignItems: "start",
          marginTop: "25px",
        }}
      >
        {/* ---------------- Left Panel ---------------- */}

        <div>

          <QuestionCard
            question={question}
            questionNumber={questionNumber}
          />

          <FeedbackCard
            feedback={feedback}
            score={feedbackScore}
          />

          <div style={{ marginTop: "20px" }}>
            <AnswerBox
              answer={answer}
              setAnswer={setAnswer}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <VoiceControls
              listening={listening}
              question={question}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <InterviewControls
              loading={loading}
              answer={answer}
              onNext={handleNext}
              onSkip={handleSkip}
              onEnd={handleEnd}
              questionNumber={questionNumber}
            />
          </div>

        </div>

        {/* ---------------- Right Panel ---------------- */}

        <div>

          <CameraPanel
  onDisconnect={async () => {
    try {
      const response = await axios.post(
  `${API_URL}/api/ai/violation`,
  {
    interviewId: state.interviewId,
    type: "camera",
  }
);
      console.log("END API RESPONSE:", response.data);

      if (response.data.status === "terminated") {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error("Camera violation failed", err);
    }
  }}
/>

          <div style={{ marginTop: "20px" }}>

            <Timer
              isRunning={true}
              onTimeUp={handleTimeUp}
            />

          </div>
          
                  </div>

      </div>

      <ConfirmModal
        open={showEndModal}
        title="🛑 End Interview"
        message="Are you sure you want to end this interview?"
        confirmText="End Interview"
        cancelText="Continue Interview"
        onCancel={() => setShowEndModal(false)}
        onConfirm={confirmEndInterview}
      />

    </div>
  );
}

export default Interview;