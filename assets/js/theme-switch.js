document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('site-theme-toggle');
    const styleSelect = document.getElementById('style-preset-select');
    const htmlElement = document.documentElement;
    const STORAGE_KEY = 'site-theme-view';
    const PRESET_KEY = 'site-style-preset';

    // Restore saved style preset
    const savedPreset = localStorage.getItem(PRESET_KEY);
    if (savedPreset && savedPreset !== 'default') {
        htmlElement.setAttribute('data-theme-preset', savedPreset);
        if (styleSelect) styleSelect.value = savedPreset;
    }

    if (styleSelect) {
        styleSelect.addEventListener('change', function () {
            const val = this.value;
            if (val === 'default') {
                htmlElement.removeAttribute('data-theme-preset');
                localStorage.removeItem(PRESET_KEY);
            } else {
                htmlElement.setAttribute('data-theme-preset', val);
                localStorage.setItem(PRESET_KEY, val);
            }
        });
    }

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

