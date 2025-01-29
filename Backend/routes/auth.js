const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    console.log("backend ki vachindi")
console.log(req.body)
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).send('User already exists');
        console.log("stage 1");
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        console.log("stage 2");
        res.status(201).send('User created');
    } catch (err) {
        console.error('there is an error'+err); 
        res.status(500).send(err);
    }
});


// Sign In
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    console.log("backend lo"+req.body)
    console.log(process.env.JWT_SECRET)

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;