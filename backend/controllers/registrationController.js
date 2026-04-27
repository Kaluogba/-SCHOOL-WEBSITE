// Registration Controller
const registrationModel = require('../models/User');

exports.submitRegistration = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required'
      });
    }

    // Create new registration
    const registration = new registrationModel({
      name,
      email,
      phone,
      course,
      message,
      date: new Date()
    });

    // Save to database (if using MongoDB)
    // await registration.save();

    // For now, just return success (remove comment above when DB is set up)
    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully',
      data: registration
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: error.message
    });
  }
};

exports.getRegistrationStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Registration service is active',
    timestamp: new Date()
  });
};