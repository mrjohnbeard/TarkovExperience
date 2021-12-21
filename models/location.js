const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const experienceSchema = new Schema(
    {      
        travel: {
            type: Number,
            min: 0,
        },
        
        damageBody: {
            type: Number,
            min: 0,
        },
        
        damageArmor: {
            type: Number,
            min: 0,
        },

        kill: {
            type: Number,
            min: 0,
        },
        
        ammo: {
            type: Number,
            min: 0,
        },

        hitCount: {
            type: Number,
            min: 0
        },

        hpHealed: {
            type: Number,
            min: 0
        },

        hpUsed: {
            type: Number,
            min: 0
        },

        location: {
            type: Schema.Types.ObjectId,
            ref: 'Location'
        },

        user: { type: Schema.Types.ObjectId, ref: 'User' },
        userName: String,
        userAvatar: String
    },
    {
        timestamps: true
    });




const locationSchema = new Schema(
    {
        area: {
            type: String,
            enum: ['Customs', 'Factory', 'Interchange', 'LightHouse', 'Reserve', 'Shoreline', 'TheLab', 'Woods'],
        },

        duration: {
            type: Number,
        },

        difficulty: {
            type: String,
            enum: ['Hard', 'Expert', 'Insane'],
        },

        boss: {
            type: String,
            enum: ['Cultists', 'Glukhar', 'Killa', 'Raiders', 'Rouges', 'Sanitar', 'Scavs', 'Shturman', 'Tagila', 'Reshala'],
        },

        players: {
            type: Number,
            min: 5,
            max: 20,
        },
        experiences: [experienceSchema]
    },
    {
        timestamps: true
    }
);




module.exports = mongoose.model('Location', locationSchema);