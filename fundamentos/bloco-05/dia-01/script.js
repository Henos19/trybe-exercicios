const header = document.getElementById("header-container").style;

header.backgroundColor = "lightgreen";
header.color = "black";

const body = document.getElementById("container").style;
body.backgroundColor = "lightyellow"; 

let emer = document.querySelectorAll(".emergency-tasks h3")
for (let range = 0 ; range < emer.length ; range += 1){
    emer[range].style.backgroundColor = "purple";
    emer[range].style.color = "black"
}

let noEmer = document.querySelectorAll(".no-emergency-tasks h3")
for (let range = 0 ; range < noEmer.length ; range += 1){
    noEmer[range].style.backgroundColor = "lightblue";
    noEmer[range].style.color = "black"
}

let section = document.getElementsByTagName("section");
for(let range = 0 ; range < section.length ; range += 1){
    section[range].style.backgroundColor = "pink";
    section[range].style.display = "inline-block"
}

let footer = document.getElementById("footer-container").style
footer.backgroundColor = "green"
footer.height = "250px"
footer.color = "black"
