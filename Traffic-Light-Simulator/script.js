const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const nextButton = document.getElementById("next-btn");
const redMessage = document.getElementById("red-message");
const yellowMessage = document.getElementById("yellow-message");
const greenMessage = document.getElementById("green-message");

let currentLight = "red";

nextButton.addEventListener("click", switchLight);

function switchLight() {
  // Turn off all lights and messages
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");
  redMessage.classList.remove("active-message");
  yellowMessage.classList.remove("active-message");
  greenMessage.classList.remove("active-message");

  if (currentLight === "red") {
    yellowLight.classList.add("active");
    yellowMessage.classList.add("active-message");
    yellowMessage.style.color = "yellow";
    redMessage.style.color = "white";
    greenLight.style.color = "white";
    currentLight = "yellow";
  } else if (currentLight === "yellow") {
    greenLight.classList.add("active");
    greenMessage.classList.add("active-message");
    currentLight = "green";
    yellowMessage.style.color = "white";
    redMessage.style.color = "white";
    greenLight.style.color = "green";
  } else {
    redLight.classList.add("active");
    redMessage.classList.add("active-message");
    currentLight = "red";
    yellowMessage.style.color = "white";
    redMessage.style.color = "red";
    greenLight.style.color = "white";
  }
}
