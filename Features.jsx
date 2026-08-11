import {
  FaLaptopCode,
  FaProjectDiagram,
  FaTrophy,
  FaCertificate,
  FaUsers,
  FaBrain,
} from "react-icons/fa";

function Features() {
  return (
    <div className="features-page">

      <section className="page-hero">

        <h1>✨ DevArena Features</h1>

        <p>
          Everything you need to become a Professional Full Stack Developer.
        </p>

      </section>

      <section className="features-grid">

        <div className="feature-box">
          <FaLaptopCode className="feature-icon" />
          <h2>Coding Challenges</h2>
          <p>
            Solve Beginner, Intermediate and Advanced coding problems.
          </p>
        </div>

        <div className="feature-box">
          <FaProjectDiagram className="feature-icon" />
          <h2>Real Projects</h2>
          <p>
            Build MERN Stack Projects with real-world examples.
          </p>
        </div>

        <div className="feature-box">
          <FaTrophy className="feature-icon" />
          <h2>Leaderboard</h2>
          <p>
            Compete with developers and climb the rankings.
          </p>
        </div>

        <div className="feature-box">
          <FaCertificate className="feature-icon" />
          <h2>Certificates</h2>
          <p>
            Earn certificates after completing quizzes successfully.
          </p>
        </div>

        <div className="feature-box">
          <FaUsers className="feature-icon" />
          <h2>Community</h2>
          <p>
            Learn together with thousands of developers.
          </p>
        </div>

        <div className="feature-box">
          <FaBrain className="feature-icon" />
          <h2>Track Progress</h2>
          <p>
            Monitor your XP, achievements and learning progress.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Features;