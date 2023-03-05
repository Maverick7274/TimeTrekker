const router = require('express').Router();
const Countdown = require('../models/countdownModels');
const User = require('../models/userModels');
const auth = require('../middleware/auth');


// Create a New Countdown     POST /countdown/new

router.post('/new', auth, async (req, res) => {
    try{
        const {name, startDate, endDate, startTime, endTime, description, isPublic} = req.body;

        // Validate
        if(!name || !startDate || !endDate || !startTime || !endTime || !description) {
            return res.status(400).json({errorMessage: "Please enter all required fields."});
        }
        if(startDate > endDate) {
            return res.status(400).json({errorMessage: "Please enter a start date before the end date."});
        }
        if(startTime > endTime) {
            return res.status(400).json({errorMessage: "Please enter a start time before the end time."});
        }

        // Save a new countdown to the db

        const newCountdown = new Countdown({
            name,
            startDate,
            endDate,
            description,
            startTime,
            endTime,
            isPublic
        });

        const savedCountdown = await newCountdown.save();

        res.status(200).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}),



module.exports = router;