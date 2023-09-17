let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

console.log(holdCabinet1.concat(holdCabinet2))

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
        //No, just prints the piece you specify because slice creates a new array, does not add/remove entry
console.log(holdCabinet1.slice(1,3))
console.log(holdCabinet2.slice(0,2))

console.log(holdCabinet1)
console.log(holdCabinet2)

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
//Reverse orders the array reverse from how it was originally
//Sort reorders the array by number [but in the alphabet way of numbers (sounds weird, but this is how is makes sense to me in the sort examples in the text)], then letters (capital than lowercase)
//They do alter the original arrays as we see the printout of the arrays is now different
holdCabinet1.reverse();
holdCabinet2.sort();

console.log(holdCabinet1);
console.log(holdCabinet2);