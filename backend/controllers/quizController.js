const Quiz = require('../models/Quiz');

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ lessonId: req.params.lessonId });
    if (!quiz) {
      return res.status(404).json({ success: false, message: 'Quiz not found' });
    }
    res.status(200).json({ success: true, data: quiz });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching quiz', error: error.message });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body; // array of answered option indices
    const quiz = await Quiz.findById(req.params.quizId);
    
    if (!quiz) {
      return res.status(404).json({ success: false, message: 'Quiz not found' });
    }

    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score += 1;
      }
    });

    const percentage = (score / quiz.questions.length) * 100;

    res.status(200).json({ 
      success: true, 
      score,
      total: quiz.questions.length,
      percentage,
      passed: percentage >= 50
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error submitting quiz', error: error.message });
  }
};
