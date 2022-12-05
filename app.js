const navigationLinks = document.querySelector('#navigation-links');
const heroContent = document.querySelector('#hero-content');

// buttons 
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');


openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);

function openNav() {
    document.getElementById("navigation-links").style.height = "380px";
    openMenu.style.opacity = "0";
    closeMenu.style.right= "30px";

    heroContent.style.opacity = "0";
}

function closeNav() {
    document.getElementById("navigation-links").style.height = "0";
    openMenu.style.opacity = "1";
    closeMenu.style.right= "-50px";

    heroContent.style.opacity = "1";
}


// CLIENT SLIDER
const clientsContainer = [...document.querySelectorAll('.client')];

const nextBtn = [...document.querySelectorAll('.next')];
const prevBtn = [...document.querySelectorAll('.prev')];

clientsContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});