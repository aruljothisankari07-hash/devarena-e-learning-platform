import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageQuiz() {

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/quizzes");

      setQuizzes(res.data.quizzes);

    } catch (err) {
      console.log(err);
    }
  };

  const deleteQuiz = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this Quiz?"
    );

    if (!confirmDelete) return;

    try {

      const res = await axios.delete(
        `http://localhost:5000/api/quizzes/${id}`
      );

      alert(res.data.message);

      fetchQuizzes();

    } catch (err) {

      alert(err.response?.data?.message || err.message);

    }

  };

  return (

    <div className="dashboard-main">

      <h1>📝 Manage Quiz</h1>

      <div className="dashboard-container">

        {quizzes.map((quiz) => (

          <div
            className="dashboard-card"
            key={quiz._id}
          >

            <h3>{quiz.question}</h3>

            <p>✅ Answer : {quiz.answer}</p>

            <Link
              to={`/admin/edit-quiz/${quiz._id}`}
            >
              <button className="login-btn">
                ✏ Edit
              </button>
            </Link>

            <button
              className="login-btn"
              style={{
                background: "#dc2626",
                marginLeft: "10px",
              }}
              onClick={() => deleteQuiz(quiz._id)}
            >
              🗑 Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default ManageQuiz;