const db = require("../models");

module.exports = function (app) {
    

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    // app.get("/api/workouts", (req, res) => {
    //     db.Workout.find({}).then(function(workout){
    //         res.json(workout);
    //         console.log(workout);
    //     });
    // });

    // app.post("/api/workouts", async (req, res) => {
    //     try {
    //         const response = await db.Workout.create({ type: "workout" })
    //         res.json(response);
    //     }
    //     catch (err) {
    //         console.log("Workout not created: ", err)
    //     };
    // });

};