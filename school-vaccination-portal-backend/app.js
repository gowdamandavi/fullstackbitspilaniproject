// backend/app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const app = express();
require('dotenv').config();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware Setup
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Allows CORS for Frontend
    credentials: true
}));
app.use(express.json()); // Parses incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parses form data

// ✅ Static File Directory for CSV Uploads (if needed)
app.use('/uploads', express.static('uploads'));

// ✅ API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/drives', require('./routes/driveRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

// ✅ Health Check Route
app.get('/', (req, res) => res.send("✅ School Vaccination Portal API is Running"));

// backend/app.js
app.use(express.json()); // Parses incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parses form data

// Global Error Handler (app.js)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("❌ Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;

