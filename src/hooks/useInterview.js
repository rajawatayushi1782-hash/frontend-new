import { useState } from "react";

import {
  startInterview,
  nextQuestion,
  endInterview,
} from "../services/interviewService";

function useInterview() {

  const [question, setQuestion] = useState("");

  const [feedback, setFeedback] = useState("");

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const [interviewId, setInterviewId] =
    useState(null);

  const [questionNumber, setQuestionNumber] =
    useState(1);

  const [finished, setFinished] =
    useState(false);

  const [report, setReport] =
    useState(null);

  // =========================
  // START INTERVIEW
  // =========================

  const start = async (payload) => {

    try {

      setLoading(true);

      const data =
        await startInterview(payload);

      setInterviewId(data.interviewId);

      setQuestion(data.question);

      setQuestionNumber(1);

      setFeedback("");

      setAnswer("");

    } catch (err) {

      console.log(err);

      alert("Failed to start interview.");

    } finally {

      setLoading(false);

    }

  };

  // =========================
  // NEXT QUESTION
  // =========================

  const next = async () => {

    if (!answer.trim()) {

      alert("Please answer first.");

      return;

    }

    try {

      setLoading(true);

      const data =
        await nextQuestion(
          interviewId,
          answer
        );

      setFeedback(data.feedback);

      setQuestion(data.question);

      setAnswer("");

      setQuestionNumber((prev) => prev + 1);

    } catch (err) {

      console.log(err);

      alert("Failed to continue interview.");

    } finally {

      setLoading(false);

    }

  };

  // =========================
  // END INTERVIEW
  // =========================

  const finish = async () => {

    try {

      setLoading(true);

      const data =
        await endInterview(
          interviewId
        );

      setFinished(true);

      setReport(data);

    } catch (err) {

      console.log(err);

      alert("Unable to end interview.");

    } finally {

      setLoading(false);

    }

  };

  // =========================
  // RESET
  // =========================

  const restart = () => {

    setQuestion("");

    setFeedback("");

    setAnswer("");

    setQuestionNumber(1);

    setInterviewId(null);

    setFinished(false);

    setReport(null);

  };

  return {

    loading,

    question,

    answer,

    feedback,

    interviewId,

    questionNumber,

    finished,

    report,

    setAnswer,

    start,

    next,

    finish,

    restart,

  };

}

export default useInterview;