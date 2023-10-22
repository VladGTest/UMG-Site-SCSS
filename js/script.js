const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hidden-header');

const closeElem = document.querySelector('.hidden-header__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');

});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


// closeElem.addEventListener('click', () => {
//     menu.classList.remove('-active');
// })

