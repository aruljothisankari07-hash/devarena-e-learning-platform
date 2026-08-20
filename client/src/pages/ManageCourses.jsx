import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageCourses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {

    try {

      const res = await axios.get(
        "https://devarena-e-learning-platform.onrender.com/api/courses"
      );

      setCourses(res.data.courses);

    } catch (err) {

      console.log(err);

    }

  };

  const deleteCourse = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {

      const res = await axios.delete(
        `https://devarena-e-learning-platform.onrender.com/api/courses/${id}`
      );

      alert(res.data.message);

      fetchCourses();

    } catch (err) {

      alert(err.response?.data?.message || err.message);

    }

  };

  return (

    <div className="dashboard-main">

      <h1>📚 Manage Courses</h1>

      <div className="dashboard-container">

        {courses.length > 0 ? (

          courses.map((course) => (

            <div
              className="dashboard-card"
              key={course._id}
            >

              <img
                src={`https://devarena-e-learning-platform.onrender.com${course.image}`}
                alt={course.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />

              <h2>{course.title}</h2>

              <p>
                <b>Level :</b> {course.level}
              </p>

              <p>
                <b>Duration :</b> {course.duration}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >

                <Link
                  to={`/admin/edit-course/${course._id}`}
                >
                  <button className="login-btn">
                    ✏ Edit
                  </button>
                </Link>

                <button
                  className="login-btn"
                  style={{
                    background: "#dc2626",
                  }}
                  onClick={() =>
                    deleteCourse(course._id)
                  }
                >
                  🗑 Delete
                </button>

              </div>

            </div>

          ))

        ) : (

          <h2>No Courses Found</h2>

        )}

      </div>

    </div>

  );

}

export default ManageCourses;