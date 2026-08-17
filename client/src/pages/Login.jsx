import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import API from "../api/authApi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // Save JWT Token
      localStorage.setItem("token", res.data.token);

      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert(res.data.message);

      navigate("/dashboard");

    } catch (err) {
      alert(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>🔐 Login</h1>

        <p>Welcome back to DevArena</p>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="password-input-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="password-eye"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </span>

        </div>

        {/* Login Button */}
        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="login-links">

  <p className="forgot-text">
    <Link to="/forgot-password">
      Forgot Password?
    </Link>
  </p>

  <p className="signup-text">
    Don't have an account?{" "}
    <Link to="/signup">Sign Up</Link>
  </p>

</div>

      </div>

    </div>
  );
}

export default Login;