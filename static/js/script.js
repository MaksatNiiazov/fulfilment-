const blocks = document.querySelectorAll(".block");

// Перебираем все блоки на странице
blocks.forEach((block) => {
  const hiddenBlock = block.querySelector(".hidden-block");
  const blockTitle = block.querySelector("p");

  // Добавляем обработчик клика на заголовок блока
  blockTitle.addEventListener("click", () => {
    if (hiddenBlock.classList.contains("fade-in")) {
      // Если класс .fade-in уже есть, то удаляем его
      hiddenBlock.classList.remove("fade-in");
    } else {
      // Если класс .fade-in отсутствует, то добавляем его через 10 миллисекунд
      setTimeout(() => {
        hiddenBlock.classList.add("fade-in");
      }, 10);
    }
  });
});

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
  
