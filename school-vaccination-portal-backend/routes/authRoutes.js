// backend/routes/authRoutes.js
const express = require('express');
const { register, login, profile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// ✅ Register New User (POST)
router.post('/register', register);

// ✅ User Login (POST)
router.post('/login', login);

// ✅ Protected Profile Route (GET)
router.get('/profile', authMiddleware, profile);

module.exports = router;
