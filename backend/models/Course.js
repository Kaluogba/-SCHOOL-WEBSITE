const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  videoUrl: String, 
  duration: Number // duration in seconds
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  examType: { type: String },
  lessons: [lessonSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
