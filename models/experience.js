const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({

    kill: {
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

module.exports = mongoose.model('Experience', experienceSchema);