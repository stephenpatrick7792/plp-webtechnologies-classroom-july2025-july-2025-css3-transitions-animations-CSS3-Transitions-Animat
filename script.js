// ---------------- Part 2: Functions ----------------

// Example of global vs local scope
let globalCounter = 0; // Global variable

// Function with parameters & return value
function incrementCounter(step) {
  let localCounter = globalCounter + step; // Local scope
  globalCounter = localCounter; // Update global value
  return localCounter;
}

// Function to log messages (reusable)
function logMessage(message) {
  console.log("LOG:", message);
}

// ---------------- Part 3: Combining CSS + JS ----------------

// Animate box on button click
const triggerBtn = document.getElementById("triggerBtn");
const box = document.querySelector(".box");

triggerBtn.addEventListener("click", () => {
  box.classList.remove("animate"); // reset if animation already applied
  void box.offsetWidth; // trick to re-trigger animation
  box.classList.add("animate");

  let count = incrementCounter(1); // Use function with parameter
  logMessage("Box animated! Count = " + count);
});

// Popup modal logic
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");
const closePopup = document.getElementById("closePopup");

popupBtn.addEventListener("click", () => {
  popup.classList.add("show");
  logMessage("Popup opened");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
  logMessage("Popup closed");
});
