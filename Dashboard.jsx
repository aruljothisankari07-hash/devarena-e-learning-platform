import { Link } from "react-router-dom";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  const username = user?.name || "Developer";
  const xp = user?.xp || 0;
  const streak = user?.streak || 1;
  const completedCourses = user?.completedCourses?.length || 0;
  const totalCourses = 10;

  const progress = Math.round((completedCourses / totalCourses) * 100);

  const activities =
    JSON.parse(localStorage.getItem("activities")) || [];

  return (

    <div className="dashboard-layout">

      {/* Sidebar */}

      <aside className="sidebar">

        <h2>🎮 DevArena</h2>

        <ul>

          <li><Link to="/dashboard" className="sidebar-link">🏠 Dashboard</Link></li>
          <li><Link to="/profile" className="sidebar-link">👤 Profile</Link></li>
          <li><Link to="/courses" className="sidebar-link">📚 My Courses</Link></li>
          <li><Link to="/challenges" className="sidebar-link">💻 Challenges</Link></li>
          <li><Link to="/leaderboard" className="sidebar-link">🏆 Leaderboard</Link></li>
          <li><Link to="/xp" className="sidebar-link">⭐ XP</Link></li>
          <li><Link to="/progress" className="sidebar-link">📈 Progress</Link></li>
          <li><Link to="/achievements" className="sidebar-link">🏅 Achievements</Link></li>
          <li><Link to="/settings" className="sidebar-link">⚙️ Settings</Link></li>

        </ul>

      </aside>

      {/* Main */}

      <main className="dashboard-main">

        {/* Hero Section */}

        <div className="hero-dashboard">

          <div>

            <h1>Welcome Back, {username} 👋</h1>

            <p>
              Continue your Full Stack Developer Journey and unlock new achievements.
            </p>

            <Link to="/courses">
              <button className="hero-btn">
                🚀 Continue Learning
              </button>
            </Link>

          </div>

          <div className="hero-image">
            💻
          </div>

        </div>
      {/* ===== Statistics ===== */}

<div className="stats-container">

  <div className="stats-card">
    <h2>📚</h2>
    <h3>Courses</h3>
    <p>{completedCourses}</p>
  </div>

  <div className="stats-card">
    <h2>⭐</h2>
    <h3>XP</h3>
    <p>{xp}</p>
  </div>

  <div className="stats-card">
  <h2>🔥</h2>
  <h3>Daily Streak</h3>
  <p>{streak} Days</p>
</div>

  <div className="stats-card">
    <h2>📈</h2>
    <h3>Progress</h3>
    <p>{progress}%</p>
  </div>

  <div className="stats-card">
    <h2>🏆</h2>
    <h3>Achievements</h3>
    <p>{activities.length}</p>
  </div>

</div>

        {/* Progress */}

        <div className="dashboard-card">

          <h2>📊 Learning Progress</h2>

          <p>
            Completed Courses : {completedCourses} / {totalCourses}
          </p>

          <div
            style={{
              width: "100%",
              height: "20px",
              background: "#334155",
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "15px"
            }}
          >

            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "#22c55e"
              }}
            ></div>

          </div>

          <h3 style={{ marginTop: "15px" }}>
            {progress}% Completed
          </h3>

        </div>

        {/* Recent Activity */}

        <div className="dashboard-card">

          <h2>📌 Recent Activity</h2>

          {activities.length === 0 ? (

            <p>No recent activity yet.</p>

          ) : (

            <ul className="activity-list">

              {activities.map((activity, index) => (

                <li key={index}>{activity}</li>

              ))}

            </ul>

          )}

        </div>

        {/* ===== Continue Learning ===== */}

<div className="dashboard-card">

  <h2>📚 Continue Learning</h2>

  <div className="continue-grid">

    <div className="course-progress-card">
      <h3>⚛️ React.js</h3>
      <p>Progress : 60%</p>

      <div className="course-progress-bar">
        <div style={{ width: "60%" }}></div>
      </div>

      <Link to="/courses">
        <button className="login-btn">Continue</button>
      </Link>
    </div>

    <div className="course-progress-card">
      <h3>🟢 Node.js</h3>
      <p>Progress : 80%</p>

      <div className="course-progress-bar">
        <div style={{ width: "80%" }}></div>
      </div>

      <Link to="/courses">
        <button className="login-btn">Continue</button>
      </Link>
    </div>

    <div className="course-progress-card">
      <h3>🍃 MongoDB</h3>
      <p>Progress : 40%</p>

      <div className="course-progress-bar">
        <div style={{ width: "40%" }}></div>
      </div>

      <Link to="/courses">
        <button className="login-btn">Continue</button>
      </Link>
    </div>

  </div>

</div>

        {/* Quick Access */}

        <div className="dashboard-container">

          <div className="dashboard-card">
            <h2>👤 My Profile</h2>
            <Link to="/profile">
              <button className="login-btn">Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h2>📚 Courses</h2>
            <Link to="/courses">
              <button className="login-btn">Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h2>💻 Challenges</h2>
            <Link to="/challenges">
              <button className="login-btn">Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h2>🏆 Leaderboard</h2>
            <Link to="/leaderboard">
              <button className="login-btn">Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h2>🏅 Achievements</h2>
            <Link to="/achievements">
              <button className="login-btn">Open</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <h2>⚙️ Settings</h2>
            <Link to="/settings">
              <button className="login-btn">Open</button>
            </Link>
          </div>

        </div>

      </main>

    </div>

  );

}

export default Dashboard;