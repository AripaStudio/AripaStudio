// games-filter.js

const categoryButtons = document.querySelectorAll('.category-button');
const projectSections = document.querySelectorAll('.projects-section');

const button_Oldest = document.getElementById('filter-button-Oldest');
const button_Newest = document.getElementById('filter-button-Newest');

// Tag elements for displaying dates
const Tag_SNshotAP = document.getElementById('Tags-Time-SNshotAP');
const Tag_materialColor = document.getElementById('Tags-Time-Material_Color_AP');
const Tag_randomwk = document.getElementById('Tags-Time-RandomWK_AP');
const Tag_Jange_Dayro = document.getElementById('Tags-Time-jange_dayro');
const Tag_TodoList = document.getElementById('Tags-Time-ToDoList_AP');
const Tag_Escape_from_reality = document.getElementById('Tags-Time-Escape_From_Reality');
const Tag_DNCaripa = document.getElementById('Tags-Time-DNCaripa_AP');
const Tag_AripaStudioHub = document.getElementById('Tags-Time-AripaStudioHub');


categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.category-button.active').classList.remove('active');
        button.classList.add('active');

        projectSections.forEach(section => {
            section.style.display = 'none';
        });

        const category = button.getAttribute('data-category');
        const activeSection = document.querySelector(`.${category}-projects`);
        if (activeSection) {
            activeSection.style.display = 'block';
            // Re-apply current date sort order when category changes
            const currentSortButton = document.querySelector('.Filter-button.active');
            if (currentSortButton) {
                const isNewest = currentSortButton.id === 'filter-button-Newest';
                sortProjects(isNewest);
            } else {
                sortProjects(true); // Default to newest if no filter is active
            }
        }
    });
});

/**
 * Parses a date string in 'YYYY-MM-DD' format into a Date object.
 * @param {string} dateString - The date string to parse.
 * @returns {Date} A Date object.
 */
const parseDate = (dateString) => {
    const parts = dateString.split("-");
    return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
};

/**
 * Sorts and displays project cards within the currently visible section.
 * @param {boolean} isNewestFirst - True for newest to oldest, false for oldest to newest.
 */
function sortProjects(isNewestFirst = true) {
    const activeSection = document.querySelector('.projects-section[style*="display: block"]');

    if (!activeSection) {
        console.error("No active project section found to sort.");
        return;
    }

    const currentProjectGrid = activeSection.querySelector('.projects-grid');
    if (!currentProjectGrid) {
        console.error("No project grid found in the active section.");
        return;
    }

    // Get project cards with a release date from the active grid
    const projectCards = Array.from(currentProjectGrid.querySelectorAll('.project-card[data-release-date]'));

    projectCards.sort((a, b) => {
        const dateA = parseDate(a.getAttribute('data-release-date'));
        const dateB = parseDate(b.getAttribute('data-release-date'));
        
        return isNewestFirst ? dateB - dateA : dateA - dateB;
    });

    // Clear and re-append sorted cards to the grid
    while (currentProjectGrid.firstChild) {
        currentProjectGrid.removeChild(currentProjectGrid.firstChild);
    }
    projectCards.forEach(card => {
        currentProjectGrid.appendChild(card);
    });
}


button_Newest.addEventListener('click', function() {
    document.querySelector('.Filter-button.active').classList.remove('active');
    button_Newest.classList.add('active');
    sortProjects(true); // Sort by newest first
});

button_Oldest.addEventListener('click', function() {
    document.querySelector('.Filter-button.active').classList.remove('active');
    button_Oldest.classList.add('active');
    sortProjects(false); // Sort by oldest first
});


// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set display dates for project tags
    if (Tag_materialColor) Tag_materialColor.textContent = "14-10-2024";
    if (Tag_randomwk) Tag_randomwk.textContent = "03-10-2024";
    if (Tag_Jange_Dayro) Tag_Jange_Dayro.textContent = "01-11-2024";
    if (Tag_TodoList) Tag_TodoList.textContent = "19-12-2024";
    if (Tag_Escape_from_reality) Tag_Escape_from_reality.textContent = "01-04-2025";
    if (Tag_DNCaripa) Tag_DNCaripa.textContent = "11-04-2025";
    if (Tag_AripaStudioHub) Tag_AripaStudioHub.textContent = "18-04-2025";
    if (Tag_SNshotAP) Tag_SNshotAP.textContent = "31-05-2025";

    sortProjects(true); // Initial sort: newest projects first
});