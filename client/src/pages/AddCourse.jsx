import { useState } from "react";
import axios from "axios";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState("");
  const [notes, setNotes] = useState(null);
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");

  const addCourse = async () => {
    if (
      !title ||
      !description ||
      !image ||
      !video ||
      !notes ||
      !level ||
      !duration
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("video", video);
      formData.append("notes", notes);
      formData.append("level", level);
      formData.append("duration", duration);

      const res = await axios.post(
        "http://localhost:5000/api/courses/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);

      setTitle("");
      setDescription("");
      setImage(null);
      setVideo("");
      setNotes(null);
      setLevel("");
      setDuration("");

      document.getElementById("courseImage").value = "";
      document.getElementById("courseNotes").value = "";

    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="dashboard-main">

      <h1>📚 Add Course</h1>

      <div className="dashboard-card">

        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <label><b>Course Thumbnail</b></label>

        <br />

        <input
          id="courseImage"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <br /><br />

        <input
          type="text"
          placeholder="YouTube Embed Link"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />

        <br /><br />

        <label><b>Course Notes (PDF)</b></label>

        <br />

        <input
          id="courseNotes"
          type="file"
          accept=".pdf"
          onChange={(e) => setNotes(e.target.files[0])}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Level (Beginner / Intermediate / Advanced)"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Duration (Example: 30 Hours)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <br /><br />

        <button
          className="login-btn"
          onClick={addCourse}
        >
          Add Course
        </button>

      </div>

    </div>
  );
}

export default AddCourse;