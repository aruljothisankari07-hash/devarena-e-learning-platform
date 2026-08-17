const multer = require("multer");
const path = require("path");

// Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "image") {
      cb(null, "uploads/images");
    } else if (file.fieldname === "notes") {
      cb(null, "uploads/notes");
    }
  },

  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + "-" + file.originalname.replace(/\s+/g, "-");

    cb(null, uniqueName);
  },
});

// File Filter
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "image") {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(new Error("Only Image Allowed"), false);
    }
  }

  if (file.fieldname === "notes") {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF Allowed"), false);
    }
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;