// creating an mixed message program that displays the your future day 
// Require the prompt module to be able to grab the users input 
const prompt = require('prompt-sync')();
// Message prompting the user to write a message.
const date = prompt('Welcome to the future day teller, please enter a weekday you would like to know about. ')

//  array's for sayings 

saying1 = ["tables", "apples","weekend plans", "your job"];
saying2 = ["your bestfriend", "yougurt", "TV shows", "spending money"];
saying3 = ["your family", "your friends", "video games", "dogs"];


// set variables to output random elements of the 3 arrays 

let randomSaying1 = saying1[Math.floor(Math.random()*4)];
let randomSaying2 = saying2[Math.floor(Math.random()*4)];
let randomSaying3 = saying3[Math.floor(Math.random()*4)];

// set up a function that will output the future message
const mixedM = () => {
console.log("You've chose " + date + "!");
 if(date){
console.log(`On ${date} you should avoid ${randomSaying1}`);
console.log(`You should stay away from ${randomSaying2}`);
console.log(` and also You should stay around ${randomSaying3}`);
 } else {
    console.log('Error');
 }
};

mixedM();