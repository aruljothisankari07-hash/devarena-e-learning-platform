import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Courses() {

  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

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

  return (

    <div className="courses-page">

      <div className="courses-header">

        <h1>📚 Explore Courses</h1>

        <p>
          Learn MERN Stack with hands-on projects,
          quizzes and certificates.
        </p>

      </div>

      <div className="courses-grid">

        {courses.map((course) => (

          <div
            className="course-card"
            key={course._id}
          >

            <img
              src={`http://localhost:5000${course.image}`}
              alt={course.title}
              className="course-image"
            />

            <div className="course-content">

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <button
                className="course-btn"
                onClick={() =>
                  navigate(`/course/${course._id}`)
                }
              >
                🚀 Start Learning
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Courses;