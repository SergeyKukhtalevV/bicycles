const content = document.querySelector('.page');
const header = content.querySelector('.header');
const menuButton = header.querySelector('.button_type_menu');
const menu = header.querySelector('.header__menu');
const switchThemePage = header.querySelector('.switch-theme');
const selectorThemePage = switchThemePage.querySelector('.switch-theme__invisible-checkbox');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('button_type_close');
  menu.classList.toggle('header__menu_opened');
});
switchThemePage.addEventListener('click', () => {
  if (selectorThemePage.checked) {
    content.classList.add('page_theme_dark');
    } else {
    content.classList.remove('page_theme_dark');
    }
});
