// Get elements from the DOM
const timerEl = document.getElementById("timer");
const countdownEl = document.getElementById("countdown");
const numberListEl = document.getElementById("numbers-list");
const instructionsEl = document.getElementById("instructions");
const answersFormEl = document.getElementById("answers-form");
const inputConfirmBtnEl = document.querySelector("#answers-form button");
const inputNumber1 = document.getElementById("inputNumber1");
const inputNumber2 = document.getElementById("inputNumber2");
const inputNumber3 = document.getElementById("inputNumber3");
const inputNumber4 = document.getElementById("inputNumber4");
const inputNumber5 = document.getElementById("inputNumber5");
const messageEl = document.getElementById("message");

// Create variable to store generated random numbers
const randomNumbers = [];

// Create variable to store input numbers from user
const userNumbers = [];


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
countdownTimer(30);

// Generate random numbers
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Load list items with numbers dynamically
for (let i = 0; i < 5; i++) {
    randomNumbers[i] = generateRandom(1, 50);
    numberListEl.innerHTML += `<li>${randomNumbers[i]}</li>`
}

console.log("Random numbers:", randomNumbers);


// Change layout after 30 seconds
setTimeout(function () {
    countdownEl.classList.add("d-none");
    instructionsEl.innerText = "Indovina i numeri";
    numberListEl.classList.add("d-none");
    answersFormEl.classList.remove("d-none");
}, 30000)

// Add event listener to form element
answersFormEl.addEventListener('submit', function (e) {

    // Prevent page from reloading on submit
    e.preventDefault();

    // Store user inputs inside an array
    userNumbers[0] = Number(inputNumber1.value);
    userNumbers[1] = Number(inputNumber2.value);
    userNumbers[2] = Number(inputNumber3.value);
    userNumbers[3] = Number(inputNumber4.value);
    userNumbers[4] = Number(inputNumber5.value);

    console.log("User inputs:", userNumbers);

    // Create variable for guessed numbers
    const guessedNumbers = [];

    // Check if user inputs are equal to the random numbers
    for (let i = 0; i < randomNumbers.length; i++) {
        if (userNumbers.includes(randomNumbers[i])) {
            console.log("Guessed number:", randomNumbers[i]);
            // If there are similar values then we store the element in the guessed numbers
            guessedNumbers.push(randomNumbers[i]);
        }
    }

    // Show message to user
    if (guessedNumbers == []) {
        messageEl.innerText = "Non hai indovinato nessun numero :(";
    } else {
        messageEl.innerText = `Hai indovinato i seguenti numeri: ${guessedNumbers.join(", ")}`
    }
    console.log(messageEl);

})