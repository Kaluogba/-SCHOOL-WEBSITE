const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.get('/dashboard-stats', authMiddleware, userController.getDashboardStats);

module.exports = router;
