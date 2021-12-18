const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    }
});

module.exports = mongoose.model('Experience', experienceSchema);