const User = require("../models/User");

// =============================
// Add XP
// =============================
const addXP = async (req, res) => {

  try {

    const { userId, xp } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    user.xp += xp;

    await user.save();

    res.status(200).json({
      success: true,
      message: "XP Added Successfully",
      xp: user.xp,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// =============================
// Get XP
// =============================
const getXP = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      xp: user.xp,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  addXP,
  getXP,
};