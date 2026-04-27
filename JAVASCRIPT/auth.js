import { API_BASE } from './api.js';
import { showToast } from './ui.js';

export function checkAuth() {
    const protectedRoutes = ['dashboard.html', 'chat.html', 'quiz.html'];
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    if (protectedRoutes.includes(currentPath)) {
        const token = localStorage.getItem('kie_token');
        if (!token) {
            window.location.href = 'signin.html';
        }
    }
}

export function initAuth() {
    checkAuth();

    // Handle Registration
    const regBtn = document.getElementById('submit-registration');
    if (regBtn) {
        regBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const form = document.getElementById('registration-form');
            if(!form) return;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            data.subjects = formData.getAll('subjects');
            const ogText = regBtn.innerText;
            regBtn.innerText = 'Creating account...';
            regBtn.disabled = true;

            try {
                const response = await fetch(`${API_BASE}/auth/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                
                if (result.success) {
                    showToast('success', 'Registration successful! Redirecting...');
                    setTimeout(() => window.location.href = 'signin.html', 1500);
                } else {
                    showToast('error', result.message || 'Registration failed.');
                }
            } catch (error) {
                showToast('error', 'Network error. Make sure backend is running.');
            } finally {
                regBtn.innerText = ogText;
                regBtn.disabled = false;
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

            const submitBtn = signinForm.querySelector('button[type="submit"]');
            const ogText = submitBtn.innerText;
            submitBtn.innerText = 'Signing in...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(`${API_BASE}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                
                if (result.success) {
                    showToast('success', 'Signed in successfully!');
                    localStorage.setItem('kie_token', result.token);
                    localStorage.setItem('kie_user', JSON.stringify(result.user));
                    setTimeout(() => window.location.href = 'dashboard.html', 1000);
                } else {
                    showToast('error', result.message || 'Sign in failed');
                }
            } catch (error) {
                showToast('error', 'Network error. Make sure backend is running.');
            } finally {
                submitBtn.innerText = ogText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // Handle Logout
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.innerText.trim().toLowerCase() === 'logout') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('kie_token');
                localStorage.removeItem('kie_user');
                showToast('success', 'Logged out successfully');
                setTimeout(() => window.location.href = 'signin.html', 1000);
            });
        }
    });
}
