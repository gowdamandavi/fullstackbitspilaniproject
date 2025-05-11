const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');

const uploadCSV = (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ message: "CSV file is required." });
    }
    if (!file.mimetype.includes("csv")) {
        return res.status(400).json({ message: "Only CSV files are allowed." });
    }

    const results = [];
    fs.createReadStream(file.path)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
          res.status(200).json({ message: "CSV uploaded successfully.", data: results });
      });
};

module.exports = { uploadCSV };
