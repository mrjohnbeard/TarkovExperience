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
    }
});

module.exports = mongoose.model('Experience', experienceSchema);