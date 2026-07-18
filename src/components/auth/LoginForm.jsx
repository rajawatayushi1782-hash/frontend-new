import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/auth.css";

import { API_URL } from "../../config";
function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post(
  `${API_URL}/api/auth/login`,
  {
    email: data.email,
    password: data.password,
  }
);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit(onSubmit)}
      >

        <h2>Welcome Back 👋</h2>

        <p>
          Login to continue your interview preparation.
        </p>

        <div className="input-group">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
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

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters"
              }
            })}
          />

          {errors.password && (
            <span className="error">
              {errors.password.message}
            </span>
          )}

        </div>

        <div className="remember-row">

          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <a href="#">
            Forgot Password?
          </a>

        </div>

        <button
          type="submit"
          className="auth-btn"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="switch-auth">

          Don't have an account?

          <Link to="/signup">
            Sign Up
          </Link>

        </p>

      </form>

    </div>
  );
}

export default LoginForm;