// Get Elements from he DOM
const timerEl = document.getElementById("timer");
const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const answersFormEl = document.getElementById("answers-form");
const inputConfirmBtn = document.querySelector("#answers-form button");

const randomNumbers = [];

// Create a function for Cuntdown Timer
function countdownTimer(duration) {

    timerValue = duration;

    const timerInterval = setInterval(function () {
        if (timerValue > 0) {
            timerValue--;
            timerEl.innerText = String(timerValue);
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Generate Random Numbers
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
    randomNumbers[i] = generateRandom(1, 50);
}

// Show Output
countdownTimer(30);
console.log(randomNumbers);