const mongoose = require('mongoose');

const countdownSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    startDate: {
        type: Date,
        required: true,
        trim: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
        trim: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 1024
    },
    isPublic: {
        type: Boolean,
        default: false
    }
});

const Countdown = new mongoose.model('Countdown', countdownSchema);

module.exports = Countdown;