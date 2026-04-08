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

// Form Demo: capture registration/signin (will be replaced with backend)
const forms = document.querySelectorAll('.demo-form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('This form is a demo. Connect to backend to submit!');
    });
});
