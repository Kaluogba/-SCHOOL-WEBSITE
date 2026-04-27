import { apiFetch } from './api.js';
import { showToast } from './ui.js';

export function initContact() {
    if (!window.location.pathname.includes('contact.html')) return;

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-contact');
            const ogText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await apiFetch('/contact', {
                    method: 'POST',
                    body: JSON.stringify(data)
                });

                if (response.success) {
                    showToast('success', 'Message sent successfully!');
                    contactForm.reset();
                } else {
                    showToast('error', response.message || 'Failed to send message.');
                }
            } catch (error) {
                showToast('error', 'Network error. Make sure backend is running.');
            } finally {
                submitBtn.innerText = ogText;
                submitBtn.disabled = false;
            }
        });
    }
}
