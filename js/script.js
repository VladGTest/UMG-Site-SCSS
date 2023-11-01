const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__navigation-wrapper');

const closeElem = document.querySelector('.hamburger');



hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if(menu.classList.contains('active'))
        document.body.style.overflow = "hidden";
    else
        document.body.style.overflow = "auto";

});

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
//     clo.classList.remove('active');
// });


// closeElem.addEventListener('click', () => {
//     menu.classList.remove('-active');
// })

