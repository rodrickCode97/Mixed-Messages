// creating an mixed message program that displays the your future day 
//Require the prompt module to be able to grab the users input 
const prompt = require('prompt-sync')();

// Message prompting the user to write a message.
const userInput = prompt('Welcome to the future day teller, please enter a weekday you would like to know about. ')


// array's for sayings 
saying1 = ["tables", "apples","weekend plans", "your job"];
saying2 = ["your bestfriend", "yougurt", "TV shows", "spending money"];
saying3 = ["your family", "your friends", "video games", "dogs"];


// set variables to output random elements of the 3 arrays 
let randomSaying1 = saying1[Math.floor(Math.random()*4)];
let randomSaying2 = saying2[Math.floor(Math.random()*4)];
let randomSaying3 = saying3[Math.floor(Math.random()*4)]; 

// array for weekdays
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// set up a function that will output the future message
function mixedM(arr) {
    if ( userInput === arr[0]|| userInput === arr[1] || userInput === arr[2] || userInput === arr[3] || userInput === arr[4] || userInput === arr[5] || userInput === arr[6]) {
        console.log(`The day you chose is ${userInput}, you should be around ${randomSaying1} and stay away from ${randomSaying2} and also try to avoid ${randomSaying3}!`);
    } else {
        console.log('Invalid Entry');
    }
}

mixedM(weekdays); 