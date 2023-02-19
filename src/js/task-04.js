"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const elementsCount = document.querySelector('input[type="number"]');
const boxedArea = document.querySelector("#boxes");

function createBoxes(ammount) {
  ammount = elementsCount.value;
  let ElementSize = 30;

  if (boxedArea.hasChildNodes()) {
    ElementSize = boxedArea.lastElementChild.clientWidth + 10;
  } else {
    ElementSize;
  }

  for (let i = 0; i < ammount; i++) {
    const box = document.createElement("div");
    boxedArea.append(box);
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${ElementSize + i * 10}px`;
    box.style.height = `${ElementSize + i * 10}px`;
  }
}

function destroyBoxes() {
  while (boxedArea.hasChildNodes()) {
    boxedArea.removeChild(boxedArea.lastChild);
  }
}

createButton.addEventListener("click", createBoxes);

destroyButton.addEventListener("click", destroyBoxes);
