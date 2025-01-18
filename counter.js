var Counter = /** @class */ (function () {
    function Counter(initialValue) {
        if (initialValue === void 0) { initialValue = 0; }
        this.counter = initialValue;
    }
    Counter.prototype.increase = function () {
        this.counter++;
    };
    Counter.prototype.decrease = function () {
        this.counter--;
    };
    Counter.prototype.reset = function () {
        this.counter = 0;
    };
    return Counter;
}());
var counterInstance = new Counter();
var mainDiv = document.createElement("div");
mainDiv.id = "mainDiv";
var counterDisplay = document.createElement("h1");
var title = document.createElement("h1");
title.id = "title";
var increaseButton = document.createElement("button");
var decreaseButton = document.createElement("button");
var resetButton = document.createElement("button");
title.textContent = "Counter";
counterDisplay.textContent = "".concat(counterInstance.counter);
increaseButton.textContent = "Increase";
decreaseButton.textContent = "Decrease";
resetButton.textContent = "Reset";
mainDiv.appendChild(title);
mainDiv.appendChild(counterDisplay);
mainDiv.appendChild(decreaseButton);
mainDiv.appendChild(resetButton);
mainDiv.appendChild(increaseButton);
document.body.appendChild(mainDiv);
function updateCounterDisplay() {
    counterDisplay.textContent = "".concat(counterInstance.counter);
}
increaseButton.addEventListener("click", function () {
    counterInstance.increase();
    updateCounterDisplay();
});
decreaseButton.addEventListener("click", function () {
    counterInstance.decrease();
    updateCounterDisplay();
});
resetButton.addEventListener("click", function () {
    counterInstance.reset();
    updateCounterDisplay();
});
// export{}
