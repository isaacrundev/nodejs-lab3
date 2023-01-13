const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "..", "views", "leave-a-note.html"));
  res.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Leave a Note</title>
    </head>
    <body>
      <h1>Read From Others</h1>
      <form action="/leave-a-note" method="POST">
        <input type="text" name="add-new" placeholder="Text here" /><button>
          Leave note
        </button>
      </form>
    </body>
  </html>
  `);
});

router.post("/read-notes-left-by-others", (req, res, next) => {});

module.exports = router;
