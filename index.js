const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const homeRoutes = require("./routes/home");
const leaveANoteRoutes = require("./routes/leave-a-note");
const readOthersRoutes = require("./routes/read-notes-left-by-others");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(homeRoutes);
app.use(leaveANoteRoutes);
app.use(readOthersRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views/404.html"));
});

const port = process.env.PORT || 7777;
app.listen(port, () => {
  console.log(`Server is listen to port ${port}`);
});
