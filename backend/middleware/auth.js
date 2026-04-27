const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token, authorization denied' });
  }

  try {
    const bearer = token.split(' ')[1] || token;
    const decoded = jwt.verify(bearer, process.env.JWT_SECRET || 'fallback_secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: 'Token is not valid' });
  }
};
