let wizards = []
wizards[0] = "Dumbledore"
wizards[1] = "Gandalf"
wizards[2] = "Saruman"
wizards[3] = "Voldemort"
console.log(wizards)

let sports = ["football", "basketball", "golf", "hockey"]
console.log(sports.includes("golf"))
console.log(sports.includes("soccer"))
console.log(sports.indexOf("hockey"))
console.log(sports.indexOf("baseball"))  //returns -1, which indicates the numeric value for False

let catchPhrase = "How would you like to do this?"
let phraseArr = catchPhrase.split(" ")
console.log(phraseArr)
console.log(phraseArr[1].split(""))