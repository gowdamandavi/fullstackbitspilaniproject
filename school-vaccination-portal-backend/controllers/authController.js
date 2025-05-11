// backend/controllers/authController.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// ✅ Register User
const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword });

        res.status(201).json({ message: "User Registered Successfully", user: newUser });
    } catch (error) {
        console.error("❌ Error Registering User:", error.message);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ User Login
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(200).json({ message: "Login Successful", token });
    } catch (error) {
        console.error("❌ Error Logging In:", error.message);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

// ✅ Protected Profile Route
const profile = (req, res) => {
    res.status(200).json({ message: `Welcome ${req.user.username}` });
};

module.exports = { register, login, profile };
