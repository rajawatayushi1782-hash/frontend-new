import SpeechRecognition from "react-speech-recognition";
import "./interview.css";

function VoiceControls({
  listening,
  question,
}) {

  const repeatQuestion = () => {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(question);

    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);

  };

  return (

    <div className="voice-card">

      <div className="voice-header">

        <h2>🎤 Voice Controls</h2>

        <span
          className={
            listening
              ? "mic-live"
              : "mic-off"
          }
        >
          {listening
            ? "Listening..."
            : "Mic Stopped"}
        </span>

      </div>

      <div className="voice-buttons">

        <button
          className="voice-btn start-btn"
          onClick={() =>
            SpeechRecognition.startListening({
              continuous: true,
              language: "en-US",
            })
          }
        >
          🎤 Start Mic
        </button>

        <button
          className="voice-btn stop-btn"
          onClick={
            SpeechRecognition.stopListening
          }
        >
          ⏹ Stop Mic
        </button>

        <button
          className="voice-btn repeat-btn"
          onClick={repeatQuestion}
        >
          🔊 Repeat Question
        </button>

      </div>

    </div>

  );
}

export default VoiceControls;