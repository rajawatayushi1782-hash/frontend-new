import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../validation/signupSchema";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";

import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub
} from "react-icons/fa";

import "../../styles/auth.css";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(signupSchema)
  });

  const password = watch("password", "");

  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1)
      return {
        text: "Weak",
        width: "25%",
        color: "#ef4444"
      };

    if (score === 2)
      return {
        text: "Fair",
        width: "50%",
        color: "#f59e0b"
      };

    if (score === 3)
      return {
        text: "Strong",
        width: "75%",
        color: "#3b82f6"
      };

    return {
      text: "Excellent",
      width: "100%",
      color: "#22c55e"
    };
  };

  const strength = getStrength();

  const onSubmit = async (data) => {
  try {
    setLoading(true);

    const response = await axios.post(
  `${API_URL}/api/auth/signup`,
  {
    fullName: data.name,
    email: data.email,
    password: data.password,
  }
);

    alert(response.data.message);

    console.log(response.data);

  } catch (error) {
    console.error("Signup Error:", error);

    if (error.response) {
      alert(error.response.data.message || "Signup failed.");
    } else if (error.request) {
      alert("Cannot connect to backend. Make sure backend is running on port 5000.");
    } else {
      alert(error.message);
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="auth-top">

          <span className="auth-badge">
            AI Career Platform
          </span>

          <h2>Create your InterviewAce account</h2>

          <p>
            Prepare smarter, analyse resumes with AI,
            practice interviews, track progress and
            unlock your next opportunity.
          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="auth-form"
        >

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Aayushi Rajawat"
              {...register("name", {
                required: "Full name is required"
              })}
            />

            {errors.name && (
              <span className="error">
                {errors.name.message}
              </span>
            )}

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required"
              })}
            />

            {errors.email && (
              <span className="error">
                {errors.email.message}
              </span>
            )}

          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="password-box">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message:
                      "Minimum 8 characters"
                  }
                })}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword
                  ? <FaEyeSlash />
                  : <FaEye />}
              </button>

            </div>

            <div className="strength">

              <div className="strength-bar">

                <span
                  style={{
                    width: strength.width,
                    background: strength.color
                  }}
                />

              </div>

              <small
                style={{
                  color: strength.color
                }}
              >
                {strength.text}
              </small>

            </div>

            {errors.password && (
              <span className="error">
                {errors.password.message}
              </span>
            )}

          </div>

          <div className="input-group">

            <label>Confirm Password</label>

            <div className="password-box">

              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required:
                    "Confirm your password",

                  validate: (value) =>
                    value === password ||
                    "Passwords do not match"
                })}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                {showConfirm
                  ? <FaEyeSlash />
                  : <FaEye />}
              </button>

            </div>

            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword.message}
              </span>
            )}

          </div>

          <button
            className="auth-btn"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-login">

            <button
              type="button"
              className="social-btn"
            >
              <FaGoogle />
              Google
            </button>

            <button
              type="button"
              className="social-btn"
            >
              <FaGithub />
              GitHub
            </button>

          </div>

          <p className="switch-auth">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default SignupForm;