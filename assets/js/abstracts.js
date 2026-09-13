(function () {
    const initAbstracts = () => {
        document.querySelectorAll('.abstract-header').forEach(header => {
            // Remove existing listeners if any (though usually not necessary in Jekyll unless PJAX is used)
            const newHeader = header.cloneNode(true);
            header.parentNode.replaceChild(newHeader, header);

            // Expose the row as a real control: focusable, and operable
            // with Enter/Space like a button.
            newHeader.setAttribute('role', 'button');
            newHeader.setAttribute('tabindex', '0');
            newHeader.setAttribute('aria-expanded', 'false');

            const toggle = function (header) {
                const content = header.nextElementSibling;
                const isExpanded = content.style.display === 'block';

                content.style.display = isExpanded ? 'none' : 'block';
                header.classList.toggle('expanded');
                header.setAttribute('aria-expanded', String(!isExpanded));

                // Re-typeset math if MathJax is loaded
                if (!isExpanded && window.MathJax && window.MathJax.typesetPromise) {
                    window.MathJax.typesetPromise([content]);
                }
            };

            newHeader.addEventListener('click', function () {
                toggle(this);
            });

            newHeader.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
                    event.preventDefault();
                    toggle(this);
                }
            });
        });
    };

    // Run on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAbstracts);
    } else {
        initAbstracts();
    }
})();
