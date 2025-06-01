// games-filter.js
const categoryButtons = document.querySelectorAll('.category-button');
const projectSections = document.querySelectorAll('.projects-section');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelector('.category-button.active').classList.remove('active');
                button.classList.add('active');

                projectSections.forEach(section => {
                    section.style.display = 'none';
                });

                const category = button.getAttribute('data-category');
                document.querySelector(`.${category}-projects`).style.display = 'block';
            });
        });
