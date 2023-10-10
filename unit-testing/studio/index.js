
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    let result = ""
    if (num / 2 == 1) {
      return "Launch!";
    }
    if (num / 3 == 1) {
      return  "Code!";
    }
    if (num / 5 == 1) {
      if (result.length > 0) {
        result += " "
      }
      return "Rocks!";
    }
    if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
      return "LaunchCode Rocks!"
    } else if (num % 2 === 0 && num % 3 === 0) {
        return "LaunchCode!"
    } else if (num % 3 === 0 && num % 5 === 0) {
        return "Code Rocks!"
    } else if  (num % 2 === 0 && num % 5 === 0) {
        return "Launch Rocks! (CRASH!!!!)"
    }
    if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
      return "Rutabagas! That doesn't work."
    }
  }
};

module.exports = launchcode;

