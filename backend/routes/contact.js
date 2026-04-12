const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');

router.post('/', ContactController.submitContact);
router.get('/', ContactController.getContactMessages);

module.exports = router;