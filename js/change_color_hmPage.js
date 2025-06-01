const lbl_welcome = document.getElementById("welcome_homePage");


let neonColors = ["#0ff", "#ff0", "#f0f", "#0f0", "#0ff", "#ff0066", "#00ffff", "#99ff33", "#ff99cc", "#66ff66"];

function changeColor() {
    let randomIndex = Math.floor(Math.random() * neonColors.length);

    let randomColor = neonColors[randomIndex];

    lbl_welcome.style.color = randomColor;
}

setInterval(changeColor, 1000);
