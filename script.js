// Demonstrating global scope
let globalMessage = "Triggered by JavaScript!";

// Function with parameters and return value
function multiply(a, b) {
  return a * b; // returns product
}

// Function to add animation class dynamically
function animateBox(boxId, className) {
  let box = document.getElementById(boxId);

  // Local scope variable
  let localMessage = "Box is bouncing!";
  console.log(localMessage);

  box.classList.add(className);

  // Remove class after animation ends so it can be reused
  setTimeout(() => {
    box.classList.remove(className);
  }, 3000);

  return localMessage; // show return usage
}

// Attach event listener for box animation
document.getElementById("animateBtn").addEventListener("click", () => {
  console.log(globalMessage);
  let msg = animateBox("animateBox", "animate");
  console.log("Function returned:", msg);
});

// Card flip using toggle
document.getElementById("flipCard").addEventListener("click", () => {
  document.getElementById("flipCard").classList.toggle("flip");
});
