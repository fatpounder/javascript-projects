// Declare and assign the variables below

let nameOfSpaceShuttle = "Determination";
let shuttleSpeedMPH = 17500;
let distanceToMarsKM = 225000000;
let distanceToMoonKM = 384400;
const milesPerKM = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof nameOfSpaceShuttle);
console.log(typeof shuttleSpeedMPH);
console.log(typeof distanceToMarsKM);
console.log(typeof distanceToMoonKM);
console.log(typeof milesPerKM);

// Calculate a space mission below

let milesToMars = distanceToMarsKM * milesPerKM;
let hoursToMars = milesToMars / shuttleSpeedMPH;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(nameOfSpaceShuttle + " will take " + daysToMars + " days to reach Mars.")

// Calculate a trip to the moon below

let milesToMoon = distanceToMoonKM * milesPerKM;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(nameOfSpaceShuttle + " will take " + daysToMoon + " days to reach Moon.")