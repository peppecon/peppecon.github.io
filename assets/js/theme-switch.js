document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('site-theme-toggle');
    const htmlElement = document.documentElement;
    const STORAGE_KEY = 'site-theme-view';

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isClassic = htmlElement.getAttribute('data-site-view') === 'classic';

            if (isClassic) {
                htmlElement.removeAttribute('data-site-view');
                localStorage.setItem(STORAGE_KEY, 'atom');
            } else {
                htmlElement.setAttribute('data-site-view', 'classic');
                localStorage.setItem(STORAGE_KEY, 'classic');
            }

            // Haptic-like effect
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 100);
        });
    }
});
