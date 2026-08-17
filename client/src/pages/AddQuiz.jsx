import { useEffect, useState } from "react";
import axios from "axios";

function AddQuiz() {
  const [courses, setCourses] = useState([]);

  const [courseId, setCourseId] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/courses"
      );

      setCourses(res.data.courses);
    } catch (err) {
      console.log(err);
    }
  };

  const addQuiz = async () => {
    if (
      !courseId ||
      !question ||
      !option1 ||
      !option2 ||
      !option3 ||
      !option4 ||
      !answer
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/quizzes/add",
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

      alert(res.data.message);

      setCourseId("");
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setAnswer("");

    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="dashboard-main">

      <h1>📝 Add Quiz</h1>

      <div className="dashboard-card">

        <select
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          <option value="">
            Select Course
          </option>

          {courses.map((course) => (
            <option
              key={course._id}
              value={course._id}
            >
              {course.title}
            </option>
          ))}
        </select>

        <br /><br />

        <textarea
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Option 1"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Option 2"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Option 3"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Option 4"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Correct Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <br /><br />

        <button
          className="login-btn"
          onClick={addQuiz}
        >
          Add Quiz
        </button>

      </div>

    </div>
  );
}

export default AddQuiz;