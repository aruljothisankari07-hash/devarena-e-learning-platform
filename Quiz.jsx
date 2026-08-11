import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Quiz() {

  const navigate = useNavigate();
  const location = useLocation();

  const courseId = location.state?.courseId;
  const courseName = location.state?.courseName;

  const user = JSON.parse(localStorage.getItem("user"));

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!courseId) {
      alert("Course not selected");
      navigate("/courses");
      return;
    }

    fetchQuiz();

  }, []);

  const fetchQuiz = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/quizzes/${courseId}`
      );

      if (res.data.quizzes.length === 0) {

        alert("No Quiz Available");

        navigate("/courses");

        return;

      }

      setQuestions(res.data.quizzes);

    } catch (error) {

      console.log(error);

      alert("Quiz Not Found");

      navigate("/courses");

    } finally {

      setLoading(false);

    }

  };

  const finishQuiz = async (finalScore) => {

  try {

    // XP Update
    await axios.put(
      "http://localhost:5000/api/dashboard/xp",
      {
        userId: user._id,
        xp: finalScore * 20,
        quizScore: finalScore,
      }
    );

    // Complete Course
    await axios.post(
      "http://localhost:5000/api/dashboard/complete",
      {
        userId: user._id,
        courseId,
      }
    );

    localStorage.setItem("completedCourse", courseName);
    localStorage.setItem("completedCourseId", courseId);

    let activities =
      JSON.parse(localStorage.getItem("activities")) || [];

    activities.unshift(
      `✅ Completed ${courseName} Quiz (${finalScore}/${questions.length})`
    );

    if (activities.length > 10) {
      activities = activities.slice(0, 10);
    }

    localStorage.setItem(
      "activities",
      JSON.stringify(activities)
    );

    alert(
      `🎉 Quiz Completed!\n\nScore : ${finalScore}/${questions.length}`
    );

    navigate("/certificate");

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message ||
      "Quiz Finish Failed"
    );

  }

};

  const handleAnswer = (option) => {

    let finalScore = score;

    if (option === questions[current].answer) {

      finalScore++;

      setScore(finalScore);

    }

    if (current + 1 < questions.length) {

      setCurrent(current + 1);

    } else {

      finishQuiz(finalScore);

    }

  };

  if (loading) {

    return (
      <div className="dashboard-main">
        <h1>📝 Loading Quiz...</h1>
      </div>
    );

  }

  return (

    <div className="dashboard-main">

      <h1>📝 {courseName} Quiz</h1>

      <div className="dashboard-card">

        <h2>{questions[current].question}</h2>

        {questions[current].options.map((option, index) => (

          <button
            key={index}
            className="login-btn"
            style={{
              display: "block",
              width: "300px",
              margin: "10px auto",
            }}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>

        ))}

        <br />

        <h3>
          Question {current + 1} / {questions.length}
        </h3>

        <h3>
          Current Score : {score}
        </h3>

      </div>

    </div>

  );

}

export default Quiz;