// Contact Controller
const Contact = require('../models/Contact');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Create new contact message
    const contactMessage = new Contact({
      name,
      email,
      subject,
      message,
      date: new Date()
    });

    // Save to database
    await contactMessage.save();

    res.status(201).json({
      success: true,
      message: 'Contact message sent successfully',
      data: contactMessage
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error sending message',
      error: error.message
    });
  }
};

exports.getContactMessages = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Contact messages retrieved',
    count: 0 // Would be actual count from DB
  });
};