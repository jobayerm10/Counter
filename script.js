let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.innerText = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.innerText = count;

  
});
