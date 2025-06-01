
        function toggleMenu() {
            const menu = document.getElementById('quickLinksMenu');
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            } else {
                menu.classList.add('show');
            }
        }

        // Ensure footer buttons are clickable
        document.querySelectorAll('.footer-button, .quick-links-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });