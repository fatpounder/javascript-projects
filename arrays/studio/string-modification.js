const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//LaunchCode
let string = "LaunchCode"
console.log(string.slice(3,11))
let string2 = string.slice(3,11)
console.log(string.slice(0,3))
let string3 = string.slice(0,3)
console.log(string2+string3)

//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.
let question = input.question("How many letters got relocated?")

console.log(`I am enrolled in ${string}`);
console.log(`I am enrolled in ${string2}${string3}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

console.log(question);
//The answer is "3"

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (question > string3.length) {
    console.log("Wrong, too long")
} else if (question < string3.length) {
    console.log("Abort, too short")
} else {
    console.log("Correct")
}
