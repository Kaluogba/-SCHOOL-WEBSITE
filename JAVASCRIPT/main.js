// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Mobile menu toggle
const openBtn = document.getElementById('open-menu-button');
const closeBtn = document.getElementById('close-menu-button');
const navMenu = document.querySelector('.nav__menu');

openBtn?.addEventListener('click', () => {
    navMenu?.classList.add('active');
    if (closeBtn) closeBtn.style.display = 'block';
});

closeBtn?.addEventListener('click', () => {
    navMenu?.classList.remove('active');
    if (closeBtn) closeBtn.style.display = 'none';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    if (nav && !nav.contains(e.target) && navMenu?.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (closeBtn) closeBtn.style.display = 'none';
    }
});

// Base URL for Backend API
const API_BASE = 'http://localhost:5000/api';

// Handle Registration
const regBtn = document.getElementById('submit-registration');
if (regBtn) {
    regBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const form = document.getElementById('registration-form');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const statusDiv = document.getElementById('form-status');
        statusDiv.style.color = 'var(--color-primary)';
        statusDiv.innerText = 'Creating account...';

        try {
            const response = await fetch(`${API_BASE}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.success) {
                statusDiv.style.color = 'var(--color-success)';
                statusDiv.innerText = 'Registration successful! Redirecting...';
                setTimeout(() => window.location.href = 'signin.html', 1500);
            } else {
                statusDiv.style.color = 'var(--color-danger)';
                statusDiv.innerText = result.message || 'Registration failed.';
            }
        } catch (error) {
            statusDiv.style.color = 'var(--color-danger)';
            statusDiv.innerText = 'Network error. Make sure backend is running.';
        }
    });
}

// Handle Sign In
const signinForm = document.getElementById('signin-form');
if (signinForm) {
    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(signinForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`${API_BASE}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.success) {
                // Save token
                localStorage.setItem('kie_token', result.token);
                localStorage.setItem('kie_user', JSON.stringify(result.user));
                window.location.href = 'dashboard.html';
            } else {
                alert(result.message || 'Sign in failed');
            }
        } catch (error) {
            alert('Network error. Make sure backend is running.');
        }
    });
}
