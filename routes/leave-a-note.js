const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/leave-a-note", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "leave-a-note.html"));
});

let input = "";
router.post("/submit", (req, res, next) => {
  input += `<li>${req.body.addNew}</li>`;
  // console.log(input);
  fs.writeFile("note.txt", input, (err) => {
    if (err) {
      throw err;
    }
    res.status(302);
    res.end();
  });

  res.redirect("/");
});

module.exports = router;
