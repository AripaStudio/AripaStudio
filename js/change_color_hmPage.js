//index.html:
const lbl_welcome = document.getElementById("welcome_homePage");
const lbl_info_head = document.getElementById("info_studio");
//aboutme.html:
const  lbl_Head_games = document.getElementById("head_games");
const lbl_info_games = document.getElementById("info_games");
//games-software.html:
const lbl_Head_aboutme = document.getElementById("head_aboutme");
const lbl_info_aboutme = document.getElementsByClassName("info_aboutme");


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

setInterval(() => changeColor(lbl_Head_aboutme, neonColors), 1000);
setInterval(() => changeColorClass(lbl_info_aboutme, neonDarkColors), 1500);

setInterval(() => changeColor(lbl_Head_games, neonColors), 1000);
setInterval(() => changeColor(lbl_info_games , neonDarkColors));

function changeColor(element, colorArray) {
    if (!element || !colorArray || colorArray.length === 0) {
        console.error("Invalid input to changeElementColor");
        return;
    }

    let randomIndex = getRandomInt(0, colorArray.length - 1);
    element.style.color = colorArray[randomIndex];
}

function changeColorClass(elements , colorArray)
{
  if (!elements || !colorArray || colorArray.length === 0) {
        console.error("Invalid input to changeColorClass");
        return;
    }

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        let randomIndex = getRandomInt(0, colorArray.length - 1);
        element.style.color = colorArray[randomIndex];
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}