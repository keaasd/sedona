const btnBurger = document.querySelector('.navigation__toggle');
const menu = document.querySelector('.navigation__wrapper');
const close = document.querySelector('.navigation__cloce');


btnBurger.addEventListener('click', (e) => {
    menu.classList.toggle("navigation--active");
    console.log('клик по кнопке');
    btnBurger.classList.toggle("navigation__type--on");
});
// setTimeout(
//  "4000");
// close.addEventListener('click', (e) => {
//   toggle.classList.remove("navigation__toggle--toggle");
//     menu.classList.remove("navigation__wrapper--toggle");
// })