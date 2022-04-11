var mongoose = require('mongoose');

var participantsSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    registered: {
        type: Boolean,
        required: true
    },
    breakfast: {
        type: Boolean,
        required: true
    },
    lunch: {
        type: Boolean,
        required: true
    },
    dinner: {
        type: Boolean,
        required: true
    },
    snacks: {
        type: Boolean,
        required: true
    },
    review1: {
        type: Boolean,
        required: true
    },
    review2: {
        type: Boolean,
        required: true
    },
    review3: {
        type: Boolean,
        required: true
    },
    review4: {
        type: Boolean,
        required: true
    },
});

module.exports = new mongoose.model('Participants', participantsSchema);
