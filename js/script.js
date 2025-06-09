// Get elements from the DOM
const timerEl = document.getElementById("timer");
const countdownEl = document.getElementById("countdown");
const numberListEl = document.getElementById("numbers-list");
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

// Generate random numbers
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Load list items with numbers dynamically
for (let i = 0; i < 5; i++) {
    randomNumbers[i] = generateRandom(1, 50);
    numberListEl.innerHTML += `<li>${randomNumbers[i]}</li>`
}

// Change layout after 30 seconds
setTimeout(function () {
    countdownEl.classList.add("d-none");
    instructionsEl.classList.add("d-none");
    numberListEl.classList.add("d-none");
    answersFormEl.classList.remove("d-none");
}, 30000)

// Show Output
countdownTimer(30);