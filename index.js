const express = require("express");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home");
const leaveANoteRoutes = require("./routes/leave-a-note");
const readOthersRoutes = require("./routes/read-notes-left-by-others");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", homeRoutes);
app.use("/leave-a-note", leaveANoteRoutes);
app.use("/read-notes-left-by-others", readOthersRoutes);

const port = process.env.port || 7777;
app.listen(port, () => {
  console.log(`Server is listen to port ${port}`);
});
