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
// var icon2 = document.getElementById("icon2")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png" ;
    }else{
        icon.src = "images/moon.png" ;
    }
 }



// icon2.onclick = function(){
//     document.body.classList.toggle("light-theme")
//     icon2.style.display = "none";
// }
    // if (document.body.classList.contains("dark-theme")) {
    //     icon2.style.display = "flex";
    // } else{
    //     icon.style.display = "flex";
    // }
    // }

// icon2.onclick = function(){
//     document.body.classList.toggle("light-theme")
//     if (document.body.classList.contains("light-theme")) {
//         icon.style.display = "flex";
//     } else {
//         icon2.style.display = "none";
//     }
// }