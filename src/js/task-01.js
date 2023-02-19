"use strict";

const categories = document.querySelector("#categories");
const categoriesCount = categories.children.length;
console.log(`Number of categories: ${categoriesCount}`);

const itemsList = document.querySelectorAll(".item");

const items = document.querySelectorAll(".item");
[...itemsList].forEach(item => {
  const title = item.firstElementChild.textContent;
  const elementsCount = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
