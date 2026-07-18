import { useEffect } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function useVoice(question, language = "English") {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // ==========================
  // AI SPEAKS QUESTION
  // ==========================

  useEffect(() => {

    if (!question) return;

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(question);

    switch (language) {

      case "Hindi":
        speech.lang = "hi-IN";
        break;

      case "Hinglish":
        speech.lang = "hi-IN";
        break;

      default:
        speech.lang = "en-US";

    }

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

  }, [question, language]);

  // ==========================
  // START MIC
  // ==========================

  const startListening = () => {

    let lang = "en-US";

    if (language === "Hindi")
      lang = "hi-IN";

    if (language === "Hinglish")
      lang = "hi-IN";

    SpeechRecognition.startListening({

      continuous: true,

      language: lang,

    });

  };

  // ==========================
  // STOP MIC
  // ==========================

  const stopListening = () => {

    SpeechRecognition.stopListening();

  };

  // ==========================
  // REPEAT QUESTION
  // ==========================

  const repeatQuestion = () => {

    if (!question) return;

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(question);

    switch (language) {

      case "Hindi":
        speech.lang = "hi-IN";
        break;

      case "Hinglish":
        speech.lang = "hi-IN";
        break;

      default:
        speech.lang = "en-US";

    }

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

  };

  // ==========================
  // CLEAR
  // ==========================

  const clearTranscript = () => {

    resetTranscript();

  };

  return {

    transcript,

    listening,

    browserSupportsSpeechRecognition,

    startListening,

    stopListening,

    repeatQuestion,

    clearTranscript,

  };

}

export default useVoice;