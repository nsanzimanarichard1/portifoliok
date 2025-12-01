var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");

function opentab(tabname, event) {
    for (const tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (const tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0px";
}

function closemenu() {
    sidemenu.style.right = "-250px";
}


function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('open');
    var menuIconOpen = document.querySelector('.fa-bars');
    var menuIconClose = document.querySelector('.fa-times');
    menuIconOpen.classList.toggle('hidden');
    menuIconClose.classList.toggle('hidden');
}

document.querySelector('.fa-bars').addEventListener('click', toggleMenu);
document.querySelector('.fa-times').addEventListener('click', toggleMenu);

//read more button

const readMoreBtn = document.querySelector('.readMoreBtn');
const parText = document.querySelector('.ptext');

readMoreBtn.addEventListener('click', (e) =>{
    
    parText.classList.toggle('show-more');
    if (readMoreBtn.innerText === 'Learn More') {
        readMoreBtn.innerText = 'Learn Less'
        
    }
    else{
        readMoreBtn.innerText = 'Learn More'
    }
}); 