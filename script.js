// vars

bodyElement = document.querySelector('.body') // Body
sliderElement = document.querySelector('.slider'); // Slider
textElement = document.querySelector('.title') // Text
buttonElement = document.querySelector('.bar') // Button
pdfElement = document.querySelector('.pages'); // PDF
animElement = document.querySelector('.animation'); // Animation
middleElement = document.querySelector('.middle') // Middle
buttonBackElement = document.querySelector(".button_back") // Button

// Event Listeners

sliderElement.addEventListener('touchmove', () => {
  console.log(sliderElement.value)
  if (sliderElement.value == 99) {
    pdfElement.classList.add("pages_show");
    animElement.style.opacity = 0;
    middleElement.classList.add('middle_hide');
    bodyElement.classList.remove('overflow_hide');
  } else {
    calculateStyles(sliderElement.value)
  }
})

sliderElement.addEventListener('change', () => {
  console.log(sliderElement.value)
  if (sliderElement.value == 99) {
    pdfElement.classList.add("pages_show");
    animElement.style.opacity = 0;
    middleElement.classList.add('middle_hide');
    bodyElement.classList.remove('overflow_hide');
  } else {
    calculateStyles(sliderElement.value)
  }
})

buttonBackElement.addEventListener('click', () => {
  sliderElement.value = 0;
  calculateStyles(sliderElement.value);

  pdfElement.classList.remove("pages_show");
  animElement.style.opacity = 1;
  middleElement.classList.remove('middle_hide');
  bodyElement.classList.add('overflow_hide');
})

// Functions

function calculateStyles(val) {
  if (val > 9) {
    buttonElement.style.backgroundColor = `rgba(255, 133, 33, 0.${val})`;
  } else {
    buttonElement.style.backgroundColor = `rgba(255, 133, 33, 0.0${val})`
  }

  if (val < 50) {
    sliderElement.style.setProperty('--opacityIcon', 1 - (val * 2) / 100)
    sliderElement.style.setProperty('--linkIcon', 'url(./images/icon.svg)')
  } else if (val == 50) {
    sliderElement.style.setProperty('--opacityIcon', 0)
  } else {
    sliderElement.style.setProperty('--opacityIcon', (val % 50) * 2 / 100)
    sliderElement.style.setProperty('--linkIcon', 'url(./images/icon2.svg)')
  }

  textElement.style.opacity = 1 - (val / 100);
}



