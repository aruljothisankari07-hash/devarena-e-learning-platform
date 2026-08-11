const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    video: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    level: {
      type: String,
      default: "Beginner",
    },

    duration: {
      type: String,
      default: "0 Hours",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);