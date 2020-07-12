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
// local connection
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
// heroku connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds031203.mlab.com:31203/heroku_xpnw3mr0", { useNewUrlParser: true });

// HTML Routes -------------------------------
require("./routes/html.js")(app);
// API Routes -------------------------------
require("./routes/api.js")(app);

// server start
app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
});