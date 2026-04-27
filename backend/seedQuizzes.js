const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const Course = require('./models/Course');
const Quiz = require('./models/Quiz');
const quizData = require('./quizData'); // Import real question bank

const MONGODB_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/kie_school";

// Fallback generator if real questions aren't available yet for a specific topic
function generatePlaceholderQuestions(topicTitle) {
    const questions = [];
    for (let i = 1; i <= 20; i++) {
        const correctAnswerIdx = Math.floor(Math.random() * 4);
        const options = ['A', 'B', 'C', 'D'];
        options[correctAnswerIdx] = `Correct Answer for Q${i}`;
        for(let j=0; j<4; j++) {
            if(j !== correctAnswerIdx) options[j] = `Distractor Option ${j + 1}`;
        }

        questions.push({
            question: `[Practice] Question ${i}: Regarding the core principles of "${topicTitle}", which of these holds true?`,
            options: options,
            correctAnswer: correctAnswerIdx
        });
    }
    return questions;
}

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('✅ MongoDB connected for Quiz Seeder. Purging old quizzes...');
    await Quiz.deleteMany({});
    
    console.log('🔍 Fetching curriculum and mapping 20-question quizzes...');
    const allCourses = await Course.find();
    
    const quizzesToInsert = [];
    let realCount = 0;
    let placeholderCount = 0;

    for (const course of allCourses) {
        for (const lesson of course.lessons) {
            // Check if we have real JAMB/WAEC questions for this exact lesson title
            const realQuestions = quizData[lesson.title];
            let questions = [];

            if (realQuestions && realQuestions.length > 0) {
                questions = realQuestions;
                realCount++;
            } else {
                questions = generatePlaceholderQuestions(lesson.title);
                placeholderCount++;
            }

            quizzesToInsert.push({
                courseId: course._id,
                lessonId: lesson._id,
                questions: questions
            });
        }
    }

    console.log(`📊 Statistics: ${realCount} topics with real Exam Questions, ${placeholderCount} topics with placeholders.`);
    console.log(`🚀 Inserting ${quizzesToInsert.length} total quizzes (20 questions each)...`);
    
    await Quiz.insertMany(quizzesToInsert);
    
    console.log('🎉 20-Question Robust Quizzes Seeded successfully! Database is ready.');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection or seeding error:', err);
    process.exit(1);
  });
