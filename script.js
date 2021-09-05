"use strict";

// I want to read the value of color picker

const colorDisplayBox = document.querySelector(".colorDisplayBox");

document.querySelector(".colorPicker").addEventListener("click", newColor);

function newColor() {
  //just testing stuff
  //right now the eventlistener will only work with click
  //but I want it to work whenever the value changes

  const chosenColorHEX = document.querySelector(".colorPicker").value;
  const hexCodeSpot = document.querySelector(".HEX-info span");
  hexCodeSpot.textContent = chosenColorHEX;
  console.log(`The chosen color is: ${chosenColor}`);
}

//I need to seperate functions between the ones converting the color value
//and the the ones displaying (model and view)
