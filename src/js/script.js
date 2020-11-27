var menu = document.querySelector('.page-header');
var button = document.querySelector('.page-header__button');

var onMenuButtonClick = function(evt) {
  evt.preventDefault();
  button.classList.toggle('page-header__button--opened');
  menu.classList.toggle('page-header--menu-opened');
}

button.addEventListener('click', onMenuButtonClick);
