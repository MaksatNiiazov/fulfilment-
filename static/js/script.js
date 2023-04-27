const slides = document.querySelector('.slider-wrapper').children;
const prevButton = document.querySelector('[data-slide="prev"]');
const nextButton = document.querySelector('[data-slide="next"]');
let index = 0;

prevButton.addEventListener('click', () => {
  if (index === 0) {
    index = slides.length - 5;
  } else {
    index--;
  }
  changeSlide(index);
});

nextButton.addEventListener('click', () => {
  if (index === slides.length - 5) {
    index = 0;
  } else {
    index++;
  }
  changeSlide(index);
});

function changeSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      if (i >= index && i < index + 5) {
        slides[i].classList.add('active');
      } else {
        slides[i].classList.remove('active');
      }
    }
    const width = slides[0].offsetWidth;
    const distance = -width * index;
    sliderWrapper.style.transform = `translateX(${distance}px)`;
  }
  



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
