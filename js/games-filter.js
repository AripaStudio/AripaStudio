// games-filter.js


const categoryButtons = document.querySelectorAll('.category-button');
const filterTimeButtons = document.querySelectorAll('.Filter-button');
const projectSections = document.querySelectorAll('.projects-section');

// Tag elements for displaying dates
const Tag_SNshotAP = document.getElementById('Tags-Time-SNshotAP');
const Tag_materialColor = document.getElementById('Tags-Time-Material_Color_AP');
const Tag_randomwk = document.getElementById('Tags-Time-RandomWK_AP');
const Tag_Jange_Dayro = document.getElementById('Tags-Time-jange_dayro');
const Tag_TodoList = document.getElementById('Tags-Time-ToDoList_AP');
const Tag_Escape_from_reality = document.getElementById('Tags-Time-Escape_From_Reality');
const Tag_DNCaripa = document.getElementById('Tags-Time-DNCaripa_AP');
const Tag_AripaStudioHub = document.getElementById('Tags-Time-AripaStudioHub');
const Tag_JsonDAP = document.getElementById('Tags-Time-JsonDAP');


const parseDate = (dateString) => {
    const parts = dateString.split("-");
    return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
};

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

    const projectCards = Array.from(currentProjectGrid.querySelectorAll('.project-card[data-release-date]'));

    if (projectCards.length > 0) {
        projectCards.sort((a, b) => {
            const dateA = parseDate(a.getAttribute('data-release-date'));
            const dateB = parseDate(b.getAttribute('data-release-date'));
            
            return isNewestFirst ? dateB - dateA : dateA - dateB;
        });

        while (currentProjectGrid.firstChild) {
            currentProjectGrid.removeChild(currentProjectGrid.firstChild);
        }
        projectCards.forEach(card => {
            currentProjectGrid.appendChild(card);
        });
    }
}

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
            
            const currentSortButton = document.querySelector('.Filter-button.active');
            const isNewest = currentSortButton ? currentSortButton.id === 'filter-button-Newest' : true;
            sortProjects(isNewest);
        }
    });
});

filterTimeButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.Filter-button.active').classList.remove('active');
        button.classList.add('active');
        
        const isNewest = button.id === 'filter-button-Newest';
        sortProjects(isNewest);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    if (Tag_materialColor) Tag_materialColor.textContent = "14-10-2024";
    if (Tag_randomwk) Tag_randomwk.textContent = "03-10-2024";
    if (Tag_Jange_Dayro) Tag_Jange_Dayro.textContent = "01-11-2024";
    if (Tag_TodoList) Tag_TodoList.textContent = "19-12-2024";
    if (Tag_Escape_from_reality) Tag_Escape_from_reality.textContent = "01-04-2025";
    if (Tag_DNCaripa) Tag_DNCaripa.textContent = "11-04-2025";
    if (Tag_AripaStudioHub) Tag_AripaStudioHub.textContent = "18-04-2025";
    if (Tag_SNshotAP) Tag_SNshotAP.textContent = "31-05-2025";
    if (Tag_JsonDAP) Tag_JsonDAP.textContent = "11-7-2025";

   
    const initialActiveCategoryButton = document.querySelector('.category-button.active');
    if (initialActiveCategoryButton) {
        initialActiveCategoryButton.click(); 
    } else {
        document.querySelector('.completed-projects').style.display = 'block';
        sortProjects(true); 
    }
});
