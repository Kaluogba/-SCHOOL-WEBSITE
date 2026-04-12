const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: Number // index of the correct option
});

const quizSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  lessonId: { type: mongoose.Schema.Types.ObjectId },
  questions: [questionSchema]
});

module.exports = mongoose.model('Quiz', quizSchema);
