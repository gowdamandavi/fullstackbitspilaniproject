// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { getDashboardMetrics } from "../api";

function Dashboard() {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    loadMetrics();
  }, []);

  const loadMetrics = async () => {
    const response = await getDashboardMetrics();
    setMetrics(response.data);
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p>Total Students: {metrics.totalStudents}</p>
      <p>Vaccinated Students: {metrics.vaccinatedStudents}</p>
      <p>Vaccinated Percentage: {metrics.vaccinatedPercentage}%</p>
      <p>Upcoming Drives: {metrics.upcomingDrives}</p>
    </div>
  );
}

export default Dashboard;
