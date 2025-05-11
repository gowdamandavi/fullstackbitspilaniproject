// backend/routes/dashboardRoutes.js
const express = require('express');
const { getDashboardMetrics } = require('../controllers/dashboardController');
const router = express.Router();

// Dashboard Metrics Route
router.get('/metrics', getDashboardMetrics);

module.exports = router;
