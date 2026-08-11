const express = require("express");

const router = express.Router();

const {
  addXP,
  getXP,
} = require("../controllers/xpController");

// ============================
// Add XP
// POST /api/xp/add
// ============================
router.post("/add", addXP);

// ============================
// Get XP
// GET /api/xp/:id
// ============================
router.get("/:id", getXP);

module.exports = router;