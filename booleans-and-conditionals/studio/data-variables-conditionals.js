// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let avgAstronautMassKG = 80.7;
let crewMassKG = astronautCount * avgAstronautMassKG;
let fuelMassKG = 760000;
let shuttleMassKG = 74842.31;
let totalMassKG = crewMassKG + fuelMassKG + shuttleMassKG;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    preparedForLiftoff = true;
} else {
    preparedForLiftoff = false;
}

// add logic below to verify all astronauts are ready

if (astronautCount = "ready") {
    preparedForLiftoff = true;
} else {
    preparedForLiftoff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKG <= 850000) {
    preparedForLiftoff = true;
} else {
    preparedForLiftoff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius < maximumFuelTemp && fuelTempCelsius > minimumFuelTemp) {
    preparedForLiftoff = true;
} else {
    preparedForLiftoff = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === 100) {
    preparedForLiftoff = true;
} else {
    preparedForLiftoff = false;
}

// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    preparedForLiftoff = true;
} else {
    preparedForLiftoff = false;
}

// Verify shuttle launch can proceed based on above conditions

if ( preparedForLiftoff === true) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("\n-------------------------------------------");
    console.log("\n Date: " + date);
    console.log("\n Time: " + time);
    console.log("\n Astronaut Count: " + astronautCount);
    console.log("\n Crew Mass: " + crewMassKG);
    console.log("\n Fuel Mass: " + fuelMassKG);
    console.log("\n Shuttle Mass: " + shuttleMassKG);
    console.log("\n Total Mass " + totalMassKG);
    console.log("\n Fuel Temperature " + fuelTempCelsius + "°");
    console.log("\n Weather Status: " + weatherStatus);
    console.log("\n--------------------------------------");
    console.log("Have a safe trip astronauts!");
} else {
    console.log("Launch scrubbed");
}