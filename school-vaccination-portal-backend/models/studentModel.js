// models/studentModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    vaccinated: { type: Boolean, default: false },
    vaccinationRecords: [
        {
            driveId: { type: mongoose.Schema.Types.ObjectId, ref: 'VaccinationDrive' },
            vaccineName: String,
            dateOfVaccination: Date
        }
    ]
});

module.exports = mongoose.model('Student', studentSchema);
