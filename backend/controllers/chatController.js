const Message = require('../models/Message');
const User = require('../models/User');

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
    
    if (!content || !content.trim()) {
      return res.status(400).json({ success: false, message: 'Message content required' });
    }

    // Fetch the sender's name from DB (JWT only carries id & role)
    const user = await User.findById(req.user.id).select('name role');
    const senderName = user ? user.name : 'Student';
    const senderRole = user ? user.role : 'student';

    const message = new Message({
      senderId:   req.user.id,
      senderName: senderName,
      senderRole: senderRole,
      content:    content.trim()
    });

    await message.save();
    res.status(201).json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error sending message', error: error.message });
  }
};
