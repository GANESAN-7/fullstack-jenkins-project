const express = require("express");
const app = express();

const name = "Ani";

app.get("/", (req, res) => {
  res.send(`Backend Running - Welcome ${name}`);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
