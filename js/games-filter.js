// games-filter.js


const categoryButtons = document.querySelectorAll('.category-button');
const filterTimeButtons = document.querySelectorAll('.Filter-button'); // Select all date filter buttons
const projectSections = document.querySelectorAll('.projects-section'); // All category sections

// Tag elements for displaying dates
const Tag_SNshotAP = document.getElementById('Tags-Time-SNshotAP');
const Tag_materialColor = document.getElementById('Tags-Time-Material_Color_AP');
const Tag_randomwk = document.getElementById('Tags-Time-RandomWK_AP');
const Tag_Jange_Dayro = document.getElementById('Tags-Time-jange_dayro');
const Tag_TodoList = document.getElementById('Tags-Time-ToDoList_AP');
const Tag_Escape_from_reality = document.getElementById('Tags-Time-Escape_From_Reality');
const Tag_DNCaripa = document.getElementById('Tags-Time-DNCaripa_AP');
const Tag_AripaStudioHub = document.getElementById('Tags-Time-AripaStudioHub');


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
    // Find the currently visible project section
    const activeSection = document.querySelector('.projects-section[style*="display: block"]');

    if (!activeSection) {
        console.error("No active project section found to sort.");
        return;
    }

    // Get the projects grid ONLY within the active section
    const currentProjectGrid = activeSection.querySelector('.projects-grid');
    if (!currentProjectGrid) {
        console.error("No project grid found in the active section.");
        return;
    }

    // Get all project cards that have a 'data-release-date' attribute within this specific grid.
    const projectCards = Array.from(currentProjectGrid.querySelectorAll('.project-card[data-release-date]'));

    // Only proceed with sorting if there are sortable cards
    if (projectCards.length > 0) {
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
}

// Event listeners for category buttons
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active class for category buttons
        document.querySelector('.category-button.active').classList.remove('active');
        button.classList.add('active');

        // Hide all project sections
        projectSections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected project section
        const category = button.getAttribute('data-category');
        const activeSection = document.querySelector(`.${category}-projects`);
        if (activeSection) {
            activeSection.style.display = 'block';
            
            // After changing category, apply the current date sort.
            // Check which date filter button is currently active.
            const currentSortButton = document.querySelector('.Filter-button.active');
            // Default to newest sort if no date filter is active
            const isNewest = currentSortButton ? currentSortButton.id === 'filter-button-Newest' : true;
            sortProjects(isNewest);
        }
    });
});

// Event listeners for date filter buttons
filterTimeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active class for date filter buttons
        document.querySelector('.Filter-button.active').classList.remove('active');
        button.classList.add('active');
        
        // Apply sorting to the currently visible section
        const isNewest = button.id === 'filter-button-Newest';
        sortProjects(isNewest);
    });
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

    // Ensure the initial category button ("completed") is active (as per your original HTML)
    // and then apply the initial sort (newest by default)
    const initialActiveCategoryButton = document.querySelector('.category-button.active');
    if (initialActiveCategoryButton) {
        // Trigger a click on the active category button to ensure its section is displayed and sorted
        initialActiveCategoryButton.click(); 
    } else {
        // Fallback: If no category is initially active, show 'completed' and sort by newest.
        document.querySelector('.completed-projects').style.display = 'block';
        sortProjects(true); // Default to newest if no specific category button was active
    }
});
