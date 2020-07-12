// dependancies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Exercise Type Required"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Exercise Name Required"
                },
                duration: {
                    type: Number,
                    required: "Exercise Duration Required"
                },
                // nonrequired params
                weight: Number,

                reps: Number,

                sets: Number,

                distance: Number

            }
        ]
    },
    // allows for virtuals to be passes when converting to JSON data
    {
        toJSON: {
            virtuals: true
        }
    }
);

// virtual calculates total workout time. Allows for a dynamic property and does not need to be manualy updated every time a new excersise is added to a workout.
workoutSchema.virtual("totalDuration").get(function () {
    let time = 0;
    for (let i = 0; i < this.exercises.length; i++) {
        time += this.exercises[i].duration;
    }
    return time;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;