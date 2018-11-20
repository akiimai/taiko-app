const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3001;

app.get(
  "*",
  express.static(path.join(__dirname, "client/build"), {
    fallthrough: false
  })
);

app.listen(port, () => {
  console.log("magic happening on port: " + port);
});
