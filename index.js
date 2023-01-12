const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.port || 7777;
app.listen(port, () => {
  console.log(`Server is listen to port ${port}`);
});
