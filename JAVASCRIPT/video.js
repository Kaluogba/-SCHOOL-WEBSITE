export function initVideo() {
    if (!window.location.pathname.includes('video.html')) return;

    // Parse URL parameters for dynamic content filling
    const urlParams = new URLSearchParams(window.location.search);
    const videoUrl = urlParams.get('url');
    const title = urlParams.get('title');
    const lessonId = urlParams.get('lessonId');

    // Handle Title Injection
    const titleEl = document.getElementById('lesson-title');
    if (titleEl && title) {
        titleEl.innerText = title;
    }

    // Handle iframe Injection
    const iframe = document.getElementById('lesson-video');
    if (iframe) {
        if (videoUrl) {
            iframe.src = videoUrl;
        } else {
            console.warn("No video URL param passed to video.html");
        }
    }

    // Demo mode detection and Timer Logic
    const isDemo = localStorage.getItem('demoMode') === 'true' || urlParams.get('demo') === 'true';
    if (isDemo) {
        localStorage.setItem('demoMode', 'true');
    }

    // UI elements
    const requiredSeconds = isDemo ? 0 : 15 * 60; // 15 min real
    let watchedSeconds = 0;
    const requiredTimeEl = document.getElementById('required-time');
    const currentTimeEl = document.getElementById('current-time');
    const statusEl = document.getElementById('timer-status');
    const unlockBanner = document.getElementById('quiz-unlocked-banner');
    
    // Bind lessonId payload natively
    if (unlockBanner && lessonId) {
        const quizBtn = unlockBanner.querySelector('a');
        if (quizBtn) {
            quizBtn.href = `quiz.html?lessonId=${lessonId}`;
        }
    }

    if (requiredTimeEl) {
        requiredTimeEl.textContent = isDemo ? '0:00' : (requiredSeconds / 60).toFixed(0) + ':00';
    }
    if (statusEl && isDemo) {
        statusEl.textContent = '✅ Demo mode - no minimum required';
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return m + ':' + s.toString().padStart(2, '0');
    }

    const interval = setInterval(() => {
        watchedSeconds++;
        if (currentTimeEl) currentTimeEl.textContent = formatTime(watchedSeconds);
        if (watchedSeconds >= requiredSeconds) {
            clearInterval(interval);
            if (statusEl) {
                statusEl.textContent = '✅ Complete - Quiz unlocked';
                statusEl.style.color = 'var(--color-success)';
            }
            if (unlockBanner) unlockBanner.style.display = 'block';
        }
    }, 1000);

    // Show Demo banner
    if (isDemo) {
        const banner = document.getElementById('demo-banner');
        if (banner) banner.style.display = 'block';
    }
}
