let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
    //The purpose of the parameter inside the () is to determine how the string is broken apart using the DELIMITER

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
    //The purpose of the parameter insise the () is to determine how the array will be joined using the CONNECTOR 

//3) Do split or join change the original string/array?

console.log(str);
console.log(arr);
    //No, they do not change the original string/array, but rather create a new string/array, as the text describes these methods.
    //We also see that when printed, str and arr yeild their original forms and are therefore unchanged by split/join

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join());
    //Note to self: REMEMBER THIS EXAMPLE
