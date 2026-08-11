const User = require("../models/User");

// ===================================
// Get Dashboard
// ===================================
const getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "completedCourses"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===================================
// Complete Course
// ===================================
const completeCourse = async (req, res) => {

  try {

    const { userId, courseId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    const alreadyCompleted = user.completedCourses.some(
      (id) => id.toString() === courseId
    );

    if (!alreadyCompleted) {

      user.completedCourses.push(courseId);

      user.xp += 100;

      user.certificateUnlocked = true;

      await user.save();

    }

    res.status(200).json({
      success: true,
      message: "Course Completed Successfully",
      xp: user.xp,
      completedCourses: user.completedCourses,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===================================
// Update XP
// ===================================
const updateXP = async (req, res) => {

  try {

    const { userId, xp, quizScore } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    user.xp += Number(xp);
    user.quizScore = quizScore;

    if (quizScore > 0) {
      user.quizCompleted = true;
      user.certificateUnlocked = true;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "XP Updated Successfully",
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ===================================
// Leaderboard
// ===================================
const getLeaderboard = async (req, res) => {

  try {

    const users = await User.find()
      .select("name email xp quizScore")
      .sort({ xp: -1 });

    res.status(200).json({
      success: true,
      users,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  getDashboard,
  completeCourse,
  updateXP,
  getLeaderboard,
};