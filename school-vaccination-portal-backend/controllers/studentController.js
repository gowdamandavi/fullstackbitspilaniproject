// controllers/studentController.js
const Student = require('../models/studentModel');

// Create Student
const createStudent = async (req, res) => {
    try {
        const { name, class: studentClass, studentId } = req.body;
        const student = await Student.create({ name, class: studentClass, studentId });
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Students
const getAllStudents = async (req, res) => {
    const students = await Student.find();
    res.status(200).json(students);
};

// Update Student
const updateStudent = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(updatedStudent);
};

// Delete Student
const deleteStudent = async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: "Student deleted successfully" });
};

module.exports = { createStudent, getAllStudents, updateStudent, deleteStudent };
