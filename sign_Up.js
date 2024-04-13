const title = document.querySelector(".title1 h1");

const letter = "elcome !";
title.textContent = "W";
var index = 0;

setInterval(() => {
  title.textContent += letter[index];
  index++;
  if (index == letter.length + 1) {
    index = 0;
    title.textContent = "W";
  }
}, 500);
