import { useState } from "react";

function Settings() {
  const [name, setName] = useState("DevArena User");
  const [email, setEmail] = useState("user@gmail.com");

  const handleSave = () => {
    alert("✅ Profile Updated Successfully!");
  };

  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🎮 DevArena</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>📚 My Courses</li>
          <li>💻 Coding Challenges</li>
          <li>🏆 Leaderboard</li>
          <li>⭐ XP Points</li>
          <li style={{ color: "#38bdf8", fontWeight: "bold" }}>
            ⚙️ Settings
          </li>
        </ul>
      </aside>

      {/* Main */}
      <main className="dashboard-main">

        <h1>⚙️ Account Settings</h1>

        <div className="dashboard-card" style={{ maxWidth: "500px" }}>

          <h2>Edit Profile</h2>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />

          <br /><br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <br /><br />

          <button
            className="login-btn"
            onClick={handleSave}
          >
            Save Changes
          </button>

        </div>

      </main>

    </div>
  );
}

export default Settings;