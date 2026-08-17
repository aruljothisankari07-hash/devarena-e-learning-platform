const Course = require("../models/Course");

// ===============================
// Add Course
// ===============================
const addCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      video,
      level,
      duration,
    } = req.body;

    const image = req.files?.image
      ? `/uploads/images/${req.files.image[0].filename}`
      : "";

    const notes = req.files?.notes
      ? `/uploads/notes/${req.files.notes[0].filename}`
      : "";

    const newCourse = new Course({
      title,
      description,
      image,
      video,
      notes,
      level,
      duration,
    });

    await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course Added Successfully",
      course: newCourse,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Get All Courses
// ===============================
const getCourses = async (req, res) => {
  try {

    const courses = await Course.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      courses,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Get Single Course
// ===============================
const getSingleCourse = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Update Course
// ===============================
const updateCourse = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }

    course.title = req.body.title || course.title;
    course.description =
      req.body.description || course.description;
    course.video = req.body.video || course.video;
    course.level = req.body.level || course.level;
    course.duration =
      req.body.duration || course.duration;

    if (req.files?.image) {
      course.image =
        `/uploads/images/${req.files.image[0].filename}`;
    }

    if (req.files?.notes) {
      course.notes =
        `/uploads/notes/${req.files.notes[0].filename}`;
    }

    await course.save();

    res.status(200).json({
      success: true,
      message: "Course Updated Successfully",
      course,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Delete Course
// ===============================
const deleteCourse = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }

    await Course.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Course Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  addCourse,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};