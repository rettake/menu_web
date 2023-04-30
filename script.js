// vars

sliderElement = document.querySelector('.slider'); // Slider
textElement = document.querySelector('.title') // Text
buttonElement = document.querySelector('.bar') // Button

// Event Listeners

sliderElement.addEventListener('touchmove', () => {
  console.log(sliderElement.value)
  calculateStyles(sliderElement.value)
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



