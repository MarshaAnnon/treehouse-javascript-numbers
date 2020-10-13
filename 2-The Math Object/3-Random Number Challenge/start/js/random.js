// Collect input from a user
const userInput = prompt("Please choose a number");

// Convert the input to a number
const userNumber = parseInt(userInput);

// Use Math.random() and the user's number to generate a random number
// Create a message displaying the random number
if (userNumber) {
    const randomNumber = Math.floor(Math.random() * userNumber) + 1;
    console.log(`Your random number is: ${randomNumber}`);
} else {
    console.log("You must choose a number");
}



