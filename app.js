const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/one", (req, res, nex) => {
  return res.json({
    message: "this is route number one",
  });
});
app.get("/two", (req, res, nex) => {
  return res.json({
    message: "this is route number two",
  });
});

module.exports = app;
