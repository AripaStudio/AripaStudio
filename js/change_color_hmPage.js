const lbl_welcome = document.getElementById("welcome_homePage");
const lbl_info_head = document.getElementById("info_studio");
let neonColors = ["#0ff", "#ff0", "#f0f", "#0f0", "#0ff", "#ff0066", "#00ffff", "#99ff33", "#ff99cc", "#66ff66"];
let neonDarkColors = [
    "#B2EBF2",  
    "#B2DFDB",  
    "#C8E6C9",  
    "#DCEDC8",  
    "#F0F4C3",  
    "#F8BBD0", 
    "#E1BEE7",  
    "#D1C4E9", 
    "#BBDEFB", 
    "#80DEEA", 
    "#80CBC4", 
    "#A7FFEB"   
];

setInterval(() => changeColor(lbl_welcome, neonColors), 1000);


setInterval(() => changeColor(lbl_info_head, neonDarkColors), 1500);

function changeColor(element, colorArray)
{
   if (!element || !colorArray || colorArray.length === 0) {
        console.error("Invalid input to changeElementColor");
        return; 
    }

    let randomIndex = getRandomInt(0, colorArray.length - 1);
    element.style.color = colorArray[randomIndex];
}

function getRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
setInterval(changeColor, 1000);
