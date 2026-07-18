import axios from "axios";
import { API_URL } from "../config";

const API = `${API_URL}/api/ai`;

export const startInterview = async (data) => {
  const response = await axios.post(
    `${API}/question`,
    data
  );

  return response.data;
};

export const nextQuestion = async (
  interviewId,
  answer
) => {
  const response = await axios.post(
    `${API}/next-question`,
    {
      interviewId,
      answer,
    }
  );

  return response.data;
};

export const endInterview = async (
  interviewId
) => {
  const response = await axios.post(
    `${API}/end`,
    {
      interviewId,
    }
  );

  return response.data;
};