// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById("fish-btn");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let resetBtn = document.getElementById("reset-btn");

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener("click", fishBtnClicked);
resetBtn.addEventListener("click", resetBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === "steve") {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    catchFish(number < 1, fishType = any, fishNum = any);
    }
  else if (character === "alex") {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    catchFish(number < 1, fishType = any, fishNum = any); 
}
}

// Event handler for resetBtn
function resetBtnClicked() {
  numCod = 0;
  numSalmon = 0;
  numTropical = 0;
  numPuffer = 0;

  numCodSpan.innerHTML = numCod;
  numSalmonSpan.innerHTML = numSalmon;
  numTropicalSpan.innerHTML = numTropical;
  numPufferSpan.innerHTML = numPuffer;
}

function catchFish(number, fishType, fishNum) {
        if (number < 1) {
          fishNum++;
          fishNumSpan.innerHTML = fishNum;
          resultImg.src = `img/${fishType}.png`;
        } else if (number < 1) {
          fishNum++;
          fishNumSpan.innerHTML = fishNum;
          resultImg.src = `img/${fishType}.png`;
        } else if (number < 1) {
          fishNum++;
          fishNumSpan.innerHTML = fishNum;
          resultImg.src = `img/${fishType}.png`;
        } else {
          fishNum++;
          fishNumSpan.innerHTML = fishNum;
          resultImg.src = `img/${fishType}.png`;
        }
}