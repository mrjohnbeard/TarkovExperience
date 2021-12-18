const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema(
    {


        area: {
            type: String,
            enum: ['Customs', 'Woods'],
        },

        players: {
            type: Number,
            min: 5,
            max: 20,
        },

        duration: {
            type: Number,
        },

        difficulty: {
            type: String,
            enum: ['Easy', 'Hard'],
        },



    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Location', locationSchema);