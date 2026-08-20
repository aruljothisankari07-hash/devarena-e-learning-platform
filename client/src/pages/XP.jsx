import { useEffect, useState } from "react";
import axios from "axios";

function XP() {

  const [xp, setXp] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {

    if (user?._id) {
      fetchXP();
    }

  }, []);

  const fetchXP = async () => {

    try {

      const res = await axios.get(

        `https://devarena-e-learning-platform.onrender.com/api/dashboard/${user._id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

      setXp(res.data.user.xp || 0);

      setCompleted(
        res.data.user.completedCourses?.length || 0
      );

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  const level =
    xp >= 1000
      ? "🏆 Master"
      : xp >= 700
      ? "🔥 Expert"
      : xp >= 400
      ? "🚀 Advanced"
      : xp >= 200
      ? "💻 Intermediate"
      : "🌱 Beginner";

  const progress = Math.min((xp / 1000) * 100, 100);

  if (loading) {

    return (

      <div className="dashboard-main">

        <h1>Loading XP...</h1>

      </div>

    );

  }

  return (

    <div className="dashboard-main">

      <h1>⭐ XP Dashboard</h1>

      <div className="dashboard-card">

        <h2>Total XP</h2>

        <h1>{xp} XP</h1>

        <h3>{level}</h3>

        <br />

        <div
          style={{
            width: "100%",
            height: "22px",
            background: "#e5e7eb",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >

          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#2563eb",
              transition: "0.5s",
            }}
          />

        </div>

        <br />

        <h3>{progress.toFixed(0)}% Completed</h3>

        <hr />

        <h2>Completed Courses</h2>

        <h1>{completed}</h1>

        <hr />

        <h2>Reward</h2>

        <h3>

          {xp >= 1000
            ? "🏆 Gold Badge"
            : xp >= 700
            ? "🥇 Silver Badge"
            : xp >= 400
            ? "🥈 Bronze Badge"
            : "🚀 Keep Learning"}

        </h3>

      </div>

    </div>

  );

}

export default XP;