// controllers/driveController.js
const Drive = require('../models/driveModel');

// Create a Vaccination Drive
const createDrive = async (req, res) => {
    try {
        const { vaccineName, date, availableDoses, applicableClasses } = req.body;
        const drive = await Drive.create({ vaccineName, date, availableDoses, applicableClasses });
        res.status(201).json(drive);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Drives
const getAllDrives = async (req, res) => {
    const drives = await Drive.find();
    res.status(200).json(drives);
};

// Update Drive
const updateDrive = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const updatedDrive = await Drive.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(updatedDrive);
};
if (new Date(req.body.date) < new Date()) {
    return res.status(400).json({ message: "Drive date must be in the future." });
}

// Delete Drive
const deleteDrive = async (req, res) => {
    const { id } = req.params;
    await Drive.findByIdAndDelete(id);
    res.status(200).json({ message: "Drive deleted successfully" });
};

module.exports = { createDrive, getAllDrives, updateDrive, deleteDrive };
