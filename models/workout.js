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

                weight: Number,

                reps: Number,

                sets: Number,

                distance: Number

            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);


workoutSchema.virtual("totalDuration").get(function () {
    let time = 0;
    for (let i = 0; i < this.exercises.length; i++) {
        time += this.exercises[i].duration;
    }
    return time;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;