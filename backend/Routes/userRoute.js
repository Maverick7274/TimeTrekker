const router = require('express').Router();
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Register     POST /auth/

router.post('/', async (req, res) => {
    try{
        const {name, email, password, confirmPassword} = req.body;


        // Validate
        if(!name || !email || !password || !confirmPassword) {
            return res.status(400).json({errorMessage: "Please enter all required fields."});
        }
        if(password.length < 6) {
            return res.status(400).json({errorMessage: "Please enter a password of at least 6 characters."});
        }
        if(password !== confirmPassword) {
            return res.status(400).json({errorMessage: "Please enter the same password twice."});
        }

        // Existing user

        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({errorMessage: "An account with this email already exists."});
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Save a new user account to the db

        const newUser = new User({
            name,
            email,
            passwordHash
        });

        const savedUser = await newUser.save();

        // Log in the user

        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET);

        // Send the token in a HTTP-only cookie

        res.cookie('token', token, {
            httpOnly: true,
        }).send();
        
        res.status(200).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

// Login     POST /auth/login

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        // Validate

        if(!email || !password) {
            return res.status(400).json({errorMessage: "Please enter all required fields."});
        }

        const existingUser = await User.findOne({ email });

        if(!existingUser) {
            return res.status(401).json({errorMessage: "Wrong email or password."});
        }

        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);

        if(!passwordCorrect) {
            return res.status(401).json({errorMessage: "Wrong email or password."});
        }

        // Sign the token

        const token = jwt.sign({
            user: existingUser._id
        }, process.env.JWT_SECRET);

        // Send the token in a HTTP-only cookie

        res.cookie('token', token, {
            httpOnly: true,
        }).send();


    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});


// Logout    GET /auth/logout

router.get('/logout', (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
    }).send();
});


router.get('/loggedIn', (req, res) => {

    try {
        const token = req.cookies.token;
        
        if(!token) {
            return res.json(false);
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        res.json(true);

    } catch (error) {
        console.error(error);
        return res.json(false);
    }
});









module.exports = router;