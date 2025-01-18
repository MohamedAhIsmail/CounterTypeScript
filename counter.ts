class Counter {
  counter: number;

  constructor(initialValue: number = 0) {
    this.counter = initialValue;
  }

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 0;
  }
}

let counterInstance = new Counter();

let mainDiv = document.createElement("div");
mainDiv.id = "mainDiv"
let counterDisplay = document.createElement("h1");
let title = document.createElement("h1");
title.id ="title"
let increaseButton = document.createElement("button");
let decreaseButton = document.createElement("button");
let resetButton = document.createElement("button");
title.textContent = "Counter"
counterDisplay.textContent = `${counterInstance.counter}`;
increaseButton.textContent = "Increase";
decreaseButton.textContent = "Decrease";
resetButton.textContent = "Reset";
mainDiv.appendChild(title)
mainDiv.appendChild(counterDisplay);
mainDiv.appendChild(decreaseButton);
mainDiv.appendChild(resetButton);
mainDiv.appendChild(increaseButton);
document.body.appendChild(mainDiv);

function updateCounterDisplay() {
  counterDisplay.textContent = `${counterInstance.counter}`;
}

increaseButton.addEventListener("click", () => {
  counterInstance.increase();
  updateCounterDisplay();
});

decreaseButton.addEventListener("click", () => {
  counterInstance.decrease();
  updateCounterDisplay();
});

resetButton.addEventListener("click", () => {
  counterInstance.reset();
  updateCounterDisplay();
});













// export{}