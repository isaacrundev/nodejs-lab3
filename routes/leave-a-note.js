const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/leave-a-note", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "leave-a-note.html"));
});

module.exports = router;
