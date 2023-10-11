function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result = lab.runLab(3);
    console.log(`${lab.student} code worked: ${result === 27}`);
  } try {
      console.log('exception at runLab property:', studentLabs[index].runLab);
    } catch (err) {
      console.log("Error Thrown");
    }
}

// Upon running the second example, the teacher gets TypeError: lab.runLab is not a function.
// Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined. If the exception is thrown, result should be set to the text "Error thrown".

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);


let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);
