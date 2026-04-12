const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 }).limit(100);
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching chat', error: error.message });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { content } = req.body;
    
    if (!content) {
      return res.status(400).json({ success: false, message: 'Message content required' });
    }

    const message = new Message({
      senderId: req.user.id,
      senderName: req.user.name || 'Student',
      senderRole: req.user.role || 'student',
      content
    });

    await message.save();
    res.status(201).json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error sending message', error: error.message });
  }
};
