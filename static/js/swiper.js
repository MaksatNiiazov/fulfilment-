const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = Array.from(sliderWrapper.children);

const slideWidth = slides[0].getBoundingClientRect().width;
const slideMargin = 10; // Расстояние между слайдами

// Устанавливаем ширину обертки
sliderWrapper.style.width = `${(slideWidth + slideMargin) * slides.length}px`;

let currentIndex = 0;

// Обработчик для кнопки "Вперед"
document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > slides.length - 5) {
    currentIndex = slides.length - 5;
  }
  sliderWrapper.style.transform = `translateX(-${(slideWidth + slideMargin) * currentIndex}px)`;
});

// Обработчик для кнопки "Назад"
document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  sliderWrapper.style.transform = `translateX(-${(slideWidth + slideMargin) * currentIndex}px)`;
});
