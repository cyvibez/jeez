// Full image dispaly

var  fullDisplay = document.getElementById('fullDisplay');
var fullImg = document.getElementById('fullImg')

function openFullDisplay(full){
    fullDisplay.style.display = "flex";
    fullImg.src = full;
}  
function closeFullDisplay(){
    fullDisplay.style.display = "none";
}  

// dark and light mode 

var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}