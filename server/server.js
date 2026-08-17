const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const courseRoutes = require("./routes/courseRoutes");
const quizRoutes = require("./routes/quizRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const userRoutes = require("./routes/userRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const xpRoutes = require("./routes/xpRoutes"); // ✅ NEW

const app = express();

// ===========================
// Middleware
// ===========================
app.use(cors());
app.use(express.json());

// ===========================
// Static Folder (Images / PDFs)
// ===========================
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ===========================
// API Routes
// ===========================
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/certificate", certificateRoutes);
app.use("/api/xp", xpRoutes); // ✅ NEW

// ===========================
// Test Route
// ===========================
app.get("/", (req, res) => {
  res.send("🚀 DevArena MERN Backend Running...");
});

// ===========================
// MongoDB Connection
// ===========================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err.message);
  });

// ===========================
// Server
// ===========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});