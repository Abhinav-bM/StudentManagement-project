const dotenv = require("dotenv");
dotenv.config();
const { config } = require("dotenv");
const express = require("express");
const port = process.env.PORT;
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("admin/index");
});

app.listen(
  port,
  console.log(`Server running on port ${port} http://localhost:3002`)
);
