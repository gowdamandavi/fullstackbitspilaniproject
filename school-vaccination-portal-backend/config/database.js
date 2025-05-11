const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    console.log("🔧 Connecting to MongoDB...");
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // 5 seconds
            socketTimeoutMS: 45000         // 45 seconds
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
