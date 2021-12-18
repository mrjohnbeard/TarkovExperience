const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema(
    {


        area: {
            type: String,
            enum: ['Customs', 'Factory', 'Interchange', 'LightHouse', 'Reserve', 'Shoreline', 'The Lab', 'Woods'],
        },
        
        duration: {
            type: Number,
        },
        
        difficulty: {
            type: String,
            enum: ['Easy', 'Hard', 'Expert', 'Insane'],
        },

        enemies: {
            type: String,
            enum: [ 'Cultists', 'Glukhar', 'Killa',  'Raiders', 'Rouges', 'Sanitar', 'Scavs', 'Shturman', 'Tagila', 'Reshala'],
        },
        
        players: {
            type: Number,
            min: 5,
            max: 20,
        },

    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Location', locationSchema);