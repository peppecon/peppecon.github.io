/*
 * Highlights the sidebar section link matching the part of the single page
 * currently in view, and keeps the URL hash in sync while scrolling.
 */
(function () {
    const initSectionNav = () => {
        const links = Array.from(document.querySelectorAll('.sidebar-nav .section-link'));
        if (!links.length) return;

        const sections = links
            .map(link => {
                const el = document.getElementById(link.dataset.target);
                return el ? { link: link, el: el } : null;
            })
            .filter(Boolean);

        // Not the single page (e.g. the CV page): leave every link inactive.
        if (!sections.length) return;

        const setActive = () => {
            const offset = 120;
            let current = sections[0];
            sections.forEach(section => {
                if (section.el.getBoundingClientRect().top <= offset) {
                    current = section;
                }
            });
            // At the very bottom of the page, always mark the last section.
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                current = sections[sections.length - 1];
            }
            links.forEach(link => link.classList.toggle('active', link === current.link));
        };

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                setActive();
                ticking = false;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        setActive();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSectionNav);
    } else {
        initSectionNav();
    }
})();
