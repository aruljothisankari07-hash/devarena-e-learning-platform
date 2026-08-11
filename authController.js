const User = require("../models/User");
const Otp = require("../models/Otp");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =======================
// Register User
// =======================
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check Existing User
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
  name,
  email,
  password: hashedPassword,
  streak: 1,
  lastLogin: new Date(),
  isVerified: false,
});

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      user,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const sendOTP = async (req, res) => {
  try {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    await Otp.deleteMany({ email });

    await Otp.create({
      email,
      otp,
    });

    await sendEmail(
      email,
      "DevArena OTP Verification",
      `Your OTP is: ${otp}`
    );

    res.json({
      success: true,
      message: "OTP Sent Successfully",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

const verifyOTP = async (req, res) => {
  try {

    const { email, otp } = req.body;

    const otpData = await Otp.findOne({
      email,
      otp,
    });

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    await User.findOneAndUpdate(
      { email },
      {
        isVerified: true,
      }
    );

    await Otp.deleteMany({ email });

    res.json({
      success: true,
      message: "Email Verified Successfully",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// =======================
// Login User
// =======================
const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // =======================
    // Find User
    // =======================
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // =======================
    // Compare Password
    // =======================
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // =======================
    // Daily Streak 🔥
    // =======================

    const today = new Date();

    const lastLogin = user.lastLogin
      ? new Date(user.lastLogin)
      : null;

    if (lastLogin) {

      const todayDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      const lastLoginDate = new Date(
        lastLogin.getFullYear(),
        lastLogin.getMonth(),
        lastLogin.getDate()
      );

      const difference = Math.floor(
        (todayDate - lastLoginDate) /
        (1000 * 60 * 60 * 24)
      );

      // Next day login
      if (difference === 1) {

        user.streak += 1;

      }

      // Missed one or more days
      else if (difference > 1) {

        user.streak = 1;

      }

      // Same day
      // streak remains unchanged

    } else {

      user.streak = 1;

    }

    user.lastLogin = today;

    await user.save();

    // =======================
    // Generate JWT
    // =======================

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // =======================
    // Login Response
    // =======================

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

module.exports = {
  registerUser,
  loginUser,
  sendOTP,
  verifyOTP,
};