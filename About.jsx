function About() {
  return (
    <div className="dashboard-main">

      <div
        className="dashboard-card"
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h1>🎮 About DevArena</h1>

        <br />

        <p>
          <strong>DevArena</strong> is an online MERN Stack learning platform
          designed to help students learn web development through practical
          courses, coding challenges, quizzes and real-world projects.
        </p>

        <br />

        <h2>🎯 Our Mission</h2>

        <p>
          Our mission is to make learning programming simple, interactive and
          fun for every student.
        </p>

        <br />

        <h2>✨ What You Can Do</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>📚 Learn MERN Stack Courses</li>
          <li>📝 Attend Quizzes</li>
          <li>⭐ Earn XP Points</li>
          <li>🏆 Compete in Leaderboard</li>
          <li>📜 Download Certificates</li>
          <li>💻 Solve Coding Challenges</li>
          <li>📈 Track Your Progress</li>
        </ul>

        <br />

        <h2>🛠 Technologies Used</h2>

        <p>
          React.js • Node.js • Express.js • MongoDB • JWT Authentication •
          HTML • CSS • JavaScript
        </p>

        <br />

        <h2>❤️ Developed For Students</h2>

        <p>
          DevArena helps students build skills, improve coding knowledge and
          become industry-ready developers.
        </p>

      </div>

    </div>
  );
}

export default About;