// Part 1: JavaScript Basics

// Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "gaming"];
const person = { firstName: "John", lastName: "Doe", occupation: "Developer" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators and Calculator Function
function calculate() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    document.getElementById('calculator-result').textContent = `Result: ${result}`;
}

calculate();

// Functions
function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

document.getElementById('greeting').textContent = greetUser("John");

// Part 2: JavaScript Control Structures

// If Statements
const userAge = parseInt(prompt("Enter your age:"));
const votingEligibility = document.getElementById('voting-eligibility');

if (isNaN(userAge)) {
    votingEligibility.textContent = "Please enter a valid age.";
} else if (userAge >= 18) {
    votingEligibility.textContent = "You are eligible to vote!";
} else {
    votingEligibility.textContent = "You are not eligible to vote yet.";
}

// Loops
const numberList = document.getElementById('number-list');
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// Selecting and Modifying HTML Elements
document.querySelector('h1').textContent = "JavaScript in Action!";

const dynamicContent = document.getElementById('dynamic-content');
const newParagraph = document.createElement('p');
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);

