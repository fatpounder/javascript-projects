let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1, 
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*11)}
}

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*11)}
}

let littleDude = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.floor(Math.random()*11)}
}

let crew = [superChimpOne, salamander, superChimpTwo, dog, littleDude];

function crewReports() {
   let info = []
   for (let i = 0; i < crew.length; i++) {
      info.push(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`)
   } 
   return info   
}
console.log(crewReports())


function fitnessTest(crew) {
   let results = [], numSteps, turns;
   for (let i = 0; i < crew.length; i++) {
      numSteps = 0;
      turns = 0
      while(numSteps < 20) {
      numSteps += crew[i].move();
      turns++;
      }
      results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
console.log(fitnessTest(crew))


//Fill in the blanks with the name, species, age, mass, and ID for the selected animal.

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!