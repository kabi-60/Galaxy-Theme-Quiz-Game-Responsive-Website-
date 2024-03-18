// Quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "What is the tallest mammal?",
        options: ["Giraffe", "Elephant", "Horse", "Lion"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1912", "1908", "1916", "1920"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["Australia", "Brazil", "Canada", "India"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Lemon"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Lemon"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Lemon"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Lemon"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Lemon"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
        correctAnswer: 0 // Index of the correct answer in the options array
    }
];

// Initialize variables to keep track of the current question index and score
let currentQuestionIndex = 0;
let score = 0;

// Get references to HTML elements
const questionElement = document.getElementById('question');
const optionElements = document.querySelectorAll('#options button');
const nextButton = document.getElementById('nextbtn');
const scoreContainer = document.getElementById('boxcontainer');
const scoreElement = document.getElementById('score');

// Function to display current question and options
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionElements.forEach((optionElement, index) => {
        optionElement.textContent = currentQuestion.options[index];
        optionElement.disabled = false; // Enable all options for each new question
    });
}

// Function to handle option selection
// Function to handle option selection
// Function to handle option selection
function handleOptionSelect(selectedOptionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
        score += 10; // Increase score by 10 for correct answer
        scoreContainer.classList.add('bg-green-300'); // Change container background to green
        optionElements[selectedOptionIndex].innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-auto font-bold"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
    } else {
        score = Math.max(0, score - 5); // Deduct 5 points for wrong answer
        scoreContainer.classList.add('bg-red-300'); // Change container background to red
        optionElements[selectedOptionIndex].innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-auto font-bold"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>';
    }
    // Disable all options after selecting one
    optionElements.forEach(option => {
        option.disabled = true;
    });
    // Update score display
    scoreElement.textContent = score;
    // Simulate a click on the next button to move to the next question
    setTimeout(() => {
        nextButton.click();
    }, 1000); // Adjust the delay time if needed
}


// Event listeners for option buttons
optionElements.forEach((optionElement, index) => {
    optionElement.addEventListener('click', () => {
        handleOptionSelect(index);
    });
});

// Function to handle next button click
// Function to handle next button click


// Function to handle next button click
nextButton.addEventListener('click', () => {
    // Clear the timer interval
    clearInterval(timerInterval);

    // Move to the next question
    currentQuestionIndex++;
    // Hide the next button
    nextButton.style.display = 'none';
    // Reset score container background color
    scoreContainer.classList.remove('bg-green-300', 'bg-red-300'); // Change to your default background class
    // Display the next question
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        // Reset the timer
        const duration = 10; // Duration of the timer in seconds
        const display = document.getElementById('timer');
        startTimer(duration, display);
    } else {
        // Quiz ends, display game over message
        displayGameOverMessage();
    }
});


// Initial display of the first question
displayQuestion();

// Function to start the timer
let timerInterval;

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + "0" : "0";
        seconds = seconds < 10 ? "00:0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
            // Automatically move to the next question when the timer runs out
            nextButton.click();
        }
    }, 1000);
}

// Start the timer when the page loads
window.onload = function () {
    const duration = 9; // Duration of the timer in seconds
    const display = document.getElementById('timer');
    startTimer(duration, display);
};
// Function to redirect to the leaderboard page
function redirectToLeaderboard() {
    window.location.href = "leaderboard.html"; // Change the URL to your leaderboard page
}

// Function to handle next button click
nextButton.addEventListener('click', () => {
    // Clear the timer interval
    clearInterval(timerInterval);

    // Move to the next question
    currentQuestionIndex++;
    // Hide the next button
    nextButton.style.display = 'none';
    // Reset score container background color
    scoreContainer.classList.remove('bg-green-300', 'bg-red-300'); // Change to your default background class
    // Display the next question
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        // Reset the timer
        const duration = 10; // Duration of the timer in seconds
        const display = document.getElementById('timer');
        startTimer(duration, display);
    } else {
        // Quiz ends, redirect to the leaderboard page
        redirectToLeaderboard();
    }
});

