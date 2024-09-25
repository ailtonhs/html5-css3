let menu = document.getElementById("menu");

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


function clickMenu() {
    let menu = document.getElementById("menu");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }  
}