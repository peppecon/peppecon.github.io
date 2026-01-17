(function () {
    const initAbstracts = () => {
        document.querySelectorAll('.abstract-header').forEach(header => {
            // Remove existing listeners if any (though usually not necessary in Jekyll unless PJAX is used)
            const newHeader = header.cloneNode(true);
            header.parentNode.replaceChild(newHeader, header);

            newHeader.addEventListener('click', function () {
                const content = this.nextElementSibling;
                const isExpanded = content.style.display === 'block';

                content.style.display = isExpanded ? 'none' : 'block';
                this.classList.toggle('expanded');
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
