const content = document.querySelector('.page');
const header = content.querySelector('.header');
const menuButton = header.querySelector('.button_type_menu');
const menu = header.querySelector('.header__menu');

menuButton.addEventListener('click', () =>{
  menuButton.classList.toggle('button_type_close');
  menu.classList.toggle('header__menu_opened');
});
