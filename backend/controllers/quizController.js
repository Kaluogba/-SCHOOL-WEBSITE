const Quiz = require('../models/Quiz');
const QuizAttempt = require('../models/QuizAttempt');

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ lessonId: req.params.lessonId });
    if (!quiz) {
      return res.status(404).json({ success: false, message: 'Quiz not found for this lesson' });
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

    // Score calculation
    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score += 1;
      }
    });

    const total = quiz.questions.length;
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 50;

    // Persist the attempt
    await QuizAttempt.create({
      userId:     req.user.id,
      quizId:     quiz._id,
      lessonId:   quiz.lessonId,
      courseId:   quiz.courseId,
      answers:    answers,
      score,
      total,
      percentage,
      passed
    });

    res.status(200).json({ 
      success: true, 
      score,
      total,
      percentage,
      passed,
      message: passed ? '🎉 Congratulations! You passed!' : 'Keep studying — you can retake this quiz.'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error submitting quiz', error: error.message });
  }
};
