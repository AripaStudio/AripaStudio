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
            const filter = filter_dates();
            if(filter == true)
            {

            }
        });

        button_Oldest.addEventListener('click' , function()
        {
            const filter = filter_dates();
            if(filter == false)
            {
                
            }
        });

        // fonction Filter-button manager :
        function filter_manager()
        {        
            Tag_SNshotAP.textContent = "31-05-2025";
            Tag_materialColor.textContent = "14-10-2024";
            Tag_randomwk.textContent = "03-10-2024";
            Tag_Jange_Dayro.textContent = "01-11-2024";
            Tag_TodoList.textContent = "19-12-2024";
            Tag_Escape_from_reality.textContent = "01-04-2025";
            Tag_DNCaripa.textContent = "11-04-2025";
            Tag_AripaStudioHub.textContent = "18-04-2025";
            
        }

        function filter_dates(ascending = true)
         {
            
            const dates = [
                { name: "SNshotAP", date: "31-05-2025" },
                { name: "Material Color", date: "14-10-2024" },
                { name: "Random Work", date: "03-10-2024" },
                { name: "Jange Dayro", date: "01-11-2024" },
                { name: "Todo List", date: "19-12-2024" },
                { name: "Escape from Reality", date: "01-04-2025" },
                { name: "DN Caripa", date: "11-04-2025" },
                { name: "Aripa Studio Hub", date: "18-04-2025" }
            ];

            const parseDate = (dateString) => {
                const parts = dateString.split("-");
                return new Date(parts[2], parts[1] - 1, parts[0]); 
            };

            dates.sort((a, b) => {
                const dateA = parseDate(a.date);
                const dateB = parseDate(b.date);
                return ascending ? dateA - dateB : dateB - dateA;
            });            
        }

