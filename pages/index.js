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
//////////////////////////////////////////////////////////////////
const buttonPrev = document.querySelector('#buttonPrev');
const buttonNext = document.querySelector('#buttonNext');
const sliderItems = document.querySelectorAll('.slider__item');
let index = 0;
buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);

function nextSlide() {
  index === sliderItems.length - 1 ? index = 0 : index++;
  activeSlide(index);
}

function prevSlide() {
  index === 0 ? index = sliderItems.length - 1 : index--;
  activeSlide(index);
}

function activeSlide(n) {
  sliderItems.forEach((item) => {
    item.classList.remove('slider__item_active');
  });
  sliderItems[n].classList.add('slider__item_active');
}
/////////////////////////////////////////////////////////
const switchBicycles = content.querySelectorAll('.switch-bicycles__invisible-radio');
const galleryBicycles = content.querySelectorAll('.bicycles__gallery');

switchBicycles.forEach((switchBicycle, index) => {
  switchBicycle.addEventListener('click', () =>{
    galleryBicycles.forEach((galleryBicycle, key) =>{
      if(key === index) {
        galleryBicycle.classList.add('bicycles__gallery_active');
      } else {
        galleryBicycle.classList.remove('bicycles__gallery_active');
      }
    });
  });
});
/////////////////////////////////////////////////////////
