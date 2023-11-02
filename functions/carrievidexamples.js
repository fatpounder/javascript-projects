function formatDate(weekday, mm, dd, yyyy) {
    return `${weekday}, ${mm}/${dd}/${yyyy}`;
}
let formattedDate = formatDate("Friday", "10", "07", "2022");
console.log(formattedDate)

//Common ways to use return values: 1. Store output in a variable, 2. console.log, 3. Use outputdirectly in another expression or template literal

function addThreeNums(num1, num2, num3) {
    return num1 + num2 + num3;
}
let sumOfThree = addThreeNums(2, 6, 1);
console.log(`The sum is ${sumOfThree}.`)
console.log(addThreeNums(5, 10, 42))



function divideNums(num1, num2) {
    if (num2 === 0) {
        return `Yo, you cannot divide by zero!`;
    }
    return num1 / num2;
}
console.log(divideNums(12, 6));
console.log(divideNums(50, 0));

//funtions don't have to be sequential, they are usually defined at the end of a program



const input = require(`readline-sync`);

let maxHearts = 3;
let currHearts = 3;

let inventory = [];
let rupees = 0;

function describeHyrule() {
    return `\n\n\nIt's 1986, and Hyrule is in chaos. The evil prince of darkness, Ganon, has stolen the Triforce of power and is holding Princess Zelda captive in Death Mountain.
    
Link, you must gather the 8 pieces of the Triforce of Wisdom, defeat Ganon, and rescue the Princess! Only then can order be restored to Hyrule.`;
}

function getCharResponse(char, message) {
    return `
*********************************************************
Link sees ${char} standing before him, saying, ${message}    
*********************************************************
`;
}

function dodgeEnemy(type, num) {
    while (num > 0) {
        if (Math.random() < 0.2) {
            currHearts -= 0.5
            console.log(`\nLink got hit and lost 1/2 heart. Link now has ${currHearts} remaining.`)
            break;
        } else {
            console.log(`\nPhew! The ${type} missed.`)
        }
        num--;
    }
}

function fightEnemy(type, num) {
    while (num > 0) {
        console.log(`\nLink attacks! That's one ${type} down.`);
        num--;

        getReward();
        dodgeEnemy(type, num);
    }

}

function getReward() {
    let chance = Math.random(0);
    if (chance > 0.8) {
        currHearts++;
        if (currHearts > maxHearts) {
            currHearts = maxHearts;
        }
        console.log(`\nLink found a heart! He now has ${currHearts} hearts.`);
    } else if (chance > 0.4) {
        rupees++;
        console.log(`\nLink found a rupee! He now has ${rupees} rupees.`);
    }
}

console.log(describeHyrule());

console.log("\nLink sees a cave opening in front of him.\n");

let firstCaveResponse = input.question("Would you like Link to enter? Y or N?\n");
if (firstCaveResponse.toUpperCase() === "Y") {
    let swordMsg = `"It's dangerous to go alone! Take this."`;
    console.log(getCharResponse("an old man", swordMsg));  
    inventory.push("sword");
}

console.log("\nLinks walks west and sees four tektites hopping around.\n")

let firstFightResponse = input.question("Will Link fight? Y or N\n")
if (firstFightResponse.toUpperCase() === "Y") {
    fightEnemy("tektites", 2);
} else {
    dodgeEnemy("tektites", 2);
} 

console.log("\nLink heads north along the shore and sees four octoroks!\n")

let secondFightResponse = input.question("Will Link fight? Y or N\n")
if (secondFightResponse.toUpperCase() === "Y") {
    fightEnemy("octoroks", 4);
} else {
    dodgeEnemy("octoroks", 4);
} 