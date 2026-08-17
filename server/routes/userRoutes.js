const express = require("express");
const router = express.Router();

const {
  updateXP,
} = require("../controllers/userController");

router.put("/xp", updateXP);

module.exports = router;