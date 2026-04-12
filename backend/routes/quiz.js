const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const auth = require('../middleware/auth');

router.get('/:lessonId', auth, quizController.getQuiz);
router.post('/:quizId/submit', auth, quizController.submitQuiz);

module.exports = router;
