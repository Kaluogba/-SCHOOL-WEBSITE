import { apiFetch } from './api.js';

export async function initDashboard() {
    // Only run if we are on the dashboard
    if (!window.location.pathname.includes('dashboard.html')) return;

    // Set user name
    const storedUser = localStorage.getItem('kie_user');
    if (storedUser) {
        try {
            const user = JSON.parse(storedUser);
            document.getElementById('dash-name').innerText = `Welcome back, ${user.first_name || 'Student'}!`;
        } catch (e) {}
    }

    try {
        // Fetch dashboard stats (This assumes an endpoint returning this data)
        const data = await apiFetch('/user/dashboard-stats');
        renderDashboardData(data);
    } catch (error) {
        console.warn('Backend unavailable, falling back to dummy dynamic data for demo purposes:', error);
        
        // Dummy data fallback
        const dummyData = {
            stats: { completed: 14, passed: 9, pending: 1, score: '88%' },
            aiInsights: [
                'You spent <strong>25% more time</strong> on physics videos – fantastic engagement!',
                'Your algebra scores are improving steadily.',
                'The AI recommends you review <a href="#" style="color:var(--color-primary);">Differentiation</a> next.',
            ],
            courses: [
                { title: 'Mathematics - Algebra', type: 'Video', duration: '30 min', progressClass: 'course-progress-bar-fill-success', actionText: 'Continue', actionLink: '#', locked: false },
                { title: 'Physics - Motion', type: 'Quiz', duration: '15 min', progressClass: 'course-progress-bar-fill-warning', actionText: 'Start Quiz', actionLink: 'quiz.html', locked: false },
                { title: 'Further Mathematics - Differentiation', type: 'Not started', duration: '', progressClass: '', actionText: 'Locked', actionLink: '#', locked: true }
            ]
        };
        renderDashboardData(dummyData);
    }
}

function renderDashboardData(data) {
    if (data.stats) {
        document.getElementById('stat-completed').innerText = data.stats.completed;
        document.getElementById('stat-passed').innerText = data.stats.passed;
        document.getElementById('stat-pending').innerText = data.stats.pending;
        document.getElementById('stat-score').innerText = data.stats.score;
    }

    if (data.aiInsights) {
        const aiList = document.getElementById('ai-list');
        aiList.innerHTML = '';
        data.aiInsights.forEach(insight => {
            const li = document.createElement('li');
            li.innerHTML = insight;
            aiList.appendChild(li);
        });
    }

    if (data.courses) {
        const coursesContainer = document.getElementById('courses-container');
        coursesContainer.innerHTML = '';
        data.courses.forEach(course => {
            let buttonHTML = '';
            if (course.locked) {
                buttonHTML = `
                    <p class="locked-text">Locked. Complete previous video first.</p>
                    <button class="btn locked-btn">Locked</button>
                `;
            } else {
                buttonHTML = `
                    <div class="course-progress-bar-bg">
                        <div class="${course.progressClass}"></div>
                    </div>
                    <a href="${course.actionLink}" class="btn btn-primary course-btn">${course.actionText}</a>
                `;
            }

            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <div class="course-card__content">
                    <h4>${course.title}</h4>
                    <p>${course.locked ? course.type : `${course.type} • ${course.duration}`}</p>
                    ${buttonHTML}
                </div>
            `;
            coursesContainer.appendChild(card);
        });
    }
}
