const express = require("express");

const router = express.Router();

const {
  getDashboard,
  completeCourse,
  updateXP,
  getLeaderboard,
} = require("../controllers/dashboardController");

// ======================================
// Dashboard
// GET /api/dashboard/:id
// ======================================
router.get("/:id", getDashboard);

// ======================================
// Complete Course
// POST /api/dashboard/complete
// ======================================
router.post("/complete", completeCourse);

// ======================================
// Update XP After Quiz
// PUT /api/dashboard/xp
// ======================================
router.put("/xp", updateXP);

// ======================================
// Leaderboard
// GET /api/dashboard/leaderboard/all
// ======================================
router.get("/leaderboard/all", getLeaderboard);

module.exports = router;