//index.html:
const lbl_welcome = document.getElementById("welcome_homePage");
const lbl_info_head = document.getElementById("info_studio");

//games-software.html:
const lbl_Head_games = document.getElementById("head_games");
const lbl_info_games = document.getElementById("info_games");
const lbls_Category_games = document.getElementsByClassName("header-textinfo");

//aboutme.html:
const lbl_Head_aboutme = document.getElementById("head_aboutme");
const lbl_info_aboutme = document.getElementsByClassName("info_aboutme");


let neonColors = [
  "#0FF",       // Aqua
  "#FF0",       // Yellow
  "#F0F",       // Magenta
  "#0F0",       // Green
  "#FF0066",    // Neon Pink
  "#00FFFF",    // Cyan
  "#99FF33",    // Light Green
  "#FF99CC",    // Light Pink
  "#66FF66",    // Bright Green
  "#FF4500",    // Orange Red
  "#FF1493",    // Deep Pink
  "#00FF7F",    // Spring Green
  "#FF6347",    // Tomato
  "#FFD700",    // Gold
  "#FF00FF",    // Bright Magenta
  "#FF8C00",    // Dark Orange
  "#32CD32",    // Lime Green
  "#ADFF2F",    // Green Yellow
  "#FF1493",    // Deep Pink
  "#FF00B3",    // Neon Fuchsia
  "#00FFCC"     // Neon Turquoise
];


let neonDarkColors = [
    "#B2EBF2",   // Light Cyan
    "#B2DFDB",   // Light Teal
    "#C8E6C9",   // Light Green
    "#DCEDC8",   // Light Lime
    "#F0F4C3",   // Light Yellow Green
    "#F8BBD0",   // Light Pink
    "#E1BEE7",   // Light Purple
    "#D1C4E9",   // Light Lavender
    "#BBDEFB",   // Light Sky Blue
    "#80DEEA",   // Light Turquoise
    "#80CBC4",   // Light Teal Green
    "#A7FFEB",   // Light Aquamarine
    "#90CAF9",   // Light Blue
    "#A5D6A7",   // Light Green Darker
    "#E0E0E0",   // Light Gray
    "#9E9E9E",   // Gray
    "#607D8B",   // Blue Grey
    "#455A64",   // Blue Grey Darker
    "#78909C",   // Blue Grey Light
    "#B0BEC5"    // Blue Grey Lightest
];


//index.html
setInterval(() => changeColor(lbl_welcome, neonColors), 1000);
setInterval(() => changeColor(lbl_info_head, neonDarkColors), 1500);

//aboutme.html
setInterval(() => changeColor(lbl_Head_aboutme, neonColors), 1000);
setInterval(() => changeColorClass(lbl_info_aboutme, neonDarkColors), 1500);

//game-software.html
setInterval(() => changeColor(lbl_Head_games, neonColors), 1000);
setInterval(() => changeColor(lbl_info_games , neonDarkColors) , 1500);
setInterval(() => changeColorClass(lbls_Category_games , neonDarkColors) , 1500);

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