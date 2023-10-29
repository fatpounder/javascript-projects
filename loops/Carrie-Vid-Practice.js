let text = "1Le2tt34er5s 6on7ly8!";
let correctText = "";
for (let i = 0; i < text.length; i++) {
    if (isNaN(Number(text[i])) || text[i] === " ") {
        correctText += text[i]
    }
}
console.log(correctText)


let words = ["July", "August", "September"]
let longerThan5 = []
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        longerThan5.push(words[i])
    }
}
console.log(longerThan5)


let names = ["Aldaraan", "Calrissian", "Andor", "Armorer", "Greedo", "Ackbar", "Sateen", "Amadala"];
let onlyANames = [];
for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "A") {
        onlyANames.push(names[i]);
    }
}
console.log(onlyANames)


let nums = [3, 2, 67, 8, 11, 4];
let i = 0;
let hasBigNum = false

while (!hasBigNum && i < nums.length) {
    if (nums[i] > 50) {
        hasBigNum = true
    }
    i++
}
console.log(i)


const input = require('readline-sync');
let num = Number(input.question("Please enter a number from 1-9."))
while (num < 1 || num > 9 || isNaN(num)) {
    num = Number(input.question("Number must be greater than 0 and less than 10"))
}



