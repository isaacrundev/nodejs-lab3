const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "read-notes-left-by-others.html")
  );
});

module.exports = router;
