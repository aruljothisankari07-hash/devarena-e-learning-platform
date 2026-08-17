import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/courses/${id}`
      );

      setCourse(res.data.course);
    } catch (err) {
      console.log(err);
    }
  };

  const markAsCompleted = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/dashboard/complete",
        {
          userId: user._id,
          courseId: course._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(`🎉 ${res.data.message}\nXP: ${res.data.xp}`);

      // Save completed course
      localStorage.setItem("completedCourse", course.title);
      localStorage.setItem("completedCourseId", course._id);

      // Back to Dashboard
      navigate("/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  if (!course) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading Course...
      </h2>
    );
  }

  return (
    <div className="dashboard-layout">

      <aside className="sidebar">
        <h2>🎮 DevArena</h2>

        <ul>
          <li><Link to="/dashboard" className="sidebar-link">🏠 Dashboard</Link></li>
          <li><Link to="/courses" className="sidebar-link">📚 Courses</Link></li>
          <li><Link to="/challenges" className="sidebar-link">💻 Challenges</Link></li>
          <li><Link to="/leaderboard" className="sidebar-link">🏆 Leaderboard</Link></li>
          <li><Link to="/xp" className="sidebar-link">⭐ XP</Link></li>
          <li><Link to="/settings" className="sidebar-link">⚙️ Settings</Link></li>
        </ul>
      </aside>

      <main className="dashboard-main">

        <h1>{course.title}</h1>

        <div className="dashboard-card">
          <h2>📖 About this Course</h2>

          <p>{course.description}</p>

          <p><b>Level:</b> {course.level}</p>
          <p><b>Duration:</b> {course.duration}</p>
        </div>

        {course.video && (
          <div className="dashboard-card">
            <h2>🎥 Course Video</h2>

            <iframe
              width="100%"
              height="450"
              src={course.video}
              title={course.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {course.notes && (
          <div className="dashboard-card">
            <h2>📄 Notes</h2>

            <a
              href={
                course.notes.startsWith("http")
                  ? course.notes
                  : `http://localhost:5000${course.notes}`
              }
              target="_blank"
              rel="noreferrer"
            >
              <button className="login-btn">
                📥 Download Notes
              </button>
            </a>
          </div>
        )}

        <div className="dashboard-card">
          <h2>📝 Quiz</h2>

          <Link
            to="/quiz"
            state={{
              courseId: course._id,
              courseName: course.title,
            }}
          >
            <button className="login-btn">
              Start Quiz
            </button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>🏆 Complete Course</h2>

          <button
            className="login-btn"
            onClick={markAsCompleted}
          >
            Mark as Completed
          </button>
        </div>

      </main>

    </div>
  );
}

export default CourseDetails;