import heroImage from "../assets/hero.jpg";
import { FaCode, FaRocket, FaTrophy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const handleStart = () => {

    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }

  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)), url(${heroImage})`,
        }}
      >
        <h1>🚀 Welcome to DevArena</h1>

        <p>
          Master MERN Stack by solving coding challenges,
          building real-world projects, earning XP and
          competing with developers.
        </p>

        <button
          className="start-btn"
          onClick={handleStart}
        >
          🚀 Start Your Journey
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>✨ Our Features</h2>

        <div className="feature-container">
          <div className="card">
            <h1><FaCode /></h1>
            <h2>Coding Challenges</h2>
            <p>
              Practice coding every day with beginner to advanced problems.
            </p>
          </div>

          <div className="card">
            <h1><FaRocket /></h1>
            <h2>MERN Projects</h2>
            <p>
              Build real-world React, Node.js, Express and MongoDB projects.
            </p>
          </div>

          <div className="card">
            <h1><FaTrophy /></h1>
            <h2>Leaderboard</h2>
            <p>
              Earn XP, unlock achievements and compete with developers.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stat-box">
          <h1>1000+</h1>
          <p>Students</p>
        </div>

        <div className="stat-box">
          <h1>250+</h1>
          <p>Coding Challenges</p>
        </div>

        <div className="stat-box">
          <h1>50+</h1>
          <p>Real Projects</p>
        </div>

        <div className="stat-box">
          <h1>24/7</h1>
          <p>Learning Support</p>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <h2>❤️ What Our Students Say</h2>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <h3>👨‍💻 Arjun</h3>
            <p>
              "DevArena helped me learn React and MERN in a fun way.
              The coding challenges are amazing!"
            </p>
          </div>

          <div className="testimonial-card">
            <h3>👩‍💻 Priya</h3>
            <p>
              "I completed my first full-stack project because of DevArena.
              Highly recommended!"
            </p>
          </div>

          <div className="testimonial-card">
            <h3>👨‍🎓 Rahul</h3>
            <p>
              "Leaderboard and XP system motivated me to practice every day."
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>🔥 Why Choose DevArena?</h2>

        <div className="why-container">
          <div className="why-card">
            <h3>🎯 Learn by Building</h3>
            <p>
              Create real MERN projects instead of only watching videos.
            </p>
          </div>

          <div className="why-card">
            <h3>🏆 Earn XP</h3>
            <p>
              Complete challenges, unlock badges and level up your profile.
            </p>
          </div>

          <div className="why-card">
            <h3>🌍 Community</h3>
            <p>
              Compete with other developers and improve every day.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>🎮 DevArena</h2>

        <p>Learn • Build • Practice • Grow</p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </div>

        <p className="copyright">
          © 2026 DevArena | Built with ❤️ using React
        </p>
      </footer>
    </>
  );
}

export default Home;