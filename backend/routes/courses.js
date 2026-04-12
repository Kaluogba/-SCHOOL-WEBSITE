const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require('../middleware/auth');

router.get('/', courseController.getAllCourses);
router.get('/:id', auth, courseController.getCourseById);

module.exports = router;
