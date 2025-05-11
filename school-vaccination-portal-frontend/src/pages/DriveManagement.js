// src/pages/DriveManagement.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function DriveManagement() {
  const [drives, setDrives] = useState([]);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  // Fetch All Drives (Initial Load)
  useEffect(() => {
    fetchDrives();
  }, []);

  // Fetch Drives from Server
  const fetchDrives = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/drives`);
      setDrives(response.data);
    } catch (error) {
      setMessage("❌ Error fetching drives. Please try again.");
    }
  };

  // Add New Drive
  const addDrive = async () => {
    if (!date || !location) {
      setMessage("❌ Please provide both date and location.");
      return;
    }

    // Validate Drive Date (Future Date Only)
    if (new Date(date) < new Date()) {
      setMessage("❌ Drive date must be in the future.");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/drives`, {
        date,
        location,
      });

      setDrives([...drives, response.data]);
      setMessage("✅ Drive added successfully.");
      setDate("");
      setLocation("");
    } catch (error) {
      setMessage("❌ Error adding drive. Please try again.");
    }
  };

  return (
    <div>
      <h2>Drive Management Page</h2>

      <div style={{ margin: "20px 0" }}>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          placeholder="Select Drive Date" 
        />
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Enter Drive Location" 
        />
        <button onClick={addDrive}>Add Drive</button>
        {message && <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>}
      </div>

      <h3>Scheduled Drives:</h3>
      {drives.length > 0 ? (
        <ul>
          {drives.map((drive, index) => (
            <li key={index}>
              {new Date(drive.date).toLocaleDateString()} - {drive.location}
            </li>
          ))}
        </ul>
      ) : (
        <p>No drives scheduled yet.</p>
      )}
    </div>
  );
}

export default DriveManagement;
