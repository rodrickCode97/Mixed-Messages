// creating an mixed message program that displays the your future day 

// Message prompting the user to write a message.
// console.log('Please enter the day of the week to know what you should attempt, do and avoid.')

// function to get user's input 
function getUserInput(userInput) {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case monday:
            return 'monday';
        case tuesday:
            return 'tuesday';
        case wednesday:
            return 'wednesday';
        case thursday:
            return 'thursday';
        case friday:
            return 'friday';
        case saturday:
            return 'saturday';
        case sunday:
            return 'sunday';
    }
}

//  array's for sayings 

saying1 = [];
saying2 = [];
saying3 = [];

// set indexes for sayings
saying1[0] = 'tables';
saying1[1] = "apples";
saying1[2] = "weekend plans";
saying1[3] = "your job";
saying2[0] = "your bestfriend";
saying2[1] = "yogurt";
saying2[2] = "shows";
saying2[3] = "spending money";
saying3[0] = "your family";
saying3[1] = "your friends";
saying3[2] = "video games"
saying3[3] = "dogs";
// set variables to output random elements of the 3 arrays 

let randomSaying1 = saying1[Math.floor(Math.random()*4)];
let randomSaying2 = saying2[Math.floor(Math.random()*4)];
let randomSaying3 = saying3[Math.floor(Math.random()*4)];

// set up a function that will output the future message
const mixedM = getUserInput =>{
console.log("You've chose " + getUserInput);
 if(getUserInput){
console.log(`On ${getUserInput} you should avoid ${randomSaying1}`);
console.log(`You should stay away from ${randomSaying2}`);
console.log(`also You should stay around ${randomSaying3}`);
 } else {
    console.log('Error');
 }
};

mixedM(getUserInput);