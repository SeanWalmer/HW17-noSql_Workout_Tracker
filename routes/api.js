const db = require("../models");
const { update } = require("../models/workout");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(function (workout) {
            res.json(workout);
            console.log("\n\nfinding workouts\n\n");
            console.log(workout);
        });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body, (error, data) => {
            res.send(data);
        });
    });

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
};