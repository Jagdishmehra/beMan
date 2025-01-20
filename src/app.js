const express = require("express");

const app = express();

app.get("/first", (req, res) => {
  res.send("this is my first request");
});

app.use("/dummy", (req, res) => {
  res.send("this is dummy test for my own app: hope postman works");
});

app.listen(3000, () => {
  console.log("server running successfully");
});
