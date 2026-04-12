// Handle UI generic interactions

export function initUI() {
    // change navbar styles on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if(nav) {
            nav.classList.toggle('window-scroll', window.scrollY > 0);
        }
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
}

export function showToast(type, message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hide');
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 3000);
}
