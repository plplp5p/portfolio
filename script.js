const words = [

  "Artificial Intelligence",
  "Creative Development",
  "SQL & Data Skills",
  "Graphic Design"

];

let wordIndex = 0;
let charIndex = 0;

const typingText =
document.querySelector(".typing");

function typeEffect(){

  if(charIndex < words[wordIndex].length){

    typingText.textContent +=
    words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 90);

  }

  else{

    setTimeout(deleteEffect, 1400);

  }
}

function deleteEffect(){

  if(charIndex > 0){

    typingText.textContent =
    words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(deleteEffect, 45);

  }

  else{

    wordIndex++;

    if(wordIndex >= words.length){

      wordIndex = 0;

    }

    setTimeout(typeEffect, 300);
  }
}

typeEffect();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
