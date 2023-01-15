const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/read-notes-left-by-others", (req, res, next) => {
  // res.sendFile(
  //   path.join(__dirname, "..", "views", "read-notes-left-by-others.html")
  // );
  fs.readFile("note.txt", (err, input) => {
    if (err) {
      throw err;
    }
    res.status(302);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="/main.css" />
        <title>Read From Others</title>
      </head>
      <body>
        <h1>Read From Others</h1>
        <ul>${input}</ul>
      </body>
    </html>`);
    res.end();
  });
});

module.exports = router;
