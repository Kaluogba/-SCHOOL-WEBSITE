const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ['student', 'parent', 'instructor', 'admin'], default: 'student' },
  
  gender: { type: String },
  dob: { type: Date },
  school: { type: String },
  classLevel: { type: String },
  
  guardian: {
    name: { type: String },
    email: { type: String },
    whatsapp: { type: String },
    relationship: { type: String }
  },
  
  subjects: [{ type: String }],
  
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
