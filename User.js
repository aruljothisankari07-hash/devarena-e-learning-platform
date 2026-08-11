const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // ===========================
    // Basic Details
    // ===========================
    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "student",
    },

    isVerified: {
  type: Boolean,
  default: false,
},

    // ===========================
    // Daily Streak
    // ===========================
    streak: {
      type: Number,
      default: 1,
    },

    lastLogin: {
      type: Date,
      default: Date.now,
    },

    // ===========================
    // XP System
    // ===========================
    xp: {
      type: Number,
      default: 0,
    },

    // ===========================
    // Badge System
    // ===========================
    badge: {
      type: String,
      default: "🌱 Beginner",
    },

    // ===========================
    // Quiz
    // ===========================
    quizScore: {
      type: Number,
      default: 0,
    },

    quizCompleted: {
      type: Boolean,
      default: false,
    },

    // ===========================
    // Certificate
    // ===========================
    certificateUnlocked: {
      type: Boolean,
      default: false,
    },

    reactCourse: {
      type: Boolean,
      default: false,
    },

    // ===========================
    // Completed Courses
    // ===========================
    completedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);