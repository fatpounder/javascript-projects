// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.
//const input = require('readline-sync')

//  for (let i = 0; i < 51; i++) {
//     console.log(i);
//   }

  let gerard = ["GD", "T", "VT", 32, true]
  let drareg = []
  // let forLoopDrareg = []

  // for ( let i = 0; i < gerard.length; i++) {
  //   forLoopDrareg.unshift(gerard[i]);
  // }
  let whileloopDrareg = [];
  while (gerard.length > 0) {
    whileloopDrareg.unshift(gerard.shift());
  }
  console.log(gerard);
  //console.log(forLoopDrareg);
  console.log(whileloopDrareg);


