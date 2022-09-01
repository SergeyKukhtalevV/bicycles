const content = document.querySelector('.page');
const header = content.querySelector('.header');
const menuButton = header.querySelector('.button_type_menu');
const nav = header.querySelector('.header__nav');
const themePageSwitches = content.querySelectorAll('.switch-theme');
const footer = content.querySelector('.footer');
const footerInput = footer.querySelector('.footer__email')
const descriptionSections = content.querySelectorAll('.section__description');
const sliderButtons = content.querySelectorAll('.slider__button');
const sliderButtonImages = content.querySelectorAll('.slider__button-image');
//const selectorThemePage = switchThemePage.querySelector('.switch-theme__invisible-checkbox');
const containerRadioButtons = content.querySelector('.bicycles__radio-buttons');
const invisibleRadioButtons = content.querySelectorAll('.switch-bicycles__invisible-radio');
//const switchBicycles = content.querySelectorAll('.switch-bicycles__invisible-radio');
const galleryBicycles = content.querySelectorAll('.bicycles__gallery');

const dotsBicycles = content.querySelector('.bicycles__dots');
const dotTemplate = document.querySelector('#item-template').content;


const optionSelectBicycle = content.querySelector('.bicycles__select-option');
let expanded = false;
invisibleRadioButtons.forEach((item) => {
  if(item.hasAttribute('checked')) {
    optionSelectBicycle.textContent = item.nextElementSibling.textContent;
  }
});
drawDots();
drawActiveDot();
//Функция открытия и закрытия меню на смартфоне
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('button_type_close');
  nav.classList.toggle('header__nav_opened');
});
//Функция переключения темы сайта
themePageSwitches.forEach((themePageSwitch) => {
  themePageSwitch.addEventListener('click', () => {
    const selectorThemePage = themePageSwitch.querySelector('.switch-theme__invisible-checkbox');
    if (selectorThemePage.checked) {
      content.classList.add('page_theme_dark');
      footer.classList.add('footer_theme_dark');
      footerInput.classList.add(('footer__email_theme_dark'));
      descriptionSections.forEach((desc) => {
        desc.classList.add('section__description_theme_dark');
      });
      sliderButtons.forEach((but) => {
        but.classList.add('slider__button_theme_dark');
      });
      sliderButtonImages.forEach((image) => {
        image.classList.add('slider__button-image_theme_dark');
      });
      themePageSwitch.querySelector('.switch-theme__selector').classList.add('switch-theme__selector_theme_dark');
    } else {
      content.classList.remove('page_theme_dark');
      footer.classList.remove('footer_theme_dark');
      footerInput.classList.remove(('footer__email_theme_dark'));
      descriptionSections.forEach((desc) => {
        desc.classList.remove('section__description_theme_dark');
      });
      sliderButtons.forEach((but) => {
        but.classList.remove('slider__button_theme_dark');
      });
      sliderButtonImages.forEach((image) => {
        image.classList.remove('slider__button-image_theme_dark');
      });
      themePageSwitch.querySelector('.switch-theme__selector').classList.remove('switch-theme__selector_theme_dark');
    }
  });
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

invisibleRadioButtons.forEach((switchBicycle, index) => {
  switchBicycle.addEventListener('click', () =>{
    showRadioButtons();
    deleteDots();
    optionSelectBicycle.textContent = switchBicycle.nextElementSibling.textContent;
    galleryBicycles.forEach((galleryBicycle, key) =>{
      index = (index > 2) ? index - invisibleRadioButtons.length / 2 : index;
      if(key === index) {
        console.log(optionSelectBicycle.textContent);
        galleryBicycle.classList.add('bicycles__gallery_active');
        drawDots();
        drawActiveDot();
      } else {
        galleryBicycle.classList.remove('bicycles__gallery_active');
      }
    });
  });
});
/////////////////////////////////////////////////////////
function createDot() {
  const dotElement = dotTemplate.querySelector('.bicycles__dot').cloneNode(true);
  dotElement.addEventListener('click', toggleDot);
  dotsBicycles.append(dotElement);
}
function drawDots() {

  const activeGalleryBicycles = content.querySelector('.bicycles__gallery_active');
  const itemBicycles = activeGalleryBicycles.querySelectorAll('.bicycles__item');
  const cntItemBicycles = itemBicycles.length;

  //console.log(dotElement);
  for (let i = 0; i < cntItemBicycles; i++) {
    createDot();
  }
}
function deleteDots() {
  const dotsBicycles = content.querySelectorAll('.bicycles__dot');
  dotsBicycles.forEach((dot) => {
    dot.remove();
  })
}
function drawActiveDot() {

  const dotsBicycles = content.querySelectorAll('.bicycles__dot');
  const activeGalleryBicycles = content.querySelector('.bicycles__gallery_active');
  const itemsBicycles = activeGalleryBicycles.querySelectorAll('.bicycles__item');
  itemsBicycles.forEach((item, n) => {
    if(item.classList.contains('bicycles__item_active')) {
      dotsBicycles[n].classList.add('bicycles__dot_active');
    }
  });
}
////////////////////////////////////////////////////////////////////

function showRadioButtons() {

  if (!expanded) {
    containerRadioButtons.style.display = "block";
    expanded = true;
  } else {
    containerRadioButtons.style.display = "none";
    expanded = false;
  }
}
/////////////////////////////////////////////////////
function toggleDot(event) {
  const activeDot = event.target;
  const ParentDots = activeDot.closest('.bicycles__dots');
  const dots = ParentDots.querySelectorAll('.bicycles__dot');
  const activeGalleryBicycles = content.querySelector('.bicycles__gallery_active');
  const itemsBicycles = activeGalleryBicycles.querySelectorAll('.bicycles__item');

  dots.forEach((dot, i) => {
    if(dot !== activeDot) {
      dot.classList.remove('bicycles__dot_active');
      itemsBicycles[i].classList.remove('bicycles__item_active');
    } else {
      dot.classList.add('bicycles__dot_active');
      itemsBicycles[i].classList.add('bicycles__item_active');
    }
  })
}
