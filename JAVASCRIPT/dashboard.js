import { apiFetch } from './api.js';

export async function initDashboard() {
    if (!window.location.pathname.includes('dashboard.html')) return;

    // Set welcome name using stored user (name field, not first_name)
    const storedUser = localStorage.getItem('kie_user');
    if (storedUser) {
        try {
            const user = JSON.parse(storedUser);
            const firstName = user.name ? user.name.split(' ')[0] : 'Student';
            const nameEl = document.getElementById('dash-name');
            if (nameEl) nameEl.innerText = `Welcome back, ${firstName}!`;
        } catch (e) {}
    }

    try {
        const data = await apiFetch('/user/dashboard-stats');
        renderDashboardData(data);
    } catch (error) {
        console.warn('Backend unavailable, showing fallback data:', error.message);

        // Graceful fallback for demo/offline use
        renderDashboardData({
            stats: { completed: 0, passed: 0, pending: 0, score: 'N/A' },
            aiInsights: [
                '🚀 Start your first lesson to see AI-powered insights here.',
                '📚 Your personalized learning path is ready — click a course below!'
            ],
            courses: [
                { title: 'Mathematics — SSS1: Set Theory & Surds', type: 'Video', duration: '42 min', progressClass: 'course-progress-bar-fill-warning', actionText: 'Watch Video', actionLink: 'video.html', locked: false },
                { title: 'English — SSS2: Summary Writing', type: 'Video', duration: '35 min', progressClass: 'course-progress-bar-fill-warning', actionText: 'Watch Video', actionLink: 'video.html', locked: false },
                { title: 'Physics — SSS1: Mechanics', type: 'Video', duration: '42 min', progressClass: 'course-progress-bar-fill-warning', actionText: 'Watch Video', actionLink: 'video.html', locked: false }
            ]
        });
    }
}

function renderDashboardData(data) {
    if (data.stats) {
        const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
        set('stat-completed', data.stats.completed);
        set('stat-passed', data.stats.passed);
        set('stat-pending', data.stats.pending);
        set('stat-score', data.stats.score);
    }

    if (data.aiInsights) {
        const aiList = document.getElementById('ai-list');
        if (aiList) {
            aiList.innerHTML = '';
            data.aiInsights.forEach(insight => {
                const li = document.createElement('li');
                li.innerHTML = insight;
                aiList.appendChild(li);
            });
        }
    }

    if (data.courses) {
        const coursesContainer = document.getElementById('courses-container');
        if (!coursesContainer) return;
        coursesContainer.innerHTML = '';

        if (data.courses.length === 0) {
            coursesContainer.innerHTML = '<p style="color:var(--color-light);">No courses found for your profile level. Contact support.</p>';
            return;
        }

        data.courses.forEach(course => {
            let buttonHTML = '';
            if (course.locked) {
                buttonHTML = `
                    <p class="locked-text">Locked. Complete previous video first.</p>
                    <button class="btn locked-btn" disabled>Locked</button>
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
