const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

/* RUTAS */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/music", (req, res) => {
  res.sendFile(__dirname + "/views/music.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.listen(PORT, () => {
  console.log(`Server runnig in http://localhost:${PORT}`);
});