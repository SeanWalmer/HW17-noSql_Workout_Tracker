const db = require("../models");

module.exports = function (app) {
    // grabs all workouts that are then handled throughout the app depending on need
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(function (workout) {
            res.json(workout);
            console.log("\n\nfinding workouts\n\n");
            console.log(workout);
        });
    });
    // allows for app to crete a new empy workout that can then be added to later
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body, (error, data) => {
            res.send(data);
        });
    });
    // adds to the current workout based on id
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate({
            _id: req.params.id
        }, {
            $push: {
                exercises: req.body
            }
        }, {
            new: true,
            omitUndefined: true
        }).then(updated => {
            res.json(updated);
        });
    });
    // grabs all stored workouts to be displayed on dashboard. Sorted for cronological order
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).sort({ day: 1 })
        .then(allWorkouts => {
                res.json(allWorkouts);
            }
        );
    });
};