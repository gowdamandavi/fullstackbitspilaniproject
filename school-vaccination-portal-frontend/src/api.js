// src/api.js
import axios from "axios";

// Axios instance for API calls
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // Allows cookies (for authentication)
});

// Authentication API
export const login = (credentials) => api.post("/auth/login", credentials);

// Dashboard Metrics API
export const getDashboardMetrics = () => api.get("/dashboard/metrics");

// Student Management APIs
export const getAllStudents = () => api.get("/students");
export const createStudent = (data) => api.post("/students", data);
export const uploadCSV = (formData) =>
  api.post("/students/upload-csv", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Drive Management APIs
export const getAllDrives = () => api.get("/drives");
export const createDrive = (data) => api.post("/drives", data);

export default api;
