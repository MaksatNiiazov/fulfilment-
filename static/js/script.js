const sliderRange = document.getElementById('slider-range');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');

prevButton.addEventListener('click', () => {
  slideTo(currentSlideIndex - 1);
});

nextButton.addEventListener('click', () => {
  slideTo(currentSlideIndex + 1);
});


function setSliderWidth() {
  const visibleSlides = sliderRange.value;
  const slideWidth = 100 / visibleSlides;
  sliderWrapper.style.width = `${sliderItems.length * slideWidth}%`;
  sliderItems.forEach(item => {
    item.style.flexBasis = `${slideWidth}%`;
  });
}

function slideTo(index) {
  const slideWidth = sliderItems[0].offsetWidth;
  sliderWrapper.style.transform = `translateX(-${slideWidth * index}px)`;
}

sliderRange.addEventListener('input', () => {
  setSliderWidth();
  slideTo(0);
});

window.addEventListener('resize', () => {
  setSliderWidth();
});

setSliderWidth();
slideTo(0);




  // Находим якорь и скрываем его при загрузке страницы
var backToTopButton = document.querySelector('#back-to-top');
backToTopButton.style.display = 'none';

// Функция, которая показывает или скрывает якорь в зависимости от прокрутки страницы
function toggleBackToTopButton() {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

// Функция, которая прокручивает страницу вверх с плавным эффектом
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Добавляем обработчик события scroll, который вызывает функцию toggleBackToTopButton()
window.addEventListener('scroll', toggleBackToTopButton);

// Добавляем обработчик события click для якоря, который прокручивает страницу вверх с плавным эффектом
backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToTop();
});

// Добавляем условие, чтобы якорь не был виден, когда пользователь находится вверху страницы
if (document.documentElement.scrollTop === 0) {
  backToTopButton.style.display = 'none';
}
