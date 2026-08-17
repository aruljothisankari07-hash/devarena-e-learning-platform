import { useEffect, useState } from "react";
import axios from "axios";

function Progress() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/dashboard/${user._id}`
      );

      setData(res.data.user);

    } catch (err) {

      console.log(err);

    }

  };

  if (!data) {

    return (
      <div className="dashboard-main">
        <h1>Loading...</h1>
      </div>
    );

  }

  const progress = Math.min(
    (data.completedCourses.length / 10) * 100,
    100
  );

  // Badge
  let badge = "🥉 Bronze";

  if (data.xp >= 1000) {
    badge = "👑 Master";
  } else if (data.xp >= 700) {
    badge = "🏆 Gold";
  } else if (data.xp >= 400) {
    badge = "🥈 Silver";
  }

  // Level
  let level = "Beginner";

  if (data.xp >= 1000) {
    level = "Master";
  } else if (data.xp >= 700) {
    level = "Expert";
  } else if (data.xp >= 400) {
    level = "Intermediate";
  }

  return (

    <div className="dashboard-main">

      <h1>📈 User Progress</h1>

      <div className="dashboard-card">

        <h2>{data.name || data.email}</h2>

        <hr />

        <h3>⭐ XP : {data.xp}</h3>

        <h3>🎖 Badge : {badge}</h3>

        <h3>📊 Level : {level}</h3>

        <h3>📝 Quiz Score : {data.quizScore}</h3>

        <h3>
          📚 Completed Courses :
          {" "}
          {data.completedCourses.length}
        </h3>

        <h3>
          📜 Certificate :
          {" "}
          {data.certificateUnlocked ? "✅ Unlocked" : "❌ Locked"}
        </h3>

        <br />

        <h2>Overall Progress</h2>

        <div
          style={{
            width: "100%",
            height: "20px",
            background: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >

          <div
            style={{
              width: `${progress}%`,
              height: "20px",
              background: "#22c55e",
              transition: "0.5s",
            }}
          ></div>

        </div>

        <p>{progress.toFixed(0)}% Completed</p>

        <hr />

        <h2>Completed Course List</h2>

        {
          data.completedCourses.length > 0 ? (

            <ul style={{ textAlign: "left" }}>

              {
                data.completedCourses.map((course) => (

                  <li key={course._id}>
                    {course.title}
                  </li>

                ))
              }

            </ul>

          ) : (

            <p>No Courses Completed Yet</p>

          )
        }

      </div>

    </div>

  );

}

export default Progress;