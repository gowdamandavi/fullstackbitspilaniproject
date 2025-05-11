// src/pages/StudentManagement.js
import React, { useState } from "react";
import axios from "axios";

function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  // Handle File Upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setMessage("No file selected.");
      return;
    }

    // Validate CSV File
    if (!selectedFile.name.endsWith(".csv")) {
      setMessage("❌ Only CSV files are allowed.");
      return;
    }

    setFile(selectedFile);
    setMessage("");
  };

  // Upload CSV to Server
  const uploadCSV = async () => {
    if (!file) {
      setMessage("❌ Please select a CSV file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/students/upload-csv`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setStudents(response.data.data);
      setMessage("✅ CSV uploaded successfully.");
    } catch (error) {
      setMessage("❌ Error uploading CSV. Please try again.");
    }
  };

  return (
    <div>
      <h2>Student Management Page</h2>

      <div style={{ margin: "20px 0" }}>
        <input type="file" onChange={handleFileChange} accept=".csv" />
        <button onClick={uploadCSV}>Upload CSV</button>
        {message && <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>}
      </div>

      <h3>Uploaded Students:</h3>
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.name} - {student.age} years old</li>
          ))}
        </ul>
      ) : (
        <p>No students uploaded yet.</p>
      )}
    </div>
  );
}

export default StudentManagement;

