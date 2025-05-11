// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StudentManagement from "./pages/StudentManagement";
import DriveManagement from "./pages/DriveManagement";
import Report from "./pages/Report";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/students" element={<StudentManagement />} />
                    <Route path="/drives" element={<DriveManagement />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
