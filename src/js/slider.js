const slideFirstImg = require("../images/slider/slider-first.jpg");

const slideFirst = document.querySelector(".slide--first");
slideFirst.style.background = `url(${slideFirstImg})`;

// slider for explore section

const slideImgLeft = require("../images/slider/explore-left.png");
const slideImgRight = require("../images/slider/explore-right.png");
const imgExploreSlideLeft = document.querySelector(".img-comp__before");
imgExploreSlideLeft.src = slideImgLeft;
const imgExploreSlideRight = document.querySelector(".img-comp__after");
imgExploreSlideRight.src = slideImgRight;

const inputSliderRange = document.querySelector(".img-comp__slider-range");
const compareImgBefore = document.querySelector(".img-comp__before");
const imgCompareSliderLine = document.querySelector(".img-comp__slider-track");

inputSliderRange.addEventListener("input", (e) => {
  let sliderValue = e.target.value + "%";
  compareImgBefore.style.width = sliderValue;
  imgCompareSliderLine.style.left = sliderValue;
});
