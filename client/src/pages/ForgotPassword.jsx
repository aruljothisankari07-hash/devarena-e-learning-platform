import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleReset = () => {

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Password reset link has been sent to your email.");

    navigate("/login");

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>🔑 Forgot Password</h1>

        <p>
          Enter your registered email address.
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleReset}
        >
          Send Reset Link
        </button>

      </div>

    </div>

  );

}

export default ForgotPassword;