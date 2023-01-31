var  fullDisplay = document.getElementById('fullDisplay');
var fullImg = document.getElementById('fullImg')

function openFullDisplay(full){
    fullDisplay.style.display = "flex";
    fullImg.src = full;
}  
function closeFullDisplay(){
    fullDisplay.style.display = "none";
}