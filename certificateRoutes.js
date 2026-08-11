const express = require("express");

const router = express.Router();

const {
  downloadCertificate,
} = require("../controllers/certificateController");

router.get(
  "/download",
  downloadCertificate
);

module.exports = router;