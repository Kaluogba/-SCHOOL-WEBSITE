require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/registration', require('./routes/registration'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/quiz', require('./routes/quiz'));

// Root route
app.get('/', (req, res) => {
  res.send('API is running securely');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});