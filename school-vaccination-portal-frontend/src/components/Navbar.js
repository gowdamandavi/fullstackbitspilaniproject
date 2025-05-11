// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Vaccination Portal</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Dashboard</Link>
        <Link className="nav-link" to="/students">Students</Link>
        <Link className="nav-link" to="/drives">Drives</Link>
        <Link className="nav-link" to="/report">Report</Link>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
