import { initUI } from './ui.js';
import { initAuth } from './auth.js';
import { initDashboard } from './dashboard.js';
import { initCourses } from './courses.js';
import { initQuiz } from './quiz.js';
import { initContact } from './contact.js';
import { initVideo } from './video.js';
import { initChat } from './chat.js';

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    updateNav();   // show correct nav links based on auth state
    initAuth();
    initDashboard();
    initCourses();
    initQuiz();
    initContact();
    initVideo();
    initChat();
});

/**
 * Swap nav links: if user is logged in show Dashboard + Logout,
 * if not show Register + Sign In.
 */
function updateNav() {
    const token = localStorage.getItem('kie_token');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Pages that already have the logged-in nav baked into HTML — skip
    const alreadyLoggedInNav = ['dashboard.html', 'chat.html', 'quiz.html', 'video.html'];
    if (alreadyLoggedInNav.includes(currentPage)) {
        // Just wire the Logout link properly
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.innerText.trim().toLowerCase() === 'logout') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    localStorage.removeItem('kie_token');
                    localStorage.removeItem('kie_user');
                    window.location.href = 'signin.html';
                });
            }
        });
        return;
    }

    // Public pages — swap Register/Sign In → Dashboard/Logout if logged in
    if (token) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const text = link.innerText.trim().toLowerCase();
            if (text === 'register') {
                link.innerText = 'Dashboard';
                link.href = 'dashboard.html';
            }
            if (text === 'sign in') {
                link.innerText = 'Logout';
                link.href = '#';
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    localStorage.removeItem('kie_token');
                    localStorage.removeItem('kie_user');
                    window.location.href = 'signin.html';
                });
            }
        });
    }
}
