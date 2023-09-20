//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');
let startFuelLevel
let numOfAstronauts
let altitudeOfShuttle

while (startFuelLevel <= 5000 || startFuelLevel > 30000 || isNaN(startFuelLevel)) {
  startFuelLevel = input.question("Enter the starting fuel level: ")
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while (numOfAstronauts <= 0 || numOfAstronauts > 7 || isNaN(numOfAstronauts)) {
  numOfAstronauts = input.question("Enter the number of astronauts: ")
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startFuelLevel-100*numOfAstronauts >= 0) {
  altitudeOfShuttle += 50
  startFuelLevel -= 100*numOfAstronauts
}

//Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

let output = `The shuttle gained and altitude of ${altitudeOfShuttle} km. `

//If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”

if (altitudeOfShuttle >= 2000) {
  output += "Orbit achieved!"
} else {
  output += "Failed to reach orbit."
}

console.log(output)