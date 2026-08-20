import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditQuiz() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [courseId, setCourseId] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {

    try {

      const res = await axios.get(
        "https://devarena-e-learning-platform.onrender.com/api/quizzes"
      );

      const quiz = res.data.quizzes.find(
        (q) => q._id === id
      );

      if (!quiz) {
        alert("Quiz Not Found");
        return;
      }

      setCourseId(quiz.courseId);
      setQuestion(quiz.question);
      setOption1(quiz.options?.[0] || "");
      setOption2(quiz.options?.[1] || "");
      setOption3(quiz.options?.[2] || "");
      setOption4(quiz.options?.[3] || "");
      setAnswer(quiz.answer);

    } catch (err) {

      console.log(err);

    }

  };

  const updateQuiz = async () => {

    try {

      await axios.put(
        `https://devarena-e-learning-platform.onrender.com/api/quizzes/${id}`,
        {
          courseId,
          question,
          options: [
            option1,
            option2,
            option3,
            option4,
          ],
          answer,
        }
      );

      alert("✅ Quiz Updated Successfully");

      navigate("/admin/manage-quiz");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Update Failed"
      );

    }

  };

  return (

    <div className="dashboard-main">

      <h1>✏ Edit Quiz</h1>

      <div className="dashboard-card">

        <input
          type="text"
          placeholder="Course ID"
          value={courseId}
          onChange={(e) =>
            setCourseId(e.target.value)
          }
        />

        <br /><br />

        <textarea
          placeholder="Question"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Option 1"
          value={option1}
          onChange={(e) =>
            setOption1(e.target.value)
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Option 2"
          value={option2}
          onChange={(e) =>
            setOption2(e.target.value)
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Option 3"
          value={option3}
          onChange={(e) =>
            setOption3(e.target.value)
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Option 4"
          value={option4}
          onChange={(e) =>
            setOption4(e.target.value)
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Correct Answer"
          value={answer}
          onChange={(e) =>
            setAnswer(e.target.value)
          }
        />

        <br /><br />

        <button
          className="login-btn"
          onClick={updateQuiz}
        >
          ✅ Update Quiz
        </button>

      </div>

    </div>

  );

}

export default EditQuiz;