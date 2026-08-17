const User = require("../models/User");

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

    user.xp += xp;
    user.quizScore = quizScore;

    if (quizScore >= 4) {
      user.certificateUnlocked = true;
      user.reactCourse = true;
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

module.exports = {
  updateXP,
};