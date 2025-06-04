// games-filter.js
const categoryButtons = document.querySelectorAll('.category-button');
const projectSections = document.querySelectorAll('.projects-section');

//buttons: 
const button_Oldest = document.getElementById('filter-button-Oldest');
const button_Newest = document.getElementById('filter-button-Newest');

// Tags : 

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
                document.querySelector(`.${category}-projects`).style.display = 'block';
            });
        });


        //Event Click buttons : 
        button_Newest.addEventListener('click' , function()
        {
            
        });

        button_Oldest.addEventListener('click' , function()
        {

        });

        // fonction Filter-button manager :
        function filter_manager()
        {        

        }
