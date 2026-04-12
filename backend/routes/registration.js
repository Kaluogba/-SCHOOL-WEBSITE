const express = require('express');
const router = express.Router();
const RegistrationController = require('../controllers/registrationController');

router.post('/', RegistrationController.submitRegistration);
router.get('/status', RegistrationController.getRegistrationStatus);

module.exports = router;