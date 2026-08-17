const Quiz = require("../models/Quiz");

// ==============================
// Add Quiz
// ==============================
const addQuiz = async (req, res) => {
  try {
    const {
      courseId,
      question,
      options,
      answer,
    } = req.body;

    const quiz = await Quiz.create({
      courseId,
      question,
      options,
      answer,
    });

    res.status(201).json({
      success: true,
      message: "Quiz Added Successfully",
      quiz,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Get All Quizzes
// ==============================
const getAllQuizzes = async (req, res) => {
  try {

    const quizzes = await Quiz.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      quizzes,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Get Quiz by Course ID
// ==============================
const getQuizByCourse = async (req, res) => {
  try {

    const quizzes = await Quiz.find({
      courseId: req.params.courseId,
    });

    res.status(200).json({
      success: true,
      quizzes,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Update Quiz
// ==============================
const updateQuiz = async (req, res) => {
  try {

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz Not Found",
      });
    }

    quiz.courseId = req.body.courseId || quiz.courseId;
    quiz.question = req.body.question || quiz.question;
    quiz.options = req.body.options || quiz.options;
    quiz.answer = req.body.answer || quiz.answer;

    await quiz.save();

    res.status(200).json({
      success: true,
      message: "Quiz Updated Successfully",
      quiz,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Delete Quiz
// ==============================
const deleteQuiz = async (req, res) => {
  try {

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz Not Found",
      });
    }

    await Quiz.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Quiz Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Export
// ==============================
module.exports = {
  addQuiz,
  getAllQuizzes,
  getQuizByCourse,
  updateQuiz,
  deleteQuiz,
};