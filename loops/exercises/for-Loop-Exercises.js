// Exercise #1: Construct for loops that accomplish the following tasks:
//     a. Print the numbers 0 - 20, one number per line.

for (let i = 0; i < 21; i++) {
   console.log(i);
}
    // b. Print only the ODD values from 3 - 29, one number per line.

 for (let i = 3; i < 30; i = i + 2) {
   console.log(i);
 }

    // c. Print the EVEN numbers 12 to -14 in descending order, one number per line.

 for (let i = 12; i >= -14; i -= 2) {
   console.log(i);
 }

    // d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

 for (let i = 48; i > 21; i -=3) {
     console.log(i);
 }


//Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

str = "LaunchCode"
arr =  [1, 5, 'LC101', 'blue', 42]

// Construct ``for`` loops to accomplish the following tasks:
//   a. Print each element of the array to a new line.

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//   b. Print each character of the string - in reverse order - to a new line. 

for (let i = 9; i >= 0; i--) {
  console.log(str[i]);
}

//Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  //a. One array contains the even numbers, and the other holds the odds.

fullArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
evenArray = []
oddArray = []

for (let i = 0; i < fullArray.length; i++) {
  if (fullArray[i] % 2 == 0) {
    evenArray.push(fullArray[i])
} else {
  oddArray.push(fullArray[i])
}
}

  //b. Print the arrays to confirm the results.

console.log(evenArray);
console.log(oddArray);