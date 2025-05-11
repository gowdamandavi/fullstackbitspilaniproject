const express = require('express');
const {
    createDrive,
    getAllDrives,
    updateDrive,
    deleteDrive
} = require('../controllers/driveController');

const router = express.Router();

router.post('/', createDrive);
router.get('/', getAllDrives);
router.put('/:id', updateDrive);
router.delete('/:id', deleteDrive);

module.exports = router;
