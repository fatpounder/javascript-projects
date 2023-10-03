// Code your orbitCircumference function here:


// Code your missionDuration function here:


// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
function orbitCircumference() {
  let circumference = Math.round(Math.PI*2*2000);
  return circumference;
}
console.log(orbitCircumference())

function missionDuration(numOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
  let time = Math.round((numOrbits*(orbitCircumference(orbitRadius)))/(orbitalSpeed)*1000)/100
  return time
}
console.log(missionDuration(3))

console.log(`The mission will travel ${orbitCircumference()} km around the planet, and it will take ${missionDuration(3)} hours to complete.`)

function oxygenExpended(candidate) {
  hours = missionDuration(3)
  oxygenCon = Math.round(candidate.o2Used(hours)*1000)/1000
  return `${candidate.name} will perform the spacewalk, which will last ${hours} hours and require ${oxygenCon} kg of oxygen.`
}
console.log(oxygenExpended(candidateA))
