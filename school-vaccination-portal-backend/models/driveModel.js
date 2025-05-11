// models/driveModel.js
const mongoose = require('mongoose');

const driveSchema = new mongoose.Schema({
    vaccineName: { type: String, required: true },
    date: { type: Date, required: true },
    availableDoses: { type: Number, required: true },
    applicableClasses: { type: [String], required: true },
    isCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('VaccinationDrive', driveSchema);
