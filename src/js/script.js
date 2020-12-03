var menu = document.querySelector('.navigation__list');
var button = document.querySelector('.page-header__burger');

var onMenuButtonClick = function(evt) {
  evt.preventDefault();
  button.classList.toggle('page-header__burger--opened');
  menu.classList.toggle('navigation__list--opened');
}

button.addEventListener('click', onMenuButtonClick);
