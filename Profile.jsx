import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/dashboard/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserData(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  if (!userData) {
    return (
      <div className="dashboard-main">
        <h2>Loading Profile...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>🎮 DevArena</h2>

        <ul>
          <li><Link to="/dashboard" className="sidebar-link">🏠 Dashboard</Link></li>
          <li><Link to="/profile" className="sidebar-link">👤 Profile</Link></li>
          <li><Link to="/courses" className="sidebar-link">📚 Courses</Link></li>
          <li><Link to="/challenges" className="sidebar-link">💻 Challenges</Link></li>
          <li><Link to="/leaderboard" className="sidebar-link">🏆 Leaderboard</Link></li>
          <li><Link to="/xp" className="sidebar-link">⭐ XP</Link></li>
          <li><Link to="/settings" className="sidebar-link">⚙️ Settings</Link></li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <h1>👤 My Profile</h1>

        <div className="dashboard-card">
          <div style={{ textAlign: "center" }}>
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                userData.name || userData.email
              )}&background=2563eb&color=fff&size=150`}
              alt="profile"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
              }}
            />
          </div>

          <br />

          <h3>Name</h3>
          <p>{userData.name || "Not Added"}</p>

          <h3>Email</h3>
          <p>{userData.email}</p>

          <h3>Role</h3>
          <p>{userData.role}</p>

          <h3>Account Status</h3>

<p>
  {userData.isVerified ? (
    <span style={{ color: "#16a34a", fontWeight: "bold" }}>
      ✅ Verified
    </span>
  ) : (
    <span style={{ color: "#dc2626", fontWeight: "bold" }}>
      ❌ Not Verified
    </span>
  )}
</p>

          <h3>XP</h3>
          <p>{userData.xp}</p>

          <h3>Completed Courses</h3>
          <p>{userData.completedCourses.length}</p>

          <h3>Level</h3>

          <p>
            {userData.xp >= 1000
              ? "🏆 Master"
              : userData.xp >= 500
              ? "🔥 Expert"
              : userData.xp >= 300
              ? "🚀 Advanced"
              : userData.xp >= 100
              ? "💻 Intermediate"
              : "🌱 Beginner"}
          </p>
        </div>
      </main>
    </div>
  );
}

export default Profile;