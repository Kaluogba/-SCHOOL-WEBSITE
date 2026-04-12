const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const Course = require('./models/Course');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/kie_school";

const seedData = [
  // ================= MATHEMATICS =================
  {
    title: 'Mathematics',
    description: 'Junior Secondary School Mathematics Curriculum covering foundational numerical concepts.',
    examType: 'JSS',
    lessons: [
      { title: 'JSS1 - Basic Arithmetic and Number Bases', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 1800 },
      { title: 'JSS2 - Introduction to Algebra', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2100 },
      { title: 'JSS3 - Geometry and Probability', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 1900 }
    ]
  },
  {
    title: 'Mathematics',
    description: 'Senior Secondary School Mathematics Curriculum mapping directly to the WAEC and JAMB outlines.',
    examType: 'SSS',
    lessons: [
      { title: 'SSS1 - Set Theory and Surds', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2500 },
      { title: 'SSS1 - Logarithms and Indices', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2200 },
      { title: 'SSS2 - Coordinates and Calculus', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 3000 },
      { title: 'SSS2 - Trigonometry Mastery', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2800 },
      { title: 'SSS3 - Matrices and Determinants', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 3200 },
      { title: 'SSS3 - WAEC Past Question Walkthroughs', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 4000 }
    ]
  },
  // ================= ENGLISH =================
  {
    title: 'English Language',
    description: 'Junior Secondary School English Language concepts.',
    examType: 'JSS',
    lessons: [
      { title: 'JSS1 - Parts of Speech', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 1500 },
      { title: 'JSS2 - Reading Comprehension', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 1700 },
      { title: 'JSS3 - Basic Essay Writing', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2000 }
    ]
  },
  {
    title: 'English Language',
    description: 'Senior Secondary School English mapping to WAEC.',
    examType: 'SSS',
    lessons: [
      { title: 'SSS1 - Test of Orals', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2400 },
      { title: 'SSS2 - Summary Writing Techniques', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2100 },
      { title: 'SSS3 - Advanced Essay Writing (Formal & Informal)', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 3000 }
    ]
  },
  // ================= PHYSICS =================
  {
    title: 'Physics',
    description: 'Basic Introductory Science.',
    examType: 'JSS',
    lessons: [
      { title: 'JSS1-3 - Integrated Science Basics', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 1800 }
    ]
  },
  {
    title: 'Physics',
    description: 'Senior Secondary School Physics.',
    examType: 'SSS',
    lessons: [
      { title: 'SSS1 - Introduction to Mechanics', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2500 },
      { title: 'SSS2 - Waves and Optics', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2600 },
      { title: 'SSS3 - Electricity & Modern Physics', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2800 }
    ]
  },
  // ================= CHEMISTRY =================
  {
    title: 'Chemistry',
    description: 'Senior Secondary School Chemistry.',
    examType: 'SSS',
    lessons: [
      { title: 'SSS1 - Periodic Table and Atoms', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2200 },
      { title: 'SSS2 - Organic Chemistry I', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2900 },
      { title: 'SSS3 - Quantitative Analysis & Volumetric Math', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 3100 }
    ]
  },
  // ================= BIOLOGY =================
  {
    title: 'Biology',
    description: 'Senior Secondary School Biology.',
    examType: 'SSS',
    lessons: [
      { title: 'SSS1 - Cell Biology', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2000 },
      { title: 'SSS2 - Ecology and Genetics', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2400 },
      { title: 'SSS3 - Human Physiology', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: 2600 }
    ]
  }
];

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected for seeding. Purging old courses...');
    await Course.deleteMany({});
    
    console.log('Seeding new dynamic curriculum...');
    await Course.insertMany(seedData);
    
    console.log('Database Curriculums Seeded successfully! 🎉');
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection or seeding error', err);
    process.exit(1);
  });
