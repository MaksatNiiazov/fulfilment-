const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderCards = document.querySelectorAll('.slider-card');
const sliderButtons = document.querySelectorAll('.slider-button');
let slideIndex = 0;

// Set slideIndex to index of first visible card
for (let i = 0; i < sliderCards.length; i++) {
  if (sliderCards[i].classList.contains('active')) {
    slideIndex = i;
    break;
  }
}

// Add event listeners to slider buttons
sliderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.slide;
    if (direction === 'prev') {
      slideIndex--;
    } else {
      slideIndex++;
    }
    slideIndex = slideIndex < 0 ? sliderCards.length - 3 : slideIndex;
    slideIndex = slideIndex > sliderCards.length - 3 ? 0 : slideIndex;
    sliderWrapper.style.transform = `translateX(-${slideIndex * (100 / 3)}%)`;
    updateActiveCards();
  });
});

// Update active cards based on slideIndex
function updateActiveCards() {
  sliderCards.forEach(card => {
    card.classList.remove('active');
    const cardIndex = Array.from(sliderCards).indexOf(card);
    if (cardIndex >= slideIndex && cardIndex < slideIndex + 3) {
      card.classList.add('active');
    }
  });
}
