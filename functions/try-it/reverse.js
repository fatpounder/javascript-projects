// function reverse(str) {
//    let lettersArray = str.split('');
//    let reversedLettersArray = lettersArray.reverse();
//    return reversedLettersArray.join('');
// }

let logger = function(errorMsg) {
   console.log("ERROR: " + errorMsg);
};
let userInput
if (userInput < 0) {
   logger("Invalid input");
}

let nums = [3.14, 42, 4811];

let divTwo = function(n) {
   return n/2
}

let halved = nums.map(divTwo);

console.log(nums);
console.log(halved);


let sideStackNums = [12, 16, 24, 36, 48];

let divFour = function(n) {
   return n/4
}

let quartered = sideStackNums.map(divFour)

console.log(sideStackNums);
console.log(quartered);


let smallNums = [1, 2, 3, 4];

let carrot2 = function(n) {
   return n**2
}

let squaredNums = smallNums.map(carrot2)

console.log(squaredNums)


let bigNums = [100, 200, 400, 800, 1000]

let divTen = function(n) {
   return n/10
}

let returnedTens = bigNums.map(divTen)

console.log(returnedTens);


let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

let initial = function(n) {
   return (n.slice(0,1));
} 

let firstInitials = names.map(initial);

console.log(firstInitials);


function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      return integer +(decreasingSum(integer - 1));
   }
}
