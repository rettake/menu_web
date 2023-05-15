// vars

bodyElement = document.querySelector(".body"); // Body
sliderElement = document.querySelectorAll(".slider"); // Slider
textElement = document.querySelectorAll(".title"); // Text
buttonElement = document.querySelectorAll(".bar"); // Button
pdfElement = document.querySelector(".pages"); // PDF
animElement = document.querySelector(".animation"); // Animation
middleElement = document.querySelectorAll(".middle"); // Middle
buttonBackElement = document.querySelector(".button_back"); // Button
hiddenLinkElement = document.querySelector(".hidden_link");

const reset = () => {
  sliderElement[0].value = 0;
  sliderElement[1].value = 0;
  calculateStyles(sliderElement[0].value, 0);
  calculateStyles(sliderElement[1].value, 1);
};

// Event Listeners

console.log(buttonElement[0], buttonElement[1]);

sliderElement[0].addEventListener("touchmove", () => {
  console.log(sliderElement.value);
  if (sliderElement[0].value == 99) {
    pdfElement.classList.add("pages_show");
    animElement.style.opacity = 0;
    middleElement[0].classList.add("middle_hide");
    middleElement[1].classList.add("middle_hide");
    bodyElement.classList.remove("overflow_hide");
  } else {
    calculateStyles(sliderElement[0].value, 0);
  }
});

sliderElement[0].addEventListener("change", () => {
  console.log(sliderElement[0].value);
  if (sliderElement[0].value == 99) {
    pdfElement.classList.add("pages_show");
    animElement.style.opacity = 0;
    middleElement[0].classList.add("middle_hide");
    middleElement[1].classList.add("middle_hide");
    bodyElement.classList.remove("overflow_hide");
  } else {
    calculateStyles(sliderElement[0].value, 0);
  }
});

sliderElement[1].addEventListener("touchmove", () => {
  console.log(sliderElement[1].value);
  if (sliderElement[1].value == 99) {
    hiddenLinkElement.click();
  } else {
    calculateStyles(sliderElement[1].value, 1);
  }
});

sliderElement[1].addEventListener("change", () => {
  console.log(sliderElement[1].value);
  if (sliderElement[1].value == 99) {
    hiddenLinkElement.click();
  } else {
    calculateStyles(sliderElement[1].value, 1);
  }
});

buttonBackElement.addEventListener("click", () => {
  console.log("1");

  sliderElement[0].value = 0;
  sliderElement[1].value = 0;
  calculateStyles(sliderElement[0].value, 0);
  calculateStyles(sliderElement[1].value, 1);

  pdfElement.classList.remove("pages_show");
  animElement.style.opacity = 1;
  middleElement[0].classList.remove("middle_hide");
  middleElement[1].classList.remove("middle_hide");
  bodyElement.classList.add("overflow_hide");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Functions

function calculateStyles(val, x) {
  console.log(x);

  if (val > 9) {
    buttonElement[x].style.backgroundColor = `rgba(255, 133, 33, 0.${val})`;
  } else {
    buttonElement[x].style.backgroundColor = `rgba(255, 133, 33, 0.0${val})`;
  }

  if (val < 50) {
    sliderElement[x].style.setProperty("--opacityIcon", 1 - (val * 2) / 100);
    sliderElement[x].style.setProperty("--linkIcon", "url(./images/icon.svg)");
  } else if (val == 50) {
    sliderElement[x].style.setProperty("--opacityIcon", 0);
  } else {
    sliderElement[x].style.setProperty("--opacityIcon", ((val % 50) * 2) / 100);
    sliderElement[x].style.setProperty("--linkIcon", "url(./images/icon2.svg)");
  }

  textElement[x].style.opacity = 1 - val / 100;
}
