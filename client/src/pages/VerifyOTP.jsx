import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/authApi";

function VerifyOTP() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {

    if (!email || !otp) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await API.post("/auth/verify-otp", {
        email,
        otp,
      });

      alert(res.data.message);

      navigate("/login");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "OTP Verification Failed"
      );

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>📧 Verify Email</h1>

        <p>Enter your Email and OTP</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleVerify}
        >
          Verify OTP
        </button>

      </div>

    </div>

  );

}

export default VerifyOTP;