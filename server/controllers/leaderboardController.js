const User = require("../models/User");

const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .select("name email xp")
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
  getLeaderboard,
};