document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('site-theme-toggle');
    const htmlElement = document.documentElement;
    const STORAGE_KEY = 'site-theme-view';

    // Ensure theme mode preference is preserved
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'classic') {
        htmlElement.setAttribute('data-site-view', 'classic');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isDark = htmlElement.getAttribute('data-site-view') === 'classic';

            if (isDark) {
                htmlElement.removeAttribute('data-site-view');
                localStorage.setItem(STORAGE_KEY, 'light');
            } else {
                htmlElement.setAttribute('data-site-view', 'classic');
                localStorage.setItem(STORAGE_KEY, 'classic');
            }

            // Haptic feedback effect
            themeToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 100);
        });
    }
});


