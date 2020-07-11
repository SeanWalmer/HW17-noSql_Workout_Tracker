const path = require("path");

module.exports = function (app) {
    //HTML route to app index/homepage
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "../public/index.html"));
    });

    //HTML route to stats page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    //HTML route to exercise page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
};