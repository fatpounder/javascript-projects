// //Recursion walkthrough

// //Join array elements with a loop
// //Use a for loop to iterate through the array and add each entry into the newString variable.
//  let arr = ['L', 'C', '1', '0', '1'];
//  let newString = '';

//  for (i = 0; i < arr.length; i++){
//      newString = newString + arr[i];
// }

// console.log(newString);
// console.log(arr);

// //Use a while loop to add the first element in the array to newString,then remove that element from the array
// while (arr.length > 0){
//     newString += arr[0];
//     arr.shift();
// }
// console.log(newString);
// console.log(arr);

const input = require('readline-sync');
let name = input.question("Enter your name: ");
console.log("Hello, " + name + "!");