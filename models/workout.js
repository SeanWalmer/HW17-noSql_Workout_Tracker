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

                weight: Number,

                reps: Number,

                sets: Number,

                distance: Number,

                duration: {
                    type: Number,
                    required: "Exercise Duration Required"
                }
            }
        ]
    }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;