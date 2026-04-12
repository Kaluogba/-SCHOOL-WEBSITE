export function initCourses() {
    if (!window.location.pathname.includes('courses.html')) return;

    // Demo mode or Real Auth token: show banner, unlock all courses
    const isDemo = localStorage.getItem('demoMode') === 'true' || new URLSearchParams(window.location.search).get('demo') === 'true';
    const hasToken = localStorage.getItem('kie_token') !== null;
    
    if (isDemo || hasToken) {
        const banner = document.getElementById('demo-banner');
        if (banner) {
            banner.style.display = 'block';
            banner.classList.add('demo-banner');
            banner.removeAttribute('style'); // let class manage styles
        }
        
        document.querySelectorAll('.payment-status').forEach(el => {
            el.textContent = 'Unlocked (Demo)';
            el.classList.remove('locked');
            el.classList.add('unlocked');
        });
        
        document.querySelectorAll('.course-card__cta .btn').forEach(btn => {
            btn.href = 'video.html';
        });
    }
}
