import { apiFetch } from './api.js';

// Subject icon map
const SUBJECT_ICONS = {
    'Mathematics':      'uil-calculator-alt',
    'English Language': 'uil-book-open',
    'Physics':          'uil-atom',
    'Chemistry':        'uil-flask',
    'Biology':          'uil-dna',
    'default':          'uil-graduation-cap'
};

export async function initCourses() {
    if (!window.location.pathname.includes('courses.html')) return;

    const isLoggedIn = !!localStorage.getItem('kie_token');
    const isDemo = localStorage.getItem('demoMode') === 'true' || new URLSearchParams(window.location.search).get('demo') === 'true';

    // Show demo banner
    if (isDemo) {
        localStorage.setItem('demoMode', 'true');
        const banner = document.getElementById('demo-banner');
        if (banner) banner.style.display = 'block';
    }

    // Try to fetch live courses from backend
    try {
        const res = await apiFetch('/courses');
        if (res.success && res.data && res.data.length > 0) {
            renderCoursesFromAPI(res.data, isLoggedIn || isDemo);
            return;
        }
    } catch (err) {
        console.warn('Could not load courses from backend:', err.message);
    }

    // Fallback: just unlock static cards if logged in / demo
    if (isLoggedIn || isDemo) {
        document.querySelectorAll('.payment-status').forEach(el => {
            el.textContent = 'Unlocked';
            el.classList.remove('locked');
            el.classList.add('unlocked');
        });
        document.querySelectorAll('.course-card__cta .btn').forEach(btn => {
            if (btn.href.includes('signin')) btn.href = 'dashboard.html';
        });
    }
}

function renderCoursesFromAPI(courses, isUnlocked) {
    // Group by examType
    const grouped = { JSS: [], SSS: [] };
    courses.forEach(c => {
        if (c.examType === 'JSS') grouped.JSS.push(c);
        else grouped.SSS.push(c);
    });

    // Find the main content area
    const section = document.querySelector('.courses__container .container');
    if (!section) return;

    // Clear existing static content (keep demo banner + heading)
    const heading = section.querySelector('h2');
    const demoBanner = section.querySelector('#demo-banner');
    section.innerHTML = '';
    if (demoBanner) section.appendChild(demoBanner);
    if (heading) section.appendChild(heading);

    // Render each group
    const groups = [
        { label: 'Senior Secondary (SSS)', key: 'SSS' },
        { label: 'Junior Secondary (JSS)', key: 'JSS' }
    ];

    groups.forEach(({ label, key }) => {
        if (grouped[key].length === 0) return;

        const catTitle = document.createElement('h3');
        catTitle.className = 'course-category-title';
        catTitle.textContent = label;
        section.appendChild(catTitle);

        const grid = document.createElement('div');
        grid.className = 'courses-grid';

        grouped[key].forEach(course => {
            const iconClass = SUBJECT_ICONS[course.title] || SUBJECT_ICONS['default'];
            const lessonCount = course.lessons ? course.lessons.length : 0;

            // Build lesson list for tooltip
            const lessonTitles = course.lessons
                ? course.lessons.map(l => `• ${l.title}`).join('\n')
                : '';

            // First lesson link
            let ctaHref = 'signin.html';
            if (isUnlocked && course.lessons && course.lessons.length > 0) {
                const first = course.lessons[0];
                ctaHref = `video.html?url=${encodeURIComponent(first.videoUrl)}&title=${encodeURIComponent(first.title)}&lessonId=${first._id}`;
            }

            const statusText = isUnlocked ? 'Unlocked' : 'Requires Sign In';
            const statusClass = isUnlocked ? 'unlocked' : 'locked';

            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <div class="course-card__content">
                    <span class="feature-icon" style="font-size:2rem;margin-bottom:0.5rem;display:inline-block;">
                        <i class="uil ${iconClass}"></i>
                    </span>
                    <h4>${course.title}</h4>
                    <p style="font-size:0.85rem;color:var(--color-light);margin-bottom:0.5rem;">${course.description}</p>
                    <p style="font-size:0.8rem;opacity:0.7;">${lessonCount} lesson${lessonCount !== 1 ? 's' : ''}</p>
                    <div class="course-card__cta">
                        <a href="${ctaHref}" class="btn btn-primary" style="padding:0.5rem 1rem;font-size:0.8rem;">
                            ${isUnlocked ? 'Start Learning' : 'Sign In to Access'}
                        </a>
                        <span class="payment-status ${statusClass}">${statusText}</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
    });
}
