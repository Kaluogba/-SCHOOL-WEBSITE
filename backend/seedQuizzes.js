const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const Course = require('./models/Course');
const Quiz = require('./models/Quiz');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/kie_school";

// Procedural generator to create 20 questions per topic dynamically
function generateQuestionsForTopic(topicTitle) {
    const questions = [];
    for (let i = 1; i <= 20; i++) {
        // Simple randomization of answers for robust testing structures
        const correctAnswerIdx = Math.floor(Math.random() * 4);
        
        const options = ['A', 'B', 'C', 'D'];
        options[correctAnswerIdx] = `Correct Answer for Q${i}`;
        
        // Populate the remaining pseudo-random options
        for(let j=0; j<4; j++) {
            if(j !== correctAnswerIdx) {
                options[j] = `Distractor Option ${j + 1}`;
            }
        }

        questions.push({
            question: `Question ${i}: Which of the following best describes the core principles of "${topicTitle}" as taught in this lesson?`,
            options: options,
            correctAnswer: correctAnswerIdx
        });
    }
    return questions;
}

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected for Quiz Seeder. Purging old quizzes...');
    await Quiz.deleteMany({});
    
    console.log('Fetching all courses and mapping 20-question quizzes for every lesson...');
    const allCourses = await Course.find();
    
    const quizzesToInsert = [];

    for (const course of allCourses) {
        for (const lesson of course.lessons) {
            const twentyQuestions = generateQuestionsForTopic(lesson.title);
            quizzesToInsert.push({
                courseId: course._id,
                lessonId: lesson._id,
                questions: twentyQuestions
            });
        }
    }

    console.log(`Generating ${quizzesToInsert.length} total quizzes across the Curriculum...`);
    await Quiz.insertMany(quizzesToInsert);
    
    console.log('20-Question Robust Quizzes Seeded successfully! 🎉');
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection or seeding error', err);
    process.exit(1);
  });
