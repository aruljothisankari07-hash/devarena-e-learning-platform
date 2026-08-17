import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCourse() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/courses/${id}`
      );

      const course = res.data.course;

      setTitle(course.title);
      setDescription(course.description);
      setVideo(course.video);
      setLevel(course.level);
      setDuration(course.duration);

      setLoading(false);

    } catch (err) {

      console.log(err);

      alert("Failed to load course");

    }

  };

  const updateCourse = async () => {

    if (
      !title ||
      !description ||
      !video ||
      !level ||
      !duration
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await axios.put(
        `http://localhost:5000/api/courses/${id}`,
        {
          title,
          description,
          video,
          level,
          duration,
        }
      );

      alert(res.data.message);

      navigate("/admin/manage-courses");

    } catch (err) {

      alert(err.response?.data?.message || err.message);

    }

  };

  if (loading) {
    return (
      <div className="dashboard-main">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (

    <div className="dashboard-main">

      <h1>✏ Edit Course</h1>

      <div className="dashboard-card">

        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Youtube Embed Link"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
        />

        <br /><br />

        <button
          className="login-btn"
          onClick={updateCourse}
        >
          💾 Update Course
        </button>

      </div>

    </div>

  );

}

export default EditCourse;