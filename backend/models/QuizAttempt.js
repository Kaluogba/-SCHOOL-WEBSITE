const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
  userId:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId:     { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  lessonId:   { type: mongoose.Schema.Types.ObjectId, required: true },
  courseId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  answers:    [Number],       // index of selected option per question
  score:      { type: Number, default: 0 },
  total:      { type: Number, default: 0 },
  percentage: { type: Number, default: 0 },
  passed:     { type: Boolean, default: false },
  timestamp:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
