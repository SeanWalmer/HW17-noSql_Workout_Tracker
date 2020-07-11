const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connection to mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// HTML Routs -------------------------------
//HTML route to app index/homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});

//HTML route to stats page
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

//HTML route to exercise page
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});
// ----------------------------------------------

// server start
app.listen(PORT, () => {
    console.log("App running on port " + PORT);
});