import { initUI } from './ui.js';
import { initAuth } from './auth.js';
import { initDashboard } from './dashboard.js';
import { initCourses } from './courses.js';
import { initQuiz } from './quiz.js';
import { initContact } from './contact.js';
import { initVideo } from './video.js';

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    initAuth();
    initDashboard();
    initCourses();
    initQuiz();
    initContact();
    initVideo();
});
