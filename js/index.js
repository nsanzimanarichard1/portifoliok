// Tabs
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

// Side Menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() { sidemenu.style.right = "0px"; }
function closemenu() { sidemenu.style.right = "-250px"; }

function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('open');
    document.querySelector('.fa-bars').classList.toggle('hidden');
    document.querySelector('.fa-times').classList.toggle('hidden');
}

document.querySelector('.fa-bars').addEventListener('click', toggleMenu);
document.querySelector('.fa-times').addEventListener('click', toggleMenu);

// Read More Buttons for Services
const readMoreBtns = document.querySelectorAll('.readMoreBtn');
readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const parText = btn.previousElementSibling;
        parText.classList.toggle('show-more');
        btn.innerText = btn.innerText === 'Learn More' ? 'Learn Less' : 'Learn More';
    });
});

// See More Button for Portfolio
const seeMoreBtn = document.getElementById('seeMoreBtn');
seeMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const hiddenWorks = document.querySelectorAll('.work.hidden');
    hiddenWorks.forEach(work => work.classList.remove('hidden'));
    seeMoreBtn.style.display = 'none';
});
