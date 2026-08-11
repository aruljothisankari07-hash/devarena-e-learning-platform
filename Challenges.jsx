import { useNavigate } from "react-router-dom";

function Challenges() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <h1>💻 Coding Challenges</h1>

      <p>Practice every day and improve your coding skills.</p>

      <div className="dashboard-container">

        {/* Easy */}

        <div className="dashboard-card">

          <h2>🟢 Easy</h2>

          <p>20 Challenges</p>

          <button
            className="login-btn"
            onClick={() => navigate("/challenge/easy")}
          >
            Start
          </button>

        </div>

        {/* Medium */}

        <div className="dashboard-card">

          <h2>🟡 Medium</h2>

          <p>30 Challenges</p>

          <button
            className="login-btn"
            onClick={() => navigate("/challenge/medium")}
          >
            Start
          </button>

        </div>

        {/* Hard */}

        <div className="dashboard-card">

          <h2>🔴 Hard</h2>

          <p>15 Challenges</p>

          <button
            className="login-btn"
            onClick={() => navigate("/challenge/hard")}
          >
            Start
          </button>

        </div>

      </div>

    </div>
  );
}

export default Challenges;