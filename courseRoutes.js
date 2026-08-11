const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const {
  addCourse,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

// ===============================
// Add Course
// ===============================
router.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "notes", maxCount: 1 },
  ]),
  addCourse
);

// ===============================
// Get All Courses
// ===============================
router.get("/", getCourses);

// ===============================
// Get Single Course
// ===============================
router.get("/:id", getSingleCourse);

// ===============================
// Update Course
// ===============================
router.put(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "notes", maxCount: 1 },
  ]),
  updateCourse
);

// ===============================
// Delete Course
// ===============================
router.delete("/:id", deleteCourse);

module.exports = router;