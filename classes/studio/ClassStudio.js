//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
       this.scores.push(newScore); 
    }
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(10 * sum / this.scores.length) / 10;
    }
    status() {
        let avgScore = this.average()
        if (avgScore >= 90) {
            return "Accepted"
        } else if (avgScore >= 80) {
            return "Reserve"
        } else if (avgScore >= 70) {
            return "Probationary"
        } else {
            return "Rejected"        
        }
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
console.log(bubbaBear);
let merryMalt = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
console.log(merryMalt)
let gladGat = new CrewCandidate("Glad Gator", 225, [75, 78, 62])
console.log(gladGat)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubbaBear.addScore(83);
console.log(bubbaBear.scores);
console.log(merryMalt.average());

let candidateArray = [bubbaBear, merryMalt, gladGat];

for (let i = 0; i < candidateArray.length; i++) {
    console.log(`${candidateArray[i].name} earned an average test score of ${candidateArray[i].average()}% and has a status of ${candidateArray[i].status()}.`)
}

let toReserveNum = 0
   while (gladGat.status() !== "Reserve") {
        gladGat.addScore(100)
        toReserveNum ++
   } 
console.log(`It would take ${toReserveNum} perfect scores for ${gladGat.name} to make it to "Reserve" status.`)


let toAcceptedNum = 0
   while (gladGat.status() !== "Accepted") {
        gladGat.addScore(100)
        toAcceptedNum ++
   }
console.log(`It would take ${toAcceptedNum} perfect scores for ${gladGat.name} to make it to "Accepted" status.`)

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.