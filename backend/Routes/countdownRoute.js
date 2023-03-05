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


// Get All Countdowns     GET /countdown/

router.get('/', auth, async (req, res) => {
    try{
        const countdowns = await Countdown.find();
        res.json(countdowns);
    }
    catch (error) {
        console.error(error);
        res.status(500).send();
    }
}),
// Get All Public Countdowns     GET /countdown/public

router.get('/public', auth, async (req, res) => {
    try{
        const countdowns = await Countdown.find({isPublic: true});
        res.json(countdowns);
    }
    catch (error) {
        console.error(error);
        res.status(500).send();
    }
}),

// Get Countdown by ID     GET /countdown/:id

router.get('/:id', auth, async (req, res) => {
    try{
        const countdown = await Countdown.findById(req.params.id);
        res.json(countdown);
    }
    catch (error) {
        console.error(error);
        res.status(500).send();
    }
}),

// Update Countdown by ID     PUT /countdown/:id

router.put('/:id', auth, async (req, res) => {
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

        const updatedCountdown = await Countdown.findByIdAndUpdate(req.params.id, {
            name,
            startDate,
            endDate,
            description,
            startTime,
            endTime,
            isPublic
        });

        res.status(200).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).send();
    }
}),

// Delete Countdown by ID     DELETE /countdown/:id

router.delete('/:id', auth, async (req, res) => {
    try{
        const deletedCountdown = await Countdown.findByIdAndDelete(req.params.id);
        res.status(200).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).send();
    }
});



module.exports = router;