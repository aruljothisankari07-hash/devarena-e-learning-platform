import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="dashboard-main">

      <h1>🛠️ Admin Dashboard</h1>

      <div className="dashboard-container">

        {/* Add Course */}
        <div className="dashboard-card">
          <h2>➕ Add Course</h2>
          <p>Create New Courses</p>

          <Link to="/admin/add-course">
            <button className="login-btn">
              Add Course
            </button>
          </Link>
        </div>

        {/* Manage Courses */}
        <div className="dashboard-card">
          <h2>📚 Manage Courses</h2>
          <p>Edit / Delete Existing Courses</p>

          <Link to="/admin/manage-courses">
            <button className="login-btn">
              Manage Courses
            </button>
          </Link>
        </div>

        {/* Add Quiz */}
        <div className="dashboard-card">
          <h2>➕ Add Quiz</h2>
          <p>Create New Quiz Questions</p>

          <Link to="/admin/add-quiz">
            <button className="login-btn">
              Add Quiz
            </button>
          </Link>
        </div>

        {/* Manage Quiz */}
        <div className="dashboard-card">
          <h2>📝 Manage Quiz</h2>
          <p>Edit / Delete Quiz Questions</p>

          <Link to="/admin/manage-quiz">
            <button className="login-btn">
              Manage Quiz
            </button>
          </Link>
        </div>

        {/* Users */}
        <div className="dashboard-card">
          <h2>👨‍🎓 Users</h2>
          <p>View Registered Users</p>

          <Link to="/admin/users">
            <button className="login-btn">
              View Users
            </button>
          </Link>
        </div>

        {/* Notes */}
        <div className="dashboard-card">
          <h2>📄 Notes</h2>
          <p>Upload PDF Notes</p>

          <Link to="/admin/upload-notes">
            <button className="login-btn">
              Upload Notes
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Admin;