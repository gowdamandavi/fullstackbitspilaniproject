// backend/controllers/dashboardController.js
const Student = require('../models/studentModel');
const Drive = require('../models/driveModel');
const mongoose = require('mongoose');

// Dashboard Metrics
const getDashboardMetrics = async (req, res) => {
    try {
        // Total number of students
        const totalStudents = await Student.countDocuments();

        // Total vaccinated students
        const vaccinatedStudents = await Student.countDocuments({ vaccinated: true });

        // Calculate percentage of vaccinated students
        const vaccinatedPercentage = totalStudents > 0 ? ((vaccinatedStudents / totalStudents) * 100).toFixed(2) : 0;

        // Upcoming vaccination drives (Next 30 days)
        const today = new Date();
        const next30Days = new Date();
        next30Days.setDate(today.getDate() + 30);

        const upcomingDrives = await Drive.find({
            date: { $gte: today, $lte: next30Days }
        });

        res.status(200).json({
            totalStudents,
            vaccinatedStudents,
            vaccinatedPercentage,
            upcomingDrives: upcomingDrives.length,
            driveDetails: upcomingDrives
        });
    } catch (error) {
        console.error("❌ Error fetching dashboard metrics:", error);
        res.status(500).json({ error: "Error fetching dashboard metrics" });
    }
};

module.exports = { getDashboardMetrics };
