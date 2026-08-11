const express = require("express");

const router = express.Router();

const {
  addQuiz,
  getAllQuizzes,
  getQuizByCourse,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

// ==============================
// Add Quiz
// POST /api/quizzes/add
// ==============================
router.post("/add", addQuiz);

// ==============================
// Get All Quizzes
// GET /api/quizzes
// ==============================
router.get("/", getAllQuizzes);

// ==============================
// Get Quiz by Course ID
// GET /api/quizzes/:courseId
// ==============================
router.get("/:courseId", getQuizByCourse);

// ==============================
// Update Quiz
// PUT /api/quizzes/:id
// ==============================
router.put("/:id", updateQuiz);

// ==============================
// Delete Quiz
// DELETE /api/quizzes/:id
// ==============================
router.delete("/:id", deleteQuiz);

module.exports = router;