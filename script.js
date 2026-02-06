"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

// Lista de imágenes en orden para el botón "No"
// Asegúrate de que los nombres coincidan exactamente con tus archivos
const imageSequence = [
  "img/cat-0.jpg",    // Inicio
  "img/cat_beach.png", // 1er clic No
  "img/cristo.jpg",    // 2do clic No
  "img/cat_frances.png",// 3er clic No
  "img/cat-4.jpg",     // Si tienes más...
  "img/cat-1.jpg",
  "img/cat-5.jpg",
  "img/cat-2.jpg"
];

let noCount = 0;
let play = true;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    
    // Cambiar imagen según la secuencia
    if (noCount < imageSequence.length) {
      catImg.src = imageSequence[noCount];
    }

    resizeYesButton();
    updateNoButtonText();

    // Detener el crecimiento si llegamos al final de los mensajes
    if (noCount >= 7) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "¡Siiiiii! Sabía que dirías que sí :3";
  buttonsContainer.classList.add("hidden");
  // Aquí puedes poner la imagen final de éxito
  catImg.src = "img/cat-yes.jpg"; 
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  // Multiplicador de 1.4 para que crezca constante pero no tan brusco
  yesButton.style.fontSize = `${fontSize * 1.4}px`;
  yesButton.style.padding = "2rem 4rem"; // Aumenta el área de clic también
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "¿Estás segura? Solo imaginate en una playa de filipinas🏝️",
    "Como seria realmente yendo por Brasil? 🇧🇷",
    "Y para recrear la foto del pintor austriaco? 🥐",
    "Me estás rompiendo el corazón...",
    "Piénsalo bien...",
    "Depresión 😿",
    "Ya no tienes más opciones... nos vemos"
  ];
  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}