import "./index.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Features from "./pages/Features";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Challenges from "./pages/Challenges";
import Leaderboard from "./pages/Leaderboard";
import XP from "./pages/XP";
import Progress from "./pages/Progress";
import Achievements from "./pages/Achievements";
import Settings from "./pages/Settings";
import Quiz from "./pages/Quiz";
import Certificate from "./pages/Certificate";
import Profile from "./pages/Profile";
import VerifyOTP from "./pages/VerifyOTP";
import Admin from "./pages/Admin";

import AddCourse from "./pages/AddCourse";
import AddQuiz from "./pages/AddQuiz";
import Users from "./pages/Users";
import UploadNotes from "./pages/UploadNotes";
import ManageCourses from "./pages/ManageCourses";
import EditCourse from "./pages/EditCourse";
import ManageQuiz from "./pages/ManageQuiz";
import EditQuiz from "./pages/EditQuiz";
import EasyChallenge from "./pages/EasyChallenge";
import MediumChallenge from "./pages/MediumChallenge";
import HardChallenge from "./pages/HardChallenge";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");

  };

  return (
    <>

      <nav className="navbar">

        <div className="logo">

         <h1 className="logo-title">
           🎮 DevArena
         </h1>

        <p className="logo-subtitle">
            Learn • Build • Compete • Grow
        </p>

        </div>

        <div className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>

          {token ? (
            <>

              <Link to="/dashboard">Dashboard</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/challenges">Challenges</Link>
              <Link to="/leaderboard">Leaderboard</Link>
              <Link to="/xp">XP</Link>
              <Link to="/progress">Progress</Link>
              <Link to="/achievements">Achievements</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/admin">Admin</Link>
              <Link to="/settings">Settings</Link>

              <span
                style={{
                  color: "white",
                  marginRight: "10px",
                }}
              >
                {user?.email}
              </span>

              <button
  className="theme-btn"
  onClick={toggleDarkMode}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>
              <button onClick={handleLogout}>
                Logout
              </button>

            </>
          ) : (

            <Link to="/login">
              <button>Login</button>
            </Link>

          )}

        </div>

      </nav>

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/verify-otp"
  element={<VerifyOTP />}
/>
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/certificate"
          element={
            <ProtectedRoute>
              <Certificate />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/xp"
          element={
            <ProtectedRoute>
              <XP />
            </ProtectedRoute>
          }
        />

        <Route
         path="/achievements"
         element={
           <ProtectedRoute>
             <Achievements />
           </ProtectedRoute>
         }
        />

        {/* ✅ Progress */}

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/challenges"
          element={
            <ProtectedRoute>
              <Challenges />
            </ProtectedRoute>
          }
        />

        <Route
          path="/challenge/easy"
          element={
           <ProtectedRoute>
              <EasyChallenge />
          </ProtectedRoute>
         }
        />

        <Route
          path="/challenge/medium"
          element={
           <ProtectedRoute>
             <MediumChallenge />
           </ProtectedRoute>
         }
        />

        <Route
          path="/challenge/hard"
          element={
           <ProtectedRoute>
             <HardChallenge />
           </ProtectedRoute>
          }
       />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-course"
          element={
            <ProtectedRoute>
              <AddCourse />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-courses"
          element={
            <ProtectedRoute>
              <ManageCourses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-course/:id"
          element={
            <ProtectedRoute>
              <EditCourse />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-quiz"
          element={
            <ProtectedRoute>
              <AddQuiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-quiz"
          element={
            <ProtectedRoute>
              <ManageQuiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-quiz/:id"
          element={
            <ProtectedRoute>
              <EditQuiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/upload-notes"
          element={
            <ProtectedRoute>
              <UploadNotes />
            </ProtectedRoute>
          }
        />

      </Routes>

    </>
  );
}

export default App;